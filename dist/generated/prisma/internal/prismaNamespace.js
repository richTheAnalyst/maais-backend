"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.AuditLogScalarFieldEnum = exports.PromotionRecordScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.TranscriptScalarFieldEnum = exports.ReportCardScalarFieldEnum = exports.AttendanceRecordScalarFieldEnum = exports.GradeCorrectionScalarFieldEnum = exports.GradeEntryScalarFieldEnum = exports.GradeBoundaryScalarFieldEnum = exports.GradingSchemeScalarFieldEnum = exports.TeachingAssignmentScalarFieldEnum = exports.ClassSectionScalarFieldEnum = exports.SubjectScalarFieldEnum = exports.DepartmentScalarFieldEnum = exports.TermScalarFieldEnum = exports.AcademicYearScalarFieldEnum = exports.StudentParentLinkScalarFieldEnum = exports.ParentProfileScalarFieldEnum = exports.StudentProfileScalarFieldEnum = exports.StaffProfileScalarFieldEnum = exports.RefreshTokenScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = require("@prisma/client/runtime/client");
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    RefreshToken: 'RefreshToken',
    StaffProfile: 'StaffProfile',
    StudentProfile: 'StudentProfile',
    ParentProfile: 'ParentProfile',
    StudentParentLink: 'StudentParentLink',
    AcademicYear: 'AcademicYear',
    Term: 'Term',
    Department: 'Department',
    Subject: 'Subject',
    ClassSection: 'ClassSection',
    TeachingAssignment: 'TeachingAssignment',
    GradingScheme: 'GradingScheme',
    GradeBoundary: 'GradeBoundary',
    GradeEntry: 'GradeEntry',
    GradeCorrection: 'GradeCorrection',
    AttendanceRecord: 'AttendanceRecord',
    ReportCard: 'ReportCard',
    Transcript: 'Transcript',
    Notification: 'Notification',
    PromotionRecord: 'PromotionRecord',
    AuditLog: 'AuditLog'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    phone: 'phone',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RefreshTokenScalarFieldEnum = {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
};
exports.StaffProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    staffId: 'staffId',
    firstName: 'firstName',
    lastName: 'lastName',
    middleName: 'middleName',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    phone: 'phone',
    photoUrl: 'photoUrl',
    hiredAt: 'hiredAt',
    departmentId: 'departmentId'
};
exports.StudentProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    indexNumber: 'indexNumber',
    firstName: 'firstName',
    lastName: 'lastName',
    middleName: 'middleName',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    photoUrl: 'photoUrl',
    admissionDate: 'admissionDate',
    currentClassId: 'currentClassId',
    archivedAt: 'archivedAt'
};
exports.ParentProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    email: 'email',
    occupation: 'occupation'
};
exports.StudentParentLinkScalarFieldEnum = {
    id: 'id',
    studentId: 'studentId',
    parentId: 'parentId',
    relationship: 'relationship',
    isPrimary: 'isPrimary'
};
exports.AcademicYearScalarFieldEnum = {
    id: 'id',
    label: 'label',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.TermScalarFieldEnum = {
    id: 'id',
    academicYearId: 'academicYearId',
    termNumber: 'termNumber',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    isLocked: 'isLocked'
};
exports.DepartmentScalarFieldEnum = {
    id: 'id',
    name: 'name',
    code: 'code',
    description: 'description',
    createdAt: 'createdAt'
};
exports.SubjectScalarFieldEnum = {
    id: 'id',
    name: 'name',
    code: 'code',
    type: 'type',
    departmentId: 'departmentId',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.ClassSectionScalarFieldEnum = {
    id: 'id',
    name: 'name',
    level: 'level',
    capacity: 'capacity',
    classTeacherId: 'classTeacherId'
};
exports.TeachingAssignmentScalarFieldEnum = {
    id: 'id',
    teacherId: 'teacherId',
    subjectId: 'subjectId',
    classSectionId: 'classSectionId',
    academicYearId: 'academicYearId'
};
exports.GradingSchemeScalarFieldEnum = {
    id: 'id',
    name: 'name',
    isDefault: 'isDefault'
};
exports.GradeBoundaryScalarFieldEnum = {
    id: 'id',
    schemeId: 'schemeId',
    grade: 'grade',
    minScore: 'minScore',
    maxScore: 'maxScore',
    remark: 'remark',
    smartRemarks: 'smartRemarks'
};
exports.GradeEntryScalarFieldEnum = {
    id: 'id',
    studentId: 'studentId',
    subjectId: 'subjectId',
    termId: 'termId',
    classScore: 'classScore',
    examScore: 'examScore',
    totalScore: 'totalScore',
    grade: 'grade',
    remark: 'remark',
    position: 'position',
    hasObservation: 'hasObservation',
    observationText: 'observationText',
    isLocked: 'isLocked',
    lockedById: 'lockedById',
    lockedAt: 'lockedAt',
    submittedById: 'submittedById',
    submittedAt: 'submittedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.GradeCorrectionScalarFieldEnum = {
    id: 'id',
    gradeEntryId: 'gradeEntryId',
    changedById: 'changedById',
    fieldChanged: 'fieldChanged',
    oldValue: 'oldValue',
    newValue: 'newValue',
    reason: 'reason',
    createdAt: 'createdAt'
};
exports.AttendanceRecordScalarFieldEnum = {
    id: 'id',
    studentId: 'studentId',
    termId: 'termId',
    daysPresent: 'daysPresent',
    daysAbsent: 'daysAbsent',
    totalDays: 'totalDays'
};
exports.ReportCardScalarFieldEnum = {
    id: 'id',
    studentId: 'studentId',
    termId: 'termId',
    documentType: 'documentType',
    systemHash: 'systemHash',
    qrCodeUrl: 'qrCodeUrl',
    verificationUrl: 'verificationUrl',
    totalScore: 'totalScore',
    averageScore: 'averageScore',
    classPosition: 'classPosition',
    classSize: 'classSize',
    conductGrade: 'conductGrade',
    headmasterRemarks: 'headmasterRemarks',
    classTeacherRemarks: 'classTeacherRemarks',
    pdfUrl: 'pdfUrl',
    generatedAt: 'generatedAt',
    releasedAt: 'releasedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.TranscriptScalarFieldEnum = {
    id: 'id',
    studentId: 'studentId',
    indexNumber: 'indexNumber',
    systemHash: 'systemHash',
    qrCodeUrl: 'qrCodeUrl',
    verificationUrl: 'verificationUrl',
    pdfUrl: 'pdfUrl',
    purpose: 'purpose',
    requestedById: 'requestedById',
    generatedAt: 'generatedAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    studentId: 'studentId',
    title: 'title',
    body: 'body',
    channel: 'channel',
    isRead: 'isRead',
    deliveredAt: 'deliveredAt',
    failedAt: 'failedAt',
    errorMsg: 'errorMsg',
    createdAt: 'createdAt',
    createdById: 'createdById'
};
exports.PromotionRecordScalarFieldEnum = {
    id: 'id',
    studentId: 'studentId',
    academicYearId: 'academicYearId',
    fromClass: 'fromClass',
    toClass: 'toClass',
    status: 'status',
    notes: 'notes',
    performedById: 'performedById',
    performedAt: 'performedAt'
};
exports.AuditLogScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    payload: 'payload',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map