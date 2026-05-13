"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
const client_1 = require("@prisma/client");
const argon2 = require("argon2");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createStaff(dto) {
        const exists = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (exists)
            throw new common_1.ConflictException('Email already in use');
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
    async createStudent(dto) {
        const indexExists = await this.prisma.studentProfile.findUnique({
            where: { indexNumber: dto.indexNumber },
        });
        if (indexExists)
            throw new common_1.ConflictException(`Index number ${dto.indexNumber} already registered`);
        const passwordHash = await argon2.hash(dto.password);
        const email = dto.email ?? `${dto.indexNumber}@student.mandoshts.edu.gh`;
        return this.prisma.user.create({
            data: {
                email,
                passwordHash,
                role: client_1.Role.STUDENT,
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
    async getAllStudents(classId) {
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
    async getStudentProfile(studentId) {
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
    async deactivateUser(userId) {
        return this.prisma.user.update({
            where: { id: userId },
            data: { isActive: false },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map