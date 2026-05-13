import { NotificationChannel } from '../../generated/prisma';
export declare class SendNotificationDto {
    studentIds?: string[];
    title: string;
    body: string;
    channel: NotificationChannel;
}
export declare class EmergencyNotificationDto {
    title: string;
    message: string;
}
export declare class PromotionDto {
    academicYearId: string;
}
