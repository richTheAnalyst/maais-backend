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
exports.LockGradeDto = exports.CorrectGradeDto = exports.BulkUpsertGradeDto = exports.UpsertGradeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpsertGradeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { studentId: { required: true, type: () => String }, subjectId: { required: true, type: () => String }, termId: { required: true, type: () => String }, classScore: { required: true, type: () => Number, minimum: 0, maximum: 30 }, examScore: { required: true, type: () => Number, minimum: 0, maximum: 70 }, remark: { required: false, type: () => String }, hasObservation: { required: false, type: () => Boolean }, observationText: { required: false, type: () => String } };
    }
}
exports.UpsertGradeDto = UpsertGradeDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertGradeDto.prototype, "studentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertGradeDto.prototype, "subjectId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertGradeDto.prototype, "termId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 25, description: 'Class score out of 30' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(30),
    __metadata("design:type", Number)
], UpsertGradeDto.prototype, "classScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 55, description: 'Exam score out of 70' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(70),
    __metadata("design:type", Number)
], UpsertGradeDto.prototype, "examScore", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Outstanding performance' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertGradeDto.prototype, "remark", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpsertGradeDto.prototype, "hasObservation", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertGradeDto.prototype, "observationText", void 0);
class BulkUpsertGradeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { entries: { required: true, type: () => [require("./grading.dto").UpsertGradeDto] } };
    }
}
exports.BulkUpsertGradeDto = BulkUpsertGradeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [UpsertGradeDto] }),
    __metadata("design:type", Array)
], BulkUpsertGradeDto.prototype, "entries", void 0);
class CorrectGradeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { gradeEntryId: { required: true, type: () => String }, fieldChanged: { required: true, type: () => Object }, newValue: { required: true, type: () => String }, reason: { required: true, type: () => String } };
    }
}
exports.CorrectGradeDto = CorrectGradeDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CorrectGradeDto.prototype, "gradeEntryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['classScore', 'examScore', 'remark'] }),
    (0, class_validator_1.IsEnum)(['classScore', 'examScore', 'remark']),
    __metadata("design:type", String)
], CorrectGradeDto.prototype, "fieldChanged", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CorrectGradeDto.prototype, "newValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Score was incorrectly entered' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CorrectGradeDto.prototype, "reason", void 0);
class LockGradeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { gradeEntryId: { required: true, type: () => String } };
    }
}
exports.LockGradeDto = LockGradeDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LockGradeDto.prototype, "gradeEntryId", void 0);
//# sourceMappingURL=grading.dto.js.map