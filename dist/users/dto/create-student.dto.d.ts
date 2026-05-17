import { Gender } from '@prisma/client';
export declare class CreateStudentDto {
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string;
    gender: Gender;
    dateOfBirth?: string;
    email?: string;
    password: string;
    currentClassId?: string;
    departmentId?: string;
    parentFirstName?: string;
    parentLastName?: string;
    parentPhone?: string;
    parentEmail?: string;
    parentRelationship?: string;
}
