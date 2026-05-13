import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { Role, Gender } from '@prisma/client';
import * as argon2 from 'argon2';

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

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createStaff(dto: CreateStaffDto) {
    const exists = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (exists) throw new ConflictException('Email already in use');

    const passwordHash = await argon2.hash(dto.password);

    return this.prisma.user.create({
      data: {
        email: dto.email,
        passwordHash,
        role: dto.role,
        staffProfile: {
          create: {
            staffId: dto.staffId,
            firstName: dto.firstName,
            lastName: dto.lastName,
            middleName: dto.middleName,
            gender: dto.gender,
            phone: dto.phone,
            departmentId: dto.departmentId,
          },
        },
      },
      include: { staffProfile: true },
    });
  }

  async createStudent(dto: CreateStudentDto) {
    const indexExists = await this.prisma.studentProfile.findUnique({
      where: { indexNumber: dto.indexNumber },
    });
    if (indexExists)
      throw new ConflictException(
        `Index number ${dto.indexNumber} already registered`,
      );

    const passwordHash = await argon2.hash(dto.password);
    const email = dto.email ?? `${dto.indexNumber}@student.mandoshts.edu.gh`;

    return this.prisma.user.create({
      data: {
        email,
        passwordHash,
        role: Role.STUDENT,
        studentProfile: {
          create: {
            indexNumber: dto.indexNumber,
            firstName: dto.firstName,
            lastName: dto.lastName,
            middleName: dto.middleName,
            gender: dto.gender,
            dateOfBirth: new Date(dto.dateOfBirth),
            currentClassId: dto.currentClassId,
          },
        },
      },
      include: { studentProfile: { include: { currentClass: true } } },
    });
  }

  async getAllStudents(classId?: string) {
    return this.prisma.studentProfile.findMany({
      where: {
        archivedAt: null,
        ...(classId ? { currentClassId: classId } : {}),
      },
      include: {
        currentClass: true,
        user: { select: { email: true, isActive: true } },
      },
      orderBy: [{ lastName: 'asc' }, { firstName: 'asc' }],
    });
  }

  async getStudentProfile(studentId: string) {
    return this.prisma.studentProfile.findUniqueOrThrow({
      where: { id: studentId },
      include: {
        currentClass: true,
        user: { select: { email: true, lastLoginAt: true } },
        parentLinks: { include: { parent: true } },
        grades: {
          include: { subject: true, term: { include: { academicYear: true } } },
          take: 50,
        },
        reportCards: { include: { term: { include: { academicYear: true } } } },
      },
    });
  }

  async getAllStaff() {
    return this.prisma.staffProfile.findMany({
      include: {
        user: { select: { email: true, role: true, isActive: true } },
        department: true,
        teachingAssignments: { include: { subject: true, classSection: true } },
      },
      orderBy: { lastName: 'asc' },
    });
  }

  async deactivateUser(userId: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { isActive: false },
    });
  }
}
