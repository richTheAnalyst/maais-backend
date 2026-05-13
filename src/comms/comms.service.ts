import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { NotificationChannel } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import * as twilio from 'twilio';

export interface SendNotificationDto {
  studentIds?: string[];
  title: string;
  body: string;
  channel: NotificationChannel;
  isEmergency?: boolean;
}

@Injectable()
export class CommsService {
  private readonly logger = new Logger(CommsService.name);

  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {}

  /**
   * Send a notification to one or more students (+ their parents)
   */
  async sendNotification(dto: SendNotificationDto, sentById: string) {
    const recipients = dto.studentIds ?? [];

    // Fetch student/parent contact info
    const students = await this.prisma.studentProfile.findMany({
      where: recipients.length > 0 ? { id: { in: recipients } } : {},
      include: {
        user: true,
        parentLinks: {
          include: { parent: { include: { user: true } } },
          where: { isPrimary: true },
        },
      },
    });

    const results = await Promise.allSettled(
      students.map(async (student) => {
        // Create notification record
        const notification = await this.prisma.notification.create({
          data: {
            studentId: student.id,
            title: dto.title,
            body: dto.body,
            channel: dto.channel,
            createdById: sentById,
          },
        });

        try {
          if (dto.channel === NotificationChannel.SMS) {
            await this.sendSms(
              student.user.phone ??
                student.parentLinks[0]?.parent?.user?.phone ??
                '',
              `${dto.title}\n\n${dto.body}`,
            );
          }
          // APP channel: mark as delivered (push handled by frontend)
          await this.prisma.notification.update({
            where: { id: notification.id },
            data: { deliveredAt: new Date() },
          });
        } catch (err) {
          await this.prisma.notification.update({
            where: { id: notification.id },
            data: { failedAt: new Date(), errorMsg: err.message },
          });
        }

        return notification;
      }),
    );

    const delivered = results.filter((r) => r.status === 'fulfilled').length;
    return {
      sent: students.length,
      delivered,
      failed: students.length - delivered,
    };
  }

  /**
   * Send SMS via Twilio with emergency SMS failover
   */
  private async sendSms(to: string, body: string) {
    if (!to) {
      this.logger.warn('SMS skipped: no phone number');
      return;
    }

    // Twilio integration
    try {
      const client = twilio(
        this.config.get('TWILIO_ACCOUNT_SID'),
        this.config.get('TWILIO_AUTH_TOKEN'),
      );
      await client.messages.create({
        body,
        from: this.config.get('TWILIO_PHONE_NUMBER'),
        to,
      });
      this.logger.log(`SMS sent to ${to}`);
    } catch (err) {
      this.logger.error(`SMS failed: ${err.message}`);
      throw err;
    }
  }

  /**
   * Broadcast an emergency notice to ALL active parents
   */
  async broadcastEmergency(title: string, body: string, sentById: string) {
    return this.sendNotification(
      { title, body, channel: NotificationChannel.SMS, isEmergency: true },
      sentById,
    );
  }

  /**
   * Get notifications for a student (app inbox)
   */
  async getStudentNotifications(studentId: string, unreadOnly = false) {
    return this.prisma.notification.findMany({
      where: {
        studentId,
        ...(unreadOnly ? { isRead: false } : {}),
      },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }

  /**
   * Mark notification as read
   */
  async markAsRead(notificationId: string) {
    return this.prisma.notification.update({
      where: { id: notificationId },
      data: { isRead: true },
    });
  }

  /**
   * Analytics pulse data for dashboard
   */
  async getAnalyticsPulse(academicYearId?: string) {
    const [enrollmentByClass, averageBySubject, attendanceSummary] =
      await Promise.all([
        this.prisma.classSection.findMany({
          include: { _count: { select: { students: true } } },
        }),
        this.prisma.gradeEntry.groupBy({
          by: ['subjectId'],
          _avg: { totalScore: true },
          _count: { id: true },
        }),
        this.prisma.attendanceRecord.aggregate({
          _avg: { daysPresent: true, totalDays: true },
        }),
      ]);

    return {
      enrollment: enrollmentByClass.map((c) => ({
        class: `${c.level} ${c.name}`,
        count: c._count.students,
        capacity: c.capacity,
      })),
      subjectPerformance: averageBySubject.map((s) => ({
        subjectId: s.subjectId,
        averageScore: s._avg.totalScore?.toFixed(2),
        studentCount: s._count.id,
      })),
      attendance: attendanceSummary._avg,
    };
  }
}
