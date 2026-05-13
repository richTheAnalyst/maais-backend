import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly RefreshToken: "RefreshToken";
    readonly StaffProfile: "StaffProfile";
    readonly StudentProfile: "StudentProfile";
    readonly ParentProfile: "ParentProfile";
    readonly StudentParentLink: "StudentParentLink";
    readonly AcademicYear: "AcademicYear";
    readonly Term: "Term";
    readonly Department: "Department";
    readonly Subject: "Subject";
    readonly ClassSection: "ClassSection";
    readonly TeachingAssignment: "TeachingAssignment";
    readonly GradingScheme: "GradingScheme";
    readonly GradeBoundary: "GradeBoundary";
    readonly GradeEntry: "GradeEntry";
    readonly GradeCorrection: "GradeCorrection";
    readonly AttendanceRecord: "AttendanceRecord";
    readonly ReportCard: "ReportCard";
    readonly Transcript: "Transcript";
    readonly Notification: "Notification";
    readonly PromotionRecord: "PromotionRecord";
    readonly AuditLog: "AuditLog";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "refreshToken" | "staffProfile" | "studentProfile" | "parentProfile" | "studentParentLink" | "academicYear" | "term" | "department" | "subject" | "classSection" | "teachingAssignment" | "gradingScheme" | "gradeBoundary" | "gradeEntry" | "gradeCorrection" | "attendanceRecord" | "reportCard" | "transcript" | "notification" | "promotionRecord" | "auditLog";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        RefreshToken: {
            payload: Prisma.$RefreshTokenPayload<ExtArgs>;
            fields: Prisma.RefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                delete: {
                    args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                update: {
                    args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                upsert: {
                    args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefreshToken>;
                };
                groupBy: {
                    args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        StaffProfile: {
            payload: Prisma.$StaffProfilePayload<ExtArgs>;
            fields: Prisma.StaffProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StaffProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StaffProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffProfilePayload>;
                };
                findFirst: {
                    args: Prisma.StaffProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StaffProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffProfilePayload>;
                };
                findMany: {
                    args: Prisma.StaffProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffProfilePayload>[];
                };
                create: {
                    args: Prisma.StaffProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffProfilePayload>;
                };
                createMany: {
                    args: Prisma.StaffProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StaffProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffProfilePayload>[];
                };
                delete: {
                    args: Prisma.StaffProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffProfilePayload>;
                };
                update: {
                    args: Prisma.StaffProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.StaffProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StaffProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StaffProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffProfilePayload>[];
                };
                upsert: {
                    args: Prisma.StaffProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffProfilePayload>;
                };
                aggregate: {
                    args: Prisma.StaffProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStaffProfile>;
                };
                groupBy: {
                    args: Prisma.StaffProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StaffProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StaffProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StaffProfileCountAggregateOutputType> | number;
                };
            };
        };
        StudentProfile: {
            payload: Prisma.$StudentProfilePayload<ExtArgs>;
            fields: Prisma.StudentProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                findFirst: {
                    args: Prisma.StudentProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                findMany: {
                    args: Prisma.StudentProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>[];
                };
                create: {
                    args: Prisma.StudentProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                createMany: {
                    args: Prisma.StudentProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>[];
                };
                delete: {
                    args: Prisma.StudentProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                update: {
                    args: Prisma.StudentProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.StudentProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>[];
                };
                upsert: {
                    args: Prisma.StudentProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                aggregate: {
                    args: Prisma.StudentProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudentProfile>;
                };
                groupBy: {
                    args: Prisma.StudentProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentProfileCountAggregateOutputType> | number;
                };
            };
        };
        ParentProfile: {
            payload: Prisma.$ParentProfilePayload<ExtArgs>;
            fields: Prisma.ParentProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParentProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParentProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>;
                };
                findFirst: {
                    args: Prisma.ParentProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParentProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>;
                };
                findMany: {
                    args: Prisma.ParentProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>[];
                };
                create: {
                    args: Prisma.ParentProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>;
                };
                createMany: {
                    args: Prisma.ParentProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ParentProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>[];
                };
                delete: {
                    args: Prisma.ParentProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>;
                };
                update: {
                    args: Prisma.ParentProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.ParentProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParentProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ParentProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>[];
                };
                upsert: {
                    args: Prisma.ParentProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>;
                };
                aggregate: {
                    args: Prisma.ParentProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParentProfile>;
                };
                groupBy: {
                    args: Prisma.ParentProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParentProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ParentProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParentProfileCountAggregateOutputType> | number;
                };
            };
        };
        StudentParentLink: {
            payload: Prisma.$StudentParentLinkPayload<ExtArgs>;
            fields: Prisma.StudentParentLinkFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentParentLinkFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentParentLinkPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentParentLinkFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentParentLinkPayload>;
                };
                findFirst: {
                    args: Prisma.StudentParentLinkFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentParentLinkPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentParentLinkFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentParentLinkPayload>;
                };
                findMany: {
                    args: Prisma.StudentParentLinkFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentParentLinkPayload>[];
                };
                create: {
                    args: Prisma.StudentParentLinkCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentParentLinkPayload>;
                };
                createMany: {
                    args: Prisma.StudentParentLinkCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentParentLinkCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentParentLinkPayload>[];
                };
                delete: {
                    args: Prisma.StudentParentLinkDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentParentLinkPayload>;
                };
                update: {
                    args: Prisma.StudentParentLinkUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentParentLinkPayload>;
                };
                deleteMany: {
                    args: Prisma.StudentParentLinkDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentParentLinkUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentParentLinkUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentParentLinkPayload>[];
                };
                upsert: {
                    args: Prisma.StudentParentLinkUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentParentLinkPayload>;
                };
                aggregate: {
                    args: Prisma.StudentParentLinkAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudentParentLink>;
                };
                groupBy: {
                    args: Prisma.StudentParentLinkGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentParentLinkGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentParentLinkCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentParentLinkCountAggregateOutputType> | number;
                };
            };
        };
        AcademicYear: {
            payload: Prisma.$AcademicYearPayload<ExtArgs>;
            fields: Prisma.AcademicYearFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AcademicYearFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AcademicYearFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                findFirst: {
                    args: Prisma.AcademicYearFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AcademicYearFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                findMany: {
                    args: Prisma.AcademicYearFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>[];
                };
                create: {
                    args: Prisma.AcademicYearCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                createMany: {
                    args: Prisma.AcademicYearCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AcademicYearCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>[];
                };
                delete: {
                    args: Prisma.AcademicYearDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                update: {
                    args: Prisma.AcademicYearUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                deleteMany: {
                    args: Prisma.AcademicYearDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AcademicYearUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AcademicYearUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>[];
                };
                upsert: {
                    args: Prisma.AcademicYearUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                aggregate: {
                    args: Prisma.AcademicYearAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAcademicYear>;
                };
                groupBy: {
                    args: Prisma.AcademicYearGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AcademicYearGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AcademicYearCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AcademicYearCountAggregateOutputType> | number;
                };
            };
        };
        Term: {
            payload: Prisma.$TermPayload<ExtArgs>;
            fields: Prisma.TermFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TermFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TermPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TermFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TermPayload>;
                };
                findFirst: {
                    args: Prisma.TermFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TermPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TermFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TermPayload>;
                };
                findMany: {
                    args: Prisma.TermFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TermPayload>[];
                };
                create: {
                    args: Prisma.TermCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TermPayload>;
                };
                createMany: {
                    args: Prisma.TermCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TermCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TermPayload>[];
                };
                delete: {
                    args: Prisma.TermDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TermPayload>;
                };
                update: {
                    args: Prisma.TermUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TermPayload>;
                };
                deleteMany: {
                    args: Prisma.TermDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TermUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TermUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TermPayload>[];
                };
                upsert: {
                    args: Prisma.TermUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TermPayload>;
                };
                aggregate: {
                    args: Prisma.TermAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTerm>;
                };
                groupBy: {
                    args: Prisma.TermGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TermGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TermCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TermCountAggregateOutputType> | number;
                };
            };
        };
        Department: {
            payload: Prisma.$DepartmentPayload<ExtArgs>;
            fields: Prisma.DepartmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DepartmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                findFirst: {
                    args: Prisma.DepartmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                findMany: {
                    args: Prisma.DepartmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>[];
                };
                create: {
                    args: Prisma.DepartmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                createMany: {
                    args: Prisma.DepartmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>[];
                };
                delete: {
                    args: Prisma.DepartmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                update: {
                    args: Prisma.DepartmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                deleteMany: {
                    args: Prisma.DepartmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DepartmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>[];
                };
                upsert: {
                    args: Prisma.DepartmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                aggregate: {
                    args: Prisma.DepartmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDepartment>;
                };
                groupBy: {
                    args: Prisma.DepartmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DepartmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DepartmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DepartmentCountAggregateOutputType> | number;
                };
            };
        };
        Subject: {
            payload: Prisma.$SubjectPayload<ExtArgs>;
            fields: Prisma.SubjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                findFirst: {
                    args: Prisma.SubjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                findMany: {
                    args: Prisma.SubjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>[];
                };
                create: {
                    args: Prisma.SubjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                createMany: {
                    args: Prisma.SubjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>[];
                };
                delete: {
                    args: Prisma.SubjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                update: {
                    args: Prisma.SubjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                deleteMany: {
                    args: Prisma.SubjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>[];
                };
                upsert: {
                    args: Prisma.SubjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                aggregate: {
                    args: Prisma.SubjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubject>;
                };
                groupBy: {
                    args: Prisma.SubjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectCountAggregateOutputType> | number;
                };
            };
        };
        ClassSection: {
            payload: Prisma.$ClassSectionPayload<ExtArgs>;
            fields: Prisma.ClassSectionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClassSectionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSectionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClassSectionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSectionPayload>;
                };
                findFirst: {
                    args: Prisma.ClassSectionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSectionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClassSectionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSectionPayload>;
                };
                findMany: {
                    args: Prisma.ClassSectionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSectionPayload>[];
                };
                create: {
                    args: Prisma.ClassSectionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSectionPayload>;
                };
                createMany: {
                    args: Prisma.ClassSectionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClassSectionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSectionPayload>[];
                };
                delete: {
                    args: Prisma.ClassSectionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSectionPayload>;
                };
                update: {
                    args: Prisma.ClassSectionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSectionPayload>;
                };
                deleteMany: {
                    args: Prisma.ClassSectionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClassSectionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClassSectionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSectionPayload>[];
                };
                upsert: {
                    args: Prisma.ClassSectionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSectionPayload>;
                };
                aggregate: {
                    args: Prisma.ClassSectionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClassSection>;
                };
                groupBy: {
                    args: Prisma.ClassSectionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassSectionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClassSectionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassSectionCountAggregateOutputType> | number;
                };
            };
        };
        TeachingAssignment: {
            payload: Prisma.$TeachingAssignmentPayload<ExtArgs>;
            fields: Prisma.TeachingAssignmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TeachingAssignmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TeachingAssignmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>;
                };
                findFirst: {
                    args: Prisma.TeachingAssignmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TeachingAssignmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>;
                };
                findMany: {
                    args: Prisma.TeachingAssignmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>[];
                };
                create: {
                    args: Prisma.TeachingAssignmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>;
                };
                createMany: {
                    args: Prisma.TeachingAssignmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TeachingAssignmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>[];
                };
                delete: {
                    args: Prisma.TeachingAssignmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>;
                };
                update: {
                    args: Prisma.TeachingAssignmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>;
                };
                deleteMany: {
                    args: Prisma.TeachingAssignmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TeachingAssignmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TeachingAssignmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>[];
                };
                upsert: {
                    args: Prisma.TeachingAssignmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>;
                };
                aggregate: {
                    args: Prisma.TeachingAssignmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeachingAssignment>;
                };
                groupBy: {
                    args: Prisma.TeachingAssignmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeachingAssignmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TeachingAssignmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeachingAssignmentCountAggregateOutputType> | number;
                };
            };
        };
        GradingScheme: {
            payload: Prisma.$GradingSchemePayload<ExtArgs>;
            fields: Prisma.GradingSchemeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GradingSchemeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradingSchemePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GradingSchemeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradingSchemePayload>;
                };
                findFirst: {
                    args: Prisma.GradingSchemeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradingSchemePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GradingSchemeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradingSchemePayload>;
                };
                findMany: {
                    args: Prisma.GradingSchemeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradingSchemePayload>[];
                };
                create: {
                    args: Prisma.GradingSchemeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradingSchemePayload>;
                };
                createMany: {
                    args: Prisma.GradingSchemeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GradingSchemeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradingSchemePayload>[];
                };
                delete: {
                    args: Prisma.GradingSchemeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradingSchemePayload>;
                };
                update: {
                    args: Prisma.GradingSchemeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradingSchemePayload>;
                };
                deleteMany: {
                    args: Prisma.GradingSchemeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GradingSchemeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GradingSchemeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradingSchemePayload>[];
                };
                upsert: {
                    args: Prisma.GradingSchemeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradingSchemePayload>;
                };
                aggregate: {
                    args: Prisma.GradingSchemeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGradingScheme>;
                };
                groupBy: {
                    args: Prisma.GradingSchemeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GradingSchemeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GradingSchemeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GradingSchemeCountAggregateOutputType> | number;
                };
            };
        };
        GradeBoundary: {
            payload: Prisma.$GradeBoundaryPayload<ExtArgs>;
            fields: Prisma.GradeBoundaryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GradeBoundaryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeBoundaryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GradeBoundaryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeBoundaryPayload>;
                };
                findFirst: {
                    args: Prisma.GradeBoundaryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeBoundaryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GradeBoundaryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeBoundaryPayload>;
                };
                findMany: {
                    args: Prisma.GradeBoundaryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeBoundaryPayload>[];
                };
                create: {
                    args: Prisma.GradeBoundaryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeBoundaryPayload>;
                };
                createMany: {
                    args: Prisma.GradeBoundaryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GradeBoundaryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeBoundaryPayload>[];
                };
                delete: {
                    args: Prisma.GradeBoundaryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeBoundaryPayload>;
                };
                update: {
                    args: Prisma.GradeBoundaryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeBoundaryPayload>;
                };
                deleteMany: {
                    args: Prisma.GradeBoundaryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GradeBoundaryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GradeBoundaryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeBoundaryPayload>[];
                };
                upsert: {
                    args: Prisma.GradeBoundaryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeBoundaryPayload>;
                };
                aggregate: {
                    args: Prisma.GradeBoundaryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGradeBoundary>;
                };
                groupBy: {
                    args: Prisma.GradeBoundaryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GradeBoundaryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GradeBoundaryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GradeBoundaryCountAggregateOutputType> | number;
                };
            };
        };
        GradeEntry: {
            payload: Prisma.$GradeEntryPayload<ExtArgs>;
            fields: Prisma.GradeEntryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GradeEntryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeEntryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GradeEntryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeEntryPayload>;
                };
                findFirst: {
                    args: Prisma.GradeEntryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeEntryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GradeEntryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeEntryPayload>;
                };
                findMany: {
                    args: Prisma.GradeEntryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeEntryPayload>[];
                };
                create: {
                    args: Prisma.GradeEntryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeEntryPayload>;
                };
                createMany: {
                    args: Prisma.GradeEntryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GradeEntryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeEntryPayload>[];
                };
                delete: {
                    args: Prisma.GradeEntryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeEntryPayload>;
                };
                update: {
                    args: Prisma.GradeEntryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeEntryPayload>;
                };
                deleteMany: {
                    args: Prisma.GradeEntryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GradeEntryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GradeEntryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeEntryPayload>[];
                };
                upsert: {
                    args: Prisma.GradeEntryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeEntryPayload>;
                };
                aggregate: {
                    args: Prisma.GradeEntryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGradeEntry>;
                };
                groupBy: {
                    args: Prisma.GradeEntryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GradeEntryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GradeEntryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GradeEntryCountAggregateOutputType> | number;
                };
            };
        };
        GradeCorrection: {
            payload: Prisma.$GradeCorrectionPayload<ExtArgs>;
            fields: Prisma.GradeCorrectionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GradeCorrectionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeCorrectionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GradeCorrectionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeCorrectionPayload>;
                };
                findFirst: {
                    args: Prisma.GradeCorrectionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeCorrectionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GradeCorrectionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeCorrectionPayload>;
                };
                findMany: {
                    args: Prisma.GradeCorrectionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeCorrectionPayload>[];
                };
                create: {
                    args: Prisma.GradeCorrectionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeCorrectionPayload>;
                };
                createMany: {
                    args: Prisma.GradeCorrectionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GradeCorrectionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeCorrectionPayload>[];
                };
                delete: {
                    args: Prisma.GradeCorrectionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeCorrectionPayload>;
                };
                update: {
                    args: Prisma.GradeCorrectionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeCorrectionPayload>;
                };
                deleteMany: {
                    args: Prisma.GradeCorrectionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GradeCorrectionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GradeCorrectionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeCorrectionPayload>[];
                };
                upsert: {
                    args: Prisma.GradeCorrectionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeCorrectionPayload>;
                };
                aggregate: {
                    args: Prisma.GradeCorrectionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGradeCorrection>;
                };
                groupBy: {
                    args: Prisma.GradeCorrectionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GradeCorrectionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GradeCorrectionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GradeCorrectionCountAggregateOutputType> | number;
                };
            };
        };
        AttendanceRecord: {
            payload: Prisma.$AttendanceRecordPayload<ExtArgs>;
            fields: Prisma.AttendanceRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AttendanceRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AttendanceRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>;
                };
                findFirst: {
                    args: Prisma.AttendanceRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AttendanceRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>;
                };
                findMany: {
                    args: Prisma.AttendanceRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[];
                };
                create: {
                    args: Prisma.AttendanceRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>;
                };
                createMany: {
                    args: Prisma.AttendanceRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AttendanceRecordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[];
                };
                delete: {
                    args: Prisma.AttendanceRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>;
                };
                update: {
                    args: Prisma.AttendanceRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.AttendanceRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AttendanceRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AttendanceRecordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[];
                };
                upsert: {
                    args: Prisma.AttendanceRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>;
                };
                aggregate: {
                    args: Prisma.AttendanceRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAttendanceRecord>;
                };
                groupBy: {
                    args: Prisma.AttendanceRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AttendanceRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceRecordCountAggregateOutputType> | number;
                };
            };
        };
        ReportCard: {
            payload: Prisma.$ReportCardPayload<ExtArgs>;
            fields: Prisma.ReportCardFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReportCardFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportCardPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReportCardFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportCardPayload>;
                };
                findFirst: {
                    args: Prisma.ReportCardFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportCardPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReportCardFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportCardPayload>;
                };
                findMany: {
                    args: Prisma.ReportCardFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportCardPayload>[];
                };
                create: {
                    args: Prisma.ReportCardCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportCardPayload>;
                };
                createMany: {
                    args: Prisma.ReportCardCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReportCardCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportCardPayload>[];
                };
                delete: {
                    args: Prisma.ReportCardDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportCardPayload>;
                };
                update: {
                    args: Prisma.ReportCardUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportCardPayload>;
                };
                deleteMany: {
                    args: Prisma.ReportCardDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReportCardUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReportCardUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportCardPayload>[];
                };
                upsert: {
                    args: Prisma.ReportCardUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportCardPayload>;
                };
                aggregate: {
                    args: Prisma.ReportCardAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReportCard>;
                };
                groupBy: {
                    args: Prisma.ReportCardGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReportCardGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReportCardCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReportCardCountAggregateOutputType> | number;
                };
            };
        };
        Transcript: {
            payload: Prisma.$TranscriptPayload<ExtArgs>;
            fields: Prisma.TranscriptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TranscriptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TranscriptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>;
                };
                findFirst: {
                    args: Prisma.TranscriptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TranscriptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>;
                };
                findMany: {
                    args: Prisma.TranscriptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>[];
                };
                create: {
                    args: Prisma.TranscriptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>;
                };
                createMany: {
                    args: Prisma.TranscriptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TranscriptCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>[];
                };
                delete: {
                    args: Prisma.TranscriptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>;
                };
                update: {
                    args: Prisma.TranscriptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>;
                };
                deleteMany: {
                    args: Prisma.TranscriptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TranscriptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TranscriptUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>[];
                };
                upsert: {
                    args: Prisma.TranscriptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptPayload>;
                };
                aggregate: {
                    args: Prisma.TranscriptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTranscript>;
                };
                groupBy: {
                    args: Prisma.TranscriptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TranscriptGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TranscriptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TranscriptCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        PromotionRecord: {
            payload: Prisma.$PromotionRecordPayload<ExtArgs>;
            fields: Prisma.PromotionRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PromotionRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PromotionRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionRecordPayload>;
                };
                findFirst: {
                    args: Prisma.PromotionRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PromotionRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionRecordPayload>;
                };
                findMany: {
                    args: Prisma.PromotionRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionRecordPayload>[];
                };
                create: {
                    args: Prisma.PromotionRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionRecordPayload>;
                };
                createMany: {
                    args: Prisma.PromotionRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PromotionRecordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionRecordPayload>[];
                };
                delete: {
                    args: Prisma.PromotionRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionRecordPayload>;
                };
                update: {
                    args: Prisma.PromotionRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.PromotionRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PromotionRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PromotionRecordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionRecordPayload>[];
                };
                upsert: {
                    args: Prisma.PromotionRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionRecordPayload>;
                };
                aggregate: {
                    args: Prisma.PromotionRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePromotionRecord>;
                };
                groupBy: {
                    args: Prisma.PromotionRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromotionRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PromotionRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromotionRecordCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly phone: "phone";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly isActive: "isActive";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly token: "token";
    readonly userId: "userId";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const StaffProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly staffId: "staffId";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly middleName: "middleName";
    readonly gender: "gender";
    readonly dateOfBirth: "dateOfBirth";
    readonly phone: "phone";
    readonly photoUrl: "photoUrl";
    readonly hiredAt: "hiredAt";
    readonly departmentId: "departmentId";
};
export type StaffProfileScalarFieldEnum = (typeof StaffProfileScalarFieldEnum)[keyof typeof StaffProfileScalarFieldEnum];
export declare const StudentProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly indexNumber: "indexNumber";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly middleName: "middleName";
    readonly gender: "gender";
    readonly dateOfBirth: "dateOfBirth";
    readonly photoUrl: "photoUrl";
    readonly admissionDate: "admissionDate";
    readonly currentClassId: "currentClassId";
    readonly archivedAt: "archivedAt";
};
export type StudentProfileScalarFieldEnum = (typeof StudentProfileScalarFieldEnum)[keyof typeof StudentProfileScalarFieldEnum];
export declare const ParentProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly phone: "phone";
    readonly email: "email";
    readonly occupation: "occupation";
};
export type ParentProfileScalarFieldEnum = (typeof ParentProfileScalarFieldEnum)[keyof typeof ParentProfileScalarFieldEnum];
export declare const StudentParentLinkScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly parentId: "parentId";
    readonly relationship: "relationship";
    readonly isPrimary: "isPrimary";
};
export type StudentParentLinkScalarFieldEnum = (typeof StudentParentLinkScalarFieldEnum)[keyof typeof StudentParentLinkScalarFieldEnum];
export declare const AcademicYearScalarFieldEnum: {
    readonly id: "id";
    readonly label: "label";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
};
export type AcademicYearScalarFieldEnum = (typeof AcademicYearScalarFieldEnum)[keyof typeof AcademicYearScalarFieldEnum];
export declare const TermScalarFieldEnum: {
    readonly id: "id";
    readonly academicYearId: "academicYearId";
    readonly termNumber: "termNumber";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly isActive: "isActive";
    readonly isLocked: "isLocked";
};
export type TermScalarFieldEnum = (typeof TermScalarFieldEnum)[keyof typeof TermScalarFieldEnum];
export declare const DepartmentScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly description: "description";
    readonly createdAt: "createdAt";
};
export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum];
export declare const SubjectScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly type: "type";
    readonly departmentId: "departmentId";
    readonly description: "description";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
};
export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum];
export declare const ClassSectionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly level: "level";
    readonly capacity: "capacity";
    readonly classTeacherId: "classTeacherId";
};
export type ClassSectionScalarFieldEnum = (typeof ClassSectionScalarFieldEnum)[keyof typeof ClassSectionScalarFieldEnum];
export declare const TeachingAssignmentScalarFieldEnum: {
    readonly id: "id";
    readonly teacherId: "teacherId";
    readonly subjectId: "subjectId";
    readonly classSectionId: "classSectionId";
    readonly academicYearId: "academicYearId";
};
export type TeachingAssignmentScalarFieldEnum = (typeof TeachingAssignmentScalarFieldEnum)[keyof typeof TeachingAssignmentScalarFieldEnum];
export declare const GradingSchemeScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly isDefault: "isDefault";
};
export type GradingSchemeScalarFieldEnum = (typeof GradingSchemeScalarFieldEnum)[keyof typeof GradingSchemeScalarFieldEnum];
export declare const GradeBoundaryScalarFieldEnum: {
    readonly id: "id";
    readonly schemeId: "schemeId";
    readonly grade: "grade";
    readonly minScore: "minScore";
    readonly maxScore: "maxScore";
    readonly remark: "remark";
    readonly smartRemarks: "smartRemarks";
};
export type GradeBoundaryScalarFieldEnum = (typeof GradeBoundaryScalarFieldEnum)[keyof typeof GradeBoundaryScalarFieldEnum];
export declare const GradeEntryScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly subjectId: "subjectId";
    readonly termId: "termId";
    readonly classScore: "classScore";
    readonly examScore: "examScore";
    readonly totalScore: "totalScore";
    readonly grade: "grade";
    readonly remark: "remark";
    readonly position: "position";
    readonly hasObservation: "hasObservation";
    readonly observationText: "observationText";
    readonly isLocked: "isLocked";
    readonly lockedById: "lockedById";
    readonly lockedAt: "lockedAt";
    readonly submittedById: "submittedById";
    readonly submittedAt: "submittedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GradeEntryScalarFieldEnum = (typeof GradeEntryScalarFieldEnum)[keyof typeof GradeEntryScalarFieldEnum];
