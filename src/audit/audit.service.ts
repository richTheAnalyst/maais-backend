import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';

@Injectable()
export class AuditService {
  constructor(private prisma: PrismaService) {}

  async getLogs(
    page = 1,
    limit = 50,
    filters?: {
      action?: string;
      entity?: string;
      userId?: string;
    },
  ) {
    const skip = (page - 1) * limit;

    const where = {
      ...(filters?.action && {
        action: filters.action as any,
      }),

      ...(filters?.entity && {
        entity: filters.entity,
      }),

      ...(filters?.userId && {
        userId: filters.userId,
      }),
    };

    const [logs, total] = await this.prisma.$transaction([
      this.prisma.auditLog.findMany({
        skip,
        take: limit,

        orderBy: {
          createdAt: 'desc',
        },

        include: {
          user: {
            select: {
              id: true,
              email: true,
              role: true,
            },
          },
        },
      }),
      this.prisma.auditLog.count({ where,}),
    ]);
    return {
      total,
      page,
      limit,
      logs,
    };
  }
}
