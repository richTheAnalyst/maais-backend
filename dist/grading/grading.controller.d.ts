import { Role } from '../generated/prisma';
import { GradingService } from './grading.service';
import { UpsertGradeDto, BulkUpsertGradeDto, CorrectGradeDto } from './dto/grading.dto';
export declare class GradingController {
    private gradingService;
    constructor(gradingService: GradingService);
    upsertGrade(dto: UpsertGradeDto, userId: string): Promise<{
        subject: {
            name: string;
            id: string;
            isActive: boolean;
            createdAt: Date;
            type: import("../generated/prisma").SubjectType;
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
            gender: import("../generated/prisma").Gender;
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
    bulkUpsert(dto: BulkUpsertGradeDto, userId: string): Promise<({
        subject: {
            name: string;
            id: string;
            isActive: boolean;
            createdAt: Date;
            type: import("../generated/prisma").SubjectType;
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
            gender: import("../generated/prisma").Gender;
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
    lockGrade(id: string, userId: string, role: Role): Promise<{
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
    correctGrade(dto: CorrectGradeDto, userId: string): Promise<{
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
    getMissingObservations(termId: string): Promise<({
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
            type: import("../generated/prisma").SubjectType;
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
    getSmartRemarks(grade: string): {
        grade: string;
        remarks: string[];
    };
}
