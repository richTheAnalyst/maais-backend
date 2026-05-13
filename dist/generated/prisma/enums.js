"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditAction = exports.NotificationChannel = exports.DocumentType = exports.PromotionStatus = exports.ClassLevel = exports.TermNumber = exports.GradeRemark = exports.SubjectType = exports.Gender = exports.Role = void 0;
exports.Role = {
    SUPER_ADMIN: 'SUPER_ADMIN',
    HEADMASTER: 'HEADMASTER',
    HOD: 'HOD',
    TEACHER: 'TEACHER',
    STUDENT: 'STUDENT',
    PARENT: 'PARENT'
};
exports.Gender = {
    MALE: 'MALE',
    FEMALE: 'FEMALE'
};
exports.SubjectType = {
    CORE: 'CORE',
    ELECTIVE: 'ELECTIVE'
};
exports.GradeRemark = {
    EXCELLENT: 'EXCELLENT',
    VERY_GOOD: 'VERY_GOOD',
    GOOD: 'GOOD',
    CREDIT: 'CREDIT',
    PASS: 'PASS',
    WEAK_PASS: 'WEAK_PASS',
    FAILURE: 'FAILURE'
};
exports.TermNumber = {
    TERM_1: 'TERM_1',
    TERM_2: 'TERM_2',
    TERM_3: 'TERM_3'
};
exports.ClassLevel = {
    FORM_1: 'FORM_1',
    FORM_2: 'FORM_2',
    FORM_3: 'FORM_3'
};
exports.PromotionStatus = {
    PROMOTED: 'PROMOTED',
    REPEATED: 'REPEATED',
    GRADUATED: 'GRADUATED',
    WITHDRAWN: 'WITHDRAWN'
};
exports.DocumentType = {
    REPORT_CARD: 'REPORT_CARD',
    TRANSCRIPT: 'TRANSCRIPT'
};
exports.NotificationChannel = {
    APP: 'APP',
    SMS: 'SMS',
    EMAIL: 'EMAIL'
};
exports.AuditAction = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    LOCK: 'LOCK',
    UNLOCK: 'UNLOCK',
    PROMOTE: 'PROMOTE',
    GRADE_CORRECTION: 'GRADE_CORRECTION'
};
//# sourceMappingURL=enums.js.map