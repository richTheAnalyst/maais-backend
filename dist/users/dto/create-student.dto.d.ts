import { Gender } from '../../generated/prisma';
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
}
