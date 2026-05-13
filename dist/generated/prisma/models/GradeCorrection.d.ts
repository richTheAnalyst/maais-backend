import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type GradeCorrectionModel = runtime.Types.Result.DefaultSelection<Prisma.$GradeCorrectionPayload>;
export type AggregateGradeCorrection = {
    _count: GradeCorrectionCountAggregateOutputType | null;
    _min: GradeCorrectionMinAggregateOutputType | null;
    _max: GradeCorrectionMaxAggregateOutputType | null;
};
export type GradeCorrectionMinAggregateOutputType = {
    id: string | null;
    gradeEntryId: string | null;
    changedById: string | null;
    fieldChanged: string | null;
    oldValue: string | null;
    newValue: string | null;
    reason: string | null;
    createdAt: Date | null;
};
export type GradeCorrectionMaxAggregateOutputType = {
    id: string | null;
    gradeEntryId: string | null;
    changedById: string | null;
    fieldChanged: string | null;
    oldValue: string | null;
    newValue: string | null;
    reason: string | null;
    createdAt: Date | null;
};
export type GradeCorrectionCountAggregateOutputType = {
    id: number;
    gradeEntryId: number;
    changedById: number;
    fieldChanged: number;
    oldValue: number;
    newValue: number;
    reason: number;
    createdAt: number;
    _all: number;
};
export type GradeCorrectionMinAggregateInputType = {
    id?: true;
    gradeEntryId?: true;
    changedById?: true;
    fieldChanged?: true;
    oldValue?: true;
    newValue?: true;
    reason?: true;
    createdAt?: true;
};
export type GradeCorrectionMaxAggregateInputType = {
    id?: true;
    gradeEntryId?: true;
    changedById?: true;
    fieldChanged?: true;
    oldValue?: true;
    newValue?: true;
    reason?: true;
    createdAt?: true;
};
export type GradeCorrectionCountAggregateInputType = {
    id?: true;
    gradeEntryId?: true;
    changedById?: true;
    fieldChanged?: true;
    oldValue?: true;
    newValue?: true;
    reason?: true;
    createdAt?: true;
    _all?: true;
};
export type GradeCorrectionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeCorrectionWhereInput;
    orderBy?: Prisma.GradeCorrectionOrderByWithRelationInput | Prisma.GradeCorrectionOrderByWithRelationInput[];
    cursor?: Prisma.GradeCorrectionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GradeCorrectionCountAggregateInputType;
    _min?: GradeCorrectionMinAggregateInputType;
    _max?: GradeCorrectionMaxAggregateInputType;
};
export type GetGradeCorrectionAggregateType<T extends GradeCorrectionAggregateArgs> = {
    [P in keyof T & keyof AggregateGradeCorrection]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGradeCorrection[P]> : Prisma.GetScalarType<T[P], AggregateGradeCorrection[P]>;
};
export type GradeCorrectionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeCorrectionWhereInput;
    orderBy?: Prisma.GradeCorrectionOrderByWithAggregationInput | Prisma.GradeCorrectionOrderByWithAggregationInput[];
    by: Prisma.GradeCorrectionScalarFieldEnum[] | Prisma.GradeCorrectionScalarFieldEnum;
    having?: Prisma.GradeCorrectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GradeCorrectionCountAggregateInputType | true;
    _min?: GradeCorrectionMinAggregateInputType;
    _max?: GradeCorrectionMaxAggregateInputType;
};
export type GradeCorrectionGroupByOutputType = {
    id: string;
    gradeEntryId: string;
    changedById: string;
    fieldChanged: string;
    oldValue: string | null;
    newValue: string;
    reason: string;
    createdAt: Date;
    _count: GradeCorrectionCountAggregateOutputType | null;
    _min: GradeCorrectionMinAggregateOutputType | null;
    _max: GradeCorrectionMaxAggregateOutputType | null;
};
export type GetGradeCorrectionGroupByPayload<T extends GradeCorrectionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GradeCorrectionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GradeCorrectionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GradeCorrectionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GradeCorrectionGroupByOutputType[P]>;
}>>;
export type GradeCorrectionWhereInput = {
    AND?: Prisma.GradeCorrectionWhereInput | Prisma.GradeCorrectionWhereInput[];
    OR?: Prisma.GradeCorrectionWhereInput[];
    NOT?: Prisma.GradeCorrectionWhereInput | Prisma.GradeCorrectionWhereInput[];
    id?: Prisma.StringFilter<"GradeCorrection"> | string;
    gradeEntryId?: Prisma.StringFilter<"GradeCorrection"> | string;
    changedById?: Prisma.StringFilter<"GradeCorrection"> | string;
    fieldChanged?: Prisma.StringFilter<"GradeCorrection"> | string;
    oldValue?: Prisma.StringNullableFilter<"GradeCorrection"> | string | null;
    newValue?: Prisma.StringFilter<"GradeCorrection"> | string;
    reason?: Prisma.StringFilter<"GradeCorrection"> | string;
    createdAt?: Prisma.DateTimeFilter<"GradeCorrection"> | Date | string;
    gradeEntry?: Prisma.XOR<Prisma.GradeEntryScalarRelationFilter, Prisma.GradeEntryWhereInput>;
};
export type GradeCorrectionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    gradeEntryId?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    fieldChanged?: Prisma.SortOrder;
    oldValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    newValue?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    gradeEntry?: Prisma.GradeEntryOrderByWithRelationInput;
};
export type GradeCorrectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GradeCorrectionWhereInput | Prisma.GradeCorrectionWhereInput[];
    OR?: Prisma.GradeCorrectionWhereInput[];
    NOT?: Prisma.GradeCorrectionWhereInput | Prisma.GradeCorrectionWhereInput[];
    gradeEntryId?: Prisma.StringFilter<"GradeCorrection"> | string;
    changedById?: Prisma.StringFilter<"GradeCorrection"> | string;
    fieldChanged?: Prisma.StringFilter<"GradeCorrection"> | string;
    oldValue?: Prisma.StringNullableFilter<"GradeCorrection"> | string | null;
    newValue?: Prisma.StringFilter<"GradeCorrection"> | string;
    reason?: Prisma.StringFilter<"GradeCorrection"> | string;
    createdAt?: Prisma.DateTimeFilter<"GradeCorrection"> | Date | string;
    gradeEntry?: Prisma.XOR<Prisma.GradeEntryScalarRelationFilter, Prisma.GradeEntryWhereInput>;
}, "id">;
export type GradeCorrectionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    gradeEntryId?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    fieldChanged?: Prisma.SortOrder;
    oldValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    newValue?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.GradeCorrectionCountOrderByAggregateInput;
    _max?: Prisma.GradeCorrectionMaxOrderByAggregateInput;
    _min?: Prisma.GradeCorrectionMinOrderByAggregateInput;
};
export type GradeCorrectionScalarWhereWithAggregatesInput = {
    AND?: Prisma.GradeCorrectionScalarWhereWithAggregatesInput | Prisma.GradeCorrectionScalarWhereWithAggregatesInput[];
    OR?: Prisma.GradeCorrectionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GradeCorrectionScalarWhereWithAggregatesInput | Prisma.GradeCorrectionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GradeCorrection"> | string;
    gradeEntryId?: Prisma.StringWithAggregatesFilter<"GradeCorrection"> | string;
    changedById?: Prisma.StringWithAggregatesFilter<"GradeCorrection"> | string;
    fieldChanged?: Prisma.StringWithAggregatesFilter<"GradeCorrection"> | string;
    oldValue?: Prisma.StringNullableWithAggregatesFilter<"GradeCorrection"> | string | null;
    newValue?: Prisma.StringWithAggregatesFilter<"GradeCorrection"> | string;
    reason?: Prisma.StringWithAggregatesFilter<"GradeCorrection"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GradeCorrection"> | Date | string;
};
export type GradeCorrectionCreateInput = {
    id?: string;
    changedById: string;
    fieldChanged: string;
    oldValue?: string | null;
    newValue: string;
    reason: string;
    createdAt?: Date | string;
    gradeEntry: Prisma.GradeEntryCreateNestedOneWithoutCorrectionsInput;
};
export type GradeCorrectionUncheckedCreateInput = {
    id?: string;
    gradeEntryId: string;
    changedById: string;
    fieldChanged: string;
    oldValue?: string | null;
    newValue: string;
    reason: string;
    createdAt?: Date | string;
};
export type GradeCorrectionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    changedById?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldChanged?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gradeEntry?: Prisma.GradeEntryUpdateOneRequiredWithoutCorrectionsNestedInput;
};
export type GradeCorrectionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gradeEntryId?: Prisma.StringFieldUpdateOperationsInput | string;
    changedById?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldChanged?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeCorrectionCreateManyInput = {
    id?: string;
    gradeEntryId: string;
    changedById: string;
    fieldChanged: string;
    oldValue?: string | null;
    newValue: string;
    reason: string;
    createdAt?: Date | string;
};
export type GradeCorrectionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    changedById?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldChanged?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeCorrectionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gradeEntryId?: Prisma.StringFieldUpdateOperationsInput | string;
    changedById?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldChanged?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeCorrectionListRelationFilter = {
    every?: Prisma.GradeCorrectionWhereInput;
    some?: Prisma.GradeCorrectionWhereInput;
    none?: Prisma.GradeCorrectionWhereInput;
};
export type GradeCorrectionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GradeCorrectionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    gradeEntryId?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    fieldChanged?: Prisma.SortOrder;
    oldValue?: Prisma.SortOrder;
    newValue?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GradeCorrectionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    gradeEntryId?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    fieldChanged?: Prisma.SortOrder;
    oldValue?: Prisma.SortOrder;
    newValue?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GradeCorrectionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    gradeEntryId?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    fieldChanged?: Prisma.SortOrder;
    oldValue?: Prisma.SortOrder;
    newValue?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GradeCorrectionCreateNestedManyWithoutGradeEntryInput = {
    create?: Prisma.XOR<Prisma.GradeCorrectionCreateWithoutGradeEntryInput, Prisma.GradeCorrectionUncheckedCreateWithoutGradeEntryInput> | Prisma.GradeCorrectionCreateWithoutGradeEntryInput[] | Prisma.GradeCorrectionUncheckedCreateWithoutGradeEntryInput[];
    connectOrCreate?: Prisma.GradeCorrectionCreateOrConnectWithoutGradeEntryInput | Prisma.GradeCorrectionCreateOrConnectWithoutGradeEntryInput[];
    createMany?: Prisma.GradeCorrectionCreateManyGradeEntryInputEnvelope;
    connect?: Prisma.GradeCorrectionWhereUniqueInput | Prisma.GradeCorrectionWhereUniqueInput[];
};
export type GradeCorrectionUncheckedCreateNestedManyWithoutGradeEntryInput = {
    create?: Prisma.XOR<Prisma.GradeCorrectionCreateWithoutGradeEntryInput, Prisma.GradeCorrectionUncheckedCreateWithoutGradeEntryInput> | Prisma.GradeCorrectionCreateWithoutGradeEntryInput[] | Prisma.GradeCorrectionUncheckedCreateWithoutGradeEntryInput[];
    connectOrCreate?: Prisma.GradeCorrectionCreateOrConnectWithoutGradeEntryInput | Prisma.GradeCorrectionCreateOrConnectWithoutGradeEntryInput[];
    createMany?: Prisma.GradeCorrectionCreateManyGradeEntryInputEnvelope;
    connect?: Prisma.GradeCorrectionWhereUniqueInput | Prisma.GradeCorrectionWhereUniqueInput[];
};
export type GradeCorrectionUpdateManyWithoutGradeEntryNestedInput = {
    create?: Prisma.XOR<Prisma.GradeCorrectionCreateWithoutGradeEntryInput, Prisma.GradeCorrectionUncheckedCreateWithoutGradeEntryInput> | Prisma.GradeCorrectionCreateWithoutGradeEntryInput[] | Prisma.GradeCorrectionUncheckedCreateWithoutGradeEntryInput[];
    connectOrCreate?: Prisma.GradeCorrectionCreateOrConnectWithoutGradeEntryInput | Prisma.GradeCorrectionCreateOrConnectWithoutGradeEntryInput[];
    upsert?: Prisma.GradeCorrectionUpsertWithWhereUniqueWithoutGradeEntryInput | Prisma.GradeCorrectionUpsertWithWhereUniqueWithoutGradeEntryInput[];
    createMany?: Prisma.GradeCorrectionCreateManyGradeEntryInputEnvelope;
    set?: Prisma.GradeCorrectionWhereUniqueInput | Prisma.GradeCorrectionWhereUniqueInput[];
    disconnect?: Prisma.GradeCorrectionWhereUniqueInput | Prisma.GradeCorrectionWhereUniqueInput[];
    delete?: Prisma.GradeCorrectionWhereUniqueInput | Prisma.GradeCorrectionWhereUniqueInput[];
    connect?: Prisma.GradeCorrectionWhereUniqueInput | Prisma.GradeCorrectionWhereUniqueInput[];
    update?: Prisma.GradeCorrectionUpdateWithWhereUniqueWithoutGradeEntryInput | Prisma.GradeCorrectionUpdateWithWhereUniqueWithoutGradeEntryInput[];
    updateMany?: Prisma.GradeCorrectionUpdateManyWithWhereWithoutGradeEntryInput | Prisma.GradeCorrectionUpdateManyWithWhereWithoutGradeEntryInput[];
    deleteMany?: Prisma.GradeCorrectionScalarWhereInput | Prisma.GradeCorrectionScalarWhereInput[];
};
export type GradeCorrectionUncheckedUpdateManyWithoutGradeEntryNestedInput = {
    create?: Prisma.XOR<Prisma.GradeCorrectionCreateWithoutGradeEntryInput, Prisma.GradeCorrectionUncheckedCreateWithoutGradeEntryInput> | Prisma.GradeCorrectionCreateWithoutGradeEntryInput[] | Prisma.GradeCorrectionUncheckedCreateWithoutGradeEntryInput[];
    connectOrCreate?: Prisma.GradeCorrectionCreateOrConnectWithoutGradeEntryInput | Prisma.GradeCorrectionCreateOrConnectWithoutGradeEntryInput[];
    upsert?: Prisma.GradeCorrectionUpsertWithWhereUniqueWithoutGradeEntryInput | Prisma.GradeCorrectionUpsertWithWhereUniqueWithoutGradeEntryInput[];
    createMany?: Prisma.GradeCorrectionCreateManyGradeEntryInputEnvelope;
    set?: Prisma.GradeCorrectionWhereUniqueInput | Prisma.GradeCorrectionWhereUniqueInput[];
    disconnect?: Prisma.GradeCorrectionWhereUniqueInput | Prisma.GradeCorrectionWhereUniqueInput[];
    delete?: Prisma.GradeCorrectionWhereUniqueInput | Prisma.GradeCorrectionWhereUniqueInput[];
    connect?: Prisma.GradeCorrectionWhereUniqueInput | Prisma.GradeCorrectionWhereUniqueInput[];
    update?: Prisma.GradeCorrectionUpdateWithWhereUniqueWithoutGradeEntryInput | Prisma.GradeCorrectionUpdateWithWhereUniqueWithoutGradeEntryInput[];
    updateMany?: Prisma.GradeCorrectionUpdateManyWithWhereWithoutGradeEntryInput | Prisma.GradeCorrectionUpdateManyWithWhereWithoutGradeEntryInput[];
    deleteMany?: Prisma.GradeCorrectionScalarWhereInput | Prisma.GradeCorrectionScalarWhereInput[];
};
export type GradeCorrectionCreateWithoutGradeEntryInput = {
    id?: string;
    changedById: string;
    fieldChanged: string;
    oldValue?: string | null;
    newValue: string;
    reason: string;
    createdAt?: Date | string;
};
export type GradeCorrectionUncheckedCreateWithoutGradeEntryInput = {
    id?: string;
    changedById: string;
    fieldChanged: string;
    oldValue?: string | null;
    newValue: string;
    reason: string;
    createdAt?: Date | string;
};
export type GradeCorrectionCreateOrConnectWithoutGradeEntryInput = {
    where: Prisma.GradeCorrectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.GradeCorrectionCreateWithoutGradeEntryInput, Prisma.GradeCorrectionUncheckedCreateWithoutGradeEntryInput>;
};
export type GradeCorrectionCreateManyGradeEntryInputEnvelope = {
    data: Prisma.GradeCorrectionCreateManyGradeEntryInput | Prisma.GradeCorrectionCreateManyGradeEntryInput[];
    skipDuplicates?: boolean;
};
export type GradeCorrectionUpsertWithWhereUniqueWithoutGradeEntryInput = {
    where: Prisma.GradeCorrectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.GradeCorrectionUpdateWithoutGradeEntryInput, Prisma.GradeCorrectionUncheckedUpdateWithoutGradeEntryInput>;
    create: Prisma.XOR<Prisma.GradeCorrectionCreateWithoutGradeEntryInput, Prisma.GradeCorrectionUncheckedCreateWithoutGradeEntryInput>;
};
export type GradeCorrectionUpdateWithWhereUniqueWithoutGradeEntryInput = {
    where: Prisma.GradeCorrectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.GradeCorrectionUpdateWithoutGradeEntryInput, Prisma.GradeCorrectionUncheckedUpdateWithoutGradeEntryInput>;
};
export type GradeCorrectionUpdateManyWithWhereWithoutGradeEntryInput = {
    where: Prisma.GradeCorrectionScalarWhereInput;
    data: Prisma.XOR<Prisma.GradeCorrectionUpdateManyMutationInput, Prisma.GradeCorrectionUncheckedUpdateManyWithoutGradeEntryInput>;
};
export type GradeCorrectionScalarWhereInput = {
    AND?: Prisma.GradeCorrectionScalarWhereInput | Prisma.GradeCorrectionScalarWhereInput[];
    OR?: Prisma.GradeCorrectionScalarWhereInput[];
    NOT?: Prisma.GradeCorrectionScalarWhereInput | Prisma.GradeCorrectionScalarWhereInput[];
    id?: Prisma.StringFilter<"GradeCorrection"> | string;
    gradeEntryId?: Prisma.StringFilter<"GradeCorrection"> | string;
    changedById?: Prisma.StringFilter<"GradeCorrection"> | string;
    fieldChanged?: Prisma.StringFilter<"GradeCorrection"> | string;
    oldValue?: Prisma.StringNullableFilter<"GradeCorrection"> | string | null;
    newValue?: Prisma.StringFilter<"GradeCorrection"> | string;
    reason?: Prisma.StringFilter<"GradeCorrection"> | string;
    createdAt?: Prisma.DateTimeFilter<"GradeCorrection"> | Date | string;
};
export type GradeCorrectionCreateManyGradeEntryInput = {
    id?: string;
    changedById: string;
    fieldChanged: string;
    oldValue?: string | null;
    newValue: string;
    reason: string;
    createdAt?: Date | string;
};
export type GradeCorrectionUpdateWithoutGradeEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    changedById?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldChanged?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeCorrectionUncheckedUpdateWithoutGradeEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    changedById?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldChanged?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeCorrectionUncheckedUpdateManyWithoutGradeEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    changedById?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldChanged?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeCorrectionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    gradeEntryId?: boolean;
    changedById?: boolean;
    fieldChanged?: boolean;
    oldValue?: boolean;
    newValue?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    gradeEntry?: boolean | Prisma.GradeEntryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gradeCorrection"]>;
