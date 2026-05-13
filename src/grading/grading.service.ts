import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { GradeRemark, Role } from '@prisma/client';

// GH SHS Standard WAEC grading
const GRADE_BOUNDARIES = [
  {
    grade: 'A1',
    min: 80,
    max: 100,
    remark: GradeRemark.EXCELLENT,
    smartRemarks: [
      'Outstanding performance',
      'Exceptional academic achievement',
      'An excellent student — keep it up!',
    ],
  },
  {
    grade: 'B2',
    min: 70,
    max: 79,
    remark: GradeRemark.VERY_GOOD,
    smartRemarks: [
      'Very good performance',
      'Great effort shown',
      'Well done — aim for the top!',
    ],
  },
  {
    grade: 'B3',
    min: 65,
    max: 69,
    remark: GradeRemark.GOOD,
    smartRemarks: [
      'Good performance',
      'Commendable effort',
      'Keep pushing for excellence',
    ],
  },
  {
    grade: 'C4',
    min: 60,
    max: 64,
    remark: GradeRemark.CREDIT,
    smartRemarks: [
      'Credit performance',
      'Good but can do better',
      'Consistent effort required',
    ],
  },
  {
    grade: 'C5',
    min: 55,
    max: 59,
    remark: GradeRemark.PASS,
    smartRemarks: [
      'Can do better with more effort',
      'More dedication needed',
      'Revise frequently',
    ],
  },
  {
    grade: 'C6',
    min: 50,
    max: 54,
    remark: GradeRemark.PASS,
    smartRemarks: [
      'Satisfactory — more work needed',
      'Pay closer attention in class',
    ],
  },
  {
    grade: 'D7',
    min: 45,
    max: 49,
    remark: GradeRemark.WEAK_PASS,
    smartRemarks: [
      'Weak performance — please seek help',
      'Extra classes recommended',
    ],
  },
  {
    grade: 'E8',
    min: 40,
    max: 44,
    remark: GradeRemark.WEAK_PASS,
    smartRemarks: [
      'Very weak — urgent improvement needed',
      'Must attend remedial sessions',
    ],
  },
  {
    grade: 'F9',
    min: 0,
    max: 39,
    remark: GradeRemark.FAILURE,
    smartRemarks: [
      'Failed — must repeat this subject',
      'Serious academic counselling required',
    ],
  },
];

export interface UpsertGradeDto {
  studentId: string;
  subjectId: string;
  termId: string;
  classScore?: number;
  examScore?: number;
  remark?: string;
  hasObservation?: boolean;
  observationText?: string;
}

export interface CorrectGradeDto {
  gradeEntryId: string;
  fieldChanged: 'classScore' | 'examScore' | 'remark';
  newValue: string;
  reason: string;
}

@Injectable()
export class GradingService {
  constructor(private prisma: PrismaService) {}

  /**
   * Compute grade from total score using GH WAEC boundaries
   */
  computeGrade(classScore: number, examScore: number) {
    const total = Math.round(classScore + examScore);
    const boundary =
      GRADE_BOUNDARIES.find((b) => total >= b.min && total <= b.max) ||
      GRADE_BOUNDARIES[GRADE_BOUNDARIES.length - 1]; // Fallback to F9

    // Edge case for scores > 100
    if (total > 100) {
      return {
        totalScore: total,
        grade: GRADE_BOUNDARIES[0].grade,
        remark: GRADE_BOUNDARIES[0].remark,
        smartRemarks: GRADE_BOUNDARIES[0].smartRemarks,
      };
    }

    return {
      totalScore: total,
      grade: boundary.grade,
      remark: boundary.remark,
      smartRemarks: boundary.smartRemarks,
    };
  }

  /**
   * Get smart remarks pool for a given grade
   */
  getSmartRemarks(grade: string): string[] {
    return GRADE_BOUNDARIES.find((b) => b.grade === grade)?.smartRemarks ?? [];
  }

  /**
   * Upsert a grade entry (teacher submitting scores)
   */
  async upsertGrade(dto: UpsertGradeDto, submittedById: string) {
    const term = await this.prisma.term.findUniqueOrThrow({
      where: { id: dto.termId },
    });

    if (term.isLocked) {
      throw new ForbiddenException(
        'Term is locked. Grades cannot be modified.',
      );
    }

    let totalScore: number | undefined;
    let grade: string | undefined;

    if (dto.classScore !== undefined && dto.examScore !== undefined) {
      const computed = this.computeGrade(dto.classScore, dto.examScore);
      totalScore = computed.totalScore;
      grade = computed.grade;
    }

    const entry = await this.prisma.gradeEntry.upsert({
      where: {
        studentId_subjectId_termId: {
          studentId: dto.studentId,
          subjectId: dto.subjectId,
          termId: dto.termId,
        },
      },
      create: {
        studentId: dto.studentId,
        subjectId: dto.subjectId,
        termId: dto.termId,
        classScore: dto.classScore,
        examScore: dto.examScore,
        totalScore,
        grade,
        remark: dto.remark,
        hasObservation: dto.hasObservation ?? false,
        observationText: dto.observationText,
        submittedById,
        submittedAt: new Date(),
      },
      update: {
        classScore: dto.classScore,
        examScore: dto.examScore,
        totalScore,
        grade,
        remark: dto.remark,
        hasObservation: dto.hasObservation,
        observationText: dto.observationText,
        submittedById,
        submittedAt: new Date(),
      },
      include: { student: true, subject: true },
    });

    return entry;
  }

