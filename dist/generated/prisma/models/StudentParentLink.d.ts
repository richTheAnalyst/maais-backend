import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type StudentParentLinkModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentParentLinkPayload>;
export type AggregateStudentParentLink = {
    _count: StudentParentLinkCountAggregateOutputType | null;
    _min: StudentParentLinkMinAggregateOutputType | null;
    _max: StudentParentLinkMaxAggregateOutputType | null;
};
export type StudentParentLinkMinAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    parentId: string | null;
    relationship: string | null;
    isPrimary: boolean | null;
};
export type StudentParentLinkMaxAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    parentId: string | null;
    relationship: string | null;
    isPrimary: boolean | null;
};
export type StudentParentLinkCountAggregateOutputType = {
    id: number;
    studentId: number;
    parentId: number;
    relationship: number;
    isPrimary: number;
    _all: number;
};
export type StudentParentLinkMinAggregateInputType = {
    id?: true;
    studentId?: true;
    parentId?: true;
    relationship?: true;
    isPrimary?: true;
};
export type StudentParentLinkMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    parentId?: true;
    relationship?: true;
    isPrimary?: true;
};
export type StudentParentLinkCountAggregateInputType = {
    id?: true;
    studentId?: true;
    parentId?: true;
    relationship?: true;
    isPrimary?: true;
    _all?: true;
};
export type StudentParentLinkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentParentLinkWhereInput;
    orderBy?: Prisma.StudentParentLinkOrderByWithRelationInput | Prisma.StudentParentLinkOrderByWithRelationInput[];
    cursor?: Prisma.StudentParentLinkWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentParentLinkCountAggregateInputType;
    _min?: StudentParentLinkMinAggregateInputType;
    _max?: StudentParentLinkMaxAggregateInputType;
};
export type GetStudentParentLinkAggregateType<T extends StudentParentLinkAggregateArgs> = {
    [P in keyof T & keyof AggregateStudentParentLink]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudentParentLink[P]> : Prisma.GetScalarType<T[P], AggregateStudentParentLink[P]>;
};
export type StudentParentLinkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentParentLinkWhereInput;
    orderBy?: Prisma.StudentParentLinkOrderByWithAggregationInput | Prisma.StudentParentLinkOrderByWithAggregationInput[];
    by: Prisma.StudentParentLinkScalarFieldEnum[] | Prisma.StudentParentLinkScalarFieldEnum;
    having?: Prisma.StudentParentLinkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentParentLinkCountAggregateInputType | true;
    _min?: StudentParentLinkMinAggregateInputType;
    _max?: StudentParentLinkMaxAggregateInputType;
};
export type StudentParentLinkGroupByOutputType = {
    id: string;
    studentId: string;
    parentId: string;
    relationship: string;
    isPrimary: boolean;
    _count: StudentParentLinkCountAggregateOutputType | null;
    _min: StudentParentLinkMinAggregateOutputType | null;
    _max: StudentParentLinkMaxAggregateOutputType | null;
};
export type GetStudentParentLinkGroupByPayload<T extends StudentParentLinkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentParentLinkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentParentLinkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentParentLinkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentParentLinkGroupByOutputType[P]>;
}>>;
export type StudentParentLinkWhereInput = {
    AND?: Prisma.StudentParentLinkWhereInput | Prisma.StudentParentLinkWhereInput[];
    OR?: Prisma.StudentParentLinkWhereInput[];
    NOT?: Prisma.StudentParentLinkWhereInput | Prisma.StudentParentLinkWhereInput[];
    id?: Prisma.StringFilter<"StudentParentLink"> | string;
    studentId?: Prisma.StringFilter<"StudentParentLink"> | string;
    parentId?: Prisma.StringFilter<"StudentParentLink"> | string;
    relationship?: Prisma.StringFilter<"StudentParentLink"> | string;
    isPrimary?: Prisma.BoolFilter<"StudentParentLink"> | boolean;
    student?: Prisma.XOR<Prisma.StudentProfileScalarRelationFilter, Prisma.StudentProfileWhereInput>;
    parent?: Prisma.XOR<Prisma.ParentProfileScalarRelationFilter, Prisma.ParentProfileWhereInput>;
};
export type StudentParentLinkOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    relationship?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    student?: Prisma.StudentProfileOrderByWithRelationInput;
    parent?: Prisma.ParentProfileOrderByWithRelationInput;
};
export type StudentParentLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    studentId_parentId?: Prisma.StudentParentLinkStudentIdParentIdCompoundUniqueInput;
    AND?: Prisma.StudentParentLinkWhereInput | Prisma.StudentParentLinkWhereInput[];
    OR?: Prisma.StudentParentLinkWhereInput[];
    NOT?: Prisma.StudentParentLinkWhereInput | Prisma.StudentParentLinkWhereInput[];
    studentId?: Prisma.StringFilter<"StudentParentLink"> | string;
    parentId?: Prisma.StringFilter<"StudentParentLink"> | string;
    relationship?: Prisma.StringFilter<"StudentParentLink"> | string;
    isPrimary?: Prisma.BoolFilter<"StudentParentLink"> | boolean;
    student?: Prisma.XOR<Prisma.StudentProfileScalarRelationFilter, Prisma.StudentProfileWhereInput>;
    parent?: Prisma.XOR<Prisma.ParentProfileScalarRelationFilter, Prisma.ParentProfileWhereInput>;
}, "id" | "studentId_parentId">;
export type StudentParentLinkOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    relationship?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    _count?: Prisma.StudentParentLinkCountOrderByAggregateInput;
    _max?: Prisma.StudentParentLinkMaxOrderByAggregateInput;
    _min?: Prisma.StudentParentLinkMinOrderByAggregateInput;
};
export type StudentParentLinkScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentParentLinkScalarWhereWithAggregatesInput | Prisma.StudentParentLinkScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentParentLinkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentParentLinkScalarWhereWithAggregatesInput | Prisma.StudentParentLinkScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StudentParentLink"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"StudentParentLink"> | string;
    parentId?: Prisma.StringWithAggregatesFilter<"StudentParentLink"> | string;
    relationship?: Prisma.StringWithAggregatesFilter<"StudentParentLink"> | string;
    isPrimary?: Prisma.BoolWithAggregatesFilter<"StudentParentLink"> | boolean;
};
export type StudentParentLinkCreateInput = {
    id?: string;
    relationship: string;
    isPrimary?: boolean;
    student: Prisma.StudentProfileCreateNestedOneWithoutParentLinksInput;
    parent: Prisma.ParentProfileCreateNestedOneWithoutStudentLinksInput;
};
export type StudentParentLinkUncheckedCreateInput = {
    id?: string;
    studentId: string;
    parentId: string;
    relationship: string;
    isPrimary?: boolean;
};
export type StudentParentLinkUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    student?: Prisma.StudentProfileUpdateOneRequiredWithoutParentLinksNestedInput;
    parent?: Prisma.ParentProfileUpdateOneRequiredWithoutStudentLinksNestedInput;
};
export type StudentParentLinkUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.StringFieldUpdateOperationsInput | string;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type StudentParentLinkCreateManyInput = {
    id?: string;
    studentId: string;
    parentId: string;
    relationship: string;
    isPrimary?: boolean;
};
export type StudentParentLinkUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type StudentParentLinkUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.StringFieldUpdateOperationsInput | string;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type StudentParentLinkListRelationFilter = {
    every?: Prisma.StudentParentLinkWhereInput;
    some?: Prisma.StudentParentLinkWhereInput;
    none?: Prisma.StudentParentLinkWhereInput;
};
export type StudentParentLinkOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentParentLinkStudentIdParentIdCompoundUniqueInput = {
    studentId: string;
    parentId: string;
};
export type StudentParentLinkCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    relationship?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
};
export type StudentParentLinkMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    relationship?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
};
export type StudentParentLinkMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    relationship?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
};
export type StudentParentLinkCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentParentLinkCreateWithoutStudentInput, Prisma.StudentParentLinkUncheckedCreateWithoutStudentInput> | Prisma.StudentParentLinkCreateWithoutStudentInput[] | Prisma.StudentParentLinkUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentParentLinkCreateOrConnectWithoutStudentInput | Prisma.StudentParentLinkCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentParentLinkCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
};
export type StudentParentLinkUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentParentLinkCreateWithoutStudentInput, Prisma.StudentParentLinkUncheckedCreateWithoutStudentInput> | Prisma.StudentParentLinkCreateWithoutStudentInput[] | Prisma.StudentParentLinkUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentParentLinkCreateOrConnectWithoutStudentInput | Prisma.StudentParentLinkCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentParentLinkCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
};
export type StudentParentLinkUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentParentLinkCreateWithoutStudentInput, Prisma.StudentParentLinkUncheckedCreateWithoutStudentInput> | Prisma.StudentParentLinkCreateWithoutStudentInput[] | Prisma.StudentParentLinkUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentParentLinkCreateOrConnectWithoutStudentInput | Prisma.StudentParentLinkCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentParentLinkUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentParentLinkUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentParentLinkCreateManyStudentInputEnvelope;
    set?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    disconnect?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    delete?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    connect?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    update?: Prisma.StudentParentLinkUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentParentLinkUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentParentLinkUpdateManyWithWhereWithoutStudentInput | Prisma.StudentParentLinkUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentParentLinkScalarWhereInput | Prisma.StudentParentLinkScalarWhereInput[];
};
export type StudentParentLinkUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentParentLinkCreateWithoutStudentInput, Prisma.StudentParentLinkUncheckedCreateWithoutStudentInput> | Prisma.StudentParentLinkCreateWithoutStudentInput[] | Prisma.StudentParentLinkUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentParentLinkCreateOrConnectWithoutStudentInput | Prisma.StudentParentLinkCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentParentLinkUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentParentLinkUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentParentLinkCreateManyStudentInputEnvelope;
    set?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    disconnect?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    delete?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    connect?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    update?: Prisma.StudentParentLinkUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentParentLinkUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentParentLinkUpdateManyWithWhereWithoutStudentInput | Prisma.StudentParentLinkUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentParentLinkScalarWhereInput | Prisma.StudentParentLinkScalarWhereInput[];
};
export type StudentParentLinkCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.StudentParentLinkCreateWithoutParentInput, Prisma.StudentParentLinkUncheckedCreateWithoutParentInput> | Prisma.StudentParentLinkCreateWithoutParentInput[] | Prisma.StudentParentLinkUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.StudentParentLinkCreateOrConnectWithoutParentInput | Prisma.StudentParentLinkCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.StudentParentLinkCreateManyParentInputEnvelope;
    connect?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
};
export type StudentParentLinkUncheckedCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.StudentParentLinkCreateWithoutParentInput, Prisma.StudentParentLinkUncheckedCreateWithoutParentInput> | Prisma.StudentParentLinkCreateWithoutParentInput[] | Prisma.StudentParentLinkUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.StudentParentLinkCreateOrConnectWithoutParentInput | Prisma.StudentParentLinkCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.StudentParentLinkCreateManyParentInputEnvelope;
    connect?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
};
export type StudentParentLinkUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentParentLinkCreateWithoutParentInput, Prisma.StudentParentLinkUncheckedCreateWithoutParentInput> | Prisma.StudentParentLinkCreateWithoutParentInput[] | Prisma.StudentParentLinkUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.StudentParentLinkCreateOrConnectWithoutParentInput | Prisma.StudentParentLinkCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.StudentParentLinkUpsertWithWhereUniqueWithoutParentInput | Prisma.StudentParentLinkUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.StudentParentLinkCreateManyParentInputEnvelope;
    set?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    disconnect?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    delete?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    connect?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    update?: Prisma.StudentParentLinkUpdateWithWhereUniqueWithoutParentInput | Prisma.StudentParentLinkUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.StudentParentLinkUpdateManyWithWhereWithoutParentInput | Prisma.StudentParentLinkUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.StudentParentLinkScalarWhereInput | Prisma.StudentParentLinkScalarWhereInput[];
};
export type StudentParentLinkUncheckedUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentParentLinkCreateWithoutParentInput, Prisma.StudentParentLinkUncheckedCreateWithoutParentInput> | Prisma.StudentParentLinkCreateWithoutParentInput[] | Prisma.StudentParentLinkUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.StudentParentLinkCreateOrConnectWithoutParentInput | Prisma.StudentParentLinkCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.StudentParentLinkUpsertWithWhereUniqueWithoutParentInput | Prisma.StudentParentLinkUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.StudentParentLinkCreateManyParentInputEnvelope;
    set?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    disconnect?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    delete?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    connect?: Prisma.StudentParentLinkWhereUniqueInput | Prisma.StudentParentLinkWhereUniqueInput[];
    update?: Prisma.StudentParentLinkUpdateWithWhereUniqueWithoutParentInput | Prisma.StudentParentLinkUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.StudentParentLinkUpdateManyWithWhereWithoutParentInput | Prisma.StudentParentLinkUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.StudentParentLinkScalarWhereInput | Prisma.StudentParentLinkScalarWhereInput[];
};
export type StudentParentLinkCreateWithoutStudentInput = {
    id?: string;
    relationship: string;
    isPrimary?: boolean;
    parent: Prisma.ParentProfileCreateNestedOneWithoutStudentLinksInput;
};
export type StudentParentLinkUncheckedCreateWithoutStudentInput = {
    id?: string;
    parentId: string;
    relationship: string;
    isPrimary?: boolean;
};
export type StudentParentLinkCreateOrConnectWithoutStudentInput = {
    where: Prisma.StudentParentLinkWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentParentLinkCreateWithoutStudentInput, Prisma.StudentParentLinkUncheckedCreateWithoutStudentInput>;
};
export type StudentParentLinkCreateManyStudentInputEnvelope = {
    data: Prisma.StudentParentLinkCreateManyStudentInput | Prisma.StudentParentLinkCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type StudentParentLinkUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentParentLinkWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentParentLinkUpdateWithoutStudentInput, Prisma.StudentParentLinkUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.StudentParentLinkCreateWithoutStudentInput, Prisma.StudentParentLinkUncheckedCreateWithoutStudentInput>;
};
export type StudentParentLinkUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentParentLinkWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentParentLinkUpdateWithoutStudentInput, Prisma.StudentParentLinkUncheckedUpdateWithoutStudentInput>;
};
export type StudentParentLinkUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.StudentParentLinkScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentParentLinkUpdateManyMutationInput, Prisma.StudentParentLinkUncheckedUpdateManyWithoutStudentInput>;
};
export type StudentParentLinkScalarWhereInput = {
    AND?: Prisma.StudentParentLinkScalarWhereInput | Prisma.StudentParentLinkScalarWhereInput[];
    OR?: Prisma.StudentParentLinkScalarWhereInput[];
    NOT?: Prisma.StudentParentLinkScalarWhereInput | Prisma.StudentParentLinkScalarWhereInput[];
    id?: Prisma.StringFilter<"StudentParentLink"> | string;
    studentId?: Prisma.StringFilter<"StudentParentLink"> | string;
    parentId?: Prisma.StringFilter<"StudentParentLink"> | string;
    relationship?: Prisma.StringFilter<"StudentParentLink"> | string;
    isPrimary?: Prisma.BoolFilter<"StudentParentLink"> | boolean;
};
export type StudentParentLinkCreateWithoutParentInput = {
    id?: string;
    relationship: string;
    isPrimary?: boolean;
    student: Prisma.StudentProfileCreateNestedOneWithoutParentLinksInput;
};
export type StudentParentLinkUncheckedCreateWithoutParentInput = {
    id?: string;
    studentId: string;
    relationship: string;
    isPrimary?: boolean;
};
export type StudentParentLinkCreateOrConnectWithoutParentInput = {
    where: Prisma.StudentParentLinkWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentParentLinkCreateWithoutParentInput, Prisma.StudentParentLinkUncheckedCreateWithoutParentInput>;
};
export type StudentParentLinkCreateManyParentInputEnvelope = {
    data: Prisma.StudentParentLinkCreateManyParentInput | Prisma.StudentParentLinkCreateManyParentInput[];
    skipDuplicates?: boolean;
};
export type StudentParentLinkUpsertWithWhereUniqueWithoutParentInput = {
    where: Prisma.StudentParentLinkWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentParentLinkUpdateWithoutParentInput, Prisma.StudentParentLinkUncheckedUpdateWithoutParentInput>;
    create: Prisma.XOR<Prisma.StudentParentLinkCreateWithoutParentInput, Prisma.StudentParentLinkUncheckedCreateWithoutParentInput>;
};
export type StudentParentLinkUpdateWithWhereUniqueWithoutParentInput = {
    where: Prisma.StudentParentLinkWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentParentLinkUpdateWithoutParentInput, Prisma.StudentParentLinkUncheckedUpdateWithoutParentInput>;
};
export type StudentParentLinkUpdateManyWithWhereWithoutParentInput = {
    where: Prisma.StudentParentLinkScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentParentLinkUpdateManyMutationInput, Prisma.StudentParentLinkUncheckedUpdateManyWithoutParentInput>;
};
export type StudentParentLinkCreateManyStudentInput = {
    id?: string;
    parentId: string;
    relationship: string;
    isPrimary?: boolean;
};
export type StudentParentLinkUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parent?: Prisma.ParentProfileUpdateOneRequiredWithoutStudentLinksNestedInput;
};
export type StudentParentLinkUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.StringFieldUpdateOperationsInput | string;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type StudentParentLinkUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.StringFieldUpdateOperationsInput | string;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type StudentParentLinkCreateManyParentInput = {
    id?: string;
    studentId: string;
    relationship: string;
    isPrimary?: boolean;
};
export type StudentParentLinkUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    student?: Prisma.StudentProfileUpdateOneRequiredWithoutParentLinksNestedInput;
};
export type StudentParentLinkUncheckedUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type StudentParentLinkUncheckedUpdateManyWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type StudentParentLinkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    parentId?: boolean;
    relationship?: boolean;
    isPrimary?: boolean;
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.ParentProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentParentLink"]>;
export type StudentParentLinkSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    parentId?: boolean;
    relationship?: boolean;
    isPrimary?: boolean;
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.ParentProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentParentLink"]>;
export type StudentParentLinkSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    parentId?: boolean;
    relationship?: boolean;
    isPrimary?: boolean;
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.ParentProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentParentLink"]>;
export type StudentParentLinkSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    parentId?: boolean;
    relationship?: boolean;
    isPrimary?: boolean;
};
export type StudentParentLinkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "parentId" | "relationship" | "isPrimary", ExtArgs["result"]["studentParentLink"]>;
export type StudentParentLinkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.ParentProfileDefaultArgs<ExtArgs>;
};
export type StudentParentLinkIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.ParentProfileDefaultArgs<ExtArgs>;
};
export type StudentParentLinkIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.ParentProfileDefaultArgs<ExtArgs>;
};
export type $StudentParentLinkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StudentParentLink";
    objects: {
        student: Prisma.$StudentProfilePayload<ExtArgs>;
        parent: Prisma.$ParentProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        studentId: string;
        parentId: string;
        relationship: string;
        isPrimary: boolean;
    }, ExtArgs["result"]["studentParentLink"]>;
    composites: {};
};
export type StudentParentLinkGetPayload<S extends boolean | null | undefined | StudentParentLinkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentParentLinkPayload, S>;
export type StudentParentLinkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentParentLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentParentLinkCountAggregateInputType | true;
};
export interface StudentParentLinkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StudentParentLink'];
        meta: {
            name: 'StudentParentLink';
        };
    };
    findUnique<T extends StudentParentLinkFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentParentLinkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentParentLinkClient<runtime.Types.Result.GetResult<Prisma.$StudentParentLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentParentLinkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentParentLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentParentLinkClient<runtime.Types.Result.GetResult<Prisma.$StudentParentLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentParentLinkFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentParentLinkFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentParentLinkClient<runtime.Types.Result.GetResult<Prisma.$StudentParentLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentParentLinkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentParentLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentParentLinkClient<runtime.Types.Result.GetResult<Prisma.$StudentParentLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentParentLinkFindManyArgs>(args?: Prisma.SelectSubset<T, StudentParentLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentParentLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentParentLinkCreateArgs>(args: Prisma.SelectSubset<T, StudentParentLinkCreateArgs<ExtArgs>>): Prisma.Prisma__StudentParentLinkClient<runtime.Types.Result.GetResult<Prisma.$StudentParentLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentParentLinkCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentParentLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentParentLinkCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentParentLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentParentLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentParentLinkDeleteArgs>(args: Prisma.SelectSubset<T, StudentParentLinkDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentParentLinkClient<runtime.Types.Result.GetResult<Prisma.$StudentParentLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentParentLinkUpdateArgs>(args: Prisma.SelectSubset<T, StudentParentLinkUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentParentLinkClient<runtime.Types.Result.GetResult<Prisma.$StudentParentLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentParentLinkDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentParentLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentParentLinkUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentParentLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentParentLinkUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentParentLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentParentLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentParentLinkUpsertArgs>(args: Prisma.SelectSubset<T, StudentParentLinkUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentParentLinkClient<runtime.Types.Result.GetResult<Prisma.$StudentParentLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentParentLinkCountArgs>(args?: Prisma.Subset<T, StudentParentLinkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentParentLinkCountAggregateOutputType> : number>;
    aggregate<T extends StudentParentLinkAggregateArgs>(args: Prisma.Subset<T, StudentParentLinkAggregateArgs>): Prisma.PrismaPromise<GetStudentParentLinkAggregateType<T>>;
    groupBy<T extends StudentParentLinkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentParentLinkGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentParentLinkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentParentLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentParentLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentParentLinkFieldRefs;
}
export interface Prisma__StudentParentLinkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    parent<T extends Prisma.ParentProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParentProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ParentProfileClient<runtime.Types.Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentParentLinkFieldRefs {
    readonly id: Prisma.FieldRef<"StudentParentLink", 'String'>;
    readonly studentId: Prisma.FieldRef<"StudentParentLink", 'String'>;
    readonly parentId: Prisma.FieldRef<"StudentParentLink", 'String'>;
    readonly relationship: Prisma.FieldRef<"StudentParentLink", 'String'>;
    readonly isPrimary: Prisma.FieldRef<"StudentParentLink", 'Boolean'>;
}
export type StudentParentLinkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentParentLinkSelect<ExtArgs> | null;
    omit?: Prisma.StudentParentLinkOmit<ExtArgs> | null;
    include?: Prisma.StudentParentLinkInclude<ExtArgs> | null;
    where: Prisma.StudentParentLinkWhereUniqueInput;
};
export type StudentParentLinkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentParentLinkSelect<ExtArgs> | null;
    omit?: Prisma.StudentParentLinkOmit<ExtArgs> | null;
    include?: Prisma.StudentParentLinkInclude<ExtArgs> | null;
    where: Prisma.StudentParentLinkWhereUniqueInput;
};
export type StudentParentLinkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentParentLinkSelect<ExtArgs> | null;
    omit?: Prisma.StudentParentLinkOmit<ExtArgs> | null;
    include?: Prisma.StudentParentLinkInclude<ExtArgs> | null;
    where?: Prisma.StudentParentLinkWhereInput;
    orderBy?: Prisma.StudentParentLinkOrderByWithRelationInput | Prisma.StudentParentLinkOrderByWithRelationInput[];
    cursor?: Prisma.StudentParentLinkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentParentLinkScalarFieldEnum | Prisma.StudentParentLinkScalarFieldEnum[];
};
export type StudentParentLinkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentParentLinkSelect<ExtArgs> | null;
    omit?: Prisma.StudentParentLinkOmit<ExtArgs> | null;
    include?: Prisma.StudentParentLinkInclude<ExtArgs> | null;
    where?: Prisma.StudentParentLinkWhereInput;
    orderBy?: Prisma.StudentParentLinkOrderByWithRelationInput | Prisma.StudentParentLinkOrderByWithRelationInput[];
    cursor?: Prisma.StudentParentLinkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentParentLinkScalarFieldEnum | Prisma.StudentParentLinkScalarFieldEnum[];
};
export type StudentParentLinkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentParentLinkSelect<ExtArgs> | null;
    omit?: Prisma.StudentParentLinkOmit<ExtArgs> | null;
    include?: Prisma.StudentParentLinkInclude<ExtArgs> | null;
    where?: Prisma.StudentParentLinkWhereInput;
    orderBy?: Prisma.StudentParentLinkOrderByWithRelationInput | Prisma.StudentParentLinkOrderByWithRelationInput[];
    cursor?: Prisma.StudentParentLinkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentParentLinkScalarFieldEnum | Prisma.StudentParentLinkScalarFieldEnum[];
};
export type StudentParentLinkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentParentLinkSelect<ExtArgs> | null;
    omit?: Prisma.StudentParentLinkOmit<ExtArgs> | null;
    include?: Prisma.StudentParentLinkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentParentLinkCreateInput, Prisma.StudentParentLinkUncheckedCreateInput>;
};
export type StudentParentLinkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentParentLinkCreateManyInput | Prisma.StudentParentLinkCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentParentLinkCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentParentLinkSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentParentLinkOmit<ExtArgs> | null;
    data: Prisma.StudentParentLinkCreateManyInput | Prisma.StudentParentLinkCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StudentParentLinkIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StudentParentLinkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentParentLinkSelect<ExtArgs> | null;
    omit?: Prisma.StudentParentLinkOmit<ExtArgs> | null;
    include?: Prisma.StudentParentLinkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentParentLinkUpdateInput, Prisma.StudentParentLinkUncheckedUpdateInput>;
    where: Prisma.StudentParentLinkWhereUniqueInput;
};
export type StudentParentLinkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentParentLinkUpdateManyMutationInput, Prisma.StudentParentLinkUncheckedUpdateManyInput>;
    where?: Prisma.StudentParentLinkWhereInput;
    limit?: number;
};
export type StudentParentLinkUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentParentLinkSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentParentLinkOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentParentLinkUpdateManyMutationInput, Prisma.StudentParentLinkUncheckedUpdateManyInput>;
    where?: Prisma.StudentParentLinkWhereInput;
    limit?: number;
    include?: Prisma.StudentParentLinkIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StudentParentLinkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentParentLinkSelect<ExtArgs> | null;
    omit?: Prisma.StudentParentLinkOmit<ExtArgs> | null;
    include?: Prisma.StudentParentLinkInclude<ExtArgs> | null;
    where: Prisma.StudentParentLinkWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentParentLinkCreateInput, Prisma.StudentParentLinkUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentParentLinkUpdateInput, Prisma.StudentParentLinkUncheckedUpdateInput>;
};
export type StudentParentLinkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentParentLinkSelect<ExtArgs> | null;
    omit?: Prisma.StudentParentLinkOmit<ExtArgs> | null;
    include?: Prisma.StudentParentLinkInclude<ExtArgs> | null;
    where: Prisma.StudentParentLinkWhereUniqueInput;
};
export type StudentParentLinkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentParentLinkWhereInput;
    limit?: number;
};
export type StudentParentLinkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentParentLinkSelect<ExtArgs> | null;
    omit?: Prisma.StudentParentLinkOmit<ExtArgs> | null;
    include?: Prisma.StudentParentLinkInclude<ExtArgs> | null;
};
