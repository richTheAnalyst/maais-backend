import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type DepartmentModel = runtime.Types.Result.DefaultSelection<Prisma.$DepartmentPayload>;
export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
};
export type DepartmentMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    code: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type DepartmentMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    code: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type DepartmentCountAggregateOutputType = {
    id: number;
    name: number;
    code: number;
    description: number;
    createdAt: number;
    _all: number;
};
export type DepartmentMinAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    createdAt?: true;
};
export type DepartmentMaxAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    createdAt?: true;
};
export type DepartmentCountAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    createdAt?: true;
    _all?: true;
};
export type DepartmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DepartmentCountAggregateInputType;
    _min?: DepartmentMinAggregateInputType;
    _max?: DepartmentMaxAggregateInputType;
};
export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
    [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDepartment[P]> : Prisma.GetScalarType<T[P], AggregateDepartment[P]>;
};
export type DepartmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithAggregationInput | Prisma.DepartmentOrderByWithAggregationInput[];
    by: Prisma.DepartmentScalarFieldEnum[] | Prisma.DepartmentScalarFieldEnum;
    having?: Prisma.DepartmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DepartmentCountAggregateInputType | true;
    _min?: DepartmentMinAggregateInputType;
    _max?: DepartmentMaxAggregateInputType;
};
export type DepartmentGroupByOutputType = {
    id: string;
    name: string;
    code: string;
    description: string | null;
    createdAt: Date;
    _count: DepartmentCountAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
};
export type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DepartmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DepartmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DepartmentGroupByOutputType[P]>;
}>>;
export type DepartmentWhereInput = {
    AND?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    OR?: Prisma.DepartmentWhereInput[];
    NOT?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    id?: Prisma.StringFilter<"Department"> | string;
    name?: Prisma.StringFilter<"Department"> | string;
    code?: Prisma.StringFilter<"Department"> | string;
    description?: Prisma.StringNullableFilter<"Department"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Department"> | Date | string;
    staff?: Prisma.StaffProfileListRelationFilter;
    subjects?: Prisma.SubjectListRelationFilter;
};
export type DepartmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    staff?: Prisma.StaffProfileOrderByRelationAggregateInput;
    subjects?: Prisma.SubjectOrderByRelationAggregateInput;
};
export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    code?: string;
    AND?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    OR?: Prisma.DepartmentWhereInput[];
    NOT?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    description?: Prisma.StringNullableFilter<"Department"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Department"> | Date | string;
    staff?: Prisma.StaffProfileListRelationFilter;
    subjects?: Prisma.SubjectListRelationFilter;
}, "id" | "name" | "code">;
export type DepartmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DepartmentCountOrderByAggregateInput;
    _max?: Prisma.DepartmentMaxOrderByAggregateInput;
    _min?: Prisma.DepartmentMinOrderByAggregateInput;
};
export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.DepartmentScalarWhereWithAggregatesInput | Prisma.DepartmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.DepartmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DepartmentScalarWhereWithAggregatesInput | Prisma.DepartmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Department"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Department"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Department"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Department"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Department"> | Date | string;
};
export type DepartmentCreateInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    createdAt?: Date | string;
    staff?: Prisma.StaffProfileCreateNestedManyWithoutDepartmentInput;
    subjects?: Prisma.SubjectCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    createdAt?: Date | string;
    staff?: Prisma.StaffProfileUncheckedCreateNestedManyWithoutDepartmentInput;
    subjects?: Prisma.SubjectUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.StaffProfileUpdateManyWithoutDepartmentNestedInput;
    subjects?: Prisma.SubjectUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.StaffProfileUncheckedUpdateManyWithoutDepartmentNestedInput;
    subjects?: Prisma.SubjectUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentCreateManyInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    createdAt?: Date | string;
};
export type DepartmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentNullableScalarRelationFilter = {
    is?: Prisma.DepartmentWhereInput | null;
    isNot?: Prisma.DepartmentWhereInput | null;
};
export type DepartmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DepartmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DepartmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DepartmentCreateNestedOneWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutStaffInput, Prisma.DepartmentUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutStaffInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateOneWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutStaffInput, Prisma.DepartmentUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutStaffInput;
    upsert?: Prisma.DepartmentUpsertWithoutStaffInput;
    disconnect?: Prisma.DepartmentWhereInput | boolean;
    delete?: Prisma.DepartmentWhereInput | boolean;
    connect?: Prisma.DepartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartmentUpdateToOneWithWhereWithoutStaffInput, Prisma.DepartmentUpdateWithoutStaffInput>, Prisma.DepartmentUncheckedUpdateWithoutStaffInput>;
};
export type DepartmentCreateNestedOneWithoutSubjectsInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutSubjectsInput, Prisma.DepartmentUncheckedCreateWithoutSubjectsInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutSubjectsInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateOneWithoutSubjectsNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutSubjectsInput, Prisma.DepartmentUncheckedCreateWithoutSubjectsInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutSubjectsInput;
    upsert?: Prisma.DepartmentUpsertWithoutSubjectsInput;
    disconnect?: Prisma.DepartmentWhereInput | boolean;
    delete?: Prisma.DepartmentWhereInput | boolean;
    connect?: Prisma.DepartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartmentUpdateToOneWithWhereWithoutSubjectsInput, Prisma.DepartmentUpdateWithoutSubjectsInput>, Prisma.DepartmentUncheckedUpdateWithoutSubjectsInput>;
};
export type DepartmentCreateWithoutStaffInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    createdAt?: Date | string;
    subjects?: Prisma.SubjectCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateWithoutStaffInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    createdAt?: Date | string;
    subjects?: Prisma.SubjectUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentCreateOrConnectWithoutStaffInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutStaffInput, Prisma.DepartmentUncheckedCreateWithoutStaffInput>;
};
export type DepartmentUpsertWithoutStaffInput = {
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutStaffInput, Prisma.DepartmentUncheckedUpdateWithoutStaffInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutStaffInput, Prisma.DepartmentUncheckedCreateWithoutStaffInput>;
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentUpdateToOneWithWhereWithoutStaffInput = {
    where?: Prisma.DepartmentWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutStaffInput, Prisma.DepartmentUncheckedUpdateWithoutStaffInput>;
};
export type DepartmentUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subjects?: Prisma.SubjectUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subjects?: Prisma.SubjectUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentCreateWithoutSubjectsInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    createdAt?: Date | string;
    staff?: Prisma.StaffProfileCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateWithoutSubjectsInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    createdAt?: Date | string;
    staff?: Prisma.StaffProfileUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentCreateOrConnectWithoutSubjectsInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutSubjectsInput, Prisma.DepartmentUncheckedCreateWithoutSubjectsInput>;
};
export type DepartmentUpsertWithoutSubjectsInput = {
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutSubjectsInput, Prisma.DepartmentUncheckedUpdateWithoutSubjectsInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutSubjectsInput, Prisma.DepartmentUncheckedCreateWithoutSubjectsInput>;
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: Prisma.DepartmentWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutSubjectsInput, Prisma.DepartmentUncheckedUpdateWithoutSubjectsInput>;
};
export type DepartmentUpdateWithoutSubjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.StaffProfileUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutSubjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.StaffProfileUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentCountOutputType = {
    staff: number;
    subjects: number;
};
export type DepartmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    staff?: boolean | DepartmentCountOutputTypeCountStaffArgs;
    subjects?: boolean | DepartmentCountOutputTypeCountSubjectsArgs;
};
export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentCountOutputTypeSelect<ExtArgs> | null;
};
export type DepartmentCountOutputTypeCountStaffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StaffProfileWhereInput;
};
export type DepartmentCountOutputTypeCountSubjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectWhereInput;
};
export type DepartmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    createdAt?: boolean;
    staff?: boolean | Prisma.Department$staffArgs<ExtArgs>;
    subjects?: boolean | Prisma.Department$subjectsArgs<ExtArgs>;
    _count?: boolean | Prisma.DepartmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["department"]>;
