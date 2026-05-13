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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_1 = require("../generated/prisma");
const users_service_1 = require("./users.service");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const create_staff_dto_1 = require("./dto/create-staff.dto");
const create_student_dto_1 = require("./dto/create-student.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    createStaff(dto) {
        return this.usersService.createStaff(dto);
    }
    createStudent(dto) {
        return this.usersService.createStudent(dto);
    }
    getAllStudents(classId) {
        return this.usersService.getAllStudents(classId);
    }
    getStudentProfile(id) {
        return this.usersService.getStudentProfile(id);
    }
    getAllStaff() {
        return this.usersService.getAllStaff();
    }
    deactivate(id) {
        return this.usersService.deactivateUser(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('staff'),
    (0, roles_decorator_1.Roles)(prisma_1.Role.SUPER_ADMIN, prisma_1.Role.HEADMASTER),
    (0, swagger_1.ApiOperation)({ summary: 'Create a staff account' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_staff_dto_1.CreateStaffDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createStaff", null);
__decorate([
    (0, common_1.Post)('students'),
    (0, roles_decorator_1.Roles)(prisma_1.Role.SUPER_ADMIN, prisma_1.Role.HEADMASTER),
    (0, swagger_1.ApiOperation)({ summary: 'Enrol a new student' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createStudent", null);
__decorate([
    openapi.ApiQuery({ name: "classId", required: false }),
    (0, common_1.Get)('students'),
    (0, roles_decorator_1.Roles)(prisma_1.Role.SUPER_ADMIN, prisma_1.Role.HEADMASTER, prisma_1.Role.HOD, prisma_1.Role.TEACHER),
    (0, swagger_1.ApiOperation)({ summary: 'List all active students' }),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)('classId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAllStudents", null);
__decorate([
    (0, common_1.Get)('students/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get full student profile' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getStudentProfile", null);
__decorate([
    (0, common_1.Get)('staff'),
    (0, roles_decorator_1.Roles)(prisma_1.Role.SUPER_ADMIN, prisma_1.Role.HEADMASTER),
    (0, swagger_1.ApiOperation)({ summary: 'List all staff members' }),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAllStaff", null);
__decorate([
    (0, common_1.Delete)(':id/deactivate'),
    (0, roles_decorator_1.Roles)(prisma_1.Role.SUPER_ADMIN, prisma_1.Role.HEADMASTER),
    (0, swagger_1.ApiOperation)({ summary: 'Deactivate a user account' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deactivate", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map