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
exports.CreateStaffDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const prisma_1 = require("../../generated/prisma");
class CreateStaffDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String, format: "email" }, password: { required: true, type: () => String }, role: { required: true, type: () => Object }, staffId: { required: true, type: () => String }, firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, middleName: { required: false, type: () => String }, gender: { required: true, type: () => Object }, phone: { required: false, type: () => String }, departmentId: { required: false, type: () => String } };
    }
}
exports.CreateStaffDto = CreateStaffDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'teacher@mandoshts.edu.gh' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Teacher@2024!' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: prisma_1.Role, example: prisma_1.Role.TEACHER }),
    (0, class_validator_1.IsEnum)(prisma_1.Role),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'TCH-2024-001' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ama' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Owusu' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Abena' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "middleName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: prisma_1.Gender }),
    (0, class_validator_1.IsEnum)(prisma_1.Gender),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '+233244000000' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "departmentId", void 0);
//# sourceMappingURL=create-staff.dto.js.map