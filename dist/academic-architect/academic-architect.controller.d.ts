import { AcademicArchitectService } from './academic-architect.service';
import { CreateAcademicYearDto, CreateTermDto, CreateDepartmentDto, CreateSubjectDto, CreateClassSectionDto, AssignTeacherDto, AssignClassTeacherDto } from './dto/academic-architect.dto';
export declare class AcademicArchitectController {
    private service;
    constructor(service: AcademicArchitectService);
    createYear(dto: CreateAcademicYearDto): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        label: string;
        startDate: Date;
        endDate: Date;
    }>;
    activateYear(id: string): Promise<{
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
            termNumber: import("../generated/prisma").TermNumber;
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
    createTerm(dto: CreateTermDto): Promise<{
        id: string;
        isActive: boolean;
        startDate: Date;
        endDate: Date;
        termNumber: import("../generated/prisma").TermNumber;
        academicYearId: string;
        isLocked: boolean;
    }>;
    activateTerm(id: string): Promise<{
        id: string;
        isActive: boolean;
        startDate: Date;
        endDate: Date;
        termNumber: import("../generated/prisma").TermNumber;
        academicYearId: string;
        isLocked: boolean;
    }>;
    createDepartment(dto: CreateDepartmentDto): Promise<{
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
            type: import("../generated/prisma").SubjectType;
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
    createSubject(dto: CreateSubjectDto): Promise<{
        name: string;
        id: string;
        isActive: boolean;
        createdAt: Date;
        type: import("../generated/prisma").SubjectType;
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
        type: import("../generated/prisma").SubjectType;
        description: string | null;
        departmentId: string | null;
        code: string;
    })[]>;
    createClass(dto: CreateClassSectionDto): Promise<{
        level: import("../generated/prisma").ClassLevel;
        name: string;
        id: string;
        capacity: number;
        classTeacherId: string | null;
    }>;
    getAllClasses(): Promise<({
        classTeacher: {
            id: string;
            phone: string | null;
            userId: string;
            staffId: string;
            firstName: string;
            lastName: string;
            middleName: string | null;
            gender: import("../generated/prisma").Gender;
            dateOfBirth: Date | null;
            photoUrl: string | null;
            hiredAt: Date;
            departmentId: string | null;
        };
        _count: {
            students: number;
        };
    } & {
        level: import("../generated/prisma").ClassLevel;
        name: string;
        id: string;
        capacity: number;
        classTeacherId: string | null;
    })[]>;
    assignClassTeacher(id: string, dto: AssignClassTeacherDto): Promise<{
        level: import("../generated/prisma").ClassLevel;
        name: string;
        id: string;
        capacity: number;
        classTeacherId: string | null;
    }>;
    assignTeacher(dto: AssignTeacherDto): Promise<{
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
            type: import("../generated/prisma").SubjectType;
            description: string | null;
            departmentId: string | null;
            code: string;
        };
        classSection: {
            level: import("../generated/prisma").ClassLevel;
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
    getMyAssignments(user: any): any[] | Promise<({
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
        classSection: {
            level: import("../generated/prisma").ClassLevel;
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
