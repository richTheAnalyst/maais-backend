"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditInterceptor = exports.Audit = exports.AUDIT_KEY = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const prisma_service_1 = require("../prisma/prisma.service");
const core_1 = require("@nestjs/core");
exports.AUDIT_KEY = 'audit_meta';
const Audit = (action, entity) => (target, key, descriptor) => {
    Reflect.defineMetadata(exports.AUDIT_KEY, { action, entity }, descriptor.value);
    return descriptor;
};
exports.Audit = Audit;
let AuditInterceptor = class AuditInterceptor {
    constructor(prisma, reflector) {
        this.prisma = prisma;
        this.reflector = reflector;
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const meta = this.reflector.get(exports.AUDIT_KEY, context.getHandler());
        if (!meta || !user)
            return next.handle();
        return next.handle().pipe((0, operators_1.tap)(async (result) => {
            try {
                await this.prisma.auditLog.create({
                    data: {
                        userId: user.id,
                        action: meta.action,
                        entity: meta.entity,
                        entityId: result?.id || request.params?.id || 'unknown',
                        payload: result ? JSON.parse(JSON.stringify(result)) : null,
                        ipAddress: request.ip,
                        userAgent: request.headers['user-agent'],
                    },
                });
            }
            catch {
            }
        }));
    }
};
exports.AuditInterceptor = AuditInterceptor;
exports.AuditInterceptor = AuditInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        core_1.Reflector])
], AuditInterceptor);
//# sourceMappingURL=audit.interceptor.js.map