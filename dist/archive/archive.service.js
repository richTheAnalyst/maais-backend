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
exports.ArchiveService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
const client_1 = require("@prisma/client");
const PROMOTION_MAP = {
    [client_1.ClassLevel.FORM_1]: client_1.ClassLevel.FORM_2,
    [client_1.ClassLevel.FORM_2]: client_1.ClassLevel.FORM_3,
    [client_1.ClassLevel.FORM_3]: null,
};
let ArchiveService = class ArchiveService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async runPromotionCycle(academicYearId, performedById) {
        const year = await this.prisma.academicYear.findUniqueOrThrow({
            where: { id: academicYearId },
        });
        const unlockedTerms = await this.prisma.term.findMany({
            where: { academicYearId, isLocked: false },
        });
        if (unlockedTerms.length > 0) {
            throw new common_1.BadRequestException(`${unlockedTerms.length} term(s) are still unlocked. Lock all terms before running promotion.`);
        }
        const students = await this.prisma.studentProfile.findMany({
            where: { archivedAt: null, currentClassId: { not: null } },
            include: { currentClass: true },
        });
        const promotionRecords = [];
        const graduates = [];
        for (const student of students) {
            const currentLevel = student.currentClass.level;
            const nextLevel = PROMOTION_MAP[currentLevel];
            if (nextLevel === null) {
                graduates.push(student.id);
                promotionRecords.push({
                    studentId: student.id,
                    academicYearId,
                    fromClass: currentLevel,
                    toClass: null,
                    status: client_1.PromotionStatus.GRADUATED,
                    performedById,
                });
            }
            else {
                const currentClassName = student.currentClass.name;
                const suffix = currentClassName.replace(/^[1-3]/, '');
                const nextClass = await this.prisma.classSection.findFirst({
                    where: {
                        level: nextLevel,
                        name: { endsWith: suffix },
                    },
                });
                if (nextClass) {
                    await this.prisma.studentProfile.update({
                        where: { id: student.id },
                        data: { currentClassId: nextClass.id },
                    });
                }
                promotionRecords.push({
                    studentId: student.id,
                    academicYearId,
                    fromClass: currentLevel,
                    toClass: nextLevel,
                    status: client_1.PromotionStatus.PROMOTED,
                    performedById,
                });
            }
        }
        if (graduates.length > 0) {
            await this.prisma.studentProfile.updateMany({
                where: { id: { in: graduates } },
                data: { archivedAt: new Date(), currentClassId: null },
            });
        }
        await this.prisma.promotionRecord.createMany({ data: promotionRecords });
        return {
            academicYear: year.label,
            totalProcessed: students.length,
            promoted: promotionRecords.filter((r) => r.status === client_1.PromotionStatus.PROMOTED).length,
            graduated: graduates.length,
        };
    }
    async searchVault(query) {
        return this.prisma.studentProfile.findMany({
            where: {
                AND: [
                    query.indexNumber
                        ? {
                            indexNumber: {
                                contains: query.indexNumber,
                                mode: 'insensitive',
                            },
                        }
                        : {},
                    query.firstName
                        ? { firstName: { contains: query.firstName, mode: 'insensitive' } }
                        : {},
                    query.lastName
                        ? { lastName: { contains: query.lastName, mode: 'insensitive' } }
                        : {},
                ],
            },
            include: {
                grades: {
                    include: {
                        subject: true,
                        term: { include: { academicYear: true } },
                    },
                },
                reportCards: {
                    include: { term: { include: { academicYear: true } } },
                },
                promotions: {
                    include: { academicYear: true },
                },
            },
            take: 50,
        });
    }
    async lockTerm(termId) {
        return this.prisma.term.update({
            where: { id: termId },
            data: { isLocked: true },
        });
    }
    async getDatabaseHealth() {
        const [totalStudents, activeStudents, archivedStudents, totalGrades, totalReportCards, totalTranscripts, pendingObservations,] = await Promise.all([
            this.prisma.studentProfile.count(),
            this.prisma.studentProfile.count({ where: { archivedAt: null } }),
            this.prisma.studentProfile.count({
                where: { archivedAt: { not: null } },
            }),
            this.prisma.gradeEntry.count(),
            this.prisma.reportCard.count(),
            this.prisma.transcript.count(),
            this.prisma.gradeEntry.count({ where: { hasObservation: false } }),
        ]);
        return {
            status: 'healthy',
            checkedAt: new Date(),
            counts: {
                totalStudents,
                activeStudents,
                archivedStudents,
                totalGrades,
                totalReportCards,
                totalTranscripts,
                pendingObservations,
            },
        };
    }
    async advanceToNextTerm(currentTermId) {
        const currentTerm = await this.prisma.term.findUniqueOrThrow({
            where: { id: currentTermId },
            include: { academicYear: { include: { terms: true } } },
        });
        if (!currentTerm.isLocked) {
            throw new common_1.BadRequestException('Current term must be locked before advancing to the next term.');
        }
        const TERM_ORDER = ['TERM_1', 'TERM_2', 'TERM_3'];
        const currentIndex = TERM_ORDER.indexOf(currentTerm.termNumber);
        if (currentIndex === -1 || currentIndex === TERM_ORDER.length - 1) {
            throw new common_1.BadRequestException('This is the final term of the academic year. Run year-end promotion instead.');
        }
        const nextTermNumber = TERM_ORDER[currentIndex + 1];
        const nextTerm = currentTerm.academicYear.terms.find((t) => t.termNumber === nextTermNumber);
        if (!nextTerm) {
            throw new common_1.BadRequestException(`${nextTermNumber} has not been created yet for this academic year.`);
        }
        await this.prisma.term.update({
            where: { id: currentTerm.id },
            data: { isActive: false },
        });
        const activated = await this.prisma.term.update({
            where: { id: nextTerm.id },
            data: { isActive: true },
        });
        return {
            previousTerm: currentTerm.termNumber,
            newActiveTerm: activated.termNumber,
            academicYear: currentTerm.academicYear.label,
        };
    }
    async getPromotionReadiness(academicYearId) {
        const terms = await this.prisma.term.findMany({
            where: { academicYearId },
        });
        const allLocked = terms.length === 3 && terms.every((t) => t.isLocked);
        const lockedCount = terms.filter((t) => t.isLocked).length;
        const activeStudents = await this.prisma.studentProfile.count({
            where: { archivedAt: null, currentClassId: { not: null } },
        });
        const byLevel = await this.prisma.studentProfile.groupBy({
            by: ['currentClassId'],
            where: { archivedAt: null, currentClassId: { not: null } },
            _count: { id: true },
        });
        const classSections = await this.prisma.classSection.findMany({
            where: { id: { in: byLevel.map((b) => b.currentClassId) } },
        });
        const countsByLevel = {
            FORM_1: 0,
            FORM_2: 0,
            FORM_3: 0,
        };
        byLevel.forEach((b) => {
            const cls = classSections.find((c) => c.id === b.currentClassId);
            if (cls)
                countsByLevel[cls.level] += b._count.id;
        });
        return {
            isReady: allLocked,
            termsLocked: lockedCount,
            termsTotal: terms.length,
            totalActiveStudents: activeStudents,
            breakdown: {
                form1ToForm2: countsByLevel.FORM_1,
                form2ToForm3: countsByLevel.FORM_2,
                form3ToAlumni: countsByLevel.FORM_3,
            },
        };
    }
};
exports.ArchiveService = ArchiveService;
exports.ArchiveService = ArchiveService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ArchiveService);
//# sourceMappingURL=archive.service.js.map