import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type StaffProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$StaffProfilePayload>;
export type AggregateStaffProfile = {
    _count: StaffProfileCountAggregateOutputType | null;
    _min: StaffProfileMinAggregateOutputType | null;
    _max: StaffProfileMaxAggregateOutputType | null;
};
export type StaffProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    staffId: string | null;
    firstName: string | null;
    lastName: string | null;
    middleName: string | null;
    gender: $Enums.Gender | null;
    dateOfBirth: Date | null;
    phone: string | null;
    photoUrl: string | null;
    hiredAt: Date | null;
    departmentId: string | null;
};
export type StaffProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    staffId: string | null;
    firstName: string | null;
    lastName: string | null;
    middleName: string | null;
    gender: $Enums.Gender | null;
    dateOfBirth: Date | null;
    phone: string | null;
    photoUrl: string | null;
    hiredAt: Date | null;
    departmentId: string | null;
};
export type StaffProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    staffId: number;
    firstName: number;
    lastName: number;
    middleName: number;
    gender: number;
    dateOfBirth: number;
    phone: number;
    photoUrl: number;
    hiredAt: number;
    departmentId: number;
    _all: number;
};
export type StaffProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    staffId?: true;
    firstName?: true;
    lastName?: true;
    middleName?: true;
    gender?: true;
    dateOfBirth?: true;
    phone?: true;
    photoUrl?: true;
    hiredAt?: true;
    departmentId?: true;
};
export type StaffProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    staffId?: true;
    firstName?: true;
    lastName?: true;
    middleName?: true;
    gender?: true;
    dateOfBirth?: true;
    phone?: true;
    photoUrl?: true;
    hiredAt?: true;
    departmentId?: true;
};
export type StaffProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    staffId?: true;
    firstName?: true;
    lastName?: true;
    middleName?: true;
    gender?: true;
    dateOfBirth?: true;
    phone?: true;
    photoUrl?: true;
    hiredAt?: true;
    departmentId?: true;
    _all?: true;
};
export type StaffProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StaffProfileWhereInput;
    orderBy?: Prisma.StaffProfileOrderByWithRelationInput | Prisma.StaffProfileOrderByWithRelationInput[];
    cursor?: Prisma.StaffProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StaffProfileCountAggregateInputType;
    _min?: StaffProfileMinAggregateInputType;
    _max?: StaffProfileMaxAggregateInputType;
};
export type GetStaffProfileAggregateType<T extends StaffProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateStaffProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStaffProfile[P]> : Prisma.GetScalarType<T[P], AggregateStaffProfile[P]>;
};
export type StaffProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StaffProfileWhereInput;
    orderBy?: Prisma.StaffProfileOrderByWithAggregationInput | Prisma.StaffProfileOrderByWithAggregationInput[];
    by: Prisma.StaffProfileScalarFieldEnum[] | Prisma.StaffProfileScalarFieldEnum;
    having?: Prisma.StaffProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StaffProfileCountAggregateInputType | true;
    _min?: StaffProfileMinAggregateInputType;
    _max?: StaffProfileMaxAggregateInputType;
};
export type StaffProfileGroupByOutputType = {
    id: string;
    userId: string;
    staffId: string;
    firstName: string;
    lastName: string;
    middleName: string | null;
    gender: $Enums.Gender;
    dateOfBirth: Date | null;
    phone: string | null;
    photoUrl: string | null;
    hiredAt: Date;
    departmentId: string | null;
    _count: StaffProfileCountAggregateOutputType | null;
    _min: StaffProfileMinAggregateOutputType | null;
    _max: StaffProfileMaxAggregateOutputType | null;
};
export type GetStaffProfileGroupByPayload<T extends StaffProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StaffProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StaffProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StaffProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StaffProfileGroupByOutputType[P]>;
}>>;
export type StaffProfileWhereInput = {
    AND?: Prisma.StaffProfileWhereInput | Prisma.StaffProfileWhereInput[];
    OR?: Prisma.StaffProfileWhereInput[];
    NOT?: Prisma.StaffProfileWhereInput | Prisma.StaffProfileWhereInput[];
    id?: Prisma.StringFilter<"StaffProfile"> | string;
    userId?: Prisma.StringFilter<"StaffProfile"> | string;
    staffId?: Prisma.StringFilter<"StaffProfile"> | string;
    firstName?: Prisma.StringFilter<"StaffProfile"> | string;
    lastName?: Prisma.StringFilter<"StaffProfile"> | string;
    middleName?: Prisma.StringNullableFilter<"StaffProfile"> | string | null;
    gender?: Prisma.EnumGenderFilter<"StaffProfile"> | $Enums.Gender;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"StaffProfile"> | Date | string | null;
    phone?: Prisma.StringNullableFilter<"StaffProfile"> | string | null;
    photoUrl?: Prisma.StringNullableFilter<"StaffProfile"> | string | null;
    hiredAt?: Prisma.DateTimeFilter<"StaffProfile"> | Date | string;
    departmentId?: Prisma.StringNullableFilter<"StaffProfile"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    department?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    teachingAssignments?: Prisma.TeachingAssignmentListRelationFilter;
    classTeacher?: Prisma.XOR<Prisma.ClassSectionNullableScalarRelationFilter, Prisma.ClassSectionWhereInput> | null;
};
export type StaffProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    middleName?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    photoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    hiredAt?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    department?: Prisma.DepartmentOrderByWithRelationInput;
    teachingAssignments?: Prisma.TeachingAssignmentOrderByRelationAggregateInput;
    classTeacher?: Prisma.ClassSectionOrderByWithRelationInput;
};
export type StaffProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    staffId?: string;
    AND?: Prisma.StaffProfileWhereInput | Prisma.StaffProfileWhereInput[];
    OR?: Prisma.StaffProfileWhereInput[];
    NOT?: Prisma.StaffProfileWhereInput | Prisma.StaffProfileWhereInput[];
    firstName?: Prisma.StringFilter<"StaffProfile"> | string;
    lastName?: Prisma.StringFilter<"StaffProfile"> | string;
    middleName?: Prisma.StringNullableFilter<"StaffProfile"> | string | null;
    gender?: Prisma.EnumGenderFilter<"StaffProfile"> | $Enums.Gender;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"StaffProfile"> | Date | string | null;
    phone?: Prisma.StringNullableFilter<"StaffProfile"> | string | null;
    photoUrl?: Prisma.StringNullableFilter<"StaffProfile"> | string | null;
    hiredAt?: Prisma.DateTimeFilter<"StaffProfile"> | Date | string;
    departmentId?: Prisma.StringNullableFilter<"StaffProfile"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    department?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    teachingAssignments?: Prisma.TeachingAssignmentListRelationFilter;
    classTeacher?: Prisma.XOR<Prisma.ClassSectionNullableScalarRelationFilter, Prisma.ClassSectionWhereInput> | null;
}, "id" | "userId" | "staffId">;
export type StaffProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    middleName?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    photoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    hiredAt?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.StaffProfileCountOrderByAggregateInput;
    _max?: Prisma.StaffProfileMaxOrderByAggregateInput;
    _min?: Prisma.StaffProfileMinOrderByAggregateInput;
};
export type StaffProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.StaffProfileScalarWhereWithAggregatesInput | Prisma.StaffProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.StaffProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StaffProfileScalarWhereWithAggregatesInput | Prisma.StaffProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StaffProfile"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"StaffProfile"> | string;
    staffId?: Prisma.StringWithAggregatesFilter<"StaffProfile"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"StaffProfile"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"StaffProfile"> | string;
    middleName?: Prisma.StringNullableWithAggregatesFilter<"StaffProfile"> | string | null;
    gender?: Prisma.EnumGenderWithAggregatesFilter<"StaffProfile"> | $Enums.Gender;
    dateOfBirth?: Prisma.DateTimeNullableWithAggregatesFilter<"StaffProfile"> | Date | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"StaffProfile"> | string | null;
    photoUrl?: Prisma.StringNullableWithAggregatesFilter<"StaffProfile"> | string | null;
    hiredAt?: Prisma.DateTimeWithAggregatesFilter<"StaffProfile"> | Date | string;
    departmentId?: Prisma.StringNullableWithAggregatesFilter<"StaffProfile"> | string | null;
};
export type StaffProfileCreateInput = {
    id?: string;
    staffId: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    phone?: string | null;
    photoUrl?: string | null;
    hiredAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutStaffProfileInput;
    department?: Prisma.DepartmentCreateNestedOneWithoutStaffInput;
    teachingAssignments?: Prisma.TeachingAssignmentCreateNestedManyWithoutTeacherInput;
    classTeacher?: Prisma.ClassSectionCreateNestedOneWithoutClassTeacherInput;
};
export type StaffProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    staffId: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    phone?: string | null;
    photoUrl?: string | null;
    hiredAt?: Date | string;
    departmentId?: string | null;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedCreateNestedManyWithoutTeacherInput;
    classTeacher?: Prisma.ClassSectionUncheckedCreateNestedOneWithoutClassTeacherInput;
};
export type StaffProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hiredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutStaffProfileNestedInput;
    department?: Prisma.DepartmentUpdateOneWithoutStaffNestedInput;
    teachingAssignments?: Prisma.TeachingAssignmentUpdateManyWithoutTeacherNestedInput;
    classTeacher?: Prisma.ClassSectionUpdateOneWithoutClassTeacherNestedInput;
};
export type StaffProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hiredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedUpdateManyWithoutTeacherNestedInput;
    classTeacher?: Prisma.ClassSectionUncheckedUpdateOneWithoutClassTeacherNestedInput;
};
export type StaffProfileCreateManyInput = {
    id?: string;
    userId: string;
    staffId: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    phone?: string | null;
    photoUrl?: string | null;
    hiredAt?: Date | string;
    departmentId?: string | null;
};
export type StaffProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hiredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hiredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StaffProfileNullableScalarRelationFilter = {
    is?: Prisma.StaffProfileWhereInput | null;
    isNot?: Prisma.StaffProfileWhereInput | null;
};
export type StaffProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    middleName?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    hiredAt?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
};
export type StaffProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    middleName?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    hiredAt?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
};
export type StaffProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    middleName?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    hiredAt?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
};
export type StaffProfileListRelationFilter = {
    every?: Prisma.StaffProfileWhereInput;
    some?: Prisma.StaffProfileWhereInput;
    none?: Prisma.StaffProfileWhereInput;
};
export type StaffProfileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StaffProfileScalarRelationFilter = {
    is?: Prisma.StaffProfileWhereInput;
    isNot?: Prisma.StaffProfileWhereInput;
};
export type StaffProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.StaffProfileCreateWithoutUserInput, Prisma.StaffProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StaffProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.StaffProfileWhereUniqueInput;
};
export type StaffProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.StaffProfileCreateWithoutUserInput, Prisma.StaffProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StaffProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.StaffProfileWhereUniqueInput;
};
export type StaffProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.StaffProfileCreateWithoutUserInput, Prisma.StaffProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StaffProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.StaffProfileUpsertWithoutUserInput;
    disconnect?: Prisma.StaffProfileWhereInput | boolean;
    delete?: Prisma.StaffProfileWhereInput | boolean;
    connect?: Prisma.StaffProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StaffProfileUpdateToOneWithWhereWithoutUserInput, Prisma.StaffProfileUpdateWithoutUserInput>, Prisma.StaffProfileUncheckedUpdateWithoutUserInput>;
};
export type StaffProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.StaffProfileCreateWithoutUserInput, Prisma.StaffProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StaffProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.StaffProfileUpsertWithoutUserInput;
    disconnect?: Prisma.StaffProfileWhereInput | boolean;
    delete?: Prisma.StaffProfileWhereInput | boolean;
    connect?: Prisma.StaffProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StaffProfileUpdateToOneWithWhereWithoutUserInput, Prisma.StaffProfileUpdateWithoutUserInput>, Prisma.StaffProfileUncheckedUpdateWithoutUserInput>;
};
export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender;
};
export type StaffProfileCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.StaffProfileCreateWithoutDepartmentInput, Prisma.StaffProfileUncheckedCreateWithoutDepartmentInput> | Prisma.StaffProfileCreateWithoutDepartmentInput[] | Prisma.StaffProfileUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.StaffProfileCreateOrConnectWithoutDepartmentInput | Prisma.StaffProfileCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.StaffProfileCreateManyDepartmentInputEnvelope;
    connect?: Prisma.StaffProfileWhereUniqueInput | Prisma.StaffProfileWhereUniqueInput[];
};
export type StaffProfileUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.StaffProfileCreateWithoutDepartmentInput, Prisma.StaffProfileUncheckedCreateWithoutDepartmentInput> | Prisma.StaffProfileCreateWithoutDepartmentInput[] | Prisma.StaffProfileUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.StaffProfileCreateOrConnectWithoutDepartmentInput | Prisma.StaffProfileCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.StaffProfileCreateManyDepartmentInputEnvelope;
    connect?: Prisma.StaffProfileWhereUniqueInput | Prisma.StaffProfileWhereUniqueInput[];
};
export type StaffProfileUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.StaffProfileCreateWithoutDepartmentInput, Prisma.StaffProfileUncheckedCreateWithoutDepartmentInput> | Prisma.StaffProfileCreateWithoutDepartmentInput[] | Prisma.StaffProfileUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.StaffProfileCreateOrConnectWithoutDepartmentInput | Prisma.StaffProfileCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.StaffProfileUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.StaffProfileUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.StaffProfileCreateManyDepartmentInputEnvelope;
    set?: Prisma.StaffProfileWhereUniqueInput | Prisma.StaffProfileWhereUniqueInput[];
    disconnect?: Prisma.StaffProfileWhereUniqueInput | Prisma.StaffProfileWhereUniqueInput[];
    delete?: Prisma.StaffProfileWhereUniqueInput | Prisma.StaffProfileWhereUniqueInput[];
    connect?: Prisma.StaffProfileWhereUniqueInput | Prisma.StaffProfileWhereUniqueInput[];
    update?: Prisma.StaffProfileUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.StaffProfileUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.StaffProfileUpdateManyWithWhereWithoutDepartmentInput | Prisma.StaffProfileUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.StaffProfileScalarWhereInput | Prisma.StaffProfileScalarWhereInput[];
};
export type StaffProfileUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.StaffProfileCreateWithoutDepartmentInput, Prisma.StaffProfileUncheckedCreateWithoutDepartmentInput> | Prisma.StaffProfileCreateWithoutDepartmentInput[] | Prisma.StaffProfileUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.StaffProfileCreateOrConnectWithoutDepartmentInput | Prisma.StaffProfileCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.StaffProfileUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.StaffProfileUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.StaffProfileCreateManyDepartmentInputEnvelope;
    set?: Prisma.StaffProfileWhereUniqueInput | Prisma.StaffProfileWhereUniqueInput[];
    disconnect?: Prisma.StaffProfileWhereUniqueInput | Prisma.StaffProfileWhereUniqueInput[];
    delete?: Prisma.StaffProfileWhereUniqueInput | Prisma.StaffProfileWhereUniqueInput[];
    connect?: Prisma.StaffProfileWhereUniqueInput | Prisma.StaffProfileWhereUniqueInput[];
    update?: Prisma.StaffProfileUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.StaffProfileUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.StaffProfileUpdateManyWithWhereWithoutDepartmentInput | Prisma.StaffProfileUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.StaffProfileScalarWhereInput | Prisma.StaffProfileScalarWhereInput[];
};
export type StaffProfileCreateNestedOneWithoutClassTeacherInput = {
    create?: Prisma.XOR<Prisma.StaffProfileCreateWithoutClassTeacherInput, Prisma.StaffProfileUncheckedCreateWithoutClassTeacherInput>;
    connectOrCreate?: Prisma.StaffProfileCreateOrConnectWithoutClassTeacherInput;
    connect?: Prisma.StaffProfileWhereUniqueInput;
};
export type StaffProfileUpdateOneWithoutClassTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.StaffProfileCreateWithoutClassTeacherInput, Prisma.StaffProfileUncheckedCreateWithoutClassTeacherInput>;
    connectOrCreate?: Prisma.StaffProfileCreateOrConnectWithoutClassTeacherInput;
    upsert?: Prisma.StaffProfileUpsertWithoutClassTeacherInput;
    disconnect?: Prisma.StaffProfileWhereInput | boolean;
    delete?: Prisma.StaffProfileWhereInput | boolean;
    connect?: Prisma.StaffProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StaffProfileUpdateToOneWithWhereWithoutClassTeacherInput, Prisma.StaffProfileUpdateWithoutClassTeacherInput>, Prisma.StaffProfileUncheckedUpdateWithoutClassTeacherInput>;
};
export type StaffProfileCreateNestedOneWithoutTeachingAssignmentsInput = {
    create?: Prisma.XOR<Prisma.StaffProfileCreateWithoutTeachingAssignmentsInput, Prisma.StaffProfileUncheckedCreateWithoutTeachingAssignmentsInput>;
    connectOrCreate?: Prisma.StaffProfileCreateOrConnectWithoutTeachingAssignmentsInput;
    connect?: Prisma.StaffProfileWhereUniqueInput;
};
export type StaffProfileUpdateOneRequiredWithoutTeachingAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.StaffProfileCreateWithoutTeachingAssignmentsInput, Prisma.StaffProfileUncheckedCreateWithoutTeachingAssignmentsInput>;
    connectOrCreate?: Prisma.StaffProfileCreateOrConnectWithoutTeachingAssignmentsInput;
    upsert?: Prisma.StaffProfileUpsertWithoutTeachingAssignmentsInput;
    connect?: Prisma.StaffProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StaffProfileUpdateToOneWithWhereWithoutTeachingAssignmentsInput, Prisma.StaffProfileUpdateWithoutTeachingAssignmentsInput>, Prisma.StaffProfileUncheckedUpdateWithoutTeachingAssignmentsInput>;
};
export type StaffProfileCreateWithoutUserInput = {
    id?: string;
    staffId: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    phone?: string | null;
    photoUrl?: string | null;
    hiredAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutStaffInput;
    teachingAssignments?: Prisma.TeachingAssignmentCreateNestedManyWithoutTeacherInput;
    classTeacher?: Prisma.ClassSectionCreateNestedOneWithoutClassTeacherInput;
};
export type StaffProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    staffId: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    phone?: string | null;
    photoUrl?: string | null;
    hiredAt?: Date | string;
    departmentId?: string | null;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedCreateNestedManyWithoutTeacherInput;
    classTeacher?: Prisma.ClassSectionUncheckedCreateNestedOneWithoutClassTeacherInput;
};
export type StaffProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.StaffProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StaffProfileCreateWithoutUserInput, Prisma.StaffProfileUncheckedCreateWithoutUserInput>;
};
export type StaffProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.StaffProfileUpdateWithoutUserInput, Prisma.StaffProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.StaffProfileCreateWithoutUserInput, Prisma.StaffProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.StaffProfileWhereInput;
};
export type StaffProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.StaffProfileWhereInput;
    data: Prisma.XOR<Prisma.StaffProfileUpdateWithoutUserInput, Prisma.StaffProfileUncheckedUpdateWithoutUserInput>;
};
export type StaffProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hiredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutStaffNestedInput;
    teachingAssignments?: Prisma.TeachingAssignmentUpdateManyWithoutTeacherNestedInput;
    classTeacher?: Prisma.ClassSectionUpdateOneWithoutClassTeacherNestedInput;
};
export type StaffProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hiredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedUpdateManyWithoutTeacherNestedInput;
    classTeacher?: Prisma.ClassSectionUncheckedUpdateOneWithoutClassTeacherNestedInput;
};
export type StaffProfileCreateWithoutDepartmentInput = {
    id?: string;
    staffId: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    phone?: string | null;
    photoUrl?: string | null;
    hiredAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutStaffProfileInput;
    teachingAssignments?: Prisma.TeachingAssignmentCreateNestedManyWithoutTeacherInput;
    classTeacher?: Prisma.ClassSectionCreateNestedOneWithoutClassTeacherInput;
};
export type StaffProfileUncheckedCreateWithoutDepartmentInput = {
    id?: string;
    userId: string;
    staffId: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    phone?: string | null;
    photoUrl?: string | null;
    hiredAt?: Date | string;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedCreateNestedManyWithoutTeacherInput;
    classTeacher?: Prisma.ClassSectionUncheckedCreateNestedOneWithoutClassTeacherInput;
};
export type StaffProfileCreateOrConnectWithoutDepartmentInput = {
    where: Prisma.StaffProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StaffProfileCreateWithoutDepartmentInput, Prisma.StaffProfileUncheckedCreateWithoutDepartmentInput>;
};
export type StaffProfileCreateManyDepartmentInputEnvelope = {
    data: Prisma.StaffProfileCreateManyDepartmentInput | Prisma.StaffProfileCreateManyDepartmentInput[];
    skipDuplicates?: boolean;
};
export type StaffProfileUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.StaffProfileWhereUniqueInput;
    update: Prisma.XOR<Prisma.StaffProfileUpdateWithoutDepartmentInput, Prisma.StaffProfileUncheckedUpdateWithoutDepartmentInput>;
    create: Prisma.XOR<Prisma.StaffProfileCreateWithoutDepartmentInput, Prisma.StaffProfileUncheckedCreateWithoutDepartmentInput>;
};
export type StaffProfileUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.StaffProfileWhereUniqueInput;
    data: Prisma.XOR<Prisma.StaffProfileUpdateWithoutDepartmentInput, Prisma.StaffProfileUncheckedUpdateWithoutDepartmentInput>;
};
export type StaffProfileUpdateManyWithWhereWithoutDepartmentInput = {
    where: Prisma.StaffProfileScalarWhereInput;
    data: Prisma.XOR<Prisma.StaffProfileUpdateManyMutationInput, Prisma.StaffProfileUncheckedUpdateManyWithoutDepartmentInput>;
};
export type StaffProfileScalarWhereInput = {
    AND?: Prisma.StaffProfileScalarWhereInput | Prisma.StaffProfileScalarWhereInput[];
    OR?: Prisma.StaffProfileScalarWhereInput[];
    NOT?: Prisma.StaffProfileScalarWhereInput | Prisma.StaffProfileScalarWhereInput[];
    id?: Prisma.StringFilter<"StaffProfile"> | string;
    userId?: Prisma.StringFilter<"StaffProfile"> | string;
    staffId?: Prisma.StringFilter<"StaffProfile"> | string;
    firstName?: Prisma.StringFilter<"StaffProfile"> | string;
    lastName?: Prisma.StringFilter<"StaffProfile"> | string;
    middleName?: Prisma.StringNullableFilter<"StaffProfile"> | string | null;
    gender?: Prisma.EnumGenderFilter<"StaffProfile"> | $Enums.Gender;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"StaffProfile"> | Date | string | null;
    phone?: Prisma.StringNullableFilter<"StaffProfile"> | string | null;
    photoUrl?: Prisma.StringNullableFilter<"StaffProfile"> | string | null;
    hiredAt?: Prisma.DateTimeFilter<"StaffProfile"> | Date | string;
    departmentId?: Prisma.StringNullableFilter<"StaffProfile"> | string | null;
};
export type StaffProfileCreateWithoutClassTeacherInput = {
    id?: string;
    staffId: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    phone?: string | null;
    photoUrl?: string | null;
    hiredAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutStaffProfileInput;
    department?: Prisma.DepartmentCreateNestedOneWithoutStaffInput;
    teachingAssignments?: Prisma.TeachingAssignmentCreateNestedManyWithoutTeacherInput;
};
export type StaffProfileUncheckedCreateWithoutClassTeacherInput = {
    id?: string;
    userId: string;
    staffId: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    phone?: string | null;
    photoUrl?: string | null;
    hiredAt?: Date | string;
    departmentId?: string | null;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedCreateNestedManyWithoutTeacherInput;
};
export type StaffProfileCreateOrConnectWithoutClassTeacherInput = {
    where: Prisma.StaffProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StaffProfileCreateWithoutClassTeacherInput, Prisma.StaffProfileUncheckedCreateWithoutClassTeacherInput>;
};
export type StaffProfileUpsertWithoutClassTeacherInput = {
    update: Prisma.XOR<Prisma.StaffProfileUpdateWithoutClassTeacherInput, Prisma.StaffProfileUncheckedUpdateWithoutClassTeacherInput>;
    create: Prisma.XOR<Prisma.StaffProfileCreateWithoutClassTeacherInput, Prisma.StaffProfileUncheckedCreateWithoutClassTeacherInput>;
    where?: Prisma.StaffProfileWhereInput;
};
export type StaffProfileUpdateToOneWithWhereWithoutClassTeacherInput = {
    where?: Prisma.StaffProfileWhereInput;
    data: Prisma.XOR<Prisma.StaffProfileUpdateWithoutClassTeacherInput, Prisma.StaffProfileUncheckedUpdateWithoutClassTeacherInput>;
};
export type StaffProfileUpdateWithoutClassTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hiredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutStaffProfileNestedInput;
    department?: Prisma.DepartmentUpdateOneWithoutStaffNestedInput;
    teachingAssignments?: Prisma.TeachingAssignmentUpdateManyWithoutTeacherNestedInput;
};
export type StaffProfileUncheckedUpdateWithoutClassTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hiredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type StaffProfileCreateWithoutTeachingAssignmentsInput = {
    id?: string;
    staffId: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    phone?: string | null;
    photoUrl?: string | null;
    hiredAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutStaffProfileInput;
    department?: Prisma.DepartmentCreateNestedOneWithoutStaffInput;
    classTeacher?: Prisma.ClassSectionCreateNestedOneWithoutClassTeacherInput;
};
export type StaffProfileUncheckedCreateWithoutTeachingAssignmentsInput = {
    id?: string;
    userId: string;
    staffId: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    phone?: string | null;
    photoUrl?: string | null;
    hiredAt?: Date | string;
    departmentId?: string | null;
    classTeacher?: Prisma.ClassSectionUncheckedCreateNestedOneWithoutClassTeacherInput;
};
export type StaffProfileCreateOrConnectWithoutTeachingAssignmentsInput = {
    where: Prisma.StaffProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StaffProfileCreateWithoutTeachingAssignmentsInput, Prisma.StaffProfileUncheckedCreateWithoutTeachingAssignmentsInput>;
};
export type StaffProfileUpsertWithoutTeachingAssignmentsInput = {
    update: Prisma.XOR<Prisma.StaffProfileUpdateWithoutTeachingAssignmentsInput, Prisma.StaffProfileUncheckedUpdateWithoutTeachingAssignmentsInput>;
    create: Prisma.XOR<Prisma.StaffProfileCreateWithoutTeachingAssignmentsInput, Prisma.StaffProfileUncheckedCreateWithoutTeachingAssignmentsInput>;
    where?: Prisma.StaffProfileWhereInput;
};
export type StaffProfileUpdateToOneWithWhereWithoutTeachingAssignmentsInput = {
    where?: Prisma.StaffProfileWhereInput;
    data: Prisma.XOR<Prisma.StaffProfileUpdateWithoutTeachingAssignmentsInput, Prisma.StaffProfileUncheckedUpdateWithoutTeachingAssignmentsInput>;
};
export type StaffProfileUpdateWithoutTeachingAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hiredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutStaffProfileNestedInput;
    department?: Prisma.DepartmentUpdateOneWithoutStaffNestedInput;
    classTeacher?: Prisma.ClassSectionUpdateOneWithoutClassTeacherNestedInput;
};
export type StaffProfileUncheckedUpdateWithoutTeachingAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hiredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    classTeacher?: Prisma.ClassSectionUncheckedUpdateOneWithoutClassTeacherNestedInput;
};
export type StaffProfileCreateManyDepartmentInput = {
    id?: string;
    userId: string;
    staffId: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    phone?: string | null;
    photoUrl?: string | null;
    hiredAt?: Date | string;
};
export type StaffProfileUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hiredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutStaffProfileNestedInput;
    teachingAssignments?: Prisma.TeachingAssignmentUpdateManyWithoutTeacherNestedInput;
    classTeacher?: Prisma.ClassSectionUpdateOneWithoutClassTeacherNestedInput;
};
export type StaffProfileUncheckedUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hiredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedUpdateManyWithoutTeacherNestedInput;
    classTeacher?: Prisma.ClassSectionUncheckedUpdateOneWithoutClassTeacherNestedInput;
};
export type StaffProfileUncheckedUpdateManyWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hiredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffProfileCountOutputType = {
    teachingAssignments: number;
};
export type StaffProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teachingAssignments?: boolean | StaffProfileCountOutputTypeCountTeachingAssignmentsArgs;
};
export type StaffProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffProfileCountOutputTypeSelect<ExtArgs> | null;
};
export type StaffProfileCountOutputTypeCountTeachingAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeachingAssignmentWhereInput;
};
export type StaffProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    staffId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    middleName?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    phone?: boolean;
    photoUrl?: boolean;
    hiredAt?: boolean;
    departmentId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.StaffProfile$departmentArgs<ExtArgs>;
    teachingAssignments?: boolean | Prisma.StaffProfile$teachingAssignmentsArgs<ExtArgs>;
    classTeacher?: boolean | Prisma.StaffProfile$classTeacherArgs<ExtArgs>;
    _count?: boolean | Prisma.StaffProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staffProfile"]>;
