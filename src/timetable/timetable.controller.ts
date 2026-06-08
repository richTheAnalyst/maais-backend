import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { TimetableService } from './timetable.service';

@Controller('students')
export class TimetableController {
  constructor(private readonly timetableService: TimetableService) {}

  @Get(':id/timetable')
  getStudentTimetable(@Param('id') studentId: string) {
    return this.timetableService.getStudentTimetable(studentId);
  }
}
