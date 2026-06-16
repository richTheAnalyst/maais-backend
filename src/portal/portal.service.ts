import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';

@Injectable()
export class PortalService {
  constructor(private prisma: PrismaService) {}

  async getPortalData(studentId: string) {
    return this.getPortalDataInternal(studentId);
  }

  async searchStudents(query: string, requesterRole: string, requesterId: string) {
    let departmentId: string | undefined;

    if (requesterRole === 'HOD') {
      const staff = await this.prisma.staffProfile.findUnique({
        where: { userId: requesterId },
      });
      departmentId = staff?.departmentId || undefined;
    }

    const where: any = {
      archivedAt: null,
    };

    if (departmentId) {
      where.departmentId = departmentId;
    }

    if (query && query.trim()) {
      where.OR = [
        { firstName: { contains: query, mode: 'insensitive' } },
        { lastName: { contains: query, mode: 'insensitive' } },
        { indexNumber: { contains: query, mode: 'insensitive' } },
      ];
    }

    const students = await this.prisma.studentProfile.findMany({
      where,
      include: {
        currentClass: true,
        department: true,
      },
      take: 20,
      orderBy: [{ lastName: 'asc' }, { firstName: 'asc' }],
    });

    return students.map(s => ({
      id: s.id,
      name: `${s.firstName} ${s.lastName}`,
      indexNumber: s.indexNumber,
      classForm: s.currentClass?.name || '—',
      department: s.department?.name || '—',
    }));
  }

  private async getPortalDataInternal(studentId: string) {
    const student = await this.prisma.studentProfile.findUnique({
      where: { id: studentId },
      include: { currentClass: true },
    });

    const latestReport = await this.prisma.reportCard.findFirst({
      where: { studentId },
      orderBy: { createdAt: 'desc' },
      include: { term: { include: { academicYear: true } } },
    });

    const allGrades = await this.prisma.gradeEntry.findMany({
      where: { studentId },
      include: { subject: true, term: { include: { academicYear: true } } },
    });

    const behavior = await this.prisma.studentBehavior.findFirst({
      where: { studentId },
      orderBy: { createdAt: 'desc' },
    });

    const characterTraits = await this.prisma.characterTrait.findFirst({
      where: { studentId },
      orderBy: { createdAt: 'desc' },
    });

    const attendance = await this.prisma.attendanceRecord.findMany({
      where: { studentId },
    });

    const notifications = await this.prisma.notification.findMany({
      where: { studentId },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    const interventions = await this.prisma.interventionAlert.findMany({
      where: {
        studentId,
        status: { in: ['ACTIVE', 'IN_PROGRESS'] },
      },
    });

    const attendancePercentage = this.calculateAttendance(attendance);

    const terminalResults = allGrades.map(grade => ({
      subject: grade.subject?.name || 'Unknown',
      caScore: grade.classScore ?? 0,
      examScore: grade.examScore ?? 0,
      totalScore: grade.totalScore ?? 0,
      grade: grade.grade || '-',
      remarks: grade.remark || '',
    }));

    const coreResults = terminalResults.filter(r =>
      ['Core Mathematics', 'English Language', 'Integrated Science', 'Social Studies'].includes(r.subject)
    );

    const technicalResults = terminalResults.filter(r =>
      !['Core Mathematics', 'English Language', 'Integrated Science', 'Social Studies'].includes(r.subject)
    );

    const yearForm = latestReport?.term?.academicYear?.label?.replace('/', '-') || '—';
    const semester = this.formatTermNumber(latestReport?.term?.termNumber);

    const academicHistory = this.buildAcademicHistory(allGrades);

    const behaviorRating = behavior
      ? (behavior.punctuality + behavior.attendance + behavior.attitude + behavior.conduct) / 4
      : 0;

    return {
      student: {
        id: student?.id,
        firstName: student?.firstName,
        lastName: student?.lastName,
        indexNumber: student?.indexNumber,
        currentClassId: student?.currentClassId,
        currentClass: student?.currentClass,
      },
      cgpa: latestReport?.averageScore ?? 0,
      classRank: latestReport?.classPosition,
      approvalStatus: latestReport?.releasedAt ? 'APPROVED' : 'PENDING',
      attendancePercentage,
      yearForm,
      semester,
      terminalResults,
      coreResults,
      technicalResults,
      academicHistory,
      behaviorRating,
      behaviorComments: behavior?.remarks || '',
      characterTraits: characterTraits ? {
        characterQualities: (characterTraits.leadership + characterTraits.discipline + characterTraits.teamwork + characterTraits.ethics + (characterTraits.communication || 0) + (characterTraits.responsibility || 0)) / 6,
        leadership: characterTraits.leadership,
        discipline: characterTraits.discipline,
        teamwork: characterTraits.teamwork,
        ethics: characterTraits.ethics,
      } : null,
      notifications,
      activeInterventions: interventions,
    };
  }

  private calculateAttendance(records: any[]) {
    const present = records.reduce((sum, r) => sum + r.daysPresent, 0);
    const total = records.reduce((sum, r) => sum + r.totalDays, 0);
    if (!total) return 0;
    return Number(((present / total) * 100).toFixed(2));
  }

  private formatTermNumber(termNumber: string | { name?: string } | undefined): string {
    if (!termNumber) return '—';
    if (typeof termNumber === 'string') {
      if (termNumber.startsWith('TERM_')) {
        return `Term ${termNumber.replace('TERM_', '')}`;
      }
      const match = termNumber.match(/(\d)/);
      return match ? `Term ${match[1]}` : '—';
    }
    if (typeof termNumber === 'object' && 'name' in termNumber) {
      const num = (termNumber as any).name;
      if (num?.startsWith('TERM_')) return `Term ${num.replace('TERM_', '')}`;
      return num ? `Term ${num}` : '—';
    }
    return '—';
  }

  private buildAcademicHistory(grades: any[]) {
    const historyMap = new Map<string, { year: string; term: string; subjects: any[] }>();

    grades.forEach(grade => {
      const yearLabel = grade.term?.academicYear?.label || 'Unknown Year';
      const termLabel = this.formatTermNumber(grade.term?.termNumber);
      const key = `${yearLabel}|${termLabel}`;

      if (!historyMap.has(key)) {
        historyMap.set(key, { year: yearLabel, term: termLabel, subjects: [] });
      }

      historyMap.get(key)!.subjects.push({
        name: grade.subject?.name || 'Unknown',
        score: grade.totalScore ?? grade.classScore ?? 0,
        grade: grade.grade || '-',
      });
    });

    return Array.from(historyMap.values());
  }
}
