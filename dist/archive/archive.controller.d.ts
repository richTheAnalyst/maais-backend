import { ArchiveService } from './archive.service';
import { PromotionDto } from '../comms/dto/comms.dto';
export declare class ArchiveController {
    private archiveService;
    constructor(archiveService: ArchiveService);
    runPromotion(dto: PromotionDto, userId: string): Promise<{
        academicYear: string;
        totalProcessed: number;
        promoted: number;
        graduated: number;
    }>;
    searchVault(query: any): Promise<({
        grades: ({
            term: {
                academicYear: {
                    id: string;
                    isActive: boolean;
                    createdAt: Date;
                    label: string;
                    startDate: Date;
                    endDate: Date;
                };
            } & {
                id: string;
                isActive: boolean;
                startDate: Date;
                endDate: Date;
                termNumber: import("../generated/prisma").TermNumber;
                academicYearId: string;
                isLocked: boolean;
            };
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
        })[];
        promotions: ({
            academicYear: {
                id: string;
                isActive: boolean;
                createdAt: Date;
                label: string;
                startDate: Date;
                endDate: Date;
            };
        } & {
            id: string;
            academicYearId: string;
            studentId: string;
            fromClass: import("../generated/prisma").ClassLevel;
            toClass: import("../generated/prisma").ClassLevel | null;
            status: import("../generated/prisma").PromotionStatus;
            notes: string | null;
            performedById: string;
            performedAt: Date;
        })[];
        reportCards: ({
            term: {
                academicYear: {
                    id: string;
                    isActive: boolean;
                    createdAt: Date;
                    label: string;
                    startDate: Date;
                    endDate: Date;
                };
            } & {
                id: string;
                isActive: boolean;
                startDate: Date;
                endDate: Date;
                termNumber: import("../generated/prisma").TermNumber;
                academicYearId: string;
                isLocked: boolean;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            studentId: string;
            termId: string;
            totalScore: number | null;
            systemHash: string;
            documentType: import("../generated/prisma").DocumentType;
            qrCodeUrl: string | null;
            verificationUrl: string | null;
            averageScore: number | null;
            classPosition: number | null;
            classSize: number | null;
            conductGrade: string | null;
            headmasterRemarks: string | null;
            classTeacherRemarks: string | null;
            pdfUrl: string | null;
            generatedAt: Date | null;
            releasedAt: Date | null;
        })[];
    } & {
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
    })[]>;
    lockTerm(id: string): Promise<{
        id: string;
        isActive: boolean;
        startDate: Date;
        endDate: Date;
        termNumber: import("../generated/prisma").TermNumber;
        academicYearId: string;
        isLocked: boolean;
    }>;
    health(): Promise<{
        status: string;
        checkedAt: Date;
        counts: {
            totalStudents: number;
            activeStudents: number;
            archivedStudents: number;
            totalGrades: number;
            totalReportCards: number;
            totalTranscripts: number;
            pendingObservations: number;
        };
    }>;
}
