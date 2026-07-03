<<<<<<< HEAD
import { Controller, Get, Post, Patch, Body, Param, Delete } from '@nestjs/common';
=======
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
>>>>>>> qhojoblinks/main
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { AcademicArchitectService } from './academic-architect.service';
import { Roles, CurrentUser } from '../common/decorators/roles.decorator';
import {
  CreateAcademicYearDto,
  CreateTermDto,
  CreateDepartmentDto,
  CreateSubjectDto,
  CreateClassSectionDto,
  UpdateClassSectionDto,
  AssignTeacherDto,
  AssignClassTeacherDto,
} from './dto/academic-architect.dto';

@ApiTags('Academic Architect')
@ApiBearerAuth()
@Controller('academic')
export class AcademicArchitectController {
  constructor(private service: AcademicArchitectService) {}

  @Post('years')
  @Roles(Role.HEADMASTER)
  @ApiOperation({ summary: 'Create a new academic year' })
  createYear(@Body() dto: CreateAcademicYearDto) {
    return this.service.createAcademicYear(
      dto.label,
      new Date(dto.startDate),
      new Date(dto.endDate),
      dto.termSystem,
    );
  }

  @Patch('years/:id/activate')
  @Roles(Role.HEADMASTER)
  @ApiOperation({ summary: 'Set active academic year' })
  activateYear(@Param('id') id: string) {
    return this.service.setActiveYear(id);
  }

  @Get('years/active')
  @Roles(Role.STUDENT)
  @ApiOperation({ summary: 'Get current active academic year' })
  getActiveYear() {
    return this.service.getActiveYear();
  }

  @Get('years')
  @Roles(Role.HOD)
  @ApiOperation({ summary: 'Get all academic years' })
  getAllYears() {
    return this.service.getAllYears();
  }

  @Post('terms')
  @Roles(Role.HEADMASTER)
  @ApiOperation({ summary: 'Create a term' })
  createTerm(@Body() dto: CreateTermDto) {
    return this.service.createTerm(
      dto.academicYearId,
      dto.termNumber,
      new Date(dto.startDate),
      new Date(dto.endDate),
    );
  }

  @Patch('terms/:id/activate')
  @Roles(Role.HEADMASTER)
  @ApiOperation({ summary: 'Set active term' })
  activateTerm(@Param('id') id: string) {
    return this.service.setActiveTerm(id);
  }

  @Post('departments')
  @Roles(Role.HEADMASTER)
  @ApiOperation({ summary: 'Create a department' })
  createDepartment(@Body() dto: CreateDepartmentDto) {
    return this.service.createDepartment(dto.name, dto.code, dto.description);
  }

  @Get('departments')
  @Roles(Role.STUDENT)
  @ApiOperation({ summary: 'Get all departments' })
  getAllDepartments() {
    return this.service.getAllDepartments();
  }

  @Post('subjects')
  @Roles(Role.HOD)
  @ApiOperation({ summary: 'Create a subject' })
  createSubject(@Body() dto: CreateSubjectDto) {
    return this.service.createSubject(dto);
  }

  @Get('subjects')
  @Roles(Role.STUDENT)
  @ApiOperation({ summary: 'Get all active subjects' })
  getAllSubjects() {
    return this.service.getAllSubjects();
  }

  @Post('classes')
  @Roles(Role.HEADMASTER)
  @ApiOperation({ summary: 'Create a class section' })
  createClass(@Body() dto: CreateClassSectionDto) {
    return this.service.createClassSection(
      dto.name,
      dto.level,
      dto.capacity,
      dto.program,
      dto.track,
    );
  }

  @Get('classes')
  @Roles(Role.STUDENT)
  @ApiOperation({ summary: 'Get all class sections' })
  getAllClasses(@Query('track') track?: string) {
    return this.service.getAllClassSections(track);
  }

  @Patch('classes/:id')
  @Roles(Role.HEADMASTER)
  @ApiOperation({ summary: 'Update a class section' })
  updateClass(@Param('id') id: string, @Body() dto: UpdateClassSectionDto) {
    return this.service.updateClassSection(id, dto);
  }

  @Delete('classes/:id')
  @Roles(Role.HEADMASTER)
  @ApiOperation({ summary: 'Delete a class section' })
  deleteClass(@Param('id') id: string) {
    return this.service.deleteClassSection(id);
  }

  @Patch('classes/:id/teacher')
  @Roles(Role.HEADMASTER)
  @ApiOperation({ summary: 'Assign class teacher' })
  assignClassTeacher(
    @Param('id') id: string,
    @Body() dto: AssignClassTeacherDto,
  ) {
    return this.service.assignClassTeacher(id, dto.staffId);
  }

  @Post('assignments')
  @Roles(Role.HOD)
  @ApiOperation({ summary: 'Assign teacher to subject/class' })
  assignTeacher(@Body() dto: AssignTeacherDto) {
    return this.service.assignTeacher(dto);
  }

  @Get('assignments/teacher/:teacherId')
  @Roles(Role.TEACHER)
  @ApiOperation({ summary: 'Get teacher assignments' })
  getTeacherAssignments(
    @Param('teacherId') teacherId: string,
    @CurrentUser() user: { role: Role; staffProfile?: { id: string } },
  ) {
    if (user.role === Role.TEACHER && user.staffProfile?.id !== teacherId) {
      return [];
    }
    return this.service.getTeacherAssignments(teacherId);
  }

  @Get('assignments/class/:classId')
  @Roles(Role.TEACHER)
  @ApiOperation({ summary: 'Get teaching assignments for a class' })
  getAssignmentsByClass(
    @Param('classId') classId: string,
    @Query('track') track?: string,
  ) {
    return this.service.getAssignmentsByClass(classId, track);
  }

  @Get('my-assignments')
  @Roles(Role.TEACHER)
  @ApiOperation({ summary: 'Get current teacher assignments' })
  getMyAssignments(@CurrentUser() user: any) {
    if (!user.staffProfile) return [];
    return this.service.getTeacherAssignments(user.staffProfile.id);
  }

  @Get('assignments')
@Roles(Role.SUPER_ADMIN, Role.HEADMASTER, Role.HOD)
@ApiOperation({ summary: 'Get all teaching assignments' })
getAllAssignments() {
  return this.service.getAllAssignments();
}

@Delete('assignments/:id')
@Roles(Role.SUPER_ADMIN, Role.HEADMASTER, Role.HOD)
@ApiOperation({ summary: 'Remove a teaching assignment' })
deleteAssignment(@Param('id') id: string) {
  return this.service.deleteAssignment(id);
}

@Patch('staff/:userId/role')
@Roles(Role.SUPER_ADMIN, Role.HEADMASTER)
@ApiOperation({ summary: 'Change a staff member\'s system role' })
updateStaffRole(@Param('userId') userId: string, @Body('role') role: Role) {
  return this.service.updateStaffRole(userId, role);
}

@Patch('staff/:staffId/department')
@Roles(Role.SUPER_ADMIN, Role.HEADMASTER)
@ApiOperation({ summary: 'Change a staff member\'s department' })
updateStaffDepartment(@Param('staffId') staffId: string, @Body('departmentId') departmentId: string | null) {
  return this.service.updateStaffDepartment(staffId, departmentId);
}

@Patch('terms/:id/unlock')
@Roles(Role.SUPER_ADMIN, Role.HEADMASTER)
@ApiOperation({ summary: 'Unlock a previously locked term (sensitive action, audit logged)' })
unlockTerm(
  @Param('id') id: string,
  @Body('reason') reason: string,
  @CurrentUser('id') userId: string,
) {
  return this.service.unlockTerm(id, userId, reason);
}
}