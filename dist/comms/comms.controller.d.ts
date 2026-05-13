import { CommsService } from './comms.service';
import { SendNotificationDto, EmergencyNotificationDto } from './dto/comms.dto';
export declare class CommsController {
    private commsService;
    constructor(commsService: CommsService);
    sendNotification(dto: SendNotificationDto, userId: string): Promise<{
        sent: number;
        delivered: number;
        failed: number;
    }>;
    emergency(dto: EmergencyNotificationDto, userId: string): Promise<{
        sent: number;
        delivered: number;
        failed: number;
    }>;
    getNotifications(studentId: string, unreadOnly: boolean): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        studentId: string | null;
        body: string;
        channel: import("../generated/prisma").NotificationChannel;
        isRead: boolean;
        deliveredAt: Date | null;
        failedAt: Date | null;
        errorMsg: string | null;
        createdById: string | null;
    }[]>;
    markRead(id: string): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        studentId: string | null;
        body: string;
        channel: import("../generated/prisma").NotificationChannel;
        isRead: boolean;
        deliveredAt: Date | null;
        failedAt: Date | null;
        errorMsg: string | null;
        createdById: string | null;
    }>;
    getPulse(academicYearId?: string): Promise<{
        enrollment: {
            class: string;
            count: number;
            capacity: number;
        }[];
        subjectPerformance: {
            subjectId: string;
            averageScore: string;
            studentCount: number;
        }[];
        attendance: {
            daysPresent: number;
            totalDays: number;
        };
    }>;
}
