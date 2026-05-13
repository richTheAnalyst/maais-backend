import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type GradingSchemeModel = runtime.Types.Result.DefaultSelection<Prisma.$GradingSchemePayload>;
export type AggregateGradingScheme = {
    _count: GradingSchemeCountAggregateOutputType | null;
    _min: GradingSchemeMinAggregateOutputType | null;
    _max: GradingSchemeMaxAggregateOutputType | null;
};
export type GradingSchemeMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    isDefault: boolean | null;
};
export type GradingSchemeMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    isDefault: boolean | null;
};
export type GradingSchemeCountAggregateOutputType = {
    id: number;
    name: number;
    isDefault: number;
    _all: number;
};
export type GradingSchemeMinAggregateInputType = {
    id?: true;
    name?: true;
    isDefault?: true;
};
export type GradingSchemeMaxAggregateInputType = {
    id?: true;
    name?: true;
    isDefault?: true;
};
export type GradingSchemeCountAggregateInputType = {
    id?: true;
    name?: true;
    isDefault?: true;
    _all?: true;
};
export type GradingSchemeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradingSchemeWhereInput;
    orderBy?: Prisma.GradingSchemeOrderByWithRelationInput | Prisma.GradingSchemeOrderByWithRelationInput[];
    cursor?: Prisma.GradingSchemeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GradingSchemeCountAggregateInputType;
    _min?: GradingSchemeMinAggregateInputType;
    _max?: GradingSchemeMaxAggregateInputType;
};
export type GetGradingSchemeAggregateType<T extends GradingSchemeAggregateArgs> = {
    [P in keyof T & keyof AggregateGradingScheme]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGradingScheme[P]> : Prisma.GetScalarType<T[P], AggregateGradingScheme[P]>;
};
export type GradingSchemeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradingSchemeWhereInput;
    orderBy?: Prisma.GradingSchemeOrderByWithAggregationInput | Prisma.GradingSchemeOrderByWithAggregationInput[];
    by: Prisma.GradingSchemeScalarFieldEnum[] | Prisma.GradingSchemeScalarFieldEnum;
    having?: Prisma.GradingSchemeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GradingSchemeCountAggregateInputType | true;
    _min?: GradingSchemeMinAggregateInputType;
    _max?: GradingSchemeMaxAggregateInputType;
};
export type GradingSchemeGroupByOutputType = {
    id: string;
    name: string;
    isDefault: boolean;
    _count: GradingSchemeCountAggregateOutputType | null;
    _min: GradingSchemeMinAggregateOutputType | null;
    _max: GradingSchemeMaxAggregateOutputType | null;
};
export type GetGradingSchemeGroupByPayload<T extends GradingSchemeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GradingSchemeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GradingSchemeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GradingSchemeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GradingSchemeGroupByOutputType[P]>;
}>>;
export type GradingSchemeWhereInput = {
    AND?: Prisma.GradingSchemeWhereInput | Prisma.GradingSchemeWhereInput[];
    OR?: Prisma.GradingSchemeWhereInput[];
    NOT?: Prisma.GradingSchemeWhereInput | Prisma.GradingSchemeWhereInput[];
    id?: Prisma.StringFilter<"GradingScheme"> | string;
    name?: Prisma.StringFilter<"GradingScheme"> | string;
    isDefault?: Prisma.BoolFilter<"GradingScheme"> | boolean;
    boundaries?: Prisma.GradeBoundaryListRelationFilter;
};
export type GradingSchemeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    boundaries?: Prisma.GradeBoundaryOrderByRelationAggregateInput;
};
export type GradingSchemeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.GradingSchemeWhereInput | Prisma.GradingSchemeWhereInput[];
    OR?: Prisma.GradingSchemeWhereInput[];
    NOT?: Prisma.GradingSchemeWhereInput | Prisma.GradingSchemeWhereInput[];
    isDefault?: Prisma.BoolFilter<"GradingScheme"> | boolean;
    boundaries?: Prisma.GradeBoundaryListRelationFilter;
}, "id" | "name">;
export type GradingSchemeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    _count?: Prisma.GradingSchemeCountOrderByAggregateInput;
    _max?: Prisma.GradingSchemeMaxOrderByAggregateInput;
    _min?: Prisma.GradingSchemeMinOrderByAggregateInput;
};
export type GradingSchemeScalarWhereWithAggregatesInput = {
    AND?: Prisma.GradingSchemeScalarWhereWithAggregatesInput | Prisma.GradingSchemeScalarWhereWithAggregatesInput[];
    OR?: Prisma.GradingSchemeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GradingSchemeScalarWhereWithAggregatesInput | Prisma.GradingSchemeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GradingScheme"> | string;
    name?: Prisma.StringWithAggregatesFilter<"GradingScheme"> | string;
    isDefault?: Prisma.BoolWithAggregatesFilter<"GradingScheme"> | boolean;
};
export type GradingSchemeCreateInput = {
    id?: string;
    name: string;
    isDefault?: boolean;
    boundaries?: Prisma.GradeBoundaryCreateNestedManyWithoutSchemeInput;
};
export type GradingSchemeUncheckedCreateInput = {
    id?: string;
    name: string;
    isDefault?: boolean;
    boundaries?: Prisma.GradeBoundaryUncheckedCreateNestedManyWithoutSchemeInput;
};
export type GradingSchemeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    boundaries?: Prisma.GradeBoundaryUpdateManyWithoutSchemeNestedInput;
};
export type GradingSchemeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    boundaries?: Prisma.GradeBoundaryUncheckedUpdateManyWithoutSchemeNestedInput;
};
export type GradingSchemeCreateManyInput = {
    id?: string;
    name: string;
    isDefault?: boolean;
};
export type GradingSchemeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type GradingSchemeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type GradingSchemeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
};
export type GradingSchemeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
};
export type GradingSchemeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
};
export type GradingSchemeScalarRelationFilter = {
    is?: Prisma.GradingSchemeWhereInput;
    isNot?: Prisma.GradingSchemeWhereInput;
};
export type GradingSchemeCreateNestedOneWithoutBoundariesInput = {
    create?: Prisma.XOR<Prisma.GradingSchemeCreateWithoutBoundariesInput, Prisma.GradingSchemeUncheckedCreateWithoutBoundariesInput>;
    connectOrCreate?: Prisma.GradingSchemeCreateOrConnectWithoutBoundariesInput;
    connect?: Prisma.GradingSchemeWhereUniqueInput;
};
export type GradingSchemeUpdateOneRequiredWithoutBoundariesNestedInput = {
    create?: Prisma.XOR<Prisma.GradingSchemeCreateWithoutBoundariesInput, Prisma.GradingSchemeUncheckedCreateWithoutBoundariesInput>;
    connectOrCreate?: Prisma.GradingSchemeCreateOrConnectWithoutBoundariesInput;
    upsert?: Prisma.GradingSchemeUpsertWithoutBoundariesInput;
    connect?: Prisma.GradingSchemeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GradingSchemeUpdateToOneWithWhereWithoutBoundariesInput, Prisma.GradingSchemeUpdateWithoutBoundariesInput>, Prisma.GradingSchemeUncheckedUpdateWithoutBoundariesInput>;
};
export type GradingSchemeCreateWithoutBoundariesInput = {
    id?: string;
    name: string;
    isDefault?: boolean;
};
export type GradingSchemeUncheckedCreateWithoutBoundariesInput = {
    id?: string;
    name: string;
    isDefault?: boolean;
};
export type GradingSchemeCreateOrConnectWithoutBoundariesInput = {
    where: Prisma.GradingSchemeWhereUniqueInput;
    create: Prisma.XOR<Prisma.GradingSchemeCreateWithoutBoundariesInput, Prisma.GradingSchemeUncheckedCreateWithoutBoundariesInput>;
};
export type GradingSchemeUpsertWithoutBoundariesInput = {
    update: Prisma.XOR<Prisma.GradingSchemeUpdateWithoutBoundariesInput, Prisma.GradingSchemeUncheckedUpdateWithoutBoundariesInput>;
    create: Prisma.XOR<Prisma.GradingSchemeCreateWithoutBoundariesInput, Prisma.GradingSchemeUncheckedCreateWithoutBoundariesInput>;
    where?: Prisma.GradingSchemeWhereInput;
};
export type GradingSchemeUpdateToOneWithWhereWithoutBoundariesInput = {
    where?: Prisma.GradingSchemeWhereInput;
    data: Prisma.XOR<Prisma.GradingSchemeUpdateWithoutBoundariesInput, Prisma.GradingSchemeUncheckedUpdateWithoutBoundariesInput>;
};
export type GradingSchemeUpdateWithoutBoundariesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type GradingSchemeUncheckedUpdateWithoutBoundariesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type GradingSchemeCountOutputType = {
    boundaries: number;
};
export type GradingSchemeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    boundaries?: boolean | GradingSchemeCountOutputTypeCountBoundariesArgs;
};
export type GradingSchemeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradingSchemeCountOutputTypeSelect<ExtArgs> | null;
};
export type GradingSchemeCountOutputTypeCountBoundariesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeBoundaryWhereInput;
};
export type GradingSchemeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    isDefault?: boolean;
    boundaries?: boolean | Prisma.GradingScheme$boundariesArgs<ExtArgs>;
    _count?: boolean | Prisma.GradingSchemeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gradingScheme"]>;