export type StaffProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    staffId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    middleName?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    phone?: boolean;
    photoUrl?: boolean;
    hiredAt?: boolean;
    departmentId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.StaffProfile$departmentArgs<ExtArgs>;
}, ExtArgs["result"]["staffProfile"]>;
export type StaffProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    staffId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    middleName?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    phone?: boolean;
    photoUrl?: boolean;
    hiredAt?: boolean;
    departmentId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.StaffProfile$departmentArgs<ExtArgs>;
}, ExtArgs["result"]["staffProfile"]>;
export type StaffProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    staffId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    middleName?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    phone?: boolean;
    photoUrl?: boolean;
    hiredAt?: boolean;
    departmentId?: boolean;
};
export type StaffProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "staffId" | "firstName" | "lastName" | "middleName" | "gender" | "dateOfBirth" | "phone" | "photoUrl" | "hiredAt" | "departmentId", ExtArgs["result"]["staffProfile"]>;
export type StaffProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.StaffProfile$departmentArgs<ExtArgs>;
    teachingAssignments?: boolean | Prisma.StaffProfile$teachingAssignmentsArgs<ExtArgs>;
    classTeacher?: boolean | Prisma.StaffProfile$classTeacherArgs<ExtArgs>;
    _count?: boolean | Prisma.StaffProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StaffProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.StaffProfile$departmentArgs<ExtArgs>;
};
export type StaffProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.StaffProfile$departmentArgs<ExtArgs>;
};
export type $StaffProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StaffProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        department: Prisma.$DepartmentPayload<ExtArgs> | null;
        teachingAssignments: Prisma.$TeachingAssignmentPayload<ExtArgs>[];
        classTeacher: Prisma.$ClassSectionPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        staffId: string;
        firstName: string;
        lastName: string;
        middleName: string | null;
        gender: $Enums.Gender;
        dateOfBirth: Date | null;
        phone: string | null;
        photoUrl: string | null;
        hiredAt: Date;
        departmentId: string | null;
    }, ExtArgs["result"]["staffProfile"]>;
    composites: {};
};
export type StaffProfileGetPayload<S extends boolean | null | undefined | StaffProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload, S>;
export type StaffProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StaffProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StaffProfileCountAggregateInputType | true;
};
export interface StaffProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StaffProfile'];
        meta: {
            name: 'StaffProfile';
        };
    };
    findUnique<T extends StaffProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, StaffProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StaffProfileClient<runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StaffProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StaffProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StaffProfileClient<runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StaffProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, StaffProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__StaffProfileClient<runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StaffProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StaffProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StaffProfileClient<runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StaffProfileFindManyArgs>(args?: Prisma.SelectSubset<T, StaffProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StaffProfileCreateArgs>(args: Prisma.SelectSubset<T, StaffProfileCreateArgs<ExtArgs>>): Prisma.Prisma__StaffProfileClient<runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StaffProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, StaffProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StaffProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StaffProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StaffProfileDeleteArgs>(args: Prisma.SelectSubset<T, StaffProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__StaffProfileClient<runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StaffProfileUpdateArgs>(args: Prisma.SelectSubset<T, StaffProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__StaffProfileClient<runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StaffProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, StaffProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StaffProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, StaffProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StaffProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StaffProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StaffProfileUpsertArgs>(args: Prisma.SelectSubset<T, StaffProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__StaffProfileClient<runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StaffProfileCountArgs>(args?: Prisma.Subset<T, StaffProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StaffProfileCountAggregateOutputType> : number>;
    aggregate<T extends StaffProfileAggregateArgs>(args: Prisma.Subset<T, StaffProfileAggregateArgs>): Prisma.PrismaPromise<GetStaffProfileAggregateType<T>>;
    groupBy<T extends StaffProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StaffProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: StaffProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StaffProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StaffProfileFieldRefs;
}
export interface Prisma__StaffProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    department<T extends Prisma.StaffProfile$departmentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StaffProfile$departmentArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    teachingAssignments<T extends Prisma.StaffProfile$teachingAssignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StaffProfile$teachingAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    classTeacher<T extends Prisma.StaffProfile$classTeacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StaffProfile$classTeacherArgs<ExtArgs>>): Prisma.Prisma__ClassSectionClient<runtime.Types.Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StaffProfileFieldRefs {
    readonly id: Prisma.FieldRef<"StaffProfile", 'String'>;
    readonly userId: Prisma.FieldRef<"StaffProfile", 'String'>;
    readonly staffId: Prisma.FieldRef<"StaffProfile", 'String'>;
    readonly firstName: Prisma.FieldRef<"StaffProfile", 'String'>;
    readonly lastName: Prisma.FieldRef<"StaffProfile", 'String'>;
    readonly middleName: Prisma.FieldRef<"StaffProfile", 'String'>;
    readonly gender: Prisma.FieldRef<"StaffProfile", 'Gender'>;
    readonly dateOfBirth: Prisma.FieldRef<"StaffProfile", 'DateTime'>;
    readonly phone: Prisma.FieldRef<"StaffProfile", 'String'>;
    readonly photoUrl: Prisma.FieldRef<"StaffProfile", 'String'>;
    readonly hiredAt: Prisma.FieldRef<"StaffProfile", 'DateTime'>;
    readonly departmentId: Prisma.FieldRef<"StaffProfile", 'String'>;
}
export type StaffProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffProfileSelect<ExtArgs> | null;
    omit?: Prisma.StaffProfileOmit<ExtArgs> | null;
    include?: Prisma.StaffProfileInclude<ExtArgs> | null;
    where: Prisma.StaffProfileWhereUniqueInput;
};
export type StaffProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffProfileSelect<ExtArgs> | null;
    omit?: Prisma.StaffProfileOmit<ExtArgs> | null;
    include?: Prisma.StaffProfileInclude<ExtArgs> | null;
    where: Prisma.StaffProfileWhereUniqueInput;
};
export type StaffProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffProfileSelect<ExtArgs> | null;
    omit?: Prisma.StaffProfileOmit<ExtArgs> | null;
    include?: Prisma.StaffProfileInclude<ExtArgs> | null;
    where?: Prisma.StaffProfileWhereInput;
    orderBy?: Prisma.StaffProfileOrderByWithRelationInput | Prisma.StaffProfileOrderByWithRelationInput[];
    cursor?: Prisma.StaffProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StaffProfileScalarFieldEnum | Prisma.StaffProfileScalarFieldEnum[];
};
export type StaffProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffProfileSelect<ExtArgs> | null;
    omit?: Prisma.StaffProfileOmit<ExtArgs> | null;
    include?: Prisma.StaffProfileInclude<ExtArgs> | null;
    where?: Prisma.StaffProfileWhereInput;
    orderBy?: Prisma.StaffProfileOrderByWithRelationInput | Prisma.StaffProfileOrderByWithRelationInput[];
    cursor?: Prisma.StaffProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StaffProfileScalarFieldEnum | Prisma.StaffProfileScalarFieldEnum[];
};
export type StaffProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffProfileSelect<ExtArgs> | null;
    omit?: Prisma.StaffProfileOmit<ExtArgs> | null;
    include?: Prisma.StaffProfileInclude<ExtArgs> | null;
    where?: Prisma.StaffProfileWhereInput;
    orderBy?: Prisma.StaffProfileOrderByWithRelationInput | Prisma.StaffProfileOrderByWithRelationInput[];
    cursor?: Prisma.StaffProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StaffProfileScalarFieldEnum | Prisma.StaffProfileScalarFieldEnum[];
};
export type StaffProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffProfileSelect<ExtArgs> | null;
    omit?: Prisma.StaffProfileOmit<ExtArgs> | null;
    include?: Prisma.StaffProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StaffProfileCreateInput, Prisma.StaffProfileUncheckedCreateInput>;
};
export type StaffProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StaffProfileCreateManyInput | Prisma.StaffProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StaffProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StaffProfileOmit<ExtArgs> | null;
    data: Prisma.StaffProfileCreateManyInput | Prisma.StaffProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StaffProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StaffProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffProfileSelect<ExtArgs> | null;
    omit?: Prisma.StaffProfileOmit<ExtArgs> | null;
    include?: Prisma.StaffProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StaffProfileUpdateInput, Prisma.StaffProfileUncheckedUpdateInput>;
    where: Prisma.StaffProfileWhereUniqueInput;
};
export type StaffProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StaffProfileUpdateManyMutationInput, Prisma.StaffProfileUncheckedUpdateManyInput>;
    where?: Prisma.StaffProfileWhereInput;
    limit?: number;
};
export type StaffProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StaffProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StaffProfileUpdateManyMutationInput, Prisma.StaffProfileUncheckedUpdateManyInput>;
    where?: Prisma.StaffProfileWhereInput;
    limit?: number;
    include?: Prisma.StaffProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StaffProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffProfileSelect<ExtArgs> | null;
    omit?: Prisma.StaffProfileOmit<ExtArgs> | null;
    include?: Prisma.StaffProfileInclude<ExtArgs> | null;
    where: Prisma.StaffProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StaffProfileCreateInput, Prisma.StaffProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StaffProfileUpdateInput, Prisma.StaffProfileUncheckedUpdateInput>;
};
export type StaffProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffProfileSelect<ExtArgs> | null;
    omit?: Prisma.StaffProfileOmit<ExtArgs> | null;
    include?: Prisma.StaffProfileInclude<ExtArgs> | null;
    where: Prisma.StaffProfileWhereUniqueInput;
};
export type StaffProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StaffProfileWhereInput;
    limit?: number;
};
export type StaffProfile$departmentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
};
export type StaffProfile$teachingAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachingAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TeachingAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TeachingAssignmentInclude<ExtArgs> | null;
    where?: Prisma.TeachingAssignmentWhereInput;
    orderBy?: Prisma.TeachingAssignmentOrderByWithRelationInput | Prisma.TeachingAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.TeachingAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeachingAssignmentScalarFieldEnum | Prisma.TeachingAssignmentScalarFieldEnum[];
};
export type StaffProfile$classTeacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSectionSelect<ExtArgs> | null;
    omit?: Prisma.ClassSectionOmit<ExtArgs> | null;
    include?: Prisma.ClassSectionInclude<ExtArgs> | null;
    where?: Prisma.ClassSectionWhereInput;
};
export type StaffProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffProfileSelect<ExtArgs> | null;
    omit?: Prisma.StaffProfileOmit<ExtArgs> | null;
    include?: Prisma.StaffProfileInclude<ExtArgs> | null;
};
