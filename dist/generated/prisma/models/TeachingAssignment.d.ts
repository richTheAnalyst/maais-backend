import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TeachingAssignmentModel = runtime.Types.Result.DefaultSelection<Prisma.$TeachingAssignmentPayload>;
export type AggregateTeachingAssignment = {
    _count: TeachingAssignmentCountAggregateOutputType | null;
    _min: TeachingAssignmentMinAggregateOutputType | null;
    _max: TeachingAssignmentMaxAggregateOutputType | null;
};
export type TeachingAssignmentMinAggregateOutputType = {
    id: string | null;
    teacherId: string | null;
    subjectId: string | null;
    classSectionId: string | null;
    academicYearId: string | null;
};
export type TeachingAssignmentMaxAggregateOutputType = {
    id: string | null;
    teacherId: string | null;
    subjectId: string | null;
    classSectionId: string | null;
    academicYearId: string | null;
};
export type TeachingAssignmentCountAggregateOutputType = {
    id: number;
    teacherId: number;
    subjectId: number;
    classSectionId: number;
    academicYearId: number;
    _all: number;
};
export type TeachingAssignmentMinAggregateInputType = {
    id?: true;
    teacherId?: true;
    subjectId?: true;
    classSectionId?: true;
    academicYearId?: true;
};
export type TeachingAssignmentMaxAggregateInputType = {
    id?: true;
    teacherId?: true;
    subjectId?: true;
    classSectionId?: true;
    academicYearId?: true;
};
export type TeachingAssignmentCountAggregateInputType = {
    id?: true;
    teacherId?: true;
    subjectId?: true;
    classSectionId?: true;
    academicYearId?: true;
    _all?: true;
};
export type TeachingAssignmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeachingAssignmentWhereInput;
    orderBy?: Prisma.TeachingAssignmentOrderByWithRelationInput | Prisma.TeachingAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.TeachingAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TeachingAssignmentCountAggregateInputType;
    _min?: TeachingAssignmentMinAggregateInputType;
    _max?: TeachingAssignmentMaxAggregateInputType;
};
export type GetTeachingAssignmentAggregateType<T extends TeachingAssignmentAggregateArgs> = {
    [P in keyof T & keyof AggregateTeachingAssignment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTeachingAssignment[P]> : Prisma.GetScalarType<T[P], AggregateTeachingAssignment[P]>;
};
export type TeachingAssignmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeachingAssignmentWhereInput;
    orderBy?: Prisma.TeachingAssignmentOrderByWithAggregationInput | Prisma.TeachingAssignmentOrderByWithAggregationInput[];
    by: Prisma.TeachingAssignmentScalarFieldEnum[] | Prisma.TeachingAssignmentScalarFieldEnum;
    having?: Prisma.TeachingAssignmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeachingAssignmentCountAggregateInputType | true;
    _min?: TeachingAssignmentMinAggregateInputType;
    _max?: TeachingAssignmentMaxAggregateInputType;
};
export type TeachingAssignmentGroupByOutputType = {
    id: string;
    teacherId: string;
    subjectId: string;
    classSectionId: string;
    academicYearId: string;
    _count: TeachingAssignmentCountAggregateOutputType | null;
    _min: TeachingAssignmentMinAggregateOutputType | null;
    _max: TeachingAssignmentMaxAggregateOutputType | null;
};
export type GetTeachingAssignmentGroupByPayload<T extends TeachingAssignmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TeachingAssignmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TeachingAssignmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TeachingAssignmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TeachingAssignmentGroupByOutputType[P]>;
}>>;
export type TeachingAssignmentWhereInput = {
    AND?: Prisma.TeachingAssignmentWhereInput | Prisma.TeachingAssignmentWhereInput[];
    OR?: Prisma.TeachingAssignmentWhereInput[];
    NOT?: Prisma.TeachingAssignmentWhereInput | Prisma.TeachingAssignmentWhereInput[];
    id?: Prisma.StringFilter<"TeachingAssignment"> | string;
    teacherId?: Prisma.StringFilter<"TeachingAssignment"> | string;
    subjectId?: Prisma.StringFilter<"TeachingAssignment"> | string;
    classSectionId?: Prisma.StringFilter<"TeachingAssignment"> | string;
    academicYearId?: Prisma.StringFilter<"TeachingAssignment"> | string;
    teacher?: Prisma.XOR<Prisma.StaffProfileScalarRelationFilter, Prisma.StaffProfileWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    classSection?: Prisma.XOR<Prisma.ClassSectionScalarRelationFilter, Prisma.ClassSectionWhereInput>;
};
export type TeachingAssignmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    classSectionId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    teacher?: Prisma.StaffProfileOrderByWithRelationInput;
    subject?: Prisma.SubjectOrderByWithRelationInput;
    classSection?: Prisma.ClassSectionOrderByWithRelationInput;
};
export type TeachingAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    teacherId_subjectId_classSectionId_academicYearId?: Prisma.TeachingAssignmentTeacherIdSubjectIdClassSectionIdAcademicYearIdCompoundUniqueInput;
    AND?: Prisma.TeachingAssignmentWhereInput | Prisma.TeachingAssignmentWhereInput[];
    OR?: Prisma.TeachingAssignmentWhereInput[];
    NOT?: Prisma.TeachingAssignmentWhereInput | Prisma.TeachingAssignmentWhereInput[];
    teacherId?: Prisma.StringFilter<"TeachingAssignment"> | string;
    subjectId?: Prisma.StringFilter<"TeachingAssignment"> | string;
    classSectionId?: Prisma.StringFilter<"TeachingAssignment"> | string;
    academicYearId?: Prisma.StringFilter<"TeachingAssignment"> | string;
    teacher?: Prisma.XOR<Prisma.StaffProfileScalarRelationFilter, Prisma.StaffProfileWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    classSection?: Prisma.XOR<Prisma.ClassSectionScalarRelationFilter, Prisma.ClassSectionWhereInput>;
}, "id" | "teacherId_subjectId_classSectionId_academicYearId">;
export type TeachingAssignmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    classSectionId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    _count?: Prisma.TeachingAssignmentCountOrderByAggregateInput;
    _max?: Prisma.TeachingAssignmentMaxOrderByAggregateInput;
    _min?: Prisma.TeachingAssignmentMinOrderByAggregateInput;
};
export type TeachingAssignmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.TeachingAssignmentScalarWhereWithAggregatesInput | Prisma.TeachingAssignmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.TeachingAssignmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TeachingAssignmentScalarWhereWithAggregatesInput | Prisma.TeachingAssignmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TeachingAssignment"> | string;
    teacherId?: Prisma.StringWithAggregatesFilter<"TeachingAssignment"> | string;
    subjectId?: Prisma.StringWithAggregatesFilter<"TeachingAssignment"> | string;
    classSectionId?: Prisma.StringWithAggregatesFilter<"TeachingAssignment"> | string;
    academicYearId?: Prisma.StringWithAggregatesFilter<"TeachingAssignment"> | string;
};
export type TeachingAssignmentCreateInput = {
    id?: string;
    academicYearId: string;
    teacher: Prisma.StaffProfileCreateNestedOneWithoutTeachingAssignmentsInput;
    subject: Prisma.SubjectCreateNestedOneWithoutTeachingAssignmentsInput;
    classSection: Prisma.ClassSectionCreateNestedOneWithoutTeachingAssignmentsInput;
};
export type TeachingAssignmentUncheckedCreateInput = {
    id?: string;
    teacherId: string;
    subjectId: string;
    classSectionId: string;
    academicYearId: string;
};
export type TeachingAssignmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacher?: Prisma.StaffProfileUpdateOneRequiredWithoutTeachingAssignmentsNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutTeachingAssignmentsNestedInput;
    classSection?: Prisma.ClassSectionUpdateOneRequiredWithoutTeachingAssignmentsNestedInput;
};
export type TeachingAssignmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    classSectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TeachingAssignmentCreateManyInput = {
    id?: string;
    teacherId: string;
    subjectId: string;
    classSectionId: string;
    academicYearId: string;
};
export type TeachingAssignmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TeachingAssignmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    classSectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TeachingAssignmentListRelationFilter = {
    every?: Prisma.TeachingAssignmentWhereInput;
    some?: Prisma.TeachingAssignmentWhereInput;
    none?: Prisma.TeachingAssignmentWhereInput;
};
export type TeachingAssignmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TeachingAssignmentTeacherIdSubjectIdClassSectionIdAcademicYearIdCompoundUniqueInput = {
    teacherId: string;
    subjectId: string;
    classSectionId: string;
    academicYearId: string;
};
export type TeachingAssignmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    classSectionId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
};
export type TeachingAssignmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    classSectionId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
};
export type TeachingAssignmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    classSectionId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
};
export type TeachingAssignmentCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutTeacherInput, Prisma.TeachingAssignmentUncheckedCreateWithoutTeacherInput> | Prisma.TeachingAssignmentCreateWithoutTeacherInput[] | Prisma.TeachingAssignmentUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeachingAssignmentCreateOrConnectWithoutTeacherInput | Prisma.TeachingAssignmentCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.TeachingAssignmentCreateManyTeacherInputEnvelope;
    connect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
};
export type TeachingAssignmentUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutTeacherInput, Prisma.TeachingAssignmentUncheckedCreateWithoutTeacherInput> | Prisma.TeachingAssignmentCreateWithoutTeacherInput[] | Prisma.TeachingAssignmentUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeachingAssignmentCreateOrConnectWithoutTeacherInput | Prisma.TeachingAssignmentCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.TeachingAssignmentCreateManyTeacherInputEnvelope;
    connect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
};
export type TeachingAssignmentUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutTeacherInput, Prisma.TeachingAssignmentUncheckedCreateWithoutTeacherInput> | Prisma.TeachingAssignmentCreateWithoutTeacherInput[] | Prisma.TeachingAssignmentUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeachingAssignmentCreateOrConnectWithoutTeacherInput | Prisma.TeachingAssignmentCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.TeachingAssignmentUpsertWithWhereUniqueWithoutTeacherInput | Prisma.TeachingAssignmentUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.TeachingAssignmentCreateManyTeacherInputEnvelope;
    set?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    disconnect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    delete?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    connect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    update?: Prisma.TeachingAssignmentUpdateWithWhereUniqueWithoutTeacherInput | Prisma.TeachingAssignmentUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.TeachingAssignmentUpdateManyWithWhereWithoutTeacherInput | Prisma.TeachingAssignmentUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.TeachingAssignmentScalarWhereInput | Prisma.TeachingAssignmentScalarWhereInput[];
};
export type TeachingAssignmentUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutTeacherInput, Prisma.TeachingAssignmentUncheckedCreateWithoutTeacherInput> | Prisma.TeachingAssignmentCreateWithoutTeacherInput[] | Prisma.TeachingAssignmentUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeachingAssignmentCreateOrConnectWithoutTeacherInput | Prisma.TeachingAssignmentCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.TeachingAssignmentUpsertWithWhereUniqueWithoutTeacherInput | Prisma.TeachingAssignmentUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.TeachingAssignmentCreateManyTeacherInputEnvelope;
    set?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    disconnect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    delete?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    connect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    update?: Prisma.TeachingAssignmentUpdateWithWhereUniqueWithoutTeacherInput | Prisma.TeachingAssignmentUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.TeachingAssignmentUpdateManyWithWhereWithoutTeacherInput | Prisma.TeachingAssignmentUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.TeachingAssignmentScalarWhereInput | Prisma.TeachingAssignmentScalarWhereInput[];
};
export type TeachingAssignmentCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutSubjectInput, Prisma.TeachingAssignmentUncheckedCreateWithoutSubjectInput> | Prisma.TeachingAssignmentCreateWithoutSubjectInput[] | Prisma.TeachingAssignmentUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TeachingAssignmentCreateOrConnectWithoutSubjectInput | Prisma.TeachingAssignmentCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.TeachingAssignmentCreateManySubjectInputEnvelope;
    connect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
};
export type TeachingAssignmentUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutSubjectInput, Prisma.TeachingAssignmentUncheckedCreateWithoutSubjectInput> | Prisma.TeachingAssignmentCreateWithoutSubjectInput[] | Prisma.TeachingAssignmentUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TeachingAssignmentCreateOrConnectWithoutSubjectInput | Prisma.TeachingAssignmentCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.TeachingAssignmentCreateManySubjectInputEnvelope;
    connect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
};
export type TeachingAssignmentUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutSubjectInput, Prisma.TeachingAssignmentUncheckedCreateWithoutSubjectInput> | Prisma.TeachingAssignmentCreateWithoutSubjectInput[] | Prisma.TeachingAssignmentUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TeachingAssignmentCreateOrConnectWithoutSubjectInput | Prisma.TeachingAssignmentCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.TeachingAssignmentUpsertWithWhereUniqueWithoutSubjectInput | Prisma.TeachingAssignmentUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.TeachingAssignmentCreateManySubjectInputEnvelope;
    set?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    disconnect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    delete?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    connect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    update?: Prisma.TeachingAssignmentUpdateWithWhereUniqueWithoutSubjectInput | Prisma.TeachingAssignmentUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.TeachingAssignmentUpdateManyWithWhereWithoutSubjectInput | Prisma.TeachingAssignmentUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.TeachingAssignmentScalarWhereInput | Prisma.TeachingAssignmentScalarWhereInput[];
};
export type TeachingAssignmentUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutSubjectInput, Prisma.TeachingAssignmentUncheckedCreateWithoutSubjectInput> | Prisma.TeachingAssignmentCreateWithoutSubjectInput[] | Prisma.TeachingAssignmentUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TeachingAssignmentCreateOrConnectWithoutSubjectInput | Prisma.TeachingAssignmentCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.TeachingAssignmentUpsertWithWhereUniqueWithoutSubjectInput | Prisma.TeachingAssignmentUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.TeachingAssignmentCreateManySubjectInputEnvelope;
    set?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    disconnect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    delete?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    connect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    update?: Prisma.TeachingAssignmentUpdateWithWhereUniqueWithoutSubjectInput | Prisma.TeachingAssignmentUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.TeachingAssignmentUpdateManyWithWhereWithoutSubjectInput | Prisma.TeachingAssignmentUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.TeachingAssignmentScalarWhereInput | Prisma.TeachingAssignmentScalarWhereInput[];
};
export type TeachingAssignmentCreateNestedManyWithoutClassSectionInput = {
    create?: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutClassSectionInput, Prisma.TeachingAssignmentUncheckedCreateWithoutClassSectionInput> | Prisma.TeachingAssignmentCreateWithoutClassSectionInput[] | Prisma.TeachingAssignmentUncheckedCreateWithoutClassSectionInput[];
    connectOrCreate?: Prisma.TeachingAssignmentCreateOrConnectWithoutClassSectionInput | Prisma.TeachingAssignmentCreateOrConnectWithoutClassSectionInput[];
    createMany?: Prisma.TeachingAssignmentCreateManyClassSectionInputEnvelope;
    connect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
};
export type TeachingAssignmentUncheckedCreateNestedManyWithoutClassSectionInput = {
    create?: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutClassSectionInput, Prisma.TeachingAssignmentUncheckedCreateWithoutClassSectionInput> | Prisma.TeachingAssignmentCreateWithoutClassSectionInput[] | Prisma.TeachingAssignmentUncheckedCreateWithoutClassSectionInput[];
    connectOrCreate?: Prisma.TeachingAssignmentCreateOrConnectWithoutClassSectionInput | Prisma.TeachingAssignmentCreateOrConnectWithoutClassSectionInput[];
    createMany?: Prisma.TeachingAssignmentCreateManyClassSectionInputEnvelope;
    connect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
};
export type TeachingAssignmentUpdateManyWithoutClassSectionNestedInput = {
    create?: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutClassSectionInput, Prisma.TeachingAssignmentUncheckedCreateWithoutClassSectionInput> | Prisma.TeachingAssignmentCreateWithoutClassSectionInput[] | Prisma.TeachingAssignmentUncheckedCreateWithoutClassSectionInput[];
    connectOrCreate?: Prisma.TeachingAssignmentCreateOrConnectWithoutClassSectionInput | Prisma.TeachingAssignmentCreateOrConnectWithoutClassSectionInput[];
    upsert?: Prisma.TeachingAssignmentUpsertWithWhereUniqueWithoutClassSectionInput | Prisma.TeachingAssignmentUpsertWithWhereUniqueWithoutClassSectionInput[];
    createMany?: Prisma.TeachingAssignmentCreateManyClassSectionInputEnvelope;
    set?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    disconnect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    delete?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    connect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    update?: Prisma.TeachingAssignmentUpdateWithWhereUniqueWithoutClassSectionInput | Prisma.TeachingAssignmentUpdateWithWhereUniqueWithoutClassSectionInput[];
    updateMany?: Prisma.TeachingAssignmentUpdateManyWithWhereWithoutClassSectionInput | Prisma.TeachingAssignmentUpdateManyWithWhereWithoutClassSectionInput[];
    deleteMany?: Prisma.TeachingAssignmentScalarWhereInput | Prisma.TeachingAssignmentScalarWhereInput[];
};
export type TeachingAssignmentUncheckedUpdateManyWithoutClassSectionNestedInput = {
    create?: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutClassSectionInput, Prisma.TeachingAssignmentUncheckedCreateWithoutClassSectionInput> | Prisma.TeachingAssignmentCreateWithoutClassSectionInput[] | Prisma.TeachingAssignmentUncheckedCreateWithoutClassSectionInput[];
    connectOrCreate?: Prisma.TeachingAssignmentCreateOrConnectWithoutClassSectionInput | Prisma.TeachingAssignmentCreateOrConnectWithoutClassSectionInput[];
    upsert?: Prisma.TeachingAssignmentUpsertWithWhereUniqueWithoutClassSectionInput | Prisma.TeachingAssignmentUpsertWithWhereUniqueWithoutClassSectionInput[];
    createMany?: Prisma.TeachingAssignmentCreateManyClassSectionInputEnvelope;
    set?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    disconnect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    delete?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    connect?: Prisma.TeachingAssignmentWhereUniqueInput | Prisma.TeachingAssignmentWhereUniqueInput[];
    update?: Prisma.TeachingAssignmentUpdateWithWhereUniqueWithoutClassSectionInput | Prisma.TeachingAssignmentUpdateWithWhereUniqueWithoutClassSectionInput[];
    updateMany?: Prisma.TeachingAssignmentUpdateManyWithWhereWithoutClassSectionInput | Prisma.TeachingAssignmentUpdateManyWithWhereWithoutClassSectionInput[];
    deleteMany?: Prisma.TeachingAssignmentScalarWhereInput | Prisma.TeachingAssignmentScalarWhereInput[];
};
export type TeachingAssignmentCreateWithoutTeacherInput = {
    id?: string;
    academicYearId: string;
    subject: Prisma.SubjectCreateNestedOneWithoutTeachingAssignmentsInput;
    classSection: Prisma.ClassSectionCreateNestedOneWithoutTeachingAssignmentsInput;
};
export type TeachingAssignmentUncheckedCreateWithoutTeacherInput = {
    id?: string;
    subjectId: string;
    classSectionId: string;
    academicYearId: string;
};
export type TeachingAssignmentCreateOrConnectWithoutTeacherInput = {
    where: Prisma.TeachingAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutTeacherInput, Prisma.TeachingAssignmentUncheckedCreateWithoutTeacherInput>;
};
export type TeachingAssignmentCreateManyTeacherInputEnvelope = {
    data: Prisma.TeachingAssignmentCreateManyTeacherInput | Prisma.TeachingAssignmentCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type TeachingAssignmentUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.TeachingAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.TeachingAssignmentUpdateWithoutTeacherInput, Prisma.TeachingAssignmentUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutTeacherInput, Prisma.TeachingAssignmentUncheckedCreateWithoutTeacherInput>;
};
export type TeachingAssignmentUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.TeachingAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.TeachingAssignmentUpdateWithoutTeacherInput, Prisma.TeachingAssignmentUncheckedUpdateWithoutTeacherInput>;
};
export type TeachingAssignmentUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.TeachingAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.TeachingAssignmentUpdateManyMutationInput, Prisma.TeachingAssignmentUncheckedUpdateManyWithoutTeacherInput>;
};
export type TeachingAssignmentScalarWhereInput = {
    AND?: Prisma.TeachingAssignmentScalarWhereInput | Prisma.TeachingAssignmentScalarWhereInput[];
    OR?: Prisma.TeachingAssignmentScalarWhereInput[];
    NOT?: Prisma.TeachingAssignmentScalarWhereInput | Prisma.TeachingAssignmentScalarWhereInput[];
    id?: Prisma.StringFilter<"TeachingAssignment"> | string;
    teacherId?: Prisma.StringFilter<"TeachingAssignment"> | string;
    subjectId?: Prisma.StringFilter<"TeachingAssignment"> | string;
    classSectionId?: Prisma.StringFilter<"TeachingAssignment"> | string;
    academicYearId?: Prisma.StringFilter<"TeachingAssignment"> | string;
};
export type TeachingAssignmentCreateWithoutSubjectInput = {
    id?: string;
    academicYearId: string;
    teacher: Prisma.StaffProfileCreateNestedOneWithoutTeachingAssignmentsInput;
    classSection: Prisma.ClassSectionCreateNestedOneWithoutTeachingAssignmentsInput;
};
export type TeachingAssignmentUncheckedCreateWithoutSubjectInput = {
    id?: string;
    teacherId: string;
    classSectionId: string;
    academicYearId: string;
};
export type TeachingAssignmentCreateOrConnectWithoutSubjectInput = {
    where: Prisma.TeachingAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutSubjectInput, Prisma.TeachingAssignmentUncheckedCreateWithoutSubjectInput>;
};
export type TeachingAssignmentCreateManySubjectInputEnvelope = {
    data: Prisma.TeachingAssignmentCreateManySubjectInput | Prisma.TeachingAssignmentCreateManySubjectInput[];
    skipDuplicates?: boolean;
};
export type TeachingAssignmentUpsertWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.TeachingAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.TeachingAssignmentUpdateWithoutSubjectInput, Prisma.TeachingAssignmentUncheckedUpdateWithoutSubjectInput>;
    create: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutSubjectInput, Prisma.TeachingAssignmentUncheckedCreateWithoutSubjectInput>;
};
export type TeachingAssignmentUpdateWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.TeachingAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.TeachingAssignmentUpdateWithoutSubjectInput, Prisma.TeachingAssignmentUncheckedUpdateWithoutSubjectInput>;
};
export type TeachingAssignmentUpdateManyWithWhereWithoutSubjectInput = {
    where: Prisma.TeachingAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.TeachingAssignmentUpdateManyMutationInput, Prisma.TeachingAssignmentUncheckedUpdateManyWithoutSubjectInput>;
};
export type TeachingAssignmentCreateWithoutClassSectionInput = {
    id?: string;
    academicYearId: string;
    teacher: Prisma.StaffProfileCreateNestedOneWithoutTeachingAssignmentsInput;
    subject: Prisma.SubjectCreateNestedOneWithoutTeachingAssignmentsInput;
};
export type TeachingAssignmentUncheckedCreateWithoutClassSectionInput = {
    id?: string;
    teacherId: string;
    subjectId: string;
    academicYearId: string;
};
export type TeachingAssignmentCreateOrConnectWithoutClassSectionInput = {
    where: Prisma.TeachingAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutClassSectionInput, Prisma.TeachingAssignmentUncheckedCreateWithoutClassSectionInput>;
};
export type TeachingAssignmentCreateManyClassSectionInputEnvelope = {
    data: Prisma.TeachingAssignmentCreateManyClassSectionInput | Prisma.TeachingAssignmentCreateManyClassSectionInput[];
    skipDuplicates?: boolean;
};
export type TeachingAssignmentUpsertWithWhereUniqueWithoutClassSectionInput = {
    where: Prisma.TeachingAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.TeachingAssignmentUpdateWithoutClassSectionInput, Prisma.TeachingAssignmentUncheckedUpdateWithoutClassSectionInput>;
    create: Prisma.XOR<Prisma.TeachingAssignmentCreateWithoutClassSectionInput, Prisma.TeachingAssignmentUncheckedCreateWithoutClassSectionInput>;
};
export type TeachingAssignmentUpdateWithWhereUniqueWithoutClassSectionInput = {
    where: Prisma.TeachingAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.TeachingAssignmentUpdateWithoutClassSectionInput, Prisma.TeachingAssignmentUncheckedUpdateWithoutClassSectionInput>;
};
export type TeachingAssignmentUpdateManyWithWhereWithoutClassSectionInput = {
    where: Prisma.TeachingAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.TeachingAssignmentUpdateManyMutationInput, Prisma.TeachingAssignmentUncheckedUpdateManyWithoutClassSectionInput>;
};
export type TeachingAssignmentCreateManyTeacherInput = {
    id?: string;
    subjectId: string;
    classSectionId: string;
    academicYearId: string;
};
export type TeachingAssignmentUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutTeachingAssignmentsNestedInput;
    classSection?: Prisma.ClassSectionUpdateOneRequiredWithoutTeachingAssignmentsNestedInput;
};
export type TeachingAssignmentUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    classSectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TeachingAssignmentUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    classSectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TeachingAssignmentCreateManySubjectInput = {
    id?: string;
    teacherId: string;
    classSectionId: string;
    academicYearId: string;
};
export type TeachingAssignmentUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacher?: Prisma.StaffProfileUpdateOneRequiredWithoutTeachingAssignmentsNestedInput;
    classSection?: Prisma.ClassSectionUpdateOneRequiredWithoutTeachingAssignmentsNestedInput;
};
export type TeachingAssignmentUncheckedUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    classSectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TeachingAssignmentUncheckedUpdateManyWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    classSectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TeachingAssignmentCreateManyClassSectionInput = {
    id?: string;
    teacherId: string;
    subjectId: string;
    academicYearId: string;
};
export type TeachingAssignmentUpdateWithoutClassSectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacher?: Prisma.StaffProfileUpdateOneRequiredWithoutTeachingAssignmentsNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutTeachingAssignmentsNestedInput;
};
export type TeachingAssignmentUncheckedUpdateWithoutClassSectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TeachingAssignmentUncheckedUpdateManyWithoutClassSectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TeachingAssignmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    subjectId?: boolean;
    classSectionId?: boolean;
    academicYearId?: boolean;
    teacher?: boolean | Prisma.StaffProfileDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    classSection?: boolean | Prisma.ClassSectionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teachingAssignment"]>;
