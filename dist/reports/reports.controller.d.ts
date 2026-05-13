import { Role } from '../generated/prisma';
import { ReportsService } from './reports.service';
import { GenerateReportCardDto, BatchGenerateDto, BuildTranscriptDto } from './dto/reports.dto';
export declare class ReportsController {
    private reportsService;
    constructor(reportsService: ReportsService);
    generateOne(dto: GenerateReportCardDto): Promise<{
        reportCard: {
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
        };
        grades: ({
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
        attendance: {
            id: string;
            studentId: string;
            termId: string;
            daysPresent: number;
            daysAbsent: number;
            totalDays: number;
        };
        student: {
            user: {
                id: string;
                email: string;
                phone: string | null;
                passwordHash: string;
                role: Role;
                isActive: boolean;
                lastLoginAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
            };
            currentClass: {
                level: import("../generated/prisma").ClassLevel;
                name: string;
                id: string;
                capacity: number;
                classTeacherId: string | null;
            };
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
        };
        statistics: {
            totalScore: number;
            averageScore: number;
            subjectCount: number;
        };
    }>;
    batchGenerate(dto: BatchGenerateDto): Promise<{
        total: number;
        succeeded: number;
        failedCount: number;
        failed: {
            studentId: string;
            indexNumber: string;
            error: any;
        }[];
    }>;
    buildTranscript(dto: BuildTranscriptDto): Promise<{
        transcript: {
            id: string;
            indexNumber: string;
            studentId: string;
            systemHash: string;
            qrCodeUrl: string | null;
            verificationUrl: string | null;
            pdfUrl: string | null;
            generatedAt: Date;
            purpose: string | null;
            requestedById: string | null;
        };
        student: {
            user: {
                id: string;
                email: string;
                phone: string | null;
                passwordHash: string;
                role: Role;
                isActive: boolean;
                lastLoginAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
            };
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
        };
        verificationUrl: string;
    }>;
    verify(hash: string): Promise<{
        valid: boolean;
        documentType: string;
        student: {
            firstName: string;
            lastName: string;
            indexNumber: string;
        };
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
        generatedAt: Date;
        indexNumber?: undefined;
        message?: undefined;
    } | {
        valid: boolean;
        documentType: string;
        indexNumber: string;
        generatedAt: Date;
        student?: undefined;
        term?: undefined;
        message?: undefined;
    } | {
        valid: boolean;
        message: string;
        documentType?: undefined;
        student?: undefined;
        term?: undefined;
        generatedAt?: undefined;
        indexNumber?: undefined;
    }>;
}
