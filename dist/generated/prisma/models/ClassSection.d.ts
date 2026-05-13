import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type ClassSectionModel = runtime.Types.Result.DefaultSelection<Prisma.$ClassSectionPayload>;
export type AggregateClassSection = {
    _count: ClassSectionCountAggregateOutputType | null;
    _avg: ClassSectionAvgAggregateOutputType | null;
    _sum: ClassSectionSumAggregateOutputType | null;
    _min: ClassSectionMinAggregateOutputType | null;
    _max: ClassSectionMaxAggregateOutputType | null;
};
export type ClassSectionAvgAggregateOutputType = {
    capacity: number | null;
};
export type ClassSectionSumAggregateOutputType = {
    capacity: number | null;
};
export type ClassSectionMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    level: $Enums.ClassLevel | null;
    capacity: number | null;
    classTeacherId: string | null;
};
export type ClassSectionMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    level: $Enums.ClassLevel | null;
    capacity: number | null;
    classTeacherId: string | null;
};
export type ClassSectionCountAggregateOutputType = {
    id: number;
    name: number;
    level: number;
    capacity: number;
    classTeacherId: number;
    _all: number;
};
export type ClassSectionAvgAggregateInputType = {
    capacity?: true;
};
export type ClassSectionSumAggregateInputType = {
    capacity?: true;
};
export type ClassSectionMinAggregateInputType = {
    id?: true;
    name?: true;
    level?: true;
    capacity?: true;
    classTeacherId?: true;
};
export type ClassSectionMaxAggregateInputType = {
    id?: true;
    name?: true;
    level?: true;
    capacity?: true;
    classTeacherId?: true;
};
export type ClassSectionCountAggregateInputType = {
    id?: true;
    name?: true;
    level?: true;
    capacity?: true;
    classTeacherId?: true;
    _all?: true;
};
export type ClassSectionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassSectionWhereInput;
    orderBy?: Prisma.ClassSectionOrderByWithRelationInput | Prisma.ClassSectionOrderByWithRelationInput[];
    cursor?: Prisma.ClassSectionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClassSectionCountAggregateInputType;
    _avg?: ClassSectionAvgAggregateInputType;
    _sum?: ClassSectionSumAggregateInputType;
    _min?: ClassSectionMinAggregateInputType;
    _max?: ClassSectionMaxAggregateInputType;
};
export type GetClassSectionAggregateType<T extends ClassSectionAggregateArgs> = {
    [P in keyof T & keyof AggregateClassSection]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClassSection[P]> : Prisma.GetScalarType<T[P], AggregateClassSection[P]>;
};
export type ClassSectionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassSectionWhereInput;
    orderBy?: Prisma.ClassSectionOrderByWithAggregationInput | Prisma.ClassSectionOrderByWithAggregationInput[];
    by: Prisma.ClassSectionScalarFieldEnum[] | Prisma.ClassSectionScalarFieldEnum;
    having?: Prisma.ClassSectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClassSectionCountAggregateInputType | true;
    _avg?: ClassSectionAvgAggregateInputType;
    _sum?: ClassSectionSumAggregateInputType;
    _min?: ClassSectionMinAggregateInputType;
    _max?: ClassSectionMaxAggregateInputType;
};
export type ClassSectionGroupByOutputType = {
    id: string;
    name: string;
    level: $Enums.ClassLevel;
    capacity: number;
    classTeacherId: string | null;
    _count: ClassSectionCountAggregateOutputType | null;
    _avg: ClassSectionAvgAggregateOutputType | null;
    _sum: ClassSectionSumAggregateOutputType | null;
    _min: ClassSectionMinAggregateOutputType | null;
    _max: ClassSectionMaxAggregateOutputType | null;
};
export type GetClassSectionGroupByPayload<T extends ClassSectionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClassSectionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClassSectionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClassSectionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClassSectionGroupByOutputType[P]>;
}>>;
export type ClassSectionWhereInput = {
    AND?: Prisma.ClassSectionWhereInput | Prisma.ClassSectionWhereInput[];
    OR?: Prisma.ClassSectionWhereInput[];
    NOT?: Prisma.ClassSectionWhereInput | Prisma.ClassSectionWhereInput[];
    id?: Prisma.StringFilter<"ClassSection"> | string;
    name?: Prisma.StringFilter<"ClassSection"> | string;
    level?: Prisma.EnumClassLevelFilter<"ClassSection"> | $Enums.ClassLevel;
    capacity?: Prisma.IntFilter<"ClassSection"> | number;
    classTeacherId?: Prisma.StringNullableFilter<"ClassSection"> | string | null;
    classTeacher?: Prisma.XOR<Prisma.StaffProfileNullableScalarRelationFilter, Prisma.StaffProfileWhereInput> | null;
    students?: Prisma.StudentProfileListRelationFilter;
    teachingAssignments?: Prisma.TeachingAssignmentListRelationFilter;
};
export type ClassSectionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    classTeacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    classTeacher?: Prisma.StaffProfileOrderByWithRelationInput;
    students?: Prisma.StudentProfileOrderByRelationAggregateInput;
    teachingAssignments?: Prisma.TeachingAssignmentOrderByRelationAggregateInput;
};
export type ClassSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    classTeacherId?: string;
    name_level?: Prisma.ClassSectionNameLevelCompoundUniqueInput;
    AND?: Prisma.ClassSectionWhereInput | Prisma.ClassSectionWhereInput[];
    OR?: Prisma.ClassSectionWhereInput[];
    NOT?: Prisma.ClassSectionWhereInput | Prisma.ClassSectionWhereInput[];
    name?: Prisma.StringFilter<"ClassSection"> | string;
    level?: Prisma.EnumClassLevelFilter<"ClassSection"> | $Enums.ClassLevel;
    capacity?: Prisma.IntFilter<"ClassSection"> | number;
    classTeacher?: Prisma.XOR<Prisma.StaffProfileNullableScalarRelationFilter, Prisma.StaffProfileWhereInput> | null;
    students?: Prisma.StudentProfileListRelationFilter;
    teachingAssignments?: Prisma.TeachingAssignmentListRelationFilter;
}, "id" | "classTeacherId" | "name_level">;
export type ClassSectionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    classTeacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ClassSectionCountOrderByAggregateInput;
    _avg?: Prisma.ClassSectionAvgOrderByAggregateInput;
    _max?: Prisma.ClassSectionMaxOrderByAggregateInput;
    _min?: Prisma.ClassSectionMinOrderByAggregateInput;
    _sum?: Prisma.ClassSectionSumOrderByAggregateInput;
};
export type ClassSectionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClassSectionScalarWhereWithAggregatesInput | Prisma.ClassSectionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClassSectionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClassSectionScalarWhereWithAggregatesInput | Prisma.ClassSectionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ClassSection"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ClassSection"> | string;
    level?: Prisma.EnumClassLevelWithAggregatesFilter<"ClassSection"> | $Enums.ClassLevel;
    capacity?: Prisma.IntWithAggregatesFilter<"ClassSection"> | number;
    classTeacherId?: Prisma.StringNullableWithAggregatesFilter<"ClassSection"> | string | null;
};
export type ClassSectionCreateInput = {
    id?: string;
    name: string;
    level: $Enums.ClassLevel;
    capacity?: number;
    classTeacher?: Prisma.StaffProfileCreateNestedOneWithoutClassTeacherInput;
    students?: Prisma.StudentProfileCreateNestedManyWithoutCurrentClassInput;
    teachingAssignments?: Prisma.TeachingAssignmentCreateNestedManyWithoutClassSectionInput;
};
export type ClassSectionUncheckedCreateInput = {
    id?: string;
    name: string;
    level: $Enums.ClassLevel;
    capacity?: number;
    classTeacherId?: string | null;
    students?: Prisma.StudentProfileUncheckedCreateNestedManyWithoutCurrentClassInput;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedCreateNestedManyWithoutClassSectionInput;
};
export type ClassSectionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumClassLevelFieldUpdateOperationsInput | $Enums.ClassLevel;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    classTeacher?: Prisma.StaffProfileUpdateOneWithoutClassTeacherNestedInput;
    students?: Prisma.StudentProfileUpdateManyWithoutCurrentClassNestedInput;
    teachingAssignments?: Prisma.TeachingAssignmentUpdateManyWithoutClassSectionNestedInput;
};
export type ClassSectionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumClassLevelFieldUpdateOperationsInput | $Enums.ClassLevel;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    classTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    students?: Prisma.StudentProfileUncheckedUpdateManyWithoutCurrentClassNestedInput;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedUpdateManyWithoutClassSectionNestedInput;
};
export type ClassSectionCreateManyInput = {
    id?: string;
    name: string;
    level: $Enums.ClassLevel;
    capacity?: number;
    classTeacherId?: string | null;
};
export type ClassSectionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumClassLevelFieldUpdateOperationsInput | $Enums.ClassLevel;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClassSectionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumClassLevelFieldUpdateOperationsInput | $Enums.ClassLevel;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    classTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ClassSectionNullableScalarRelationFilter = {
    is?: Prisma.ClassSectionWhereInput | null;
    isNot?: Prisma.ClassSectionWhereInput | null;
};
export type ClassSectionNameLevelCompoundUniqueInput = {
    name: string;
    level: $Enums.ClassLevel;
};
export type ClassSectionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    classTeacherId?: Prisma.SortOrder;
};
export type ClassSectionAvgOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
};
export type ClassSectionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    classTeacherId?: Prisma.SortOrder;
};
export type ClassSectionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    classTeacherId?: Prisma.SortOrder;
};
export type ClassSectionSumOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
};
export type ClassSectionScalarRelationFilter = {
    is?: Prisma.ClassSectionWhereInput;
    isNot?: Prisma.ClassSectionWhereInput;
};
export type ClassSectionCreateNestedOneWithoutClassTeacherInput = {
    create?: Prisma.XOR<Prisma.ClassSectionCreateWithoutClassTeacherInput, Prisma.ClassSectionUncheckedCreateWithoutClassTeacherInput>;
    connectOrCreate?: Prisma.ClassSectionCreateOrConnectWithoutClassTeacherInput;
    connect?: Prisma.ClassSectionWhereUniqueInput;
};
export type ClassSectionUncheckedCreateNestedOneWithoutClassTeacherInput = {
    create?: Prisma.XOR<Prisma.ClassSectionCreateWithoutClassTeacherInput, Prisma.ClassSectionUncheckedCreateWithoutClassTeacherInput>;
    connectOrCreate?: Prisma.ClassSectionCreateOrConnectWithoutClassTeacherInput;
    connect?: Prisma.ClassSectionWhereUniqueInput;
};
export type ClassSectionUpdateOneWithoutClassTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.ClassSectionCreateWithoutClassTeacherInput, Prisma.ClassSectionUncheckedCreateWithoutClassTeacherInput>;
    connectOrCreate?: Prisma.ClassSectionCreateOrConnectWithoutClassTeacherInput;
    upsert?: Prisma.ClassSectionUpsertWithoutClassTeacherInput;
    disconnect?: Prisma.ClassSectionWhereInput | boolean;
    delete?: Prisma.ClassSectionWhereInput | boolean;
    connect?: Prisma.ClassSectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClassSectionUpdateToOneWithWhereWithoutClassTeacherInput, Prisma.ClassSectionUpdateWithoutClassTeacherInput>, Prisma.ClassSectionUncheckedUpdateWithoutClassTeacherInput>;
};
export type ClassSectionUncheckedUpdateOneWithoutClassTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.ClassSectionCreateWithoutClassTeacherInput, Prisma.ClassSectionUncheckedCreateWithoutClassTeacherInput>;
    connectOrCreate?: Prisma.ClassSectionCreateOrConnectWithoutClassTeacherInput;
    upsert?: Prisma.ClassSectionUpsertWithoutClassTeacherInput;
    disconnect?: Prisma.ClassSectionWhereInput | boolean;
    delete?: Prisma.ClassSectionWhereInput | boolean;
    connect?: Prisma.ClassSectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClassSectionUpdateToOneWithWhereWithoutClassTeacherInput, Prisma.ClassSectionUpdateWithoutClassTeacherInput>, Prisma.ClassSectionUncheckedUpdateWithoutClassTeacherInput>;
};
export type ClassSectionCreateNestedOneWithoutStudentsInput = {
    create?: Prisma.XOR<Prisma.ClassSectionCreateWithoutStudentsInput, Prisma.ClassSectionUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.ClassSectionCreateOrConnectWithoutStudentsInput;
    connect?: Prisma.ClassSectionWhereUniqueInput;
};
export type ClassSectionUpdateOneWithoutStudentsNestedInput = {
    create?: Prisma.XOR<Prisma.ClassSectionCreateWithoutStudentsInput, Prisma.ClassSectionUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.ClassSectionCreateOrConnectWithoutStudentsInput;
    upsert?: Prisma.ClassSectionUpsertWithoutStudentsInput;
    disconnect?: Prisma.ClassSectionWhereInput | boolean;
    delete?: Prisma.ClassSectionWhereInput | boolean;
    connect?: Prisma.ClassSectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClassSectionUpdateToOneWithWhereWithoutStudentsInput, Prisma.ClassSectionUpdateWithoutStudentsInput>, Prisma.ClassSectionUncheckedUpdateWithoutStudentsInput>;
};
export type EnumClassLevelFieldUpdateOperationsInput = {
    set?: $Enums.ClassLevel;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ClassSectionCreateNestedOneWithoutTeachingAssignmentsInput = {
    create?: Prisma.XOR<Prisma.ClassSectionCreateWithoutTeachingAssignmentsInput, Prisma.ClassSectionUncheckedCreateWithoutTeachingAssignmentsInput>;
    connectOrCreate?: Prisma.ClassSectionCreateOrConnectWithoutTeachingAssignmentsInput;
    connect?: Prisma.ClassSectionWhereUniqueInput;
};
export type ClassSectionUpdateOneRequiredWithoutTeachingAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.ClassSectionCreateWithoutTeachingAssignmentsInput, Prisma.ClassSectionUncheckedCreateWithoutTeachingAssignmentsInput>;
    connectOrCreate?: Prisma.ClassSectionCreateOrConnectWithoutTeachingAssignmentsInput;
    upsert?: Prisma.ClassSectionUpsertWithoutTeachingAssignmentsInput;
    connect?: Prisma.ClassSectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClassSectionUpdateToOneWithWhereWithoutTeachingAssignmentsInput, Prisma.ClassSectionUpdateWithoutTeachingAssignmentsInput>, Prisma.ClassSectionUncheckedUpdateWithoutTeachingAssignmentsInput>;
};
export type ClassSectionCreateWithoutClassTeacherInput = {
    id?: string;
    name: string;
    level: $Enums.ClassLevel;
    capacity?: number;
    students?: Prisma.StudentProfileCreateNestedManyWithoutCurrentClassInput;
    teachingAssignments?: Prisma.TeachingAssignmentCreateNestedManyWithoutClassSectionInput;
};
export type ClassSectionUncheckedCreateWithoutClassTeacherInput = {
    id?: string;
    name: string;
    level: $Enums.ClassLevel;
    capacity?: number;
    students?: Prisma.StudentProfileUncheckedCreateNestedManyWithoutCurrentClassInput;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedCreateNestedManyWithoutClassSectionInput;
};
export type ClassSectionCreateOrConnectWithoutClassTeacherInput = {
    where: Prisma.ClassSectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassSectionCreateWithoutClassTeacherInput, Prisma.ClassSectionUncheckedCreateWithoutClassTeacherInput>;
};
export type ClassSectionUpsertWithoutClassTeacherInput = {
    update: Prisma.XOR<Prisma.ClassSectionUpdateWithoutClassTeacherInput, Prisma.ClassSectionUncheckedUpdateWithoutClassTeacherInput>;
    create: Prisma.XOR<Prisma.ClassSectionCreateWithoutClassTeacherInput, Prisma.ClassSectionUncheckedCreateWithoutClassTeacherInput>;
    where?: Prisma.ClassSectionWhereInput;
};
export type ClassSectionUpdateToOneWithWhereWithoutClassTeacherInput = {
    where?: Prisma.ClassSectionWhereInput;
    data: Prisma.XOR<Prisma.ClassSectionUpdateWithoutClassTeacherInput, Prisma.ClassSectionUncheckedUpdateWithoutClassTeacherInput>;
};
export type ClassSectionUpdateWithoutClassTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumClassLevelFieldUpdateOperationsInput | $Enums.ClassLevel;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    students?: Prisma.StudentProfileUpdateManyWithoutCurrentClassNestedInput;
    teachingAssignments?: Prisma.TeachingAssignmentUpdateManyWithoutClassSectionNestedInput;
};
export type ClassSectionUncheckedUpdateWithoutClassTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumClassLevelFieldUpdateOperationsInput | $Enums.ClassLevel;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    students?: Prisma.StudentProfileUncheckedUpdateManyWithoutCurrentClassNestedInput;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedUpdateManyWithoutClassSectionNestedInput;
};
export type ClassSectionCreateWithoutStudentsInput = {
    id?: string;
    name: string;
    level: $Enums.ClassLevel;
    capacity?: number;
    classTeacher?: Prisma.StaffProfileCreateNestedOneWithoutClassTeacherInput;
    teachingAssignments?: Prisma.TeachingAssignmentCreateNestedManyWithoutClassSectionInput;
};
export type ClassSectionUncheckedCreateWithoutStudentsInput = {
    id?: string;
    name: string;
    level: $Enums.ClassLevel;
    capacity?: number;
    classTeacherId?: string | null;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedCreateNestedManyWithoutClassSectionInput;
};
export type ClassSectionCreateOrConnectWithoutStudentsInput = {
    where: Prisma.ClassSectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassSectionCreateWithoutStudentsInput, Prisma.ClassSectionUncheckedCreateWithoutStudentsInput>;
};
export type ClassSectionUpsertWithoutStudentsInput = {
    update: Prisma.XOR<Prisma.ClassSectionUpdateWithoutStudentsInput, Prisma.ClassSectionUncheckedUpdateWithoutStudentsInput>;
    create: Prisma.XOR<Prisma.ClassSectionCreateWithoutStudentsInput, Prisma.ClassSectionUncheckedCreateWithoutStudentsInput>;
    where?: Prisma.ClassSectionWhereInput;
};
export type ClassSectionUpdateToOneWithWhereWithoutStudentsInput = {
    where?: Prisma.ClassSectionWhereInput;
    data: Prisma.XOR<Prisma.ClassSectionUpdateWithoutStudentsInput, Prisma.ClassSectionUncheckedUpdateWithoutStudentsInput>;
};
export type ClassSectionUpdateWithoutStudentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumClassLevelFieldUpdateOperationsInput | $Enums.ClassLevel;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    classTeacher?: Prisma.StaffProfileUpdateOneWithoutClassTeacherNestedInput;
    teachingAssignments?: Prisma.TeachingAssignmentUpdateManyWithoutClassSectionNestedInput;
};
export type ClassSectionUncheckedUpdateWithoutStudentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumClassLevelFieldUpdateOperationsInput | $Enums.ClassLevel;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    classTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teachingAssignments?: Prisma.TeachingAssignmentUncheckedUpdateManyWithoutClassSectionNestedInput;
};
export type ClassSectionCreateWithoutTeachingAssignmentsInput = {
    id?: string;
    name: string;
    level: $Enums.ClassLevel;
    capacity?: number;
    classTeacher?: Prisma.StaffProfileCreateNestedOneWithoutClassTeacherInput;
    students?: Prisma.StudentProfileCreateNestedManyWithoutCurrentClassInput;
};
export type ClassSectionUncheckedCreateWithoutTeachingAssignmentsInput = {
    id?: string;
    name: string;
    level: $Enums.ClassLevel;
    capacity?: number;
    classTeacherId?: string | null;
    students?: Prisma.StudentProfileUncheckedCreateNestedManyWithoutCurrentClassInput;
};
export type ClassSectionCreateOrConnectWithoutTeachingAssignmentsInput = {
    where: Prisma.ClassSectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassSectionCreateWithoutTeachingAssignmentsInput, Prisma.ClassSectionUncheckedCreateWithoutTeachingAssignmentsInput>;
};
export type ClassSectionUpsertWithoutTeachingAssignmentsInput = {
    update: Prisma.XOR<Prisma.ClassSectionUpdateWithoutTeachingAssignmentsInput, Prisma.ClassSectionUncheckedUpdateWithoutTeachingAssignmentsInput>;
    create: Prisma.XOR<Prisma.ClassSectionCreateWithoutTeachingAssignmentsInput, Prisma.ClassSectionUncheckedCreateWithoutTeachingAssignmentsInput>;
    where?: Prisma.ClassSectionWhereInput;
};
export type ClassSectionUpdateToOneWithWhereWithoutTeachingAssignmentsInput = {
    where?: Prisma.ClassSectionWhereInput;
    data: Prisma.XOR<Prisma.ClassSectionUpdateWithoutTeachingAssignmentsInput, Prisma.ClassSectionUncheckedUpdateWithoutTeachingAssignmentsInput>;
};
export type ClassSectionUpdateWithoutTeachingAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumClassLevelFieldUpdateOperationsInput | $Enums.ClassLevel;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    classTeacher?: Prisma.StaffProfileUpdateOneWithoutClassTeacherNestedInput;
    students?: Prisma.StudentProfileUpdateManyWithoutCurrentClassNestedInput;
};
export type ClassSectionUncheckedUpdateWithoutTeachingAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumClassLevelFieldUpdateOperationsInput | $Enums.ClassLevel;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    classTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    students?: Prisma.StudentProfileUncheckedUpdateManyWithoutCurrentClassNestedInput;
};
export type ClassSectionCountOutputType = {
    students: number;
    teachingAssignments: number;
};
export type ClassSectionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    students?: boolean | ClassSectionCountOutputTypeCountStudentsArgs;
    teachingAssignments?: boolean | ClassSectionCountOutputTypeCountTeachingAssignmentsArgs;
};
export type ClassSectionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSectionCountOutputTypeSelect<ExtArgs> | null;
};
export type ClassSectionCountOutputTypeCountStudentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentProfileWhereInput;
};
export type ClassSectionCountOutputTypeCountTeachingAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeachingAssignmentWhereInput;
};
export type ClassSectionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    level?: boolean;
    capacity?: boolean;
    classTeacherId?: boolean;
    classTeacher?: boolean | Prisma.ClassSection$classTeacherArgs<ExtArgs>;
    students?: boolean | Prisma.ClassSection$studentsArgs<ExtArgs>;
    teachingAssignments?: boolean | Prisma.ClassSection$teachingAssignmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClassSectionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["classSection"]>;