export type TeachingAssignmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    subjectId?: boolean;
    classSectionId?: boolean;
    academicYearId?: boolean;
    teacher?: boolean | Prisma.StaffProfileDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    classSection?: boolean | Prisma.ClassSectionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teachingAssignment"]>;
export type TeachingAssignmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    subjectId?: boolean;
    classSectionId?: boolean;
    academicYearId?: boolean;
    teacher?: boolean | Prisma.StaffProfileDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    classSection?: boolean | Prisma.ClassSectionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teachingAssignment"]>;
export type TeachingAssignmentSelectScalar = {
    id?: boolean;
    teacherId?: boolean;
    subjectId?: boolean;
    classSectionId?: boolean;
    academicYearId?: boolean;
};
export type TeachingAssignmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "teacherId" | "subjectId" | "classSectionId" | "academicYearId", ExtArgs["result"]["teachingAssignment"]>;
export type TeachingAssignmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.StaffProfileDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    classSection?: boolean | Prisma.ClassSectionDefaultArgs<ExtArgs>;
};
export type TeachingAssignmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.StaffProfileDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    classSection?: boolean | Prisma.ClassSectionDefaultArgs<ExtArgs>;
};
export type TeachingAssignmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.StaffProfileDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    classSection?: boolean | Prisma.ClassSectionDefaultArgs<ExtArgs>;
};
export type $TeachingAssignmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TeachingAssignment";
    objects: {
        teacher: Prisma.$StaffProfilePayload<ExtArgs>;
        subject: Prisma.$SubjectPayload<ExtArgs>;
        classSection: Prisma.$ClassSectionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        teacherId: string;
        subjectId: string;
        classSectionId: string;
        academicYearId: string;
    }, ExtArgs["result"]["teachingAssignment"]>;
    composites: {};
};
export type TeachingAssignmentGetPayload<S extends boolean | null | undefined | TeachingAssignmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TeachingAssignmentPayload, S>;
export type TeachingAssignmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TeachingAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TeachingAssignmentCountAggregateInputType | true;
};
export interface TeachingAssignmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TeachingAssignment'];
        meta: {
            name: 'TeachingAssignment';
        };
    };
    findUnique<T extends TeachingAssignmentFindUniqueArgs>(args: Prisma.SelectSubset<T, TeachingAssignmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TeachingAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TeachingAssignmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TeachingAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeachingAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TeachingAssignmentFindFirstArgs>(args?: Prisma.SelectSubset<T, TeachingAssignmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__TeachingAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TeachingAssignmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TeachingAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeachingAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TeachingAssignmentFindManyArgs>(args?: Prisma.SelectSubset<T, TeachingAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TeachingAssignmentCreateArgs>(args: Prisma.SelectSubset<T, TeachingAssignmentCreateArgs<ExtArgs>>): Prisma.Prisma__TeachingAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TeachingAssignmentCreateManyArgs>(args?: Prisma.SelectSubset<T, TeachingAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TeachingAssignmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TeachingAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TeachingAssignmentDeleteArgs>(args: Prisma.SelectSubset<T, TeachingAssignmentDeleteArgs<ExtArgs>>): Prisma.Prisma__TeachingAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TeachingAssignmentUpdateArgs>(args: Prisma.SelectSubset<T, TeachingAssignmentUpdateArgs<ExtArgs>>): Prisma.Prisma__TeachingAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TeachingAssignmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, TeachingAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TeachingAssignmentUpdateManyArgs>(args: Prisma.SelectSubset<T, TeachingAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TeachingAssignmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TeachingAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TeachingAssignmentUpsertArgs>(args: Prisma.SelectSubset<T, TeachingAssignmentUpsertArgs<ExtArgs>>): Prisma.Prisma__TeachingAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TeachingAssignmentCountArgs>(args?: Prisma.Subset<T, TeachingAssignmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TeachingAssignmentCountAggregateOutputType> : number>;
    aggregate<T extends TeachingAssignmentAggregateArgs>(args: Prisma.Subset<T, TeachingAssignmentAggregateArgs>): Prisma.PrismaPromise<GetTeachingAssignmentAggregateType<T>>;
    groupBy<T extends TeachingAssignmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TeachingAssignmentGroupByArgs['orderBy'];
    } : {
        orderBy?: TeachingAssignmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TeachingAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachingAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TeachingAssignmentFieldRefs;
}
export interface Prisma__TeachingAssignmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    teacher<T extends Prisma.StaffProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StaffProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__StaffProfileClient<runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    subject<T extends Prisma.SubjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SubjectDefaultArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    classSection<T extends Prisma.ClassSectionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClassSectionDefaultArgs<ExtArgs>>): Prisma.Prisma__ClassSectionClient<runtime.Types.Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TeachingAssignmentFieldRefs {
    readonly id: Prisma.FieldRef<"TeachingAssignment", 'String'>;
    readonly teacherId: Prisma.FieldRef<"TeachingAssignment", 'String'>;
    readonly subjectId: Prisma.FieldRef<"TeachingAssignment", 'String'>;
    readonly classSectionId: Prisma.FieldRef<"TeachingAssignment", 'String'>;
    readonly academicYearId: Prisma.FieldRef<"TeachingAssignment", 'String'>;
}
export type TeachingAssignmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachingAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TeachingAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TeachingAssignmentInclude<ExtArgs> | null;
    where: Prisma.TeachingAssignmentWhereUniqueInput;
};
export type TeachingAssignmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachingAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TeachingAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TeachingAssignmentInclude<ExtArgs> | null;
    where: Prisma.TeachingAssignmentWhereUniqueInput;
};
export type TeachingAssignmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TeachingAssignmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TeachingAssignmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TeachingAssignmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachingAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TeachingAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TeachingAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeachingAssignmentCreateInput, Prisma.TeachingAssignmentUncheckedCreateInput>;
};
export type TeachingAssignmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TeachingAssignmentCreateManyInput | Prisma.TeachingAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TeachingAssignmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachingAssignmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TeachingAssignmentOmit<ExtArgs> | null;
    data: Prisma.TeachingAssignmentCreateManyInput | Prisma.TeachingAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TeachingAssignmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TeachingAssignmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachingAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TeachingAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TeachingAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeachingAssignmentUpdateInput, Prisma.TeachingAssignmentUncheckedUpdateInput>;
    where: Prisma.TeachingAssignmentWhereUniqueInput;
};
export type TeachingAssignmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TeachingAssignmentUpdateManyMutationInput, Prisma.TeachingAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.TeachingAssignmentWhereInput;
    limit?: number;
};
export type TeachingAssignmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachingAssignmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TeachingAssignmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeachingAssignmentUpdateManyMutationInput, Prisma.TeachingAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.TeachingAssignmentWhereInput;
    limit?: number;
    include?: Prisma.TeachingAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TeachingAssignmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachingAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TeachingAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TeachingAssignmentInclude<ExtArgs> | null;
    where: Prisma.TeachingAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeachingAssignmentCreateInput, Prisma.TeachingAssignmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TeachingAssignmentUpdateInput, Prisma.TeachingAssignmentUncheckedUpdateInput>;
};
export type TeachingAssignmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachingAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TeachingAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TeachingAssignmentInclude<ExtArgs> | null;
    where: Prisma.TeachingAssignmentWhereUniqueInput;
};
export type TeachingAssignmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeachingAssignmentWhereInput;
    limit?: number;
};
export type TeachingAssignmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachingAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TeachingAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TeachingAssignmentInclude<ExtArgs> | null;
};
