import { PrismaService } from '../common/prisma/prisma.service';
import { TermNumber, ClassLevel, SubjectType } from "@prisma/client";
export declare class AcademicArchitectService {
    private prisma;
    constructor(prisma: PrismaService);
    createAcademicYear(label: string, startDate: Date, endDate: Date): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        label: string;
        startDate: Date;
        endDate: Date;
    }>;
    setActiveYear(yearId: string): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        label: string;
        startDate: Date;
        endDate: Date;
    }>;
    getActiveYear(): Promise<{
        terms: {
            id: string;
            isActive: boolean;
            startDate: Date;
            endDate: Date;
            termNumber: TermNumber;
            academicYearId: string;
            isLocked: boolean;
        }[];
    } & {
        id: string;
        isActive: boolean;
        createdAt: Date;
        label: string;
        startDate: Date;
        endDate: Date;
    }>;
    createTerm(academicYearId: string, termNumber: TermNumber, startDate: Date, endDate: Date): Promise<{
        id: string;
        isActive: boolean;
        startDate: Date;
        endDate: Date;
        termNumber: TermNumber;
        academicYearId: string;
        isLocked: boolean;
    }>;
    setActiveTerm(termId: string): Promise<{
        id: string;
        isActive: boolean;
        startDate: Date;
        endDate: Date;
        termNumber: TermNumber;
        academicYearId: string;
        isLocked: boolean;
    }>;
    createDepartment(name: string, code: string, description?: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        description: string | null;
        code: string;
    }>;
    getAllDepartments(): Promise<({
        _count: {
            staff: number;
        };
        subjects: {
            name: string;
            id: string;
            isActive: boolean;
            createdAt: Date;
            type: SubjectType;
            description: string | null;
            departmentId: string | null;
            code: string;
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        description: string | null;
        code: string;
    })[]>;
    createSubject(dto: {
        name: string;
        code: string;
        type: SubjectType;
        departmentId?: string;
        description?: string;
    }): Promise<{
        name: string;
        id: string;
        isActive: boolean;
        createdAt: Date;
        type: SubjectType;
        description: string | null;
        departmentId: string | null;
        code: string;
    }>;
    getAllSubjects(): Promise<({
        department: {
            name: string;
            id: string;
            createdAt: Date;
            description: string | null;
            code: string;
        };
    } & {
        name: string;
        id: string;
        isActive: boolean;
        createdAt: Date;
        type: SubjectType;
        description: string | null;
        departmentId: string | null;
        code: string;
    })[]>;
    createClassSection(name: string, level: ClassLevel, capacity?: number): Promise<{
        level: ClassLevel;
        name: string;
        id: string;
        capacity: number;
        classTeacherId: string | null;
    }>;
    getAllClassSections(): Promise<({
        classTeacher: {
            id: string;
            phone: string | null;
            userId: string;
            staffId: string;
            firstName: string;
            lastName: string;
            middleName: string | null;
            gender: import("@prisma/client").Gender;
            dateOfBirth: Date | null;
            photoUrl: string | null;
            hiredAt: Date;
            departmentId: string | null;
        };
        _count: {
            students: number;
        };
    } & {
        level: ClassLevel;
        name: string;
        id: string;
        capacity: number;
        classTeacherId: string | null;
    })[]>;
    assignClassTeacher(classSectionId: string, staffId: string): Promise<{
        level: ClassLevel;
        name: string;
        id: string;
        capacity: number;
        classTeacherId: string | null;
    }>;
    assignTeacher(dto: {
        teacherId: string;
        subjectId: string;
        classSectionId: string;
        academicYearId: string;
    }): Promise<{
        id: string;
        academicYearId: string;
        teacherId: string;
        subjectId: string;
        classSectionId: string;
    }>;
    getTeacherAssignments(teacherId: string): Promise<({
        subject: {
            name: string;
            id: string;
            isActive: boolean;
            createdAt: Date;
            type: SubjectType;
            description: string | null;
            departmentId: string | null;
            code: string;
        };
        classSection: {
            level: ClassLevel;
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
    })[]>;
}
