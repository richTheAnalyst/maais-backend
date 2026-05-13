export declare const Role: {
    readonly SUPER_ADMIN: "SUPER_ADMIN";
    readonly HEADMASTER: "HEADMASTER";
    readonly HOD: "HOD";
    readonly TEACHER: "TEACHER";
    readonly STUDENT: "STUDENT";
    readonly PARENT: "PARENT";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const Gender: {
    readonly MALE: "MALE";
    readonly FEMALE: "FEMALE";
};
export type Gender = (typeof Gender)[keyof typeof Gender];
export declare const SubjectType: {
    readonly CORE: "CORE";
    readonly ELECTIVE: "ELECTIVE";
};
export type SubjectType = (typeof SubjectType)[keyof typeof SubjectType];
export declare const GradeRemark: {
    readonly EXCELLENT: "EXCELLENT";
    readonly VERY_GOOD: "VERY_GOOD";
    readonly GOOD: "GOOD";
    readonly CREDIT: "CREDIT";
    readonly PASS: "PASS";
    readonly WEAK_PASS: "WEAK_PASS";
    readonly FAILURE: "FAILURE";
};
export type GradeRemark = (typeof GradeRemark)[keyof typeof GradeRemark];
export declare const TermNumber: {
    readonly TERM_1: "TERM_1";
    readonly TERM_2: "TERM_2";
    readonly TERM_3: "TERM_3";
};
export type TermNumber = (typeof TermNumber)[keyof typeof TermNumber];
export declare const ClassLevel: {
    readonly FORM_1: "FORM_1";
    readonly FORM_2: "FORM_2";
    readonly FORM_3: "FORM_3";
};
export type ClassLevel = (typeof ClassLevel)[keyof typeof ClassLevel];
export declare const PromotionStatus: {
    readonly PROMOTED: "PROMOTED";
    readonly REPEATED: "REPEATED";
    readonly GRADUATED: "GRADUATED";
    readonly WITHDRAWN: "WITHDRAWN";
};
export type PromotionStatus = (typeof PromotionStatus)[keyof typeof PromotionStatus];
export declare const DocumentType: {
    readonly REPORT_CARD: "REPORT_CARD";
    readonly TRANSCRIPT: "TRANSCRIPT";
};
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];
export declare const NotificationChannel: {
    readonly APP: "APP";
    readonly SMS: "SMS";
    readonly EMAIL: "EMAIL";
};
export type NotificationChannel = (typeof NotificationChannel)[keyof typeof NotificationChannel];
export declare const AuditAction: {
    readonly CREATE: "CREATE";
    readonly UPDATE: "UPDATE";
    readonly DELETE: "DELETE";
    readonly LOCK: "LOCK";
    readonly UNLOCK: "UNLOCK";
    readonly PROMOTE: "PROMOTE";
    readonly GRADE_CORRECTION: "GRADE_CORRECTION";
};
export type AuditAction = (typeof AuditAction)[keyof typeof AuditAction];
