import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type SubjectModel = runtime.Types.Result.DefaultSelection<Prisma.$SubjectPayload>;
export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
};
export type SubjectMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    code: string | null;
    type: $Enums.SubjectType | null;
    departmentId: string | null;
    description: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type SubjectMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    code: string | null;
    type: $Enums.SubjectType | null;
    departmentId: string | null;
    description: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type SubjectCountAggregateOutputType = {
    id: number;
    name: number;
    code: number;
    type: number;
    departmentId: number;
    description: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type SubjectMinAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    type?: true;
    departmentId?: true;
    description?: true;
    isActive?: true;
    createdAt?: true;
};
export type SubjectMaxAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    type?: true;
    departmentId?: true;
    description?: true;
    isActive?: true;
    createdAt?: true;
};
export type SubjectCountAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    type?: true;
    departmentId?: true;
    description?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type SubjectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SubjectCountAggregateInputType;
    _min?: SubjectMinAggregateInputType;
    _max?: SubjectMaxAggregateInputType;
};
export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
    [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubject[P]> : Prisma.GetScalarType<T[P], AggregateSubject[P]>;
};
export type SubjectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithAggregationInput | Prisma.SubjectOrderByWithAggregationInput[];
    by: Prisma.SubjectScalarFieldEnum[] | Prisma.SubjectScalarFieldEnum;
    having?: Prisma.SubjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubjectCountAggregateInputType | true;
    _min?: SubjectMinAggregateInputType;
    _max?: SubjectMaxAggregateInputType;
};
export type SubjectGroupByOutputType = {
    id: string;
    name: string;
    code: string;
    type: $Enums.SubjectType;
    departmentId: string | null;
    description: string | null;
    isActive: boolean;
    createdAt: Date;
    _count: SubjectCountAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
};
export type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubjectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubjectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubjectGroupByOutputType[P]>;
}>>;
export type SubjectWhereInput = {
    AND?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    OR?: Prisma.SubjectWhereInput[];
    NOT?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    id?: Prisma.StringFilter<"Subject"> | string;
    name?: Prisma.StringFilter<"Subject"> | string;
    code?: Prisma.StringFilter<"Subject"> | string;
    type?: Prisma.EnumSubjectTypeFilter<"Subject"> | $Enums.SubjectType;
    departmentId?: Prisma.StringNullableFilter<"Subject"> | string | null;
    description?: Prisma.StringNullableFilter<"Subject"> | string | null;
    isActive?: Prisma.BoolFilter<"Subject"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Subject"> | Date | string;
    department?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    teachingAssignments?: Prisma.TeachingAssignmentListRelationFilter;
    grades?: Prisma.GradeEntryListRelationFilter;
};
export type SubjectOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    department?: Prisma.DepartmentOrderByWithRelationInput;
    teachingAssignments?: Prisma.TeachingAssignmentOrderByRelationAggregateInput;
    grades?: Prisma.GradeEntryOrderByRelationAggregateInput;
};
export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    OR?: Prisma.SubjectWhereInput[];
    NOT?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    name?: Prisma.StringFilter<"Subject"> | string;
    type?: Prisma.EnumSubjectTypeFilter<"Subject"> | $Enums.SubjectType;
    departmentId?: Prisma.StringNullableFilter<"Subject"> | string | null;
    description?: Prisma.StringNullableFilter<"Subject"> | string | null;
    isActive?: Prisma.BoolFilter<"Subject"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Subject"> | Date | string;
    department?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    teachingAssignments?: Prisma.TeachingAssignmentListRelationFilter;
    grades?: Prisma.GradeEntryListRelationFilter;
}, "id" | "code">;
export type SubjectOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SubjectCountOrderByAggregateInput;
    _max?: Prisma.SubjectMaxOrderByAggregateInput;
    _min?: Prisma.SubjectMinOrderByAggregateInput;
};
export type SubjectScalarWhereWithAggregatesInput = {
    AND?: Prisma.SubjectScalarWhereWithAggregatesInput | Prisma.SubjectScalarWhereWithAggregatesInput[];
    OR?: Prisma.SubjectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SubjectScalarWhereWithAggregatesInput | Prisma.SubjectScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Subject"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Subject"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Subject"> | string;
    type?: Prisma.EnumSubjectTypeWithAggregatesFilter<"Subject"> | $Enums.SubjectType;
    departmentId?: Prisma.StringNullableWithAggregatesFilter<"Subject"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Subject"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Subject"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Subject"> | Date | string;
};
export type SubjectCreateInput = {
    id?: string;
    name: string;
    code: string;
    type: $Enums.SubjectType;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutSubjectsInput;
    teachingAssignments?: Prisma.TeachingAssignmentCreateNestedManyWithoutSubjectInput;
    grades?: Prisma.GradeEntryCreateNestedManyWithoutSubjectInput;
};
export type SubjectUncheckedCreateInput = {
    id?: string;
    name: string;
    code: string;
    type: $Enums.SubjectType;
    departmentId?: string | null;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedCreateNestedManyWithoutSubjectInput;
    grades?: Prisma.GradeEntryUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutSubjectsNestedInput;
    teachingAssignments?: Prisma.TeachingAssignmentUpdateManyWithoutSubjectNestedInput;
    grades?: Prisma.GradeEntryUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedUpdateManyWithoutSubjectNestedInput;
    grades?: Prisma.GradeEntryUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectCreateManyInput = {
    id?: string;
    name: string;
    code: string;
    type: $Enums.SubjectType;
    departmentId?: string | null;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type SubjectUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectListRelationFilter = {
    every?: Prisma.SubjectWhereInput;
    some?: Prisma.SubjectWhereInput;
    none?: Prisma.SubjectWhereInput;
};
export type SubjectOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SubjectCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SubjectMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SubjectMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SubjectScalarRelationFilter = {
    is?: Prisma.SubjectWhereInput;
    isNot?: Prisma.SubjectWhereInput;
};
export type SubjectCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutDepartmentInput, Prisma.SubjectUncheckedCreateWithoutDepartmentInput> | Prisma.SubjectCreateWithoutDepartmentInput[] | Prisma.SubjectUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutDepartmentInput | Prisma.SubjectCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.SubjectCreateManyDepartmentInputEnvelope;
    connect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
};
export type SubjectUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutDepartmentInput, Prisma.SubjectUncheckedCreateWithoutDepartmentInput> | Prisma.SubjectCreateWithoutDepartmentInput[] | Prisma.SubjectUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutDepartmentInput | Prisma.SubjectCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.SubjectCreateManyDepartmentInputEnvelope;
    connect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
};
export type SubjectUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutDepartmentInput, Prisma.SubjectUncheckedCreateWithoutDepartmentInput> | Prisma.SubjectCreateWithoutDepartmentInput[] | Prisma.SubjectUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutDepartmentInput | Prisma.SubjectCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.SubjectUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.SubjectUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.SubjectCreateManyDepartmentInputEnvelope;
    set?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    disconnect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    delete?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    connect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    update?: Prisma.SubjectUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.SubjectUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.SubjectUpdateManyWithWhereWithoutDepartmentInput | Prisma.SubjectUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.SubjectScalarWhereInput | Prisma.SubjectScalarWhereInput[];
};
export type SubjectUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutDepartmentInput, Prisma.SubjectUncheckedCreateWithoutDepartmentInput> | Prisma.SubjectCreateWithoutDepartmentInput[] | Prisma.SubjectUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutDepartmentInput | Prisma.SubjectCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.SubjectUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.SubjectUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.SubjectCreateManyDepartmentInputEnvelope;
    set?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    disconnect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    delete?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    connect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    update?: Prisma.SubjectUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.SubjectUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.SubjectUpdateManyWithWhereWithoutDepartmentInput | Prisma.SubjectUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.SubjectScalarWhereInput | Prisma.SubjectScalarWhereInput[];
};
export type EnumSubjectTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubjectType;
};
export type SubjectCreateNestedOneWithoutTeachingAssignmentsInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutTeachingAssignmentsInput, Prisma.SubjectUncheckedCreateWithoutTeachingAssignmentsInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutTeachingAssignmentsInput;
    connect?: Prisma.SubjectWhereUniqueInput;
};
export type SubjectUpdateOneRequiredWithoutTeachingAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutTeachingAssignmentsInput, Prisma.SubjectUncheckedCreateWithoutTeachingAssignmentsInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutTeachingAssignmentsInput;
    upsert?: Prisma.SubjectUpsertWithoutTeachingAssignmentsInput;
    connect?: Prisma.SubjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubjectUpdateToOneWithWhereWithoutTeachingAssignmentsInput, Prisma.SubjectUpdateWithoutTeachingAssignmentsInput>, Prisma.SubjectUncheckedUpdateWithoutTeachingAssignmentsInput>;
};
export type SubjectCreateNestedOneWithoutGradesInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutGradesInput, Prisma.SubjectUncheckedCreateWithoutGradesInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutGradesInput;
    connect?: Prisma.SubjectWhereUniqueInput;
};
export type SubjectUpdateOneRequiredWithoutGradesNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutGradesInput, Prisma.SubjectUncheckedCreateWithoutGradesInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutGradesInput;
    upsert?: Prisma.SubjectUpsertWithoutGradesInput;
    connect?: Prisma.SubjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubjectUpdateToOneWithWhereWithoutGradesInput, Prisma.SubjectUpdateWithoutGradesInput>, Prisma.SubjectUncheckedUpdateWithoutGradesInput>;
};
export type SubjectCreateWithoutDepartmentInput = {
    id?: string;
    name: string;
    code: string;
    type: $Enums.SubjectType;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    teachingAssignments?: Prisma.TeachingAssignmentCreateNestedManyWithoutSubjectInput;
    grades?: Prisma.GradeEntryCreateNestedManyWithoutSubjectInput;
};
export type SubjectUncheckedCreateWithoutDepartmentInput = {
    id?: string;
    name: string;
    code: string;
    type: $Enums.SubjectType;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedCreateNestedManyWithoutSubjectInput;
    grades?: Prisma.GradeEntryUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectCreateOrConnectWithoutDepartmentInput = {
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutDepartmentInput, Prisma.SubjectUncheckedCreateWithoutDepartmentInput>;
};
export type SubjectCreateManyDepartmentInputEnvelope = {
    data: Prisma.SubjectCreateManyDepartmentInput | Prisma.SubjectCreateManyDepartmentInput[];
    skipDuplicates?: boolean;
};
export type SubjectUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.SubjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.SubjectUpdateWithoutDepartmentInput, Prisma.SubjectUncheckedUpdateWithoutDepartmentInput>;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutDepartmentInput, Prisma.SubjectUncheckedCreateWithoutDepartmentInput>;
};
export type SubjectUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.SubjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.SubjectUpdateWithoutDepartmentInput, Prisma.SubjectUncheckedUpdateWithoutDepartmentInput>;
};
export type SubjectUpdateManyWithWhereWithoutDepartmentInput = {
    where: Prisma.SubjectScalarWhereInput;
    data: Prisma.XOR<Prisma.SubjectUpdateManyMutationInput, Prisma.SubjectUncheckedUpdateManyWithoutDepartmentInput>;
};
export type SubjectScalarWhereInput = {
    AND?: Prisma.SubjectScalarWhereInput | Prisma.SubjectScalarWhereInput[];
    OR?: Prisma.SubjectScalarWhereInput[];
    NOT?: Prisma.SubjectScalarWhereInput | Prisma.SubjectScalarWhereInput[];
    id?: Prisma.StringFilter<"Subject"> | string;
    name?: Prisma.StringFilter<"Subject"> | string;
    code?: Prisma.StringFilter<"Subject"> | string;
    type?: Prisma.EnumSubjectTypeFilter<"Subject"> | $Enums.SubjectType;
    departmentId?: Prisma.StringNullableFilter<"Subject"> | string | null;
    description?: Prisma.StringNullableFilter<"Subject"> | string | null;
    isActive?: Prisma.BoolFilter<"Subject"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Subject"> | Date | string;
};
export type SubjectCreateWithoutTeachingAssignmentsInput = {
    id?: string;
    name: string;
    code: string;
    type: $Enums.SubjectType;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutSubjectsInput;
    grades?: Prisma.GradeEntryCreateNestedManyWithoutSubjectInput;
};
export type SubjectUncheckedCreateWithoutTeachingAssignmentsInput = {
    id?: string;
    name: string;
    code: string;
    type: $Enums.SubjectType;
    departmentId?: string | null;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    grades?: Prisma.GradeEntryUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectCreateOrConnectWithoutTeachingAssignmentsInput = {
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutTeachingAssignmentsInput, Prisma.SubjectUncheckedCreateWithoutTeachingAssignmentsInput>;
};
export type SubjectUpsertWithoutTeachingAssignmentsInput = {
    update: Prisma.XOR<Prisma.SubjectUpdateWithoutTeachingAssignmentsInput, Prisma.SubjectUncheckedUpdateWithoutTeachingAssignmentsInput>;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutTeachingAssignmentsInput, Prisma.SubjectUncheckedCreateWithoutTeachingAssignmentsInput>;
    where?: Prisma.SubjectWhereInput;
};
export type SubjectUpdateToOneWithWhereWithoutTeachingAssignmentsInput = {
    where?: Prisma.SubjectWhereInput;
    data: Prisma.XOR<Prisma.SubjectUpdateWithoutTeachingAssignmentsInput, Prisma.SubjectUncheckedUpdateWithoutTeachingAssignmentsInput>;
};
export type SubjectUpdateWithoutTeachingAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutSubjectsNestedInput;
    grades?: Prisma.GradeEntryUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateWithoutTeachingAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    grades?: Prisma.GradeEntryUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectCreateWithoutGradesInput = {
    id?: string;
    name: string;
    code: string;
    type: $Enums.SubjectType;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutSubjectsInput;
    teachingAssignments?: Prisma.TeachingAssignmentCreateNestedManyWithoutSubjectInput;
};
export type SubjectUncheckedCreateWithoutGradesInput = {
    id?: string;
    name: string;
    code: string;
    type: $Enums.SubjectType;
    departmentId?: string | null;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectCreateOrConnectWithoutGradesInput = {
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutGradesInput, Prisma.SubjectUncheckedCreateWithoutGradesInput>;
};
export type SubjectUpsertWithoutGradesInput = {
    update: Prisma.XOR<Prisma.SubjectUpdateWithoutGradesInput, Prisma.SubjectUncheckedUpdateWithoutGradesInput>;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutGradesInput, Prisma.SubjectUncheckedCreateWithoutGradesInput>;
    where?: Prisma.SubjectWhereInput;
};
export type SubjectUpdateToOneWithWhereWithoutGradesInput = {
    where?: Prisma.SubjectWhereInput;
    data: Prisma.XOR<Prisma.SubjectUpdateWithoutGradesInput, Prisma.SubjectUncheckedUpdateWithoutGradesInput>;
};
export type SubjectUpdateWithoutGradesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutSubjectsNestedInput;
    teachingAssignments?: Prisma.TeachingAssignmentUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateWithoutGradesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectCreateManyDepartmentInput = {
    id?: string;
    name: string;
    code: string;
    type: $Enums.SubjectType;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type SubjectUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teachingAssignments?: Prisma.TeachingAssignmentUpdateManyWithoutSubjectNestedInput;
    grades?: Prisma.GradeEntryUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedUpdateManyWithoutSubjectNestedInput;
    grades?: Prisma.GradeEntryUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateManyWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubjectTypeFieldUpdateOperationsInput | $Enums.SubjectType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectCountOutputType = {
    teachingAssignments: number;
    grades: number;
};
export type SubjectCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teachingAssignments?: boolean | SubjectCountOutputTypeCountTeachingAssignmentsArgs;
    grades?: boolean | SubjectCountOutputTypeCountGradesArgs;
};
export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectCountOutputTypeSelect<ExtArgs> | null;
};
export type SubjectCountOutputTypeCountTeachingAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeachingAssignmentWhereInput;
};
export type SubjectCountOutputTypeCountGradesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeEntryWhereInput;
};
export type SubjectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    type?: boolean;
    departmentId?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    department?: boolean | Prisma.Subject$departmentArgs<ExtArgs>;
    teachingAssignments?: boolean | Prisma.Subject$teachingAssignmentsArgs<ExtArgs>;
    grades?: boolean | Prisma.Subject$gradesArgs<ExtArgs>;
    _count?: boolean | Prisma.SubjectCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subject"]>;
