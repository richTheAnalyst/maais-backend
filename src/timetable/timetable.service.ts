import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';

@Injectable()
export class TimetableService {
  constructor(private prisma: PrismaService) {}

  async getStudentTimetable(studentId: string) 
  {
    const student =
    await this.prisma.studentProfile.findUnique({
        where: {id: studentId},
        select: {
            currentClassId: true,
        },
    });

    return this.prisma.timetableEntry.findMany({
       where: {
         classId: student?.currentClassId,
       },
       include:{
        subject: true,
       },
       orderBy: [
        {
            dayOfWeek: 'asc',
        },
        {
            startTime: 'asc'
        },
       ],

    });
  }
}