export type DepartmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["department"]>;
export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["department"]>;
export type DepartmentSelectScalar = {
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    createdAt?: boolean;
};
export type DepartmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "code" | "description" | "createdAt", ExtArgs["result"]["department"]>;
export type DepartmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    staff?: boolean | Prisma.Department$staffArgs<ExtArgs>;
    subjects?: boolean | Prisma.Department$subjectsArgs<ExtArgs>;
    _count?: boolean | Prisma.DepartmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $DepartmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Department";
    objects: {
        staff: Prisma.$StaffProfilePayload<ExtArgs>[];
        subjects: Prisma.$SubjectPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        code: string;
        description: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["department"]>;
    composites: {};
};
export type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DepartmentPayload, S>;
export type DepartmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DepartmentCountAggregateInputType | true;
};
export interface DepartmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Department'];
        meta: {
            name: 'Department';
        };
    };
    findUnique<T extends DepartmentFindUniqueArgs>(args: Prisma.SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DepartmentFindFirstArgs>(args?: Prisma.SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DepartmentFindManyArgs>(args?: Prisma.SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DepartmentCreateArgs>(args: Prisma.SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DepartmentCreateManyArgs>(args?: Prisma.SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DepartmentDeleteArgs>(args: Prisma.SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DepartmentUpdateArgs>(args: Prisma.SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DepartmentUpdateManyArgs>(args: Prisma.SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DepartmentUpsertArgs>(args: Prisma.SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DepartmentCountArgs>(args?: Prisma.Subset<T, DepartmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DepartmentCountAggregateOutputType> : number>;
    aggregate<T extends DepartmentAggregateArgs>(args: Prisma.Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>;
    groupBy<T extends DepartmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DepartmentGroupByArgs['orderBy'];
    } : {
        orderBy?: DepartmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DepartmentFieldRefs;
}
export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    staff<T extends Prisma.Department$staffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Department$staffArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    subjects<T extends Prisma.Department$subjectsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Department$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DepartmentFieldRefs {
    readonly id: Prisma.FieldRef<"Department", 'String'>;
    readonly name: Prisma.FieldRef<"Department", 'String'>;
    readonly code: Prisma.FieldRef<"Department", 'String'>;
    readonly description: Prisma.FieldRef<"Department", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Department", 'DateTime'>;
}
export type DepartmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentCreateInput, Prisma.DepartmentUncheckedCreateInput>;
};
export type DepartmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DepartmentCreateManyInput | Prisma.DepartmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DepartmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    data: Prisma.DepartmentCreateManyInput | Prisma.DepartmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DepartmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentUpdateInput, Prisma.DepartmentUncheckedUpdateInput>;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DepartmentUpdateManyMutationInput, Prisma.DepartmentUncheckedUpdateManyInput>;
    where?: Prisma.DepartmentWhereInput;
    limit?: number;
};
export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentUpdateManyMutationInput, Prisma.DepartmentUncheckedUpdateManyInput>;
    where?: Prisma.DepartmentWhereInput;
    limit?: number;
};
export type DepartmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateInput, Prisma.DepartmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DepartmentUpdateInput, Prisma.DepartmentUncheckedUpdateInput>;
};
export type DepartmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
    limit?: number;
};
export type Department$staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Department$subjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DepartmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
};