export type SubjectSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    type?: boolean;
    departmentId?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    department?: boolean | Prisma.Subject$departmentArgs<ExtArgs>;
}, ExtArgs["result"]["subject"]>;
export type SubjectSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    type?: boolean;
    departmentId?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    department?: boolean | Prisma.Subject$departmentArgs<ExtArgs>;
}, ExtArgs["result"]["subject"]>;
export type SubjectSelectScalar = {
    id?: boolean;
    name?: boolean;
    code?: boolean;
    type?: boolean;
    departmentId?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type SubjectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "code" | "type" | "departmentId" | "description" | "isActive" | "createdAt", ExtArgs["result"]["subject"]>;
export type SubjectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.Subject$departmentArgs<ExtArgs>;
    teachingAssignments?: boolean | Prisma.Subject$teachingAssignmentsArgs<ExtArgs>;
    grades?: boolean | Prisma.Subject$gradesArgs<ExtArgs>;
    _count?: boolean | Prisma.SubjectCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SubjectIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.Subject$departmentArgs<ExtArgs>;
};
export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.Subject$departmentArgs<ExtArgs>;
};
export type $SubjectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Subject";
    objects: {
        department: Prisma.$DepartmentPayload<ExtArgs> | null;
        teachingAssignments: Prisma.$TeachingAssignmentPayload<ExtArgs>[];
        grades: Prisma.$GradeEntryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        code: string;
        type: $Enums.SubjectType;
        departmentId: string | null;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["subject"]>;
    composites: {};
};
export type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SubjectPayload, S>;
export type SubjectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubjectCountAggregateInputType | true;
};
export interface SubjectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Subject'];
        meta: {
            name: 'Subject';
        };
    };
    findUnique<T extends SubjectFindUniqueArgs>(args: Prisma.SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SubjectFindFirstArgs>(args?: Prisma.SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SubjectFindManyArgs>(args?: Prisma.SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SubjectCreateArgs>(args: Prisma.SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SubjectCreateManyArgs>(args?: Prisma.SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SubjectDeleteArgs>(args: Prisma.SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SubjectUpdateArgs>(args: Prisma.SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SubjectDeleteManyArgs>(args?: Prisma.SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SubjectUpdateManyArgs>(args: Prisma.SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SubjectUpsertArgs>(args: Prisma.SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SubjectCountArgs>(args?: Prisma.Subset<T, SubjectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubjectCountAggregateOutputType> : number>;
    aggregate<T extends SubjectAggregateArgs>(args: Prisma.Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>;
    groupBy<T extends SubjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SubjectGroupByArgs['orderBy'];
    } : {
        orderBy?: SubjectGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SubjectFieldRefs;
}
export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    department<T extends Prisma.Subject$departmentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Subject$departmentArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    teachingAssignments<T extends Prisma.Subject$teachingAssignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Subject$teachingAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    grades<T extends Prisma.Subject$gradesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Subject$gradesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SubjectFieldRefs {
    readonly id: Prisma.FieldRef<"Subject", 'String'>;
    readonly name: Prisma.FieldRef<"Subject", 'String'>;
    readonly code: Prisma.FieldRef<"Subject", 'String'>;
    readonly type: Prisma.FieldRef<"Subject", 'SubjectType'>;
    readonly departmentId: Prisma.FieldRef<"Subject", 'String'>;
    readonly description: Prisma.FieldRef<"Subject", 'String'>;
    readonly isActive: Prisma.FieldRef<"Subject", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Subject", 'DateTime'>;
}
export type SubjectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubjectScalarFieldEnum | Prisma.SubjectScalarFieldEnum[];
};
export type SubjectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubjectScalarFieldEnum | Prisma.SubjectScalarFieldEnum[];
};
export type SubjectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubjectScalarFieldEnum | Prisma.SubjectScalarFieldEnum[];
};
export type SubjectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubjectCreateInput, Prisma.SubjectUncheckedCreateInput>;
};
export type SubjectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SubjectCreateManyInput | Prisma.SubjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SubjectCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    data: Prisma.SubjectCreateManyInput | Prisma.SubjectCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SubjectIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SubjectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubjectUpdateInput, Prisma.SubjectUncheckedUpdateInput>;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SubjectUpdateManyMutationInput, Prisma.SubjectUncheckedUpdateManyInput>;
    where?: Prisma.SubjectWhereInput;
    limit?: number;
};
export type SubjectUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubjectUpdateManyMutationInput, Prisma.SubjectUncheckedUpdateManyInput>;
    where?: Prisma.SubjectWhereInput;
    limit?: number;
    include?: Prisma.SubjectIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SubjectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateInput, Prisma.SubjectUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SubjectUpdateInput, Prisma.SubjectUncheckedUpdateInput>;
};
export type SubjectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectWhereInput;
    limit?: number;
};
export type Subject$departmentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
};
export type Subject$teachingAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Subject$gradesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeEntrySelect<ExtArgs> | null;
    omit?: Prisma.GradeEntryOmit<ExtArgs> | null;
    include?: Prisma.GradeEntryInclude<ExtArgs> | null;
    where?: Prisma.GradeEntryWhereInput;
    orderBy?: Prisma.GradeEntryOrderByWithRelationInput | Prisma.GradeEntryOrderByWithRelationInput[];
    cursor?: Prisma.GradeEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradeEntryScalarFieldEnum | Prisma.GradeEntryScalarFieldEnum[];
};
export type SubjectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
};
