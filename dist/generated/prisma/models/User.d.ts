import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    phone: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    isActive: boolean | null;
    lastLoginAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    phone: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    isActive: boolean | null;
    lastLoginAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    phone: number;
    passwordHash: number;
    role: number;
    isActive: number;
    lastLoginAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    phone?: true;
    passwordHash?: true;
    role?: true;
    isActive?: true;
    lastLoginAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    phone?: true;
    passwordHash?: true;
    role?: true;
    isActive?: true;
    lastLoginAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    phone?: true;
    passwordHash?: true;
    role?: true;
    isActive?: true;
    lastLoginAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    phone: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive: boolean;
    lastLoginAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    staffProfile?: Prisma.XOR<Prisma.StaffProfileNullableScalarRelationFilter, Prisma.StaffProfileWhereInput> | null;
    studentProfile?: Prisma.XOR<Prisma.StudentProfileNullableScalarRelationFilter, Prisma.StudentProfileWhereInput> | null;
    parentProfile?: Prisma.XOR<Prisma.ParentProfileNullableScalarRelationFilter, Prisma.ParentProfileWhereInput> | null;
    refreshTokens?: Prisma.RefreshTokenListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    staffProfile?: Prisma.StaffProfileOrderByWithRelationInput;
    studentProfile?: Prisma.StudentProfileOrderByWithRelationInput;
    parentProfile?: Prisma.ParentProfileOrderByWithRelationInput;
    refreshTokens?: Prisma.RefreshTokenOrderByRelationAggregateInput;
    auditLogs?: Prisma.AuditLogOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    phone?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    passwordHash?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    staffProfile?: Prisma.XOR<Prisma.StaffProfileNullableScalarRelationFilter, Prisma.StaffProfileWhereInput> | null;
    studentProfile?: Prisma.XOR<Prisma.StudentProfileNullableScalarRelationFilter, Prisma.StudentProfileWhereInput> | null;
    parentProfile?: Prisma.XOR<Prisma.ParentProfileNullableScalarRelationFilter, Prisma.ParentProfileWhereInput> | null;
    refreshTokens?: Prisma.RefreshTokenListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
}, "id" | "email" | "phone">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staffProfile?: Prisma.StaffProfileCreateNestedOneWithoutUserInput;
    studentProfile?: Prisma.StudentProfileCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileCreateNestedOneWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staffProfile?: Prisma.StaffProfileUncheckedCreateNestedOneWithoutUserInput;
    studentProfile?: Prisma.StudentProfileUncheckedCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileUncheckedCreateNestedOneWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staffProfile?: Prisma.StaffProfileUpdateOneWithoutUserNestedInput;
    studentProfile?: Prisma.StudentProfileUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUpdateOneWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staffProfile?: Prisma.StaffProfileUncheckedUpdateOneWithoutUserNestedInput;
    studentProfile?: Prisma.StudentProfileUncheckedUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUncheckedUpdateOneWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokensInput;
    upsert?: Prisma.UserUpsertWithoutRefreshTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRefreshTokensInput, Prisma.UserUpdateWithoutRefreshTokensInput>, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
};
export type UserCreateNestedOneWithoutStaffProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStaffProfileInput, Prisma.UserUncheckedCreateWithoutStaffProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStaffProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutStaffProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStaffProfileInput, Prisma.UserUncheckedCreateWithoutStaffProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStaffProfileInput;
    upsert?: Prisma.UserUpsertWithoutStaffProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutStaffProfileInput, Prisma.UserUpdateWithoutStaffProfileInput>, Prisma.UserUncheckedUpdateWithoutStaffProfileInput>;
};
export type UserCreateNestedOneWithoutStudentProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStudentProfileInput, Prisma.UserUncheckedCreateWithoutStudentProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStudentProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutStudentProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStudentProfileInput, Prisma.UserUncheckedCreateWithoutStudentProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStudentProfileInput;
    upsert?: Prisma.UserUpsertWithoutStudentProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutStudentProfileInput, Prisma.UserUpdateWithoutStudentProfileInput>, Prisma.UserUncheckedUpdateWithoutStudentProfileInput>;
};
export type UserCreateNestedOneWithoutParentProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutParentProfileInput, Prisma.UserUncheckedCreateWithoutParentProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutParentProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutParentProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutParentProfileInput, Prisma.UserUncheckedCreateWithoutParentProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutParentProfileInput;
    upsert?: Prisma.UserUpsertWithoutParentProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutParentProfileInput, Prisma.UserUpdateWithoutParentProfileInput>, Prisma.UserUncheckedUpdateWithoutParentProfileInput>;
};
export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput;
    upsert?: Prisma.UserUpsertWithoutAuditLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.UserUpdateWithoutAuditLogsInput>, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
};
export type UserCreateWithoutRefreshTokensInput = {
    id?: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staffProfile?: Prisma.StaffProfileCreateNestedOneWithoutUserInput;
    studentProfile?: Prisma.StudentProfileCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileCreateNestedOneWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staffProfile?: Prisma.StaffProfileUncheckedCreateNestedOneWithoutUserInput;
    studentProfile?: Prisma.StudentProfileUncheckedCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileUncheckedCreateNestedOneWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
};
export type UserUpsertWithoutRefreshTokensInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokensInput, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokensInput, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
};
export type UserUpdateWithoutRefreshTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staffProfile?: Prisma.StaffProfileUpdateOneWithoutUserNestedInput;
    studentProfile?: Prisma.StudentProfileUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUpdateOneWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staffProfile?: Prisma.StaffProfileUncheckedUpdateOneWithoutUserNestedInput;
    studentProfile?: Prisma.StudentProfileUncheckedUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUncheckedUpdateOneWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutStaffProfileInput = {
    id?: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileCreateNestedOneWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutStaffProfileInput = {
    id?: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileUncheckedCreateNestedOneWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutStaffProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutStaffProfileInput, Prisma.UserUncheckedCreateWithoutStaffProfileInput>;
};
export type UserUpsertWithoutStaffProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutStaffProfileInput, Prisma.UserUncheckedUpdateWithoutStaffProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutStaffProfileInput, Prisma.UserUncheckedCreateWithoutStaffProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutStaffProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutStaffProfileInput, Prisma.UserUncheckedUpdateWithoutStaffProfileInput>;
};
export type UserUpdateWithoutStaffProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUpdateOneWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutStaffProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUncheckedUpdateOneWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutStudentProfileInput = {
    id?: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staffProfile?: Prisma.StaffProfileCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileCreateNestedOneWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutStudentProfileInput = {
    id?: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staffProfile?: Prisma.StaffProfileUncheckedCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileUncheckedCreateNestedOneWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutStudentProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutStudentProfileInput, Prisma.UserUncheckedCreateWithoutStudentProfileInput>;
};
export type UserUpsertWithoutStudentProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutStudentProfileInput, Prisma.UserUncheckedUpdateWithoutStudentProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutStudentProfileInput, Prisma.UserUncheckedCreateWithoutStudentProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutStudentProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutStudentProfileInput, Prisma.UserUncheckedUpdateWithoutStudentProfileInput>;
};
export type UserUpdateWithoutStudentProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staffProfile?: Prisma.StaffProfileUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUpdateOneWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutStudentProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staffProfile?: Prisma.StaffProfileUncheckedUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUncheckedUpdateOneWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutParentProfileInput = {
    id?: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staffProfile?: Prisma.StaffProfileCreateNestedOneWithoutUserInput;
    studentProfile?: Prisma.StudentProfileCreateNestedOneWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutParentProfileInput = {
    id?: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staffProfile?: Prisma.StaffProfileUncheckedCreateNestedOneWithoutUserInput;
    studentProfile?: Prisma.StudentProfileUncheckedCreateNestedOneWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutParentProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutParentProfileInput, Prisma.UserUncheckedCreateWithoutParentProfileInput>;
};
export type UserUpsertWithoutParentProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutParentProfileInput, Prisma.UserUncheckedUpdateWithoutParentProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutParentProfileInput, Prisma.UserUncheckedCreateWithoutParentProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutParentProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutParentProfileInput, Prisma.UserUncheckedUpdateWithoutParentProfileInput>;
};
export type UserUpdateWithoutParentProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staffProfile?: Prisma.StaffProfileUpdateOneWithoutUserNestedInput;
    studentProfile?: Prisma.StudentProfileUpdateOneWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutParentProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staffProfile?: Prisma.StaffProfileUncheckedUpdateOneWithoutUserNestedInput;
    studentProfile?: Prisma.StudentProfileUncheckedUpdateOneWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAuditLogsInput = {
    id?: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staffProfile?: Prisma.StaffProfileCreateNestedOneWithoutUserInput;
    studentProfile?: Prisma.StudentProfileCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileCreateNestedOneWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staffProfile?: Prisma.StaffProfileUncheckedCreateNestedOneWithoutUserInput;
    studentProfile?: Prisma.StudentProfileUncheckedCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileUncheckedCreateNestedOneWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
};
export type UserUpsertWithoutAuditLogsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
};
export type UserUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staffProfile?: Prisma.StaffProfileUpdateOneWithoutUserNestedInput;
    studentProfile?: Prisma.StudentProfileUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUpdateOneWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staffProfile?: Prisma.StaffProfileUncheckedUpdateOneWithoutUserNestedInput;
    studentProfile?: Prisma.StudentProfileUncheckedUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUncheckedUpdateOneWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    refreshTokens: number;
    auditLogs: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs;
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefreshTokenWhereInput;
};
export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    staffProfile?: boolean | Prisma.User$staffProfileArgs<ExtArgs>;
    studentProfile?: boolean | Prisma.User$studentProfileArgs<ExtArgs>;
    parentProfile?: boolean | Prisma.User$parentProfileArgs<ExtArgs>;
    refreshTokens?: boolean | Prisma.User$refreshTokensArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "phone" | "passwordHash" | "role" | "isActive" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    staffProfile?: boolean | Prisma.User$staffProfileArgs<ExtArgs>;
    studentProfile?: boolean | Prisma.User$studentProfileArgs<ExtArgs>;
    parentProfile?: boolean | Prisma.User$parentProfileArgs<ExtArgs>;
    refreshTokens?: boolean | Prisma.User$refreshTokensArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        staffProfile: Prisma.$StaffProfilePayload<ExtArgs> | null;
        studentProfile: Prisma.$StudentProfilePayload<ExtArgs> | null;
        parentProfile: Prisma.$ParentProfilePayload<ExtArgs> | null;
        refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[];
        auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        phone: string | null;
        passwordHash: string;
        role: $Enums.Role;
        isActive: boolean;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    staffProfile<T extends Prisma.User$staffProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$staffProfileArgs<ExtArgs>>): Prisma.Prisma__StaffProfileClient<runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    studentProfile<T extends Prisma.User$studentProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$studentProfileArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    parentProfile<T extends Prisma.User$parentProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$parentProfileArgs<ExtArgs>>): Prisma.Prisma__ParentProfileClient<runtime.Types.Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    refreshTokens<T extends Prisma.User$refreshTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditLogs<T extends Prisma.User$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly isActive: Prisma.FieldRef<"User", 'Boolean'>;
    readonly lastLoginAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$staffProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffProfileSelect<ExtArgs> | null;
    omit?: Prisma.StaffProfileOmit<ExtArgs> | null;
    include?: Prisma.StaffProfileInclude<ExtArgs> | null;
    where?: Prisma.StaffProfileWhereInput;
};
export type User$studentProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelect<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    include?: Prisma.StudentProfileInclude<ExtArgs> | null;
    where?: Prisma.StudentProfileWhereInput;
};
export type User$parentProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentProfileSelect<ExtArgs> | null;
    omit?: Prisma.ParentProfileOmit<ExtArgs> | null;
    include?: Prisma.ParentProfileInclude<ExtArgs> | null;
    where?: Prisma.ParentProfileWhereInput;
};
export type User$refreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.RefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.RefreshTokenInclude<ExtArgs> | null;
    where?: Prisma.RefreshTokenWhereInput;
    orderBy?: Prisma.RefreshTokenOrderByWithRelationInput | Prisma.RefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.RefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefreshTokenScalarFieldEnum | Prisma.RefreshTokenScalarFieldEnum[];
};
export type User$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditLogScalarFieldEnum | Prisma.AuditLogScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