export declare const GradeCorrectionScalarFieldEnum: {
    readonly id: "id";
    readonly gradeEntryId: "gradeEntryId";
    readonly changedById: "changedById";
    readonly fieldChanged: "fieldChanged";
    readonly oldValue: "oldValue";
    readonly newValue: "newValue";
    readonly reason: "reason";
    readonly createdAt: "createdAt";
};
export type GradeCorrectionScalarFieldEnum = (typeof GradeCorrectionScalarFieldEnum)[keyof typeof GradeCorrectionScalarFieldEnum];
export declare const AttendanceRecordScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly termId: "termId";
    readonly daysPresent: "daysPresent";
    readonly daysAbsent: "daysAbsent";
    readonly totalDays: "totalDays";
};
export type AttendanceRecordScalarFieldEnum = (typeof AttendanceRecordScalarFieldEnum)[keyof typeof AttendanceRecordScalarFieldEnum];
export declare const ReportCardScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly termId: "termId";
    readonly documentType: "documentType";
    readonly systemHash: "systemHash";
    readonly qrCodeUrl: "qrCodeUrl";
    readonly verificationUrl: "verificationUrl";
    readonly totalScore: "totalScore";
    readonly averageScore: "averageScore";
    readonly classPosition: "classPosition";
    readonly classSize: "classSize";
    readonly conductGrade: "conductGrade";
    readonly headmasterRemarks: "headmasterRemarks";
    readonly classTeacherRemarks: "classTeacherRemarks";
    readonly pdfUrl: "pdfUrl";
    readonly generatedAt: "generatedAt";
    readonly releasedAt: "releasedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ReportCardScalarFieldEnum = (typeof ReportCardScalarFieldEnum)[keyof typeof ReportCardScalarFieldEnum];
