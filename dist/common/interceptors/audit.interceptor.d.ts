import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PrismaService } from '../prisma/prisma.service';
import { AuditAction } from "@prisma/client";
import { Reflector } from '@nestjs/core';
export declare const AUDIT_KEY = "audit_meta";
export declare const Audit: (action: AuditAction, entity: string) => (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
export declare class AuditInterceptor implements NestInterceptor {
    private prisma;
    private reflector;
    constructor(prisma: PrismaService, reflector: Reflector);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
