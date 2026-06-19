"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CommsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
const client_1 = require("@prisma/client");
const config_1 = require("@nestjs/config");
const twilio = require("twilio");
let CommsService = CommsService_1 = class CommsService {
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
        this.logger = new common_1.Logger(CommsService_1.name);
    }
    async sendNotification(dto, sentById) {
        const recipients = dto.studentIds ?? [];
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
        const results = await Promise.allSettled(students.map(async (student) => {
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
                if (dto.channel === client_1.NotificationChannel.SMS) {
                    await this.sendSms(student.user.phone ??
                        student.parentLinks[0]?.parent?.user?.phone ??
                        '', `${dto.title}\n\n${dto.body}`);
                }
                await this.prisma.notification.update({
                    where: { id: notification.id },
                    data: { deliveredAt: new Date() },
                });
            }
            catch (err) {
                await this.prisma.notification.update({
                    where: { id: notification.id },
                    data: { failedAt: new Date(), errorMsg: err.message },
                });
            }
            return notification;
        }));
        const delivered = results.filter((r) => r.status === 'fulfilled').length;
        return {
            sent: students.length,
            delivered,
            failed: students.length - delivered,
        };
    }
    async sendSms(to, body) {
        if (!to) {
            this.logger.warn('SMS skipped: no phone number');
            return;
        }
        try {
            const client = twilio(this.config.get('TWILIO_ACCOUNT_SID'), this.config.get('TWILIO_AUTH_TOKEN'));
            await client.messages.create({
                body,
                from: this.config.get('TWILIO_PHONE_NUMBER'),
                to,
            });
            this.logger.log(`SMS sent to ${to}`);
        }
        catch (err) {
            this.logger.error(`SMS failed: ${err.message}`);
            throw err;
        }
    }
    async broadcastEmergency(title, body, sentById) {
        return this.sendNotification({ title, body, channel: client_1.NotificationChannel.SMS, isEmergency: true }, sentById);
    }
    async getStudentNotifications(studentId, unreadOnly = false) {
        return this.prisma.notification.findMany({
            where: {
                studentId,
                ...(unreadOnly ? { isRead: false } : {}),
            },
            orderBy: { createdAt: 'desc' },
            take: 50,
        });
    }
    async markAsRead(notificationId) {
        return this.prisma.notification.update({
            where: { id: notificationId },
            data: { isRead: true },
        });
    }
    async getAnalyticsPulse(academicYearId) {
        const [enrollmentByClass, averageBySubject, attendanceSummary] = await Promise.all([
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
    async notifyStaff(staffIds, title, body, sentById) {
        const staff = await this.prisma.staffProfile.findMany({
            where: { id: { in: staffIds } },
            include: { user: true },
        });
        const results = await Promise.allSettled(staff.map(async (member) => {
            const notification = await this.prisma.notification.create({
                data: {
                    staffId: member.id,
                    title,
                    body,
                    channel: client_1.NotificationChannel.APP,
                    createdById: sentById,
                },
            });
            await this.prisma.notification.update({
                where: { id: notification.id },
                data: { deliveredAt: new Date() },
            });
            return notification;
        }));
        const delivered = results.filter((r) => r.status === 'fulfilled').length;
        return { sent: staff.length, delivered, failed: staff.length - delivered };
    }
    async getStaffNotifications(staffId, unreadOnly = false) {
        return this.prisma.notification.findMany({
            where: {
                staffId,
                ...(unreadOnly ? { isRead: false } : {}),
            },
            orderBy: { createdAt: 'desc' },
            take: 50,
        });
    }
};
exports.CommsService = CommsService;
exports.CommsService = CommsService = CommsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], CommsService);
//# sourceMappingURL=comms.service.js.map