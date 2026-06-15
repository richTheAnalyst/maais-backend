import { Controller, Get, Post, Patch, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { CommsService } from './comms.service';
import { Roles, CurrentUser } from '../common/decorators/roles.decorator';
import { SendNotificationDto, EmergencyNotificationDto } from './dto/comms.dto';
import { CreateSupportTicketDto } from './dto/create-ticket.dto';

@ApiTags('Comms')
@ApiBearerAuth()
@Controller('comms')
export class CommsController {
  constructor(private commsService: CommsService) {}

  @Post('notify')
  @Roles(Role.HEADMASTER, Role.SUPER_ADMIN, Role.HOD)
  @ApiOperation({ summary: 'Send notification to students' })
  sendNotification(@Body() dto: SendNotificationDto, @CurrentUser('id') userId: string) {
    return this.commsService.sendNotification(dto, userId);
  }

  @Post('emergency')
  @Roles(Role.HEADMASTER, Role.SUPER_ADMIN)
  @ApiOperation({ summary: 'Broadcast emergency SMS to all parents' })
  emergency(@Body() dto: EmergencyNotificationDto, @CurrentUser('id') userId: string) {
    return this.commsService.broadcastEmergency(dto.title, dto.message, userId);
  }

  @Get('notifications/:studentId')
  @ApiOperation({ summary: "Get student's notification inbox" })
  getNotifications(
    @Param('studentId') studentId: string,
    @Query('unreadOnly') unreadOnly: boolean,
  ) {
    return this.commsService.getStudentNotifications(studentId, unreadOnly);
  }

  @Patch('notifications/:id/read')
  @ApiOperation({ summary: 'Mark notification as read' })
  markRead(@Param('id') id: string) {
    return this.commsService.markAsRead(id);
  }

  @Get('analytics/pulse')
  @Roles(Role.HEADMASTER, Role.SUPER_ADMIN, Role.HOD)
  @ApiOperation({ summary: 'Get academic pulse dashboard data' })
  getPulse(@Query('academicYearId') academicYearId?: string) {
    return this.commsService.getAnalyticsPulse(academicYearId);
  }

  @Post('tickets')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Raise a support ticket (student-facing)' })
  createTicket(@Body() dto: CreateSupportTicketDto, @CurrentUser('id') userId: string) {
    return this.commsService.createTicket(dto, userId);
  }

  @Get('tickets/my')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current student\'s support tickets' })
  getMyTickets(@CurrentUser('id') userId: string) {
    return this.commsService.getStudentTickets(userId);
  }
}