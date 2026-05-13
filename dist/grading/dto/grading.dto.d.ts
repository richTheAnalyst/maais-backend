export declare class UpsertGradeDto {
    studentId: string;
    subjectId: string;
    termId: string;
    classScore: number;
    examScore: number;
    remark?: string;
    hasObservation?: boolean;
    observationText?: string;
}
export declare class BulkUpsertGradeDto {
    entries: UpsertGradeDto[];
}
export declare class CorrectGradeDto {
    gradeEntryId: string;
    fieldChanged: 'classScore' | 'examScore' | 'remark';
    newValue: string;
    reason: string;
}
export declare class LockGradeDto {
    gradeEntryId: string;
}