export declare const TranscriptScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly indexNumber: "indexNumber";
    readonly systemHash: "systemHash";
    readonly qrCodeUrl: "qrCodeUrl";
    readonly verificationUrl: "verificationUrl";
    readonly pdfUrl: "pdfUrl";
    readonly purpose: "purpose";
    readonly requestedById: "requestedById";
    readonly generatedAt: "generatedAt";
};
export type TranscriptScalarFieldEnum = (typeof TranscriptScalarFieldEnum)[keyof typeof TranscriptScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly title: "title";
    readonly body: "body";
    readonly channel: "channel";
    readonly isRead: "isRead";
    readonly deliveredAt: "deliveredAt";
    readonly failedAt: "failedAt";
    readonly errorMsg: "errorMsg";
    readonly createdAt: "createdAt";
    readonly createdById: "createdById";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const PromotionRecordScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly academicYearId: "academicYearId";
    readonly fromClass: "fromClass";
    readonly toClass: "toClass";
    readonly status: "status";
    readonly notes: "notes";
    readonly performedById: "performedById";
    readonly performedAt: "performedAt";
};
export type PromotionRecordScalarFieldEnum = (typeof PromotionRecordScalarFieldEnum)[keyof typeof PromotionRecordScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly action: "action";
    readonly entity: "entity";
    readonly entityId: "entityId";
    readonly payload: "payload";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>;
export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>;
export type EnumTermNumberFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TermNumber'>;
export type ListEnumTermNumberFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TermNumber[]'>;
export type EnumSubjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubjectType'>;
export type ListEnumSubjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubjectType[]'>;
export type EnumClassLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClassLevel'>;
export type ListEnumClassLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClassLevel[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type EnumGradeRemarkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GradeRemark'>;
export type ListEnumGradeRemarkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GradeRemark[]'>;
export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>;
export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>;
export type EnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel'>;
export type ListEnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel[]'>;
export type EnumPromotionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromotionStatus'>;
export type ListEnumPromotionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromotionStatus[]'>;
export type EnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction'>;
export type ListEnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    refreshToken?: Prisma.RefreshTokenOmit;
    staffProfile?: Prisma.StaffProfileOmit;
    studentProfile?: Prisma.StudentProfileOmit;
    parentProfile?: Prisma.ParentProfileOmit;
    studentParentLink?: Prisma.StudentParentLinkOmit;
    academicYear?: Prisma.AcademicYearOmit;
    term?: Prisma.TermOmit;
    department?: Prisma.DepartmentOmit;
    subject?: Prisma.SubjectOmit;
    classSection?: Prisma.ClassSectionOmit;
    teachingAssignment?: Prisma.TeachingAssignmentOmit;
    gradingScheme?: Prisma.GradingSchemeOmit;
    gradeBoundary?: Prisma.GradeBoundaryOmit;
    gradeEntry?: Prisma.GradeEntryOmit;
    gradeCorrection?: Prisma.GradeCorrectionOmit;
    attendanceRecord?: Prisma.AttendanceRecordOmit;
    reportCard?: Prisma.ReportCardOmit;
    transcript?: Prisma.TranscriptOmit;
    notification?: Prisma.NotificationOmit;
    promotionRecord?: Prisma.PromotionRecordOmit;
    auditLog?: Prisma.AuditLogOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
