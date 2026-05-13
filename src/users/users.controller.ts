import { Controller, Get, Post, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { Role } from '../generated/prisma';
import { UsersService } from './users.service';
import { Roles } from '../common/decorators/roles.decorator';
import { CreateStaffDto } from './dto/create-staff.dto';
import { CreateStudentDto } from './dto/create-student.dto';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('staff')
  @Roles(Role.SUPER_ADMIN, Role.HEADMASTER)
  @ApiOperation({ summary: 'Create a staff account' })
  createStaff(@Body() dto: CreateStaffDto) {
    return this.usersService.createStaff(dto);
  }

  @Post('students')
  @Roles(Role.SUPER_ADMIN, Role.HEADMASTER)
  @ApiOperation({ summary: 'Enrol a new student' })
  createStudent(@Body() dto: CreateStudentDto) {
    return this.usersService.createStudent(dto);
  }

  @Get('students')
  @Roles(Role.SUPER_ADMIN, Role.HEADMASTER, Role.HOD, Role.TEACHER)
  @ApiOperation({ summary: 'List all active students' })
  getAllStudents(@Query('classId') classId?: string) {
    return this.usersService.getAllStudents(classId);
  }

  @Get('students/:id')
  @ApiOperation({ summary: 'Get full student profile' })
  getStudentProfile(@Param('id') id: string) {
    return this.usersService.getStudentProfile(id);
  }

  @Get('staff')
  @Roles(Role.SUPER_ADMIN, Role.HEADMASTER)
  @ApiOperation({ summary: 'List all staff members' })
  getAllStaff() {
    return this.usersService.getAllStaff();
  }

  @Delete(':id/deactivate')
  @Roles(Role.SUPER_ADMIN, Role.HEADMASTER)
  @ApiOperation({ summary: 'Deactivate a user account' })
  deactivate(@Param('id') id: string) {
    return this.usersService.deactivateUser(id);
  }
}