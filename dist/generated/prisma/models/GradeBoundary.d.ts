import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type GradeBoundaryModel = runtime.Types.Result.DefaultSelection<Prisma.$GradeBoundaryPayload>;
export type AggregateGradeBoundary = {
    _count: GradeBoundaryCountAggregateOutputType | null;
    _avg: GradeBoundaryAvgAggregateOutputType | null;
    _sum: GradeBoundarySumAggregateOutputType | null;
    _min: GradeBoundaryMinAggregateOutputType | null;
    _max: GradeBoundaryMaxAggregateOutputType | null;
};
export type GradeBoundaryAvgAggregateOutputType = {
    minScore: number | null;
    maxScore: number | null;
};
export type GradeBoundarySumAggregateOutputType = {
    minScore: number | null;
    maxScore: number | null;
};
export type GradeBoundaryMinAggregateOutputType = {
    id: string | null;
    schemeId: string | null;
    grade: string | null;
    minScore: number | null;
    maxScore: number | null;
    remark: $Enums.GradeRemark | null;
};
export type GradeBoundaryMaxAggregateOutputType = {
    id: string | null;
    schemeId: string | null;
    grade: string | null;
    minScore: number | null;
    maxScore: number | null;
    remark: $Enums.GradeRemark | null;
};
export type GradeBoundaryCountAggregateOutputType = {
    id: number;
    schemeId: number;
    grade: number;
    minScore: number;
    maxScore: number;
    remark: number;
    smartRemarks: number;
    _all: number;
};
export type GradeBoundaryAvgAggregateInputType = {
    minScore?: true;
    maxScore?: true;
};
export type GradeBoundarySumAggregateInputType = {
    minScore?: true;
    maxScore?: true;
};
export type GradeBoundaryMinAggregateInputType = {
    id?: true;
    schemeId?: true;
    grade?: true;
    minScore?: true;
    maxScore?: true;
    remark?: true;
};
export type GradeBoundaryMaxAggregateInputType = {
    id?: true;
    schemeId?: true;
    grade?: true;
    minScore?: true;
    maxScore?: true;
    remark?: true;
};
export type GradeBoundaryCountAggregateInputType = {
    id?: true;
    schemeId?: true;
    grade?: true;
    minScore?: true;
    maxScore?: true;
    remark?: true;
    smartRemarks?: true;
    _all?: true;
};
export type GradeBoundaryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeBoundaryWhereInput;
    orderBy?: Prisma.GradeBoundaryOrderByWithRelationInput | Prisma.GradeBoundaryOrderByWithRelationInput[];
    cursor?: Prisma.GradeBoundaryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GradeBoundaryCountAggregateInputType;
    _avg?: GradeBoundaryAvgAggregateInputType;
    _sum?: GradeBoundarySumAggregateInputType;
    _min?: GradeBoundaryMinAggregateInputType;
    _max?: GradeBoundaryMaxAggregateInputType;
};
export type GetGradeBoundaryAggregateType<T extends GradeBoundaryAggregateArgs> = {
    [P in keyof T & keyof AggregateGradeBoundary]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGradeBoundary[P]> : Prisma.GetScalarType<T[P], AggregateGradeBoundary[P]>;
};
export type GradeBoundaryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeBoundaryWhereInput;
    orderBy?: Prisma.GradeBoundaryOrderByWithAggregationInput | Prisma.GradeBoundaryOrderByWithAggregationInput[];
    by: Prisma.GradeBoundaryScalarFieldEnum[] | Prisma.GradeBoundaryScalarFieldEnum;
    having?: Prisma.GradeBoundaryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GradeBoundaryCountAggregateInputType | true;
    _avg?: GradeBoundaryAvgAggregateInputType;
    _sum?: GradeBoundarySumAggregateInputType;
    _min?: GradeBoundaryMinAggregateInputType;
    _max?: GradeBoundaryMaxAggregateInputType;
};
export type GradeBoundaryGroupByOutputType = {
    id: string;
    schemeId: string;
    grade: string;
    minScore: number;
    maxScore: number;
    remark: $Enums.GradeRemark;
    smartRemarks: string[];
    _count: GradeBoundaryCountAggregateOutputType | null;
    _avg: GradeBoundaryAvgAggregateOutputType | null;
    _sum: GradeBoundarySumAggregateOutputType | null;
    _min: GradeBoundaryMinAggregateOutputType | null;
    _max: GradeBoundaryMaxAggregateOutputType | null;
};
export type GetGradeBoundaryGroupByPayload<T extends GradeBoundaryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GradeBoundaryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GradeBoundaryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GradeBoundaryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GradeBoundaryGroupByOutputType[P]>;
}>>;
export type GradeBoundaryWhereInput = {
    AND?: Prisma.GradeBoundaryWhereInput | Prisma.GradeBoundaryWhereInput[];
    OR?: Prisma.GradeBoundaryWhereInput[];
    NOT?: Prisma.GradeBoundaryWhereInput | Prisma.GradeBoundaryWhereInput[];
    id?: Prisma.StringFilter<"GradeBoundary"> | string;
    schemeId?: Prisma.StringFilter<"GradeBoundary"> | string;
    grade?: Prisma.StringFilter<"GradeBoundary"> | string;
    minScore?: Prisma.FloatFilter<"GradeBoundary"> | number;
    maxScore?: Prisma.FloatFilter<"GradeBoundary"> | number;
    remark?: Prisma.EnumGradeRemarkFilter<"GradeBoundary"> | $Enums.GradeRemark;
    smartRemarks?: Prisma.StringNullableListFilter<"GradeBoundary">;
    scheme?: Prisma.XOR<Prisma.GradingSchemeScalarRelationFilter, Prisma.GradingSchemeWhereInput>;
};
export type GradeBoundaryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schemeId?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    minScore?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    remark?: Prisma.SortOrder;
    smartRemarks?: Prisma.SortOrder;
    scheme?: Prisma.GradingSchemeOrderByWithRelationInput;
};
export type GradeBoundaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GradeBoundaryWhereInput | Prisma.GradeBoundaryWhereInput[];
    OR?: Prisma.GradeBoundaryWhereInput[];
    NOT?: Prisma.GradeBoundaryWhereInput | Prisma.GradeBoundaryWhereInput[];
    schemeId?: Prisma.StringFilter<"GradeBoundary"> | string;
    grade?: Prisma.StringFilter<"GradeBoundary"> | string;
    minScore?: Prisma.FloatFilter<"GradeBoundary"> | number;
    maxScore?: Prisma.FloatFilter<"GradeBoundary"> | number;
    remark?: Prisma.EnumGradeRemarkFilter<"GradeBoundary"> | $Enums.GradeRemark;
    smartRemarks?: Prisma.StringNullableListFilter<"GradeBoundary">;
    scheme?: Prisma.XOR<Prisma.GradingSchemeScalarRelationFilter, Prisma.GradingSchemeWhereInput>;
}, "id">;
export type GradeBoundaryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schemeId?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    minScore?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    remark?: Prisma.SortOrder;
    smartRemarks?: Prisma.SortOrder;
    _count?: Prisma.GradeBoundaryCountOrderByAggregateInput;
    _avg?: Prisma.GradeBoundaryAvgOrderByAggregateInput;
    _max?: Prisma.GradeBoundaryMaxOrderByAggregateInput;
    _min?: Prisma.GradeBoundaryMinOrderByAggregateInput;
    _sum?: Prisma.GradeBoundarySumOrderByAggregateInput;
};
export type GradeBoundaryScalarWhereWithAggregatesInput = {
    AND?: Prisma.GradeBoundaryScalarWhereWithAggregatesInput | Prisma.GradeBoundaryScalarWhereWithAggregatesInput[];
    OR?: Prisma.GradeBoundaryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GradeBoundaryScalarWhereWithAggregatesInput | Prisma.GradeBoundaryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GradeBoundary"> | string;
    schemeId?: Prisma.StringWithAggregatesFilter<"GradeBoundary"> | string;
    grade?: Prisma.StringWithAggregatesFilter<"GradeBoundary"> | string;
    minScore?: Prisma.FloatWithAggregatesFilter<"GradeBoundary"> | number;
    maxScore?: Prisma.FloatWithAggregatesFilter<"GradeBoundary"> | number;
    remark?: Prisma.EnumGradeRemarkWithAggregatesFilter<"GradeBoundary"> | $Enums.GradeRemark;
    smartRemarks?: Prisma.StringNullableListFilter<"GradeBoundary">;
};
export type GradeBoundaryCreateInput = {
    id?: string;
    grade: string;
    minScore: number;
    maxScore: number;
    remark: $Enums.GradeRemark;
    smartRemarks?: Prisma.GradeBoundaryCreatesmartRemarksInput | string[];
    scheme: Prisma.GradingSchemeCreateNestedOneWithoutBoundariesInput;
};
export type GradeBoundaryUncheckedCreateInput = {
    id?: string;
    schemeId: string;
    grade: string;
    minScore: number;
    maxScore: number;
    remark: $Enums.GradeRemark;
    smartRemarks?: Prisma.GradeBoundaryCreatesmartRemarksInput | string[];
};
export type GradeBoundaryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grade?: Prisma.StringFieldUpdateOperationsInput | string;
    minScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    maxScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    remark?: Prisma.EnumGradeRemarkFieldUpdateOperationsInput | $Enums.GradeRemark;
    smartRemarks?: Prisma.GradeBoundaryUpdatesmartRemarksInput | string[];
    scheme?: Prisma.GradingSchemeUpdateOneRequiredWithoutBoundariesNestedInput;
};
export type GradeBoundaryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schemeId?: Prisma.StringFieldUpdateOperationsInput | string;
    grade?: Prisma.StringFieldUpdateOperationsInput | string;
    minScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    maxScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    remark?: Prisma.EnumGradeRemarkFieldUpdateOperationsInput | $Enums.GradeRemark;
    smartRemarks?: Prisma.GradeBoundaryUpdatesmartRemarksInput | string[];
};
export type GradeBoundaryCreateManyInput = {
    id?: string;
    schemeId: string;
    grade: string;
    minScore: number;
    maxScore: number;
    remark: $Enums.GradeRemark;
    smartRemarks?: Prisma.GradeBoundaryCreatesmartRemarksInput | string[];
};
export type GradeBoundaryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grade?: Prisma.StringFieldUpdateOperationsInput | string;
    minScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    maxScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    remark?: Prisma.EnumGradeRemarkFieldUpdateOperationsInput | $Enums.GradeRemark;
    smartRemarks?: Prisma.GradeBoundaryUpdatesmartRemarksInput | string[];
};
export type GradeBoundaryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schemeId?: Prisma.StringFieldUpdateOperationsInput | string;
    grade?: Prisma.StringFieldUpdateOperationsInput | string;
    minScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    maxScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    remark?: Prisma.EnumGradeRemarkFieldUpdateOperationsInput | $Enums.GradeRemark;
    smartRemarks?: Prisma.GradeBoundaryUpdatesmartRemarksInput | string[];
};
export type GradeBoundaryListRelationFilter = {
    every?: Prisma.GradeBoundaryWhereInput;
    some?: Prisma.GradeBoundaryWhereInput;
    none?: Prisma.GradeBoundaryWhereInput;
};
export type GradeBoundaryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type GradeBoundaryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schemeId?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    minScore?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    remark?: Prisma.SortOrder;
    smartRemarks?: Prisma.SortOrder;
};
export type GradeBoundaryAvgOrderByAggregateInput = {
    minScore?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
};
export type GradeBoundaryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schemeId?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    minScore?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    remark?: Prisma.SortOrder;
};
export type GradeBoundaryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schemeId?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    minScore?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    remark?: Prisma.SortOrder;
};
export type GradeBoundarySumOrderByAggregateInput = {
    minScore?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
};
export type GradeBoundaryCreateNestedManyWithoutSchemeInput = {
    create?: Prisma.XOR<Prisma.GradeBoundaryCreateWithoutSchemeInput, Prisma.GradeBoundaryUncheckedCreateWithoutSchemeInput> | Prisma.GradeBoundaryCreateWithoutSchemeInput[] | Prisma.GradeBoundaryUncheckedCreateWithoutSchemeInput[];
    connectOrCreate?: Prisma.GradeBoundaryCreateOrConnectWithoutSchemeInput | Prisma.GradeBoundaryCreateOrConnectWithoutSchemeInput[];
    createMany?: Prisma.GradeBoundaryCreateManySchemeInputEnvelope;
    connect?: Prisma.GradeBoundaryWhereUniqueInput | Prisma.GradeBoundaryWhereUniqueInput[];
};
export type GradeBoundaryUncheckedCreateNestedManyWithoutSchemeInput = {
    create?: Prisma.XOR<Prisma.GradeBoundaryCreateWithoutSchemeInput, Prisma.GradeBoundaryUncheckedCreateWithoutSchemeInput> | Prisma.GradeBoundaryCreateWithoutSchemeInput[] | Prisma.GradeBoundaryUncheckedCreateWithoutSchemeInput[];
    connectOrCreate?: Prisma.GradeBoundaryCreateOrConnectWithoutSchemeInput | Prisma.GradeBoundaryCreateOrConnectWithoutSchemeInput[];
    createMany?: Prisma.GradeBoundaryCreateManySchemeInputEnvelope;
    connect?: Prisma.GradeBoundaryWhereUniqueInput | Prisma.GradeBoundaryWhereUniqueInput[];
};
export type GradeBoundaryUpdateManyWithoutSchemeNestedInput = {
    create?: Prisma.XOR<Prisma.GradeBoundaryCreateWithoutSchemeInput, Prisma.GradeBoundaryUncheckedCreateWithoutSchemeInput> | Prisma.GradeBoundaryCreateWithoutSchemeInput[] | Prisma.GradeBoundaryUncheckedCreateWithoutSchemeInput[];
    connectOrCreate?: Prisma.GradeBoundaryCreateOrConnectWithoutSchemeInput | Prisma.GradeBoundaryCreateOrConnectWithoutSchemeInput[];
    upsert?: Prisma.GradeBoundaryUpsertWithWhereUniqueWithoutSchemeInput | Prisma.GradeBoundaryUpsertWithWhereUniqueWithoutSchemeInput[];
    createMany?: Prisma.GradeBoundaryCreateManySchemeInputEnvelope;
    set?: Prisma.GradeBoundaryWhereUniqueInput | Prisma.GradeBoundaryWhereUniqueInput[];
    disconnect?: Prisma.GradeBoundaryWhereUniqueInput | Prisma.GradeBoundaryWhereUniqueInput[];
    delete?: Prisma.GradeBoundaryWhereUniqueInput | Prisma.GradeBoundaryWhereUniqueInput[];
    connect?: Prisma.GradeBoundaryWhereUniqueInput | Prisma.GradeBoundaryWhereUniqueInput[];
    update?: Prisma.GradeBoundaryUpdateWithWhereUniqueWithoutSchemeInput | Prisma.GradeBoundaryUpdateWithWhereUniqueWithoutSchemeInput[];
    updateMany?: Prisma.GradeBoundaryUpdateManyWithWhereWithoutSchemeInput | Prisma.GradeBoundaryUpdateManyWithWhereWithoutSchemeInput[];
    deleteMany?: Prisma.GradeBoundaryScalarWhereInput | Prisma.GradeBoundaryScalarWhereInput[];
};
export type GradeBoundaryUncheckedUpdateManyWithoutSchemeNestedInput = {
    create?: Prisma.XOR<Prisma.GradeBoundaryCreateWithoutSchemeInput, Prisma.GradeBoundaryUncheckedCreateWithoutSchemeInput> | Prisma.GradeBoundaryCreateWithoutSchemeInput[] | Prisma.GradeBoundaryUncheckedCreateWithoutSchemeInput[];
    connectOrCreate?: Prisma.GradeBoundaryCreateOrConnectWithoutSchemeInput | Prisma.GradeBoundaryCreateOrConnectWithoutSchemeInput[];
    upsert?: Prisma.GradeBoundaryUpsertWithWhereUniqueWithoutSchemeInput | Prisma.GradeBoundaryUpsertWithWhereUniqueWithoutSchemeInput[];
    createMany?: Prisma.GradeBoundaryCreateManySchemeInputEnvelope;
    set?: Prisma.GradeBoundaryWhereUniqueInput | Prisma.GradeBoundaryWhereUniqueInput[];
    disconnect?: Prisma.GradeBoundaryWhereUniqueInput | Prisma.GradeBoundaryWhereUniqueInput[];
    delete?: Prisma.GradeBoundaryWhereUniqueInput | Prisma.GradeBoundaryWhereUniqueInput[];
    connect?: Prisma.GradeBoundaryWhereUniqueInput | Prisma.GradeBoundaryWhereUniqueInput[];
    update?: Prisma.GradeBoundaryUpdateWithWhereUniqueWithoutSchemeInput | Prisma.GradeBoundaryUpdateWithWhereUniqueWithoutSchemeInput[];
    updateMany?: Prisma.GradeBoundaryUpdateManyWithWhereWithoutSchemeInput | Prisma.GradeBoundaryUpdateManyWithWhereWithoutSchemeInput[];
    deleteMany?: Prisma.GradeBoundaryScalarWhereInput | Prisma.GradeBoundaryScalarWhereInput[];
};
export type GradeBoundaryCreatesmartRemarksInput = {
    set: string[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumGradeRemarkFieldUpdateOperationsInput = {
    set?: $Enums.GradeRemark;
};
export type GradeBoundaryUpdatesmartRemarksInput = {
    set?: string[];
    push?: string | string[];
};
export type GradeBoundaryCreateWithoutSchemeInput = {
    id?: string;
    grade: string;
    minScore: number;
    maxScore: number;
    remark: $Enums.GradeRemark;
    smartRemarks?: Prisma.GradeBoundaryCreatesmartRemarksInput | string[];
};
export type GradeBoundaryUncheckedCreateWithoutSchemeInput = {
    id?: string;
    grade: string;
    minScore: number;
    maxScore: number;
    remark: $Enums.GradeRemark;
    smartRemarks?: Prisma.GradeBoundaryCreatesmartRemarksInput | string[];
};
export type GradeBoundaryCreateOrConnectWithoutSchemeInput = {
    where: Prisma.GradeBoundaryWhereUniqueInput;
    create: Prisma.XOR<Prisma.GradeBoundaryCreateWithoutSchemeInput, Prisma.GradeBoundaryUncheckedCreateWithoutSchemeInput>;
};
export type GradeBoundaryCreateManySchemeInputEnvelope = {
    data: Prisma.GradeBoundaryCreateManySchemeInput | Prisma.GradeBoundaryCreateManySchemeInput[];
    skipDuplicates?: boolean;
};
export type GradeBoundaryUpsertWithWhereUniqueWithoutSchemeInput = {
    where: Prisma.GradeBoundaryWhereUniqueInput;
    update: Prisma.XOR<Prisma.GradeBoundaryUpdateWithoutSchemeInput, Prisma.GradeBoundaryUncheckedUpdateWithoutSchemeInput>;
    create: Prisma.XOR<Prisma.GradeBoundaryCreateWithoutSchemeInput, Prisma.GradeBoundaryUncheckedCreateWithoutSchemeInput>;
};
export type GradeBoundaryUpdateWithWhereUniqueWithoutSchemeInput = {
    where: Prisma.GradeBoundaryWhereUniqueInput;
    data: Prisma.XOR<Prisma.GradeBoundaryUpdateWithoutSchemeInput, Prisma.GradeBoundaryUncheckedUpdateWithoutSchemeInput>;
};
export type GradeBoundaryUpdateManyWithWhereWithoutSchemeInput = {
    where: Prisma.GradeBoundaryScalarWhereInput;
    data: Prisma.XOR<Prisma.GradeBoundaryUpdateManyMutationInput, Prisma.GradeBoundaryUncheckedUpdateManyWithoutSchemeInput>;
};
export type GradeBoundaryScalarWhereInput = {
    AND?: Prisma.GradeBoundaryScalarWhereInput | Prisma.GradeBoundaryScalarWhereInput[];
    OR?: Prisma.GradeBoundaryScalarWhereInput[];
    NOT?: Prisma.GradeBoundaryScalarWhereInput | Prisma.GradeBoundaryScalarWhereInput[];
    id?: Prisma.StringFilter<"GradeBoundary"> | string;
    schemeId?: Prisma.StringFilter<"GradeBoundary"> | string;
    grade?: Prisma.StringFilter<"GradeBoundary"> | string;
    minScore?: Prisma.FloatFilter<"GradeBoundary"> | number;
    maxScore?: Prisma.FloatFilter<"GradeBoundary"> | number;
    remark?: Prisma.EnumGradeRemarkFilter<"GradeBoundary"> | $Enums.GradeRemark;
    smartRemarks?: Prisma.StringNullableListFilter<"GradeBoundary">;
};
export type GradeBoundaryCreateManySchemeInput = {
    id?: string;
    grade: string;
    minScore: number;
    maxScore: number;
    remark: $Enums.GradeRemark;
    smartRemarks?: Prisma.GradeBoundaryCreatesmartRemarksInput | string[];
};
export type GradeBoundaryUpdateWithoutSchemeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grade?: Prisma.StringFieldUpdateOperationsInput | string;
    minScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    maxScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    remark?: Prisma.EnumGradeRemarkFieldUpdateOperationsInput | $Enums.GradeRemark;
    smartRemarks?: Prisma.GradeBoundaryUpdatesmartRemarksInput | string[];
};
export type GradeBoundaryUncheckedUpdateWithoutSchemeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grade?: Prisma.StringFieldUpdateOperationsInput | string;
    minScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    maxScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    remark?: Prisma.EnumGradeRemarkFieldUpdateOperationsInput | $Enums.GradeRemark;
    smartRemarks?: Prisma.GradeBoundaryUpdatesmartRemarksInput | string[];
};
export type GradeBoundaryUncheckedUpdateManyWithoutSchemeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grade?: Prisma.StringFieldUpdateOperationsInput | string;
    minScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    maxScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    remark?: Prisma.EnumGradeRemarkFieldUpdateOperationsInput | $Enums.GradeRemark;
    smartRemarks?: Prisma.GradeBoundaryUpdatesmartRemarksInput | string[];
};
export type GradeBoundarySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schemeId?: boolean;
    grade?: boolean;
    minScore?: boolean;
    maxScore?: boolean;
    remark?: boolean;
    smartRemarks?: boolean;
    scheme?: boolean | Prisma.GradingSchemeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gradeBoundary"]>;
export type GradeBoundarySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schemeId?: boolean;
    grade?: boolean;
    minScore?: boolean;
    maxScore?: boolean;
    remark?: boolean;
    smartRemarks?: boolean;
    scheme?: boolean | Prisma.GradingSchemeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gradeBoundary"]>;
export type GradeBoundarySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schemeId?: boolean;
    grade?: boolean;
    minScore?: boolean;
    maxScore?: boolean;
    remark?: boolean;
    smartRemarks?: boolean;
    scheme?: boolean | Prisma.GradingSchemeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gradeBoundary"]>;
export type GradeBoundarySelectScalar = {
    id?: boolean;
    schemeId?: boolean;
    grade?: boolean;
    minScore?: boolean;
    maxScore?: boolean;
    remark?: boolean;
    smartRemarks?: boolean;
};
export type GradeBoundaryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schemeId" | "grade" | "minScore" | "maxScore" | "remark" | "smartRemarks", ExtArgs["result"]["gradeBoundary"]>;
export type GradeBoundaryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    scheme?: boolean | Prisma.GradingSchemeDefaultArgs<ExtArgs>;
};
export type GradeBoundaryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    scheme?: boolean | Prisma.GradingSchemeDefaultArgs<ExtArgs>;
};
export type GradeBoundaryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    scheme?: boolean | Prisma.GradingSchemeDefaultArgs<ExtArgs>;
};
export type $GradeBoundaryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GradeBoundary";
    objects: {
        scheme: Prisma.$GradingSchemePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schemeId: string;
        grade: string;
        minScore: number;
        maxScore: number;
        remark: $Enums.GradeRemark;
        smartRemarks: string[];
    }, ExtArgs["result"]["gradeBoundary"]>;
    composites: {};
};
export type GradeBoundaryGetPayload<S extends boolean | null | undefined | GradeBoundaryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GradeBoundaryPayload, S>;
export type GradeBoundaryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GradeBoundaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GradeBoundaryCountAggregateInputType | true;
};
export interface GradeBoundaryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GradeBoundary'];
        meta: {
            name: 'GradeBoundary';
        };
    };
    findUnique<T extends GradeBoundaryFindUniqueArgs>(args: Prisma.SelectSubset<T, GradeBoundaryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GradeBoundaryClient<runtime.Types.Result.GetResult<Prisma.$GradeBoundaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GradeBoundaryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GradeBoundaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GradeBoundaryClient<runtime.Types.Result.GetResult<Prisma.$GradeBoundaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GradeBoundaryFindFirstArgs>(args?: Prisma.SelectSubset<T, GradeBoundaryFindFirstArgs<ExtArgs>>): Prisma.Prisma__GradeBoundaryClient<runtime.Types.Result.GetResult<Prisma.$GradeBoundaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GradeBoundaryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GradeBoundaryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GradeBoundaryClient<runtime.Types.Result.GetResult<Prisma.$GradeBoundaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GradeBoundaryFindManyArgs>(args?: Prisma.SelectSubset<T, GradeBoundaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradeBoundaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GradeBoundaryCreateArgs>(args: Prisma.SelectSubset<T, GradeBoundaryCreateArgs<ExtArgs>>): Prisma.Prisma__GradeBoundaryClient<runtime.Types.Result.GetResult<Prisma.$GradeBoundaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GradeBoundaryCreateManyArgs>(args?: Prisma.SelectSubset<T, GradeBoundaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GradeBoundaryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GradeBoundaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradeBoundaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GradeBoundaryDeleteArgs>(args: Prisma.SelectSubset<T, GradeBoundaryDeleteArgs<ExtArgs>>): Prisma.Prisma__GradeBoundaryClient<runtime.Types.Result.GetResult<Prisma.$GradeBoundaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GradeBoundaryUpdateArgs>(args: Prisma.SelectSubset<T, GradeBoundaryUpdateArgs<ExtArgs>>): Prisma.Prisma__GradeBoundaryClient<runtime.Types.Result.GetResult<Prisma.$GradeBoundaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GradeBoundaryDeleteManyArgs>(args?: Prisma.SelectSubset<T, GradeBoundaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GradeBoundaryUpdateManyArgs>(args: Prisma.SelectSubset<T, GradeBoundaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GradeBoundaryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GradeBoundaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradeBoundaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GradeBoundaryUpsertArgs>(args: Prisma.SelectSubset<T, GradeBoundaryUpsertArgs<ExtArgs>>): Prisma.Prisma__GradeBoundaryClient<runtime.Types.Result.GetResult<Prisma.$GradeBoundaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GradeBoundaryCountArgs>(args?: Prisma.Subset<T, GradeBoundaryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GradeBoundaryCountAggregateOutputType> : number>;
    aggregate<T extends GradeBoundaryAggregateArgs>(args: Prisma.Subset<T, GradeBoundaryAggregateArgs>): Prisma.PrismaPromise<GetGradeBoundaryAggregateType<T>>;
    groupBy<T extends GradeBoundaryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GradeBoundaryGroupByArgs['orderBy'];
    } : {
        orderBy?: GradeBoundaryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GradeBoundaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeBoundaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GradeBoundaryFieldRefs;
}
export interface Prisma__GradeBoundaryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    scheme<T extends Prisma.GradingSchemeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GradingSchemeDefaultArgs<ExtArgs>>): Prisma.Prisma__GradingSchemeClient<runtime.Types.Result.GetResult<Prisma.$GradingSchemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GradeBoundaryFieldRefs {
    readonly id: Prisma.FieldRef<"GradeBoundary", 'String'>;
    readonly schemeId: Prisma.FieldRef<"GradeBoundary", 'String'>;
    readonly grade: Prisma.FieldRef<"GradeBoundary", 'String'>;
    readonly minScore: Prisma.FieldRef<"GradeBoundary", 'Float'>;
    readonly maxScore: Prisma.FieldRef<"GradeBoundary", 'Float'>;
    readonly remark: Prisma.FieldRef<"GradeBoundary", 'GradeRemark'>;
    readonly smartRemarks: Prisma.FieldRef<"GradeBoundary", 'String[]'>;
}
export type GradeBoundaryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeBoundarySelect<ExtArgs> | null;
    omit?: Prisma.GradeBoundaryOmit<ExtArgs> | null;
    include?: Prisma.GradeBoundaryInclude<ExtArgs> | null;
    where: Prisma.GradeBoundaryWhereUniqueInput;
};
export type GradeBoundaryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeBoundarySelect<ExtArgs> | null;
    omit?: Prisma.GradeBoundaryOmit<ExtArgs> | null;
    include?: Prisma.GradeBoundaryInclude<ExtArgs> | null;
    where: Prisma.GradeBoundaryWhereUniqueInput;
};
export type GradeBoundaryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeBoundarySelect<ExtArgs> | null;
    omit?: Prisma.GradeBoundaryOmit<ExtArgs> | null;
    include?: Prisma.GradeBoundaryInclude<ExtArgs> | null;
    where?: Prisma.GradeBoundaryWhereInput;
    orderBy?: Prisma.GradeBoundaryOrderByWithRelationInput | Prisma.GradeBoundaryOrderByWithRelationInput[];
    cursor?: Prisma.GradeBoundaryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradeBoundaryScalarFieldEnum | Prisma.GradeBoundaryScalarFieldEnum[];
};
export type GradeBoundaryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeBoundarySelect<ExtArgs> | null;
    omit?: Prisma.GradeBoundaryOmit<ExtArgs> | null;
    include?: Prisma.GradeBoundaryInclude<ExtArgs> | null;
    where?: Prisma.GradeBoundaryWhereInput;
    orderBy?: Prisma.GradeBoundaryOrderByWithRelationInput | Prisma.GradeBoundaryOrderByWithRelationInput[];
    cursor?: Prisma.GradeBoundaryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradeBoundaryScalarFieldEnum | Prisma.GradeBoundaryScalarFieldEnum[];
};
export type GradeBoundaryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeBoundarySelect<ExtArgs> | null;
    omit?: Prisma.GradeBoundaryOmit<ExtArgs> | null;
    include?: Prisma.GradeBoundaryInclude<ExtArgs> | null;
    where?: Prisma.GradeBoundaryWhereInput;
    orderBy?: Prisma.GradeBoundaryOrderByWithRelationInput | Prisma.GradeBoundaryOrderByWithRelationInput[];
    cursor?: Prisma.GradeBoundaryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradeBoundaryScalarFieldEnum | Prisma.GradeBoundaryScalarFieldEnum[];
};
export type GradeBoundaryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeBoundarySelect<ExtArgs> | null;
    omit?: Prisma.GradeBoundaryOmit<ExtArgs> | null;
    include?: Prisma.GradeBoundaryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GradeBoundaryCreateInput, Prisma.GradeBoundaryUncheckedCreateInput>;
};
export type GradeBoundaryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GradeBoundaryCreateManyInput | Prisma.GradeBoundaryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GradeBoundaryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeBoundarySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GradeBoundaryOmit<ExtArgs> | null;
    data: Prisma.GradeBoundaryCreateManyInput | Prisma.GradeBoundaryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GradeBoundaryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GradeBoundaryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeBoundarySelect<ExtArgs> | null;
    omit?: Prisma.GradeBoundaryOmit<ExtArgs> | null;
    include?: Prisma.GradeBoundaryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GradeBoundaryUpdateInput, Prisma.GradeBoundaryUncheckedUpdateInput>;
    where: Prisma.GradeBoundaryWhereUniqueInput;
};
export type GradeBoundaryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GradeBoundaryUpdateManyMutationInput, Prisma.GradeBoundaryUncheckedUpdateManyInput>;
    where?: Prisma.GradeBoundaryWhereInput;
    limit?: number;
};
export type GradeBoundaryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeBoundarySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GradeBoundaryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GradeBoundaryUpdateManyMutationInput, Prisma.GradeBoundaryUncheckedUpdateManyInput>;
    where?: Prisma.GradeBoundaryWhereInput;
    limit?: number;
    include?: Prisma.GradeBoundaryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GradeBoundaryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeBoundarySelect<ExtArgs> | null;
    omit?: Prisma.GradeBoundaryOmit<ExtArgs> | null;
    include?: Prisma.GradeBoundaryInclude<ExtArgs> | null;
    where: Prisma.GradeBoundaryWhereUniqueInput;
    create: Prisma.XOR<Prisma.GradeBoundaryCreateInput, Prisma.GradeBoundaryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GradeBoundaryUpdateInput, Prisma.GradeBoundaryUncheckedUpdateInput>;
};
export type GradeBoundaryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeBoundarySelect<ExtArgs> | null;
    omit?: Prisma.GradeBoundaryOmit<ExtArgs> | null;
    include?: Prisma.GradeBoundaryInclude<ExtArgs> | null;
    where: Prisma.GradeBoundaryWhereUniqueInput;
};
export type GradeBoundaryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeBoundaryWhereInput;
    limit?: number;
};
export type GradeBoundaryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeBoundarySelect<ExtArgs> | null;
    omit?: Prisma.GradeBoundaryOmit<ExtArgs> | null;
    include?: Prisma.GradeBoundaryInclude<ExtArgs> | null;
};