  /**
   * HOD locks a grade entry to prevent further editing
   */
  async lockGrade(gradeEntryId: string, lockedById: string, userRole: Role) {
    if (
      userRole !== Role.HOD &&
      userRole !== Role.HEADMASTER &&
      userRole !== Role.SUPER_ADMIN
    ) {
      throw new ForbiddenException('Only HODs or above can lock grade entries');
    }

    return this.prisma.gradeEntry.update({
      where: { id: gradeEntryId },
      data: { isLocked: true, lockedById, lockedAt: new Date() },
    });
  }

  /**
   * Record a grade correction with reason (audit trail)
   */
  async correctGrade(dto: CorrectGradeDto, changedById: string) {
    const entry = await this.prisma.gradeEntry.findUniqueOrThrow({
      where: { id: dto.gradeEntryId },
    });

    if (entry.isLocked) {
      throw new ForbiddenException('Grade is locked. Contact HOD to unlock.');
    }

    const oldValue = String(
      entry[dto.fieldChanged as keyof typeof entry] ?? '',
    );

    // Record the correction
    await this.prisma.gradeCorrection.create({
      data: {
        gradeEntryId: dto.gradeEntryId,
        changedById,
        fieldChanged: dto.fieldChanged,
        oldValue,
        newValue: dto.newValue,
        reason: dto.reason,
      },
    });

    // Apply correction
    const updateData: Record<string, any> = {
      [dto.fieldChanged]:
        dto.fieldChanged === 'remark' ? dto.newValue : parseFloat(dto.newValue),
    };

    // Recompute total/grade if score changed
    if (dto.fieldChanged === 'classScore' || dto.fieldChanged === 'examScore') {
      const cs =
        dto.fieldChanged === 'classScore'
          ? parseFloat(dto.newValue)
          : (entry.classScore ?? 0);
      const es =
        dto.fieldChanged === 'examScore'
          ? parseFloat(dto.newValue)
          : (entry.examScore ?? 0);
      const computed = this.computeGrade(cs, es);
      updateData.totalScore = computed.totalScore;
      updateData.grade = computed.grade;
    }

    return this.prisma.gradeEntry.update({
      where: { id: dto.gradeEntryId },
      data: updateData,
    });
  }

  /**
   * Get missing observations tray - students with scores but no observation
   */
  async getMissingObservationsTray(termId: string) {
    return this.prisma.gradeEntry.findMany({
      where: {
        termId,
        hasObservation: false,
        OR: [{ classScore: { not: null } }, { examScore: { not: null } }],
      },
      include: {
        student: {
          select: { indexNumber: true, firstName: true, lastName: true },
        },
        subject: { select: { name: true, code: true } },
      },
      orderBy: { student: { lastName: 'asc' } },
    });
  }

  /**
   * Get all grades for a student in a term
   */
  async getStudentTermGrades(studentId: string, termId: string) {
    return this.prisma.gradeEntry.findMany({
      where: { studentId, termId },
      include: { subject: true, corrections: true },
      orderBy: { subject: { name: 'asc' } },
    });
  }

  /**
   * Bulk grade entry for a class
   */
  async bulkUpsertGrades(entries: UpsertGradeDto[], submittedById: string) {
    const results = await Promise.all(
      entries.map((e) => this.upsertGrade(e, submittedById)),
    );

    // After bulk upsert, recompute positions for this class/subject/term
    if (entries.length > 0) {
      const { subjectId, termId } = entries[0];
      // Note: This assumes all entries in bulk are for same subject/term
      // which is usually the case for a teacher's markbook.
      await this.computeSubjectPositions(subjectId, termId);
    }

    return results;
  }

  /**
   * Compute subject positions for all students in a subject/term
   */
  async computeSubjectPositions(subjectId: string, termId: string) {
    const entries = await this.prisma.gradeEntry.findMany({
      where: { subjectId, termId, totalScore: { not: null } },
      orderBy: { totalScore: 'desc' },
    });

    let currentRank = 1;
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if (i > 0 && entry.totalScore === entries[i - 1].totalScore) {
        // Tie
      } else {
        currentRank = i + 1;
      }

      await this.prisma.gradeEntry.update({
        where: { id: entry.id },
        data: { position: currentRank },
      });
    }
  }
}