export type GradeCorrectionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    gradeEntryId?: boolean;
    changedById?: boolean;
    fieldChanged?: boolean;
    oldValue?: boolean;
    newValue?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    gradeEntry?: boolean | Prisma.GradeEntryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gradeCorrection"]>;
export type GradeCorrectionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    gradeEntryId?: boolean;
    changedById?: boolean;
    fieldChanged?: boolean;
    oldValue?: boolean;
    newValue?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    gradeEntry?: boolean | Prisma.GradeEntryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gradeCorrection"]>;
export type GradeCorrectionSelectScalar = {
    id?: boolean;
    gradeEntryId?: boolean;
    changedById?: boolean;
    fieldChanged?: boolean;
    oldValue?: boolean;
    newValue?: boolean;
    reason?: boolean;
    createdAt?: boolean;
};
export type GradeCorrectionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "gradeEntryId" | "changedById" | "fieldChanged" | "oldValue" | "newValue" | "reason" | "createdAt", ExtArgs["result"]["gradeCorrection"]>;
export type GradeCorrectionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    gradeEntry?: boolean | Prisma.GradeEntryDefaultArgs<ExtArgs>;
};
export type GradeCorrectionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    gradeEntry?: boolean | Prisma.GradeEntryDefaultArgs<ExtArgs>;
};
export type GradeCorrectionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    gradeEntry?: boolean | Prisma.GradeEntryDefaultArgs<ExtArgs>;
};
export type $GradeCorrectionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GradeCorrection";
    objects: {
        gradeEntry: Prisma.$GradeEntryPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        gradeEntryId: string;
        changedById: string;
        fieldChanged: string;
        oldValue: string | null;
        newValue: string;
        reason: string;
        createdAt: Date;
    }, ExtArgs["result"]["gradeCorrection"]>;
    composites: {};
};
export type GradeCorrectionGetPayload<S extends boolean | null | undefined | GradeCorrectionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GradeCorrectionPayload, S>;
export type GradeCorrectionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GradeCorrectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GradeCorrectionCountAggregateInputType | true;
};
export interface GradeCorrectionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GradeCorrection'];
        meta: {
            name: 'GradeCorrection';
        };
    };
    findUnique<T extends GradeCorrectionFindUniqueArgs>(args: Prisma.SelectSubset<T, GradeCorrectionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GradeCorrectionClient<runtime.Types.Result.GetResult<Prisma.$GradeCorrectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GradeCorrectionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GradeCorrectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GradeCorrectionClient<runtime.Types.Result.GetResult<Prisma.$GradeCorrectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GradeCorrectionFindFirstArgs>(args?: Prisma.SelectSubset<T, GradeCorrectionFindFirstArgs<ExtArgs>>): Prisma.Prisma__GradeCorrectionClient<runtime.Types.Result.GetResult<Prisma.$GradeCorrectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GradeCorrectionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GradeCorrectionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GradeCorrectionClient<runtime.Types.Result.GetResult<Prisma.$GradeCorrectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GradeCorrectionFindManyArgs>(args?: Prisma.SelectSubset<T, GradeCorrectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradeCorrectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GradeCorrectionCreateArgs>(args: Prisma.SelectSubset<T, GradeCorrectionCreateArgs<ExtArgs>>): Prisma.Prisma__GradeCorrectionClient<runtime.Types.Result.GetResult<Prisma.$GradeCorrectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GradeCorrectionCreateManyArgs>(args?: Prisma.SelectSubset<T, GradeCorrectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GradeCorrectionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GradeCorrectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradeCorrectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GradeCorrectionDeleteArgs>(args: Prisma.SelectSubset<T, GradeCorrectionDeleteArgs<ExtArgs>>): Prisma.Prisma__GradeCorrectionClient<runtime.Types.Result.GetResult<Prisma.$GradeCorrectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GradeCorrectionUpdateArgs>(args: Prisma.SelectSubset<T, GradeCorrectionUpdateArgs<ExtArgs>>): Prisma.Prisma__GradeCorrectionClient<runtime.Types.Result.GetResult<Prisma.$GradeCorrectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GradeCorrectionDeleteManyArgs>(args?: Prisma.SelectSubset<T, GradeCorrectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GradeCorrectionUpdateManyArgs>(args: Prisma.SelectSubset<T, GradeCorrectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GradeCorrectionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GradeCorrectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradeCorrectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GradeCorrectionUpsertArgs>(args: Prisma.SelectSubset<T, GradeCorrectionUpsertArgs<ExtArgs>>): Prisma.Prisma__GradeCorrectionClient<runtime.Types.Result.GetResult<Prisma.$GradeCorrectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GradeCorrectionCountArgs>(args?: Prisma.Subset<T, GradeCorrectionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GradeCorrectionCountAggregateOutputType> : number>;
    aggregate<T extends GradeCorrectionAggregateArgs>(args: Prisma.Subset<T, GradeCorrectionAggregateArgs>): Prisma.PrismaPromise<GetGradeCorrectionAggregateType<T>>;
    groupBy<T extends GradeCorrectionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GradeCorrectionGroupByArgs['orderBy'];
    } : {
        orderBy?: GradeCorrectionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GradeCorrectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeCorrectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GradeCorrectionFieldRefs;
}
export interface Prisma__GradeCorrectionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    gradeEntry<T extends Prisma.GradeEntryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GradeEntryDefaultArgs<ExtArgs>>): Prisma.Prisma__GradeEntryClient<runtime.Types.Result.GetResult<Prisma.$GradeEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GradeCorrectionFieldRefs {
    readonly id: Prisma.FieldRef<"GradeCorrection", 'String'>;
    readonly gradeEntryId: Prisma.FieldRef<"GradeCorrection", 'String'>;
    readonly changedById: Prisma.FieldRef<"GradeCorrection", 'String'>;
    readonly fieldChanged: Prisma.FieldRef<"GradeCorrection", 'String'>;
    readonly oldValue: Prisma.FieldRef<"GradeCorrection", 'String'>;
    readonly newValue: Prisma.FieldRef<"GradeCorrection", 'String'>;
    readonly reason: Prisma.FieldRef<"GradeCorrection", 'String'>;
    readonly createdAt: Prisma.FieldRef<"GradeCorrection", 'DateTime'>;
}
export type GradeCorrectionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeCorrectionSelect<ExtArgs> | null;
    omit?: Prisma.GradeCorrectionOmit<ExtArgs> | null;
    include?: Prisma.GradeCorrectionInclude<ExtArgs> | null;
    where: Prisma.GradeCorrectionWhereUniqueInput;
};
export type GradeCorrectionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeCorrectionSelect<ExtArgs> | null;
    omit?: Prisma.GradeCorrectionOmit<ExtArgs> | null;
    include?: Prisma.GradeCorrectionInclude<ExtArgs> | null;
    where: Prisma.GradeCorrectionWhereUniqueInput;
};
export type GradeCorrectionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeCorrectionSelect<ExtArgs> | null;
    omit?: Prisma.GradeCorrectionOmit<ExtArgs> | null;
    include?: Prisma.GradeCorrectionInclude<ExtArgs> | null;
    where?: Prisma.GradeCorrectionWhereInput;
    orderBy?: Prisma.GradeCorrectionOrderByWithRelationInput | Prisma.GradeCorrectionOrderByWithRelationInput[];
    cursor?: Prisma.GradeCorrectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradeCorrectionScalarFieldEnum | Prisma.GradeCorrectionScalarFieldEnum[];
};
export type GradeCorrectionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeCorrectionSelect<ExtArgs> | null;
    omit?: Prisma.GradeCorrectionOmit<ExtArgs> | null;
    include?: Prisma.GradeCorrectionInclude<ExtArgs> | null;
    where?: Prisma.GradeCorrectionWhereInput;
    orderBy?: Prisma.GradeCorrectionOrderByWithRelationInput | Prisma.GradeCorrectionOrderByWithRelationInput[];
    cursor?: Prisma.GradeCorrectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradeCorrectionScalarFieldEnum | Prisma.GradeCorrectionScalarFieldEnum[];
};
export type GradeCorrectionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeCorrectionSelect<ExtArgs> | null;
    omit?: Prisma.GradeCorrectionOmit<ExtArgs> | null;
    include?: Prisma.GradeCorrectionInclude<ExtArgs> | null;
    where?: Prisma.GradeCorrectionWhereInput;
    orderBy?: Prisma.GradeCorrectionOrderByWithRelationInput | Prisma.GradeCorrectionOrderByWithRelationInput[];
    cursor?: Prisma.GradeCorrectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradeCorrectionScalarFieldEnum | Prisma.GradeCorrectionScalarFieldEnum[];
};
export type GradeCorrectionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeCorrectionSelect<ExtArgs> | null;
    omit?: Prisma.GradeCorrectionOmit<ExtArgs> | null;
    include?: Prisma.GradeCorrectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GradeCorrectionCreateInput, Prisma.GradeCorrectionUncheckedCreateInput>;
};
export type GradeCorrectionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GradeCorrectionCreateManyInput | Prisma.GradeCorrectionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GradeCorrectionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeCorrectionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GradeCorrectionOmit<ExtArgs> | null;
    data: Prisma.GradeCorrectionCreateManyInput | Prisma.GradeCorrectionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GradeCorrectionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GradeCorrectionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeCorrectionSelect<ExtArgs> | null;
    omit?: Prisma.GradeCorrectionOmit<ExtArgs> | null;
    include?: Prisma.GradeCorrectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GradeCorrectionUpdateInput, Prisma.GradeCorrectionUncheckedUpdateInput>;
    where: Prisma.GradeCorrectionWhereUniqueInput;
};
export type GradeCorrectionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GradeCorrectionUpdateManyMutationInput, Prisma.GradeCorrectionUncheckedUpdateManyInput>;
    where?: Prisma.GradeCorrectionWhereInput;
    limit?: number;
};
export type GradeCorrectionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeCorrectionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GradeCorrectionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GradeCorrectionUpdateManyMutationInput, Prisma.GradeCorrectionUncheckedUpdateManyInput>;
    where?: Prisma.GradeCorrectionWhereInput;
    limit?: number;
    include?: Prisma.GradeCorrectionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GradeCorrectionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeCorrectionSelect<ExtArgs> | null;
    omit?: Prisma.GradeCorrectionOmit<ExtArgs> | null;
    include?: Prisma.GradeCorrectionInclude<ExtArgs> | null;
    where: Prisma.GradeCorrectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.GradeCorrectionCreateInput, Prisma.GradeCorrectionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GradeCorrectionUpdateInput, Prisma.GradeCorrectionUncheckedUpdateInput>;
};
export type GradeCorrectionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeCorrectionSelect<ExtArgs> | null;
    omit?: Prisma.GradeCorrectionOmit<ExtArgs> | null;
    include?: Prisma.GradeCorrectionInclude<ExtArgs> | null;
    where: Prisma.GradeCorrectionWhereUniqueInput;
};
export type GradeCorrectionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeCorrectionWhereInput;
    limit?: number;
};
export type GradeCorrectionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeCorrectionSelect<ExtArgs> | null;
    omit?: Prisma.GradeCorrectionOmit<ExtArgs> | null;
    include?: Prisma.GradeCorrectionInclude<ExtArgs> | null;
};
