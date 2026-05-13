import { Controller, Get, Post, Patch, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { Role } from '../generated/prisma';
import { GradingService } from './grading.service';
import { Roles, CurrentUser } from '../common/decorators/roles.decorator';
import { UpsertGradeDto, BulkUpsertGradeDto, CorrectGradeDto } from './dto/grading.dto';

@ApiTags('Grading')
@ApiBearerAuth()
@Controller('grading')
export class GradingController {
  constructor(private gradingService: GradingService) {}

  @Post('entries')
  @Roles(Role.TEACHER, Role.HOD, Role.HEADMASTER, Role.SUPER_ADMIN)
  @ApiOperation({ summary: 'Submit or update a grade entry' })
  upsertGrade(@Body() dto: UpsertGradeDto, @CurrentUser('id') userId: string) {
    return this.gradingService.upsertGrade(dto, userId);
  }

  @Post('entries/bulk')
  @Roles(Role.TEACHER, Role.HOD, Role.HEADMASTER, Role.SUPER_ADMIN)
  @ApiOperation({ summary: 'Bulk grade entry for a class/subject' })
  bulkUpsert(@Body() dto: BulkUpsertGradeDto, @CurrentUser('id') userId: string) {
    return this.gradingService.bulkUpsertGrades(dto.entries, userId);
  }

  @Patch('entries/:id/lock')
  @Roles(Role.HOD, Role.HEADMASTER, Role.SUPER_ADMIN)
  @ApiOperation({ summary: 'Lock a grade entry' })
  lockGrade(
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
    @CurrentUser('role') role: Role,
  ) {
    return this.gradingService.lockGrade(id, userId, role);
  }

  @Post('corrections')
  @Roles(Role.TEACHER, Role.HOD, Role.HEADMASTER, Role.SUPER_ADMIN)
  @ApiOperation({ summary: 'Submit a grade correction with audit trail' })
  correctGrade(@Body() dto: CorrectGradeDto, @CurrentUser('id') userId: string) {
    return this.gradingService.correctGrade(dto, userId);
  }

  @Get('audit-tray')
  @Roles(Role.HOD, Role.HEADMASTER, Role.SUPER_ADMIN)
  @ApiOperation({ summary: 'Get missing observations tray' })
  getMissingObservations(@Query('termId') termId: string) {
    return this.gradingService.getMissingObservationsTray(termId);
  }

  @Get('students/:studentId/terms/:termId')
  @ApiOperation({ summary: 'Get all grades for a student in a term' })
  getStudentTermGrades(
    @Param('studentId') studentId: string,
    @Param('termId') termId: string,
  ) {
    return this.gradingService.getStudentTermGrades(studentId, termId);
  }

  @Get('smart-remarks/:grade')
  @ApiOperation({ summary: 'Get smart remark suggestions for a grade' })
  getSmartRemarks(@Param('grade') grade: string) {
    return { grade, remarks: this.gradingService.getSmartRemarks(grade) };
  }
}