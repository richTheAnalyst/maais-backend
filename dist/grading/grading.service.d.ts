import { PrismaService } from '../common/prisma/prisma.service';
import { Role } from "@prisma/client";
export interface UpsertGradeDto {
    studentId: string;
    subjectId: string;
    termId: string;
    classScore?: number;
    examScore?: number;
    remark?: string;
    hasObservation?: boolean;
    observationText?: string;
}
export interface CorrectGradeDto {
    gradeEntryId: string;
    fieldChanged: 'classScore' | 'examScore' | 'remark';
    newValue: string;
    reason: string;
}
export declare class GradingService {
    private prisma;
    constructor(prisma: PrismaService);
    computeGrade(classScore: number, examScore: number): {
        totalScore: number;
        grade: string;
        remark: "EXCELLENT" | "VERY_GOOD" | "GOOD" | "CREDIT" | "PASS" | "WEAK_PASS" | "FAILURE";
        smartRemarks: string[];
    };
    getSmartRemarks(grade: string): string[];
    upsertGrade(dto: UpsertGradeDto, submittedById: string): Promise<{
        subject: {
            name: string;
            id: string;
            isActive: boolean;
            createdAt: Date;
            type: import("@prisma/client").SubjectType;
            description: string | null;
            departmentId: string | null;
            code: string;
        };
        student: {
            id: string;
            userId: string;
            firstName: string;
            lastName: string;
            middleName: string | null;
            gender: import("@prisma/client").Gender;
            dateOfBirth: Date | null;
            photoUrl: string | null;
            indexNumber: string;
            admissionDate: Date;
            currentClassId: string | null;
            archivedAt: Date | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isLocked: boolean;
        subjectId: string;
        classScore: number | null;
        examScore: number | null;
        remark: string | null;
        studentId: string;
        termId: string;
        totalScore: number | null;
        grade: string | null;
        position: number | null;
        hasObservation: boolean;
        observationText: string | null;
        lockedById: string | null;
        lockedAt: Date | null;
        submittedById: string | null;
        submittedAt: Date | null;
    }>;
    lockGrade(gradeEntryId: string, lockedById: string, userRole: Role): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isLocked: boolean;
        subjectId: string;
        classScore: number | null;
        examScore: number | null;
        remark: string | null;
        studentId: string;
        termId: string;
        totalScore: number | null;
        grade: string | null;
        position: number | null;
        hasObservation: boolean;
        observationText: string | null;
        lockedById: string | null;
        lockedAt: Date | null;
        submittedById: string | null;
        submittedAt: Date | null;
    }>;
    correctGrade(dto: CorrectGradeDto, changedById: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isLocked: boolean;
        subjectId: string;
        classScore: number | null;
        examScore: number | null;
        remark: string | null;
        studentId: string;
        termId: string;
        totalScore: number | null;
        grade: string | null;
        position: number | null;
        hasObservation: boolean;
        observationText: string | null;
        lockedById: string | null;
        lockedAt: Date | null;
        submittedById: string | null;
        submittedAt: Date | null;
    }>;
    getMissingObservationsTray(termId: string): Promise<({
        subject: {
            name: string;
            code: string;
        };
        student: {
            firstName: string;
            lastName: string;
            indexNumber: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isLocked: boolean;
        subjectId: string;
        classScore: number | null;
        examScore: number | null;
        remark: string | null;
        studentId: string;
        termId: string;
        totalScore: number | null;
        grade: string | null;
        position: number | null;
        hasObservation: boolean;
        observationText: string | null;
        lockedById: string | null;
        lockedAt: Date | null;
        submittedById: string | null;
        submittedAt: Date | null;
    })[]>;
    getStudentTermGrades(studentId: string, termId: string): Promise<({
        subject: {
            name: string;
            id: string;
            isActive: boolean;
            createdAt: Date;
            type: import("@prisma/client").SubjectType;
            description: string | null;
            departmentId: string | null;
            code: string;
        };
        corrections: {
            id: string;
            createdAt: Date;
            changedById: string;
            fieldChanged: string;
            oldValue: string | null;
            newValue: string;
            reason: string;
            gradeEntryId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isLocked: boolean;
        subjectId: string;
        classScore: number | null;
        examScore: number | null;
        remark: string | null;
        studentId: string;
        termId: string;
        totalScore: number | null;
        grade: string | null;
        position: number | null;
        hasObservation: boolean;
        observationText: string | null;
        lockedById: string | null;
        lockedAt: Date | null;
        submittedById: string | null;
        submittedAt: Date | null;
    })[]>;
    bulkUpsertGrades(entries: UpsertGradeDto[], submittedById: string): Promise<({
        subject: {
            name: string;
            id: string;
            isActive: boolean;
            createdAt: Date;
            type: import("@prisma/client").SubjectType;
            description: string | null;
            departmentId: string | null;
            code: string;
        };
        student: {
            id: string;
            userId: string;
            firstName: string;
            lastName: string;
            middleName: string | null;
            gender: import("@prisma/client").Gender;
            dateOfBirth: Date | null;
            photoUrl: string | null;
            indexNumber: string;
            admissionDate: Date;
            currentClassId: string | null;
            archivedAt: Date | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isLocked: boolean;
        subjectId: string;
        classScore: number | null;
        examScore: number | null;
        remark: string | null;
        studentId: string;
        termId: string;
        totalScore: number | null;
        grade: string | null;
        position: number | null;
        hasObservation: boolean;
        observationText: string | null;
        lockedById: string | null;
        lockedAt: Date | null;
        submittedById: string | null;
        submittedAt: Date | null;
    })[]>;
    computeSubjectPositions(subjectId: string, termId: string): Promise<void>;
}
