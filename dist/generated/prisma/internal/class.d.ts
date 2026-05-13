import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get staffProfile(): Prisma.StaffProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get studentProfile(): Prisma.StudentProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get parentProfile(): Prisma.ParentProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get studentParentLink(): Prisma.StudentParentLinkDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get academicYear(): Prisma.AcademicYearDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get term(): Prisma.TermDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get department(): Prisma.DepartmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get subject(): Prisma.SubjectDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get classSection(): Prisma.ClassSectionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get teachingAssignment(): Prisma.TeachingAssignmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get gradingScheme(): Prisma.GradingSchemeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get gradeBoundary(): Prisma.GradeBoundaryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get gradeEntry(): Prisma.GradeEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get gradeCorrection(): Prisma.GradeCorrectionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get attendanceRecord(): Prisma.AttendanceRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get reportCard(): Prisma.ReportCardDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get transcript(): Prisma.TranscriptDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get promotionRecord(): Prisma.PromotionRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
