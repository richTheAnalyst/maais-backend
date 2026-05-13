import { PrismaService } from '../common/prisma/prisma.service';
import { Role, Gender } from "@prisma/client";
export interface CreateStaffDto {
    email: string;
    password: string;
    role: Role;
    staffId: string;
    firstName: string;
    lastName: string;
    middleName?: string;
    gender: Gender;
    phone?: string;
    departmentId?: string;
}
export interface CreateStudentDto {
    email?: string;
    password: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string;
    gender: Gender;
    dateOfBirth?: string;
    currentClassId?: string;
}
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createStaff(dto: CreateStaffDto): Promise<{
        staffProfile: {
            id: string;
            phone: string | null;
            userId: string;
            staffId: string;
            firstName: string;
            lastName: string;
            middleName: string | null;
            gender: Gender;
            dateOfBirth: Date | null;
            photoUrl: string | null;
            hiredAt: Date;
            departmentId: string | null;
        };
    } & {
        id: string;
        email: string;
        phone: string | null;
        passwordHash: string;
        role: Role;
        isActive: boolean;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createStudent(dto: CreateStudentDto): Promise<{
        studentProfile: {
            currentClass: {
                level: import("@prisma/client").ClassLevel;
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
            gender: Gender;
            dateOfBirth: Date | null;
            photoUrl: string | null;
            indexNumber: string;
            admissionDate: Date;
            currentClassId: string | null;
            archivedAt: Date | null;
        };
    } & {
        id: string;
        email: string;
        phone: string | null;
        passwordHash: string;
        role: Role;
        isActive: boolean;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllStudents(classId?: string): Promise<({
        user: {
            email: string;
            isActive: boolean;
        };
        currentClass: {
            level: import("@prisma/client").ClassLevel;
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
        gender: Gender;
        dateOfBirth: Date | null;
        photoUrl: string | null;
        indexNumber: string;
        admissionDate: Date;
        currentClassId: string | null;
        archivedAt: Date | null;
    })[]>;
    getStudentProfile(studentId: string): Promise<{
        user: {
            email: string;
            lastLoginAt: Date;
        };
        currentClass: {
            level: import("@prisma/client").ClassLevel;
            name: string;
            id: string;
            capacity: number;
            classTeacherId: string | null;
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
                termNumber: import("@prisma/client").TermNumber;
                academicYearId: string;
                isLocked: boolean;
            };
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
                termNumber: import("@prisma/client").TermNumber;
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
            documentType: import("@prisma/client").DocumentType;
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
        parentLinks: ({
            parent: {
                id: string;
                email: string | null;
                phone: string;
                userId: string;
                firstName: string;
                lastName: string;
                occupation: string | null;
            };
        } & {
            id: string;
            studentId: string;
            parentId: string;
            relationship: string;
            isPrimary: boolean;
        })[];
    } & {
        id: string;
        userId: string;
        firstName: string;
        lastName: string;
        middleName: string | null;
        gender: Gender;
        dateOfBirth: Date | null;
        photoUrl: string | null;
        indexNumber: string;
        admissionDate: Date;
        currentClassId: string | null;
        archivedAt: Date | null;
    }>;
    getAllStaff(): Promise<({
        user: {
            email: string;
            role: Role;
            isActive: boolean;
        };
        department: {
            name: string;
            id: string;
            createdAt: Date;
            description: string | null;
            code: string;
        };
        teachingAssignments: ({
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
            classSection: {
                level: import("@prisma/client").ClassLevel;
                name: string;
                id: string;
                capacity: number;
                classTeacherId: string | null;
            };
        } & {
            id: string;
            academicYearId: string;
            teacherId: string;
            subjectId: string;
            classSectionId: string;
        })[];
    } & {
        id: string;
        phone: string | null;
        userId: string;
        staffId: string;
        firstName: string;
        lastName: string;
        middleName: string | null;
        gender: Gender;
        dateOfBirth: Date | null;
        photoUrl: string | null;
        hiredAt: Date;
        departmentId: string | null;
    })[]>;
    deactivateUser(userId: string): Promise<{
        id: string;
        email: string;
        phone: string | null;
        passwordHash: string;
        role: Role;
        isActive: boolean;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