export type GradingSchemeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    isDefault?: boolean;
}, ExtArgs["result"]["gradingScheme"]>;
export type GradingSchemeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    isDefault?: boolean;
}, ExtArgs["result"]["gradingScheme"]>;
export type GradingSchemeSelectScalar = {
    id?: boolean;
    name?: boolean;
    isDefault?: boolean;
};
export type GradingSchemeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "isDefault", ExtArgs["result"]["gradingScheme"]>;
export type GradingSchemeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    boundaries?: boolean | Prisma.GradingScheme$boundariesArgs<ExtArgs>;
    _count?: boolean | Prisma.GradingSchemeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GradingSchemeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type GradingSchemeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $GradingSchemePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GradingScheme";
    objects: {
        boundaries: Prisma.$GradeBoundaryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        isDefault: boolean;
    }, ExtArgs["result"]["gradingScheme"]>;
    composites: {};
};
export type GradingSchemeGetPayload<S extends boolean | null | undefined | GradingSchemeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GradingSchemePayload, S>;
export type GradingSchemeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GradingSchemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GradingSchemeCountAggregateInputType | true;
};
export interface GradingSchemeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GradingScheme'];
        meta: {
            name: 'GradingScheme';
        };
    };
    findUnique<T extends GradingSchemeFindUniqueArgs>(args: Prisma.SelectSubset<T, GradingSchemeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GradingSchemeClient<runtime.Types.Result.GetResult<Prisma.$GradingSchemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GradingSchemeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GradingSchemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GradingSchemeClient<runtime.Types.Result.GetResult<Prisma.$GradingSchemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GradingSchemeFindFirstArgs>(args?: Prisma.SelectSubset<T, GradingSchemeFindFirstArgs<ExtArgs>>): Prisma.Prisma__GradingSchemeClient<runtime.Types.Result.GetResult<Prisma.$GradingSchemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GradingSchemeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GradingSchemeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GradingSchemeClient<runtime.Types.Result.GetResult<Prisma.$GradingSchemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GradingSchemeFindManyArgs>(args?: Prisma.SelectSubset<T, GradingSchemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradingSchemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GradingSchemeCreateArgs>(args: Prisma.SelectSubset<T, GradingSchemeCreateArgs<ExtArgs>>): Prisma.Prisma__GradingSchemeClient<runtime.Types.Result.GetResult<Prisma.$GradingSchemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GradingSchemeCreateManyArgs>(args?: Prisma.SelectSubset<T, GradingSchemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GradingSchemeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GradingSchemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradingSchemePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GradingSchemeDeleteArgs>(args: Prisma.SelectSubset<T, GradingSchemeDeleteArgs<ExtArgs>>): Prisma.Prisma__GradingSchemeClient<runtime.Types.Result.GetResult<Prisma.$GradingSchemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GradingSchemeUpdateArgs>(args: Prisma.SelectSubset<T, GradingSchemeUpdateArgs<ExtArgs>>): Prisma.Prisma__GradingSchemeClient<runtime.Types.Result.GetResult<Prisma.$GradingSchemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GradingSchemeDeleteManyArgs>(args?: Prisma.SelectSubset<T, GradingSchemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GradingSchemeUpdateManyArgs>(args: Prisma.SelectSubset<T, GradingSchemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GradingSchemeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GradingSchemeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradingSchemePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GradingSchemeUpsertArgs>(args: Prisma.SelectSubset<T, GradingSchemeUpsertArgs<ExtArgs>>): Prisma.Prisma__GradingSchemeClient<runtime.Types.Result.GetResult<Prisma.$GradingSchemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GradingSchemeCountArgs>(args?: Prisma.Subset<T, GradingSchemeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GradingSchemeCountAggregateOutputType> : number>;
    aggregate<T extends GradingSchemeAggregateArgs>(args: Prisma.Subset<T, GradingSchemeAggregateArgs>): Prisma.PrismaPromise<GetGradingSchemeAggregateType<T>>;
    groupBy<T extends GradingSchemeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GradingSchemeGroupByArgs['orderBy'];
    } : {
        orderBy?: GradingSchemeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GradingSchemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradingSchemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GradingSchemeFieldRefs;
}
export interface Prisma__GradingSchemeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    boundaries<T extends Prisma.GradingScheme$boundariesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GradingScheme$boundariesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradeBoundaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GradingSchemeFieldRefs {
    readonly id: Prisma.FieldRef<"GradingScheme", 'String'>;
    readonly name: Prisma.FieldRef<"GradingScheme", 'String'>;
    readonly isDefault: Prisma.FieldRef<"GradingScheme", 'Boolean'>;
}
export type GradingSchemeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradingSchemeSelect<ExtArgs> | null;
    omit?: Prisma.GradingSchemeOmit<ExtArgs> | null;
    include?: Prisma.GradingSchemeInclude<ExtArgs> | null;
    where: Prisma.GradingSchemeWhereUniqueInput;
};
export type GradingSchemeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradingSchemeSelect<ExtArgs> | null;
    omit?: Prisma.GradingSchemeOmit<ExtArgs> | null;
    include?: Prisma.GradingSchemeInclude<ExtArgs> | null;
    where: Prisma.GradingSchemeWhereUniqueInput;
};
export type GradingSchemeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradingSchemeSelect<ExtArgs> | null;
    omit?: Prisma.GradingSchemeOmit<ExtArgs> | null;
    include?: Prisma.GradingSchemeInclude<ExtArgs> | null;
    where?: Prisma.GradingSchemeWhereInput;
    orderBy?: Prisma.GradingSchemeOrderByWithRelationInput | Prisma.GradingSchemeOrderByWithRelationInput[];
    cursor?: Prisma.GradingSchemeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradingSchemeScalarFieldEnum | Prisma.GradingSchemeScalarFieldEnum[];
};
export type GradingSchemeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradingSchemeSelect<ExtArgs> | null;
    omit?: Prisma.GradingSchemeOmit<ExtArgs> | null;
    include?: Prisma.GradingSchemeInclude<ExtArgs> | null;
    where?: Prisma.GradingSchemeWhereInput;
    orderBy?: Prisma.GradingSchemeOrderByWithRelationInput | Prisma.GradingSchemeOrderByWithRelationInput[];
    cursor?: Prisma.GradingSchemeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradingSchemeScalarFieldEnum | Prisma.GradingSchemeScalarFieldEnum[];
};
export type GradingSchemeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradingSchemeSelect<ExtArgs> | null;
    omit?: Prisma.GradingSchemeOmit<ExtArgs> | null;
    include?: Prisma.GradingSchemeInclude<ExtArgs> | null;
    where?: Prisma.GradingSchemeWhereInput;
    orderBy?: Prisma.GradingSchemeOrderByWithRelationInput | Prisma.GradingSchemeOrderByWithRelationInput[];
    cursor?: Prisma.GradingSchemeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradingSchemeScalarFieldEnum | Prisma.GradingSchemeScalarFieldEnum[];
};
export type GradingSchemeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradingSchemeSelect<ExtArgs> | null;
    omit?: Prisma.GradingSchemeOmit<ExtArgs> | null;
    include?: Prisma.GradingSchemeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GradingSchemeCreateInput, Prisma.GradingSchemeUncheckedCreateInput>;
};
export type GradingSchemeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GradingSchemeCreateManyInput | Prisma.GradingSchemeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GradingSchemeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradingSchemeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GradingSchemeOmit<ExtArgs> | null;
    data: Prisma.GradingSchemeCreateManyInput | Prisma.GradingSchemeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GradingSchemeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradingSchemeSelect<ExtArgs> | null;
    omit?: Prisma.GradingSchemeOmit<ExtArgs> | null;
    include?: Prisma.GradingSchemeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GradingSchemeUpdateInput, Prisma.GradingSchemeUncheckedUpdateInput>;
    where: Prisma.GradingSchemeWhereUniqueInput;
};
export type GradingSchemeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GradingSchemeUpdateManyMutationInput, Prisma.GradingSchemeUncheckedUpdateManyInput>;
    where?: Prisma.GradingSchemeWhereInput;
    limit?: number;
};
export type GradingSchemeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradingSchemeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GradingSchemeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GradingSchemeUpdateManyMutationInput, Prisma.GradingSchemeUncheckedUpdateManyInput>;
    where?: Prisma.GradingSchemeWhereInput;
    limit?: number;
};
export type GradingSchemeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradingSchemeSelect<ExtArgs> | null;
    omit?: Prisma.GradingSchemeOmit<ExtArgs> | null;
    include?: Prisma.GradingSchemeInclude<ExtArgs> | null;
    where: Prisma.GradingSchemeWhereUniqueInput;
    create: Prisma.XOR<Prisma.GradingSchemeCreateInput, Prisma.GradingSchemeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GradingSchemeUpdateInput, Prisma.GradingSchemeUncheckedUpdateInput>;
};
export type GradingSchemeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradingSchemeSelect<ExtArgs> | null;
    omit?: Prisma.GradingSchemeOmit<ExtArgs> | null;
    include?: Prisma.GradingSchemeInclude<ExtArgs> | null;
    where: Prisma.GradingSchemeWhereUniqueInput;
};
export type GradingSchemeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradingSchemeWhereInput;
    limit?: number;
};
export type GradingScheme$boundariesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GradingSchemeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradingSchemeSelect<ExtArgs> | null;
    omit?: Prisma.GradingSchemeOmit<ExtArgs> | null;
    include?: Prisma.GradingSchemeInclude<ExtArgs> | null;
};