export type ClassSectionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    level?: boolean;
    capacity?: boolean;
    classTeacherId?: boolean;
    classTeacher?: boolean | Prisma.ClassSection$classTeacherArgs<ExtArgs>;
}, ExtArgs["result"]["classSection"]>;
export type ClassSectionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    level?: boolean;
    capacity?: boolean;
    classTeacherId?: boolean;
    classTeacher?: boolean | Prisma.ClassSection$classTeacherArgs<ExtArgs>;
}, ExtArgs["result"]["classSection"]>;
export type ClassSectionSelectScalar = {
    id?: boolean;
    name?: boolean;
    level?: boolean;
    capacity?: boolean;
    classTeacherId?: boolean;
};
export type ClassSectionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "level" | "capacity" | "classTeacherId", ExtArgs["result"]["classSection"]>;
export type ClassSectionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classTeacher?: boolean | Prisma.ClassSection$classTeacherArgs<ExtArgs>;
    students?: boolean | Prisma.ClassSection$studentsArgs<ExtArgs>;
    teachingAssignments?: boolean | Prisma.ClassSection$teachingAssignmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClassSectionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClassSectionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classTeacher?: boolean | Prisma.ClassSection$classTeacherArgs<ExtArgs>;
};
export type ClassSectionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classTeacher?: boolean | Prisma.ClassSection$classTeacherArgs<ExtArgs>;
};
export type $ClassSectionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ClassSection";
    objects: {
        classTeacher: Prisma.$StaffProfilePayload<ExtArgs> | null;
        students: Prisma.$StudentProfilePayload<ExtArgs>[];
        teachingAssignments: Prisma.$TeachingAssignmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        level: $Enums.ClassLevel;
        capacity: number;
        classTeacherId: string | null;
    }, ExtArgs["result"]["classSection"]>;
    composites: {};
};
export type ClassSectionGetPayload<S extends boolean | null | undefined | ClassSectionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClassSectionPayload, S>;
export type ClassSectionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClassSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClassSectionCountAggregateInputType | true;
};
export interface ClassSectionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ClassSection'];
        meta: {
            name: 'ClassSection';
        };
    };
    findUnique<T extends ClassSectionFindUniqueArgs>(args: Prisma.SelectSubset<T, ClassSectionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClassSectionClient<runtime.Types.Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClassSectionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClassSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClassSectionClient<runtime.Types.Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClassSectionFindFirstArgs>(args?: Prisma.SelectSubset<T, ClassSectionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClassSectionClient<runtime.Types.Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClassSectionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClassSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClassSectionClient<runtime.Types.Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClassSectionFindManyArgs>(args?: Prisma.SelectSubset<T, ClassSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClassSectionCreateArgs>(args: Prisma.SelectSubset<T, ClassSectionCreateArgs<ExtArgs>>): Prisma.Prisma__ClassSectionClient<runtime.Types.Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClassSectionCreateManyArgs>(args?: Prisma.SelectSubset<T, ClassSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClassSectionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClassSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClassSectionDeleteArgs>(args: Prisma.SelectSubset<T, ClassSectionDeleteArgs<ExtArgs>>): Prisma.Prisma__ClassSectionClient<runtime.Types.Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClassSectionUpdateArgs>(args: Prisma.SelectSubset<T, ClassSectionUpdateArgs<ExtArgs>>): Prisma.Prisma__ClassSectionClient<runtime.Types.Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClassSectionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClassSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClassSectionUpdateManyArgs>(args: Prisma.SelectSubset<T, ClassSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClassSectionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClassSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClassSectionUpsertArgs>(args: Prisma.SelectSubset<T, ClassSectionUpsertArgs<ExtArgs>>): Prisma.Prisma__ClassSectionClient<runtime.Types.Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClassSectionCountArgs>(args?: Prisma.Subset<T, ClassSectionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClassSectionCountAggregateOutputType> : number>;
    aggregate<T extends ClassSectionAggregateArgs>(args: Prisma.Subset<T, ClassSectionAggregateArgs>): Prisma.PrismaPromise<GetClassSectionAggregateType<T>>;
    groupBy<T extends ClassSectionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClassSectionGroupByArgs['orderBy'];
    } : {
        orderBy?: ClassSectionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClassSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClassSectionFieldRefs;
}
export interface Prisma__ClassSectionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    classTeacher<T extends Prisma.ClassSection$classTeacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClassSection$classTeacherArgs<ExtArgs>>): Prisma.Prisma__StaffProfileClient<runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    students<T extends Prisma.ClassSection$studentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClassSection$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    teachingAssignments<T extends Prisma.ClassSection$teachingAssignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClassSection$teachingAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClassSectionFieldRefs {
    readonly id: Prisma.FieldRef<"ClassSection", 'String'>;
    readonly name: Prisma.FieldRef<"ClassSection", 'String'>;
    readonly level: Prisma.FieldRef<"ClassSection", 'ClassLevel'>;
    readonly capacity: Prisma.FieldRef<"ClassSection", 'Int'>;
    readonly classTeacherId: Prisma.FieldRef<"ClassSection", 'String'>;
}
export type ClassSectionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSectionSelect<ExtArgs> | null;
    omit?: Prisma.ClassSectionOmit<ExtArgs> | null;
    include?: Prisma.ClassSectionInclude<ExtArgs> | null;
    where: Prisma.ClassSectionWhereUniqueInput;
};
export type ClassSectionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSectionSelect<ExtArgs> | null;
    omit?: Prisma.ClassSectionOmit<ExtArgs> | null;
    include?: Prisma.ClassSectionInclude<ExtArgs> | null;
    where: Prisma.ClassSectionWhereUniqueInput;
};
export type ClassSectionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSectionSelect<ExtArgs> | null;
    omit?: Prisma.ClassSectionOmit<ExtArgs> | null;
    include?: Prisma.ClassSectionInclude<ExtArgs> | null;
    where?: Prisma.ClassSectionWhereInput;
    orderBy?: Prisma.ClassSectionOrderByWithRelationInput | Prisma.ClassSectionOrderByWithRelationInput[];
    cursor?: Prisma.ClassSectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClassSectionScalarFieldEnum | Prisma.ClassSectionScalarFieldEnum[];
};
export type ClassSectionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSectionSelect<ExtArgs> | null;
    omit?: Prisma.ClassSectionOmit<ExtArgs> | null;
    include?: Prisma.ClassSectionInclude<ExtArgs> | null;
    where?: Prisma.ClassSectionWhereInput;
    orderBy?: Prisma.ClassSectionOrderByWithRelationInput | Prisma.ClassSectionOrderByWithRelationInput[];
    cursor?: Prisma.ClassSectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClassSectionScalarFieldEnum | Prisma.ClassSectionScalarFieldEnum[];
};
export type ClassSectionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSectionSelect<ExtArgs> | null;
    omit?: Prisma.ClassSectionOmit<ExtArgs> | null;
    include?: Prisma.ClassSectionInclude<ExtArgs> | null;
    where?: Prisma.ClassSectionWhereInput;
    orderBy?: Prisma.ClassSectionOrderByWithRelationInput | Prisma.ClassSectionOrderByWithRelationInput[];
    cursor?: Prisma.ClassSectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClassSectionScalarFieldEnum | Prisma.ClassSectionScalarFieldEnum[];
};
export type ClassSectionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSectionSelect<ExtArgs> | null;
    omit?: Prisma.ClassSectionOmit<ExtArgs> | null;
    include?: Prisma.ClassSectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClassSectionCreateInput, Prisma.ClassSectionUncheckedCreateInput>;
};
export type ClassSectionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClassSectionCreateManyInput | Prisma.ClassSectionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClassSectionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSectionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClassSectionOmit<ExtArgs> | null;
    data: Prisma.ClassSectionCreateManyInput | Prisma.ClassSectionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ClassSectionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ClassSectionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSectionSelect<ExtArgs> | null;
    omit?: Prisma.ClassSectionOmit<ExtArgs> | null;
    include?: Prisma.ClassSectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClassSectionUpdateInput, Prisma.ClassSectionUncheckedUpdateInput>;
    where: Prisma.ClassSectionWhereUniqueInput;
};
export type ClassSectionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClassSectionUpdateManyMutationInput, Prisma.ClassSectionUncheckedUpdateManyInput>;
    where?: Prisma.ClassSectionWhereInput;
    limit?: number;
};
export type ClassSectionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSectionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClassSectionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClassSectionUpdateManyMutationInput, Prisma.ClassSectionUncheckedUpdateManyInput>;
    where?: Prisma.ClassSectionWhereInput;
    limit?: number;
    include?: Prisma.ClassSectionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ClassSectionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSectionSelect<ExtArgs> | null;
    omit?: Prisma.ClassSectionOmit<ExtArgs> | null;
    include?: Prisma.ClassSectionInclude<ExtArgs> | null;
    where: Prisma.ClassSectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassSectionCreateInput, Prisma.ClassSectionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClassSectionUpdateInput, Prisma.ClassSectionUncheckedUpdateInput>;
};
export type ClassSectionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSectionSelect<ExtArgs> | null;
    omit?: Prisma.ClassSectionOmit<ExtArgs> | null;
    include?: Prisma.ClassSectionInclude<ExtArgs> | null;
    where: Prisma.ClassSectionWhereUniqueInput;
};
export type ClassSectionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassSectionWhereInput;
    limit?: number;
};
export type ClassSection$classTeacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffProfileSelect<ExtArgs> | null;
    omit?: Prisma.StaffProfileOmit<ExtArgs> | null;
    include?: Prisma.StaffProfileInclude<ExtArgs> | null;
    where?: Prisma.StaffProfileWhereInput;
};
export type ClassSection$studentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelect<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    include?: Prisma.StudentProfileInclude<ExtArgs> | null;
    where?: Prisma.StudentProfileWhereInput;
    orderBy?: Prisma.StudentProfileOrderByWithRelationInput | Prisma.StudentProfileOrderByWithRelationInput[];
    cursor?: Prisma.StudentProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentProfileScalarFieldEnum | Prisma.StudentProfileScalarFieldEnum[];
};
export type ClassSection$teachingAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ClassSectionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSectionSelect<ExtArgs> | null;
    omit?: Prisma.ClassSectionOmit<ExtArgs> | null;
    include?: Prisma.ClassSectionInclude<ExtArgs> | null;
};
