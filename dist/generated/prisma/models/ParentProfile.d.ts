import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ParentProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$ParentProfilePayload>;
export type AggregateParentProfile = {
    _count: ParentProfileCountAggregateOutputType | null;
    _min: ParentProfileMinAggregateOutputType | null;
    _max: ParentProfileMaxAggregateOutputType | null;
};
export type ParentProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    email: string | null;
    occupation: string | null;
};
export type ParentProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    email: string | null;
    occupation: string | null;
};
export type ParentProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    firstName: number;
    lastName: number;
    phone: number;
    email: number;
    occupation: number;
    _all: number;
};
export type ParentProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    phone?: true;
    email?: true;
    occupation?: true;
};
export type ParentProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    phone?: true;
    email?: true;
    occupation?: true;
};
export type ParentProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    phone?: true;
    email?: true;
    occupation?: true;
    _all?: true;
};
export type ParentProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParentProfileWhereInput;
    orderBy?: Prisma.ParentProfileOrderByWithRelationInput | Prisma.ParentProfileOrderByWithRelationInput[];
    cursor?: Prisma.ParentProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParentProfileCountAggregateInputType;
    _min?: ParentProfileMinAggregateInputType;
    _max?: ParentProfileMaxAggregateInputType;
};
export type GetParentProfileAggregateType<T extends ParentProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateParentProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParentProfile[P]> : Prisma.GetScalarType<T[P], AggregateParentProfile[P]>;
};
export type ParentProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParentProfileWhereInput;
    orderBy?: Prisma.ParentProfileOrderByWithAggregationInput | Prisma.ParentProfileOrderByWithAggregationInput[];
    by: Prisma.ParentProfileScalarFieldEnum[] | Prisma.ParentProfileScalarFieldEnum;
    having?: Prisma.ParentProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParentProfileCountAggregateInputType | true;
    _min?: ParentProfileMinAggregateInputType;
    _max?: ParentProfileMaxAggregateInputType;
};
export type ParentProfileGroupByOutputType = {
    id: string;
    userId: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string | null;
    occupation: string | null;
    _count: ParentProfileCountAggregateOutputType | null;
    _min: ParentProfileMinAggregateOutputType | null;
    _max: ParentProfileMaxAggregateOutputType | null;
};
export type GetParentProfileGroupByPayload<T extends ParentProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParentProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParentProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParentProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParentProfileGroupByOutputType[P]>;
}>>;
export type ParentProfileWhereInput = {
    AND?: Prisma.ParentProfileWhereInput | Prisma.ParentProfileWhereInput[];
    OR?: Prisma.ParentProfileWhereInput[];
    NOT?: Prisma.ParentProfileWhereInput | Prisma.ParentProfileWhereInput[];
    id?: Prisma.StringFilter<"ParentProfile"> | string;
    userId?: Prisma.StringFilter<"ParentProfile"> | string;
    firstName?: Prisma.StringFilter<"ParentProfile"> | string;
    lastName?: Prisma.StringFilter<"ParentProfile"> | string;
    phone?: Prisma.StringFilter<"ParentProfile"> | string;
    email?: Prisma.StringNullableFilter<"ParentProfile"> | string | null;
    occupation?: Prisma.StringNullableFilter<"ParentProfile"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    studentLinks?: Prisma.StudentParentLinkListRelationFilter;
};
export type ParentProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    occupation?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    studentLinks?: Prisma.StudentParentLinkOrderByRelationAggregateInput;
};
export type ParentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.ParentProfileWhereInput | Prisma.ParentProfileWhereInput[];
    OR?: Prisma.ParentProfileWhereInput[];
    NOT?: Prisma.ParentProfileWhereInput | Prisma.ParentProfileWhereInput[];
    firstName?: Prisma.StringFilter<"ParentProfile"> | string;
    lastName?: Prisma.StringFilter<"ParentProfile"> | string;
    phone?: Prisma.StringFilter<"ParentProfile"> | string;
    email?: Prisma.StringNullableFilter<"ParentProfile"> | string | null;
    occupation?: Prisma.StringNullableFilter<"ParentProfile"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    studentLinks?: Prisma.StudentParentLinkListRelationFilter;
}, "id" | "userId">;
export type ParentProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    occupation?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ParentProfileCountOrderByAggregateInput;
    _max?: Prisma.ParentProfileMaxOrderByAggregateInput;
    _min?: Prisma.ParentProfileMinOrderByAggregateInput;
};
export type ParentProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParentProfileScalarWhereWithAggregatesInput | Prisma.ParentProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParentProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParentProfileScalarWhereWithAggregatesInput | Prisma.ParentProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ParentProfile"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ParentProfile"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"ParentProfile"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"ParentProfile"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"ParentProfile"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"ParentProfile"> | string | null;
    occupation?: Prisma.StringNullableWithAggregatesFilter<"ParentProfile"> | string | null;
};
export type ParentProfileCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    phone: string;
    email?: string | null;
    occupation?: string | null;
    user: Prisma.UserCreateNestedOneWithoutParentProfileInput;
    studentLinks?: Prisma.StudentParentLinkCreateNestedManyWithoutParentInput;
};
export type ParentProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    firstName: string;
    lastName: string;
    phone: string;
    email?: string | null;
    occupation?: string | null;
    studentLinks?: Prisma.StudentParentLinkUncheckedCreateNestedManyWithoutParentInput;
};
export type ParentProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutParentProfileNestedInput;
    studentLinks?: Prisma.StudentParentLinkUpdateManyWithoutParentNestedInput;
};
export type ParentProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentLinks?: Prisma.StudentParentLinkUncheckedUpdateManyWithoutParentNestedInput;
};
export type ParentProfileCreateManyInput = {
    id?: string;
    userId: string;
    firstName: string;
    lastName: string;
    phone: string;
    email?: string | null;
    occupation?: string | null;
};
export type ParentProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ParentProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ParentProfileNullableScalarRelationFilter = {
    is?: Prisma.ParentProfileWhereInput | null;
    isNot?: Prisma.ParentProfileWhereInput | null;
};
export type ParentProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    occupation?: Prisma.SortOrder;
};
export type ParentProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    occupation?: Prisma.SortOrder;
};
export type ParentProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    occupation?: Prisma.SortOrder;
};
export type ParentProfileScalarRelationFilter = {
    is?: Prisma.ParentProfileWhereInput;
    isNot?: Prisma.ParentProfileWhereInput;
};
export type ParentProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ParentProfileCreateWithoutUserInput, Prisma.ParentProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ParentProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.ParentProfileWhereUniqueInput;
};
export type ParentProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ParentProfileCreateWithoutUserInput, Prisma.ParentProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ParentProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.ParentProfileWhereUniqueInput;
};
export type ParentProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ParentProfileCreateWithoutUserInput, Prisma.ParentProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ParentProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ParentProfileUpsertWithoutUserInput;
    disconnect?: Prisma.ParentProfileWhereInput | boolean;
    delete?: Prisma.ParentProfileWhereInput | boolean;
    connect?: Prisma.ParentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParentProfileUpdateToOneWithWhereWithoutUserInput, Prisma.ParentProfileUpdateWithoutUserInput>, Prisma.ParentProfileUncheckedUpdateWithoutUserInput>;
};
export type ParentProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ParentProfileCreateWithoutUserInput, Prisma.ParentProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ParentProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ParentProfileUpsertWithoutUserInput;
    disconnect?: Prisma.ParentProfileWhereInput | boolean;
    delete?: Prisma.ParentProfileWhereInput | boolean;
    connect?: Prisma.ParentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParentProfileUpdateToOneWithWhereWithoutUserInput, Prisma.ParentProfileUpdateWithoutUserInput>, Prisma.ParentProfileUncheckedUpdateWithoutUserInput>;
};
export type ParentProfileCreateNestedOneWithoutStudentLinksInput = {
    create?: Prisma.XOR<Prisma.ParentProfileCreateWithoutStudentLinksInput, Prisma.ParentProfileUncheckedCreateWithoutStudentLinksInput>;
    connectOrCreate?: Prisma.ParentProfileCreateOrConnectWithoutStudentLinksInput;
    connect?: Prisma.ParentProfileWhereUniqueInput;
};
export type ParentProfileUpdateOneRequiredWithoutStudentLinksNestedInput = {
    create?: Prisma.XOR<Prisma.ParentProfileCreateWithoutStudentLinksInput, Prisma.ParentProfileUncheckedCreateWithoutStudentLinksInput>;
    connectOrCreate?: Prisma.ParentProfileCreateOrConnectWithoutStudentLinksInput;
    upsert?: Prisma.ParentProfileUpsertWithoutStudentLinksInput;
    connect?: Prisma.ParentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParentProfileUpdateToOneWithWhereWithoutStudentLinksInput, Prisma.ParentProfileUpdateWithoutStudentLinksInput>, Prisma.ParentProfileUncheckedUpdateWithoutStudentLinksInput>;
};
export type ParentProfileCreateWithoutUserInput = {
    id?: string;
    firstName: string;
    lastName: string;
    phone: string;
    email?: string | null;
    occupation?: string | null;
    studentLinks?: Prisma.StudentParentLinkCreateNestedManyWithoutParentInput;
};
export type ParentProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    firstName: string;
    lastName: string;
    phone: string;
    email?: string | null;
    occupation?: string | null;
    studentLinks?: Prisma.StudentParentLinkUncheckedCreateNestedManyWithoutParentInput;
};
export type ParentProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.ParentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParentProfileCreateWithoutUserInput, Prisma.ParentProfileUncheckedCreateWithoutUserInput>;
};
export type ParentProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.ParentProfileUpdateWithoutUserInput, Prisma.ParentProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ParentProfileCreateWithoutUserInput, Prisma.ParentProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.ParentProfileWhereInput;
};
export type ParentProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.ParentProfileWhereInput;
    data: Prisma.XOR<Prisma.ParentProfileUpdateWithoutUserInput, Prisma.ParentProfileUncheckedUpdateWithoutUserInput>;
};
export type ParentProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentLinks?: Prisma.StudentParentLinkUpdateManyWithoutParentNestedInput;
};
export type ParentProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentLinks?: Prisma.StudentParentLinkUncheckedUpdateManyWithoutParentNestedInput;
};
export type ParentProfileCreateWithoutStudentLinksInput = {
    id?: string;
    firstName: string;
    lastName: string;
    phone: string;
    email?: string | null;
    occupation?: string | null;
    user: Prisma.UserCreateNestedOneWithoutParentProfileInput;
};
export type ParentProfileUncheckedCreateWithoutStudentLinksInput = {
    id?: string;
    userId: string;
    firstName: string;
    lastName: string;
    phone: string;
    email?: string | null;
    occupation?: string | null;
};
export type ParentProfileCreateOrConnectWithoutStudentLinksInput = {
    where: Prisma.ParentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParentProfileCreateWithoutStudentLinksInput, Prisma.ParentProfileUncheckedCreateWithoutStudentLinksInput>;
};
export type ParentProfileUpsertWithoutStudentLinksInput = {
    update: Prisma.XOR<Prisma.ParentProfileUpdateWithoutStudentLinksInput, Prisma.ParentProfileUncheckedUpdateWithoutStudentLinksInput>;
    create: Prisma.XOR<Prisma.ParentProfileCreateWithoutStudentLinksInput, Prisma.ParentProfileUncheckedCreateWithoutStudentLinksInput>;
    where?: Prisma.ParentProfileWhereInput;
};
export type ParentProfileUpdateToOneWithWhereWithoutStudentLinksInput = {
    where?: Prisma.ParentProfileWhereInput;
    data: Prisma.XOR<Prisma.ParentProfileUpdateWithoutStudentLinksInput, Prisma.ParentProfileUncheckedUpdateWithoutStudentLinksInput>;
};
export type ParentProfileUpdateWithoutStudentLinksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutParentProfileNestedInput;
};
export type ParentProfileUncheckedUpdateWithoutStudentLinksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ParentProfileCountOutputType = {
    studentLinks: number;
};
export type ParentProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    studentLinks?: boolean | ParentProfileCountOutputTypeCountStudentLinksArgs;
};
export type ParentProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentProfileCountOutputTypeSelect<ExtArgs> | null;
};
export type ParentProfileCountOutputTypeCountStudentLinksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentParentLinkWhereInput;
};
export type ParentProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phone?: boolean;
    email?: boolean;
    occupation?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    studentLinks?: boolean | Prisma.ParentProfile$studentLinksArgs<ExtArgs>;
    _count?: boolean | Prisma.ParentProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parentProfile"]>;
export type ParentProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phone?: boolean;
    email?: boolean;
    occupation?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parentProfile"]>;
export type ParentProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phone?: boolean;
    email?: boolean;
    occupation?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parentProfile"]>;
export type ParentProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phone?: boolean;
    email?: boolean;
    occupation?: boolean;
};
export type ParentProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "phone" | "email" | "occupation", ExtArgs["result"]["parentProfile"]>;
export type ParentProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    studentLinks?: boolean | Prisma.ParentProfile$studentLinksArgs<ExtArgs>;
    _count?: boolean | Prisma.ParentProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ParentProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ParentProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ParentProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParentProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        studentLinks: Prisma.$StudentParentLinkPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        firstName: string;
        lastName: string;
        phone: string;
        email: string | null;
        occupation: string | null;
    }, ExtArgs["result"]["parentProfile"]>;
    composites: {};
};
export type ParentProfileGetPayload<S extends boolean | null | undefined | ParentProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParentProfilePayload, S>;
export type ParentProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParentProfileCountAggregateInputType | true;
};
export interface ParentProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParentProfile'];
        meta: {
            name: 'ParentProfile';
        };
    };
    findUnique<T extends ParentProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, ParentProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParentProfileClient<runtime.Types.Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParentProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParentProfileClient<runtime.Types.Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParentProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, ParentProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParentProfileClient<runtime.Types.Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParentProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParentProfileClient<runtime.Types.Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParentProfileFindManyArgs>(args?: Prisma.SelectSubset<T, ParentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParentProfileCreateArgs>(args: Prisma.SelectSubset<T, ParentProfileCreateArgs<ExtArgs>>): Prisma.Prisma__ParentProfileClient<runtime.Types.Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParentProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, ParentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ParentProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ParentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ParentProfileDeleteArgs>(args: Prisma.SelectSubset<T, ParentProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__ParentProfileClient<runtime.Types.Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParentProfileUpdateArgs>(args: Prisma.SelectSubset<T, ParentProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__ParentProfileClient<runtime.Types.Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParentProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParentProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, ParentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ParentProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ParentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ParentProfileUpsertArgs>(args: Prisma.SelectSubset<T, ParentProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__ParentProfileClient<runtime.Types.Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ParentProfileCountArgs>(args?: Prisma.Subset<T, ParentProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParentProfileCountAggregateOutputType> : number>;
    aggregate<T extends ParentProfileAggregateArgs>(args: Prisma.Subset<T, ParentProfileAggregateArgs>): Prisma.PrismaPromise<GetParentProfileAggregateType<T>>;
    groupBy<T extends ParentProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParentProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: ParentProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParentProfileFieldRefs;
}
export interface Prisma__ParentProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    studentLinks<T extends Prisma.ParentProfile$studentLinksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParentProfile$studentLinksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentParentLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParentProfileFieldRefs {
    readonly id: Prisma.FieldRef<"ParentProfile", 'String'>;
    readonly userId: Prisma.FieldRef<"ParentProfile", 'String'>;
    readonly firstName: Prisma.FieldRef<"ParentProfile", 'String'>;
    readonly lastName: Prisma.FieldRef<"ParentProfile", 'String'>;
    readonly phone: Prisma.FieldRef<"ParentProfile", 'String'>;
    readonly email: Prisma.FieldRef<"ParentProfile", 'String'>;
    readonly occupation: Prisma.FieldRef<"ParentProfile", 'String'>;
}
export type ParentProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentProfileSelect<ExtArgs> | null;
    omit?: Prisma.ParentProfileOmit<ExtArgs> | null;
    include?: Prisma.ParentProfileInclude<ExtArgs> | null;
    where: Prisma.ParentProfileWhereUniqueInput;
};
export type ParentProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentProfileSelect<ExtArgs> | null;
    omit?: Prisma.ParentProfileOmit<ExtArgs> | null;
    include?: Prisma.ParentProfileInclude<ExtArgs> | null;
    where: Prisma.ParentProfileWhereUniqueInput;
};
export type ParentProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentProfileSelect<ExtArgs> | null;
    omit?: Prisma.ParentProfileOmit<ExtArgs> | null;
    include?: Prisma.ParentProfileInclude<ExtArgs> | null;
    where?: Prisma.ParentProfileWhereInput;
    orderBy?: Prisma.ParentProfileOrderByWithRelationInput | Prisma.ParentProfileOrderByWithRelationInput[];
    cursor?: Prisma.ParentProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParentProfileScalarFieldEnum | Prisma.ParentProfileScalarFieldEnum[];
};
export type ParentProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentProfileSelect<ExtArgs> | null;
    omit?: Prisma.ParentProfileOmit<ExtArgs> | null;
    include?: Prisma.ParentProfileInclude<ExtArgs> | null;
    where?: Prisma.ParentProfileWhereInput;
    orderBy?: Prisma.ParentProfileOrderByWithRelationInput | Prisma.ParentProfileOrderByWithRelationInput[];
    cursor?: Prisma.ParentProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParentProfileScalarFieldEnum | Prisma.ParentProfileScalarFieldEnum[];
};
export type ParentProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentProfileSelect<ExtArgs> | null;
    omit?: Prisma.ParentProfileOmit<ExtArgs> | null;
    include?: Prisma.ParentProfileInclude<ExtArgs> | null;
    where?: Prisma.ParentProfileWhereInput;
    orderBy?: Prisma.ParentProfileOrderByWithRelationInput | Prisma.ParentProfileOrderByWithRelationInput[];
    cursor?: Prisma.ParentProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParentProfileScalarFieldEnum | Prisma.ParentProfileScalarFieldEnum[];
};
export type ParentProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentProfileSelect<ExtArgs> | null;
    omit?: Prisma.ParentProfileOmit<ExtArgs> | null;
    include?: Prisma.ParentProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParentProfileCreateInput, Prisma.ParentProfileUncheckedCreateInput>;
};
export type ParentProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParentProfileCreateManyInput | Prisma.ParentProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ParentProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParentProfileOmit<ExtArgs> | null;
    data: Prisma.ParentProfileCreateManyInput | Prisma.ParentProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ParentProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ParentProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentProfileSelect<ExtArgs> | null;
    omit?: Prisma.ParentProfileOmit<ExtArgs> | null;
    include?: Prisma.ParentProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParentProfileUpdateInput, Prisma.ParentProfileUncheckedUpdateInput>;
    where: Prisma.ParentProfileWhereUniqueInput;
};
export type ParentProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParentProfileUpdateManyMutationInput, Prisma.ParentProfileUncheckedUpdateManyInput>;
    where?: Prisma.ParentProfileWhereInput;
    limit?: number;
};
export type ParentProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParentProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParentProfileUpdateManyMutationInput, Prisma.ParentProfileUncheckedUpdateManyInput>;
    where?: Prisma.ParentProfileWhereInput;
    limit?: number;
    include?: Prisma.ParentProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ParentProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentProfileSelect<ExtArgs> | null;
    omit?: Prisma.ParentProfileOmit<ExtArgs> | null;
    include?: Prisma.ParentProfileInclude<ExtArgs> | null;
    where: Prisma.ParentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParentProfileCreateInput, Prisma.ParentProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParentProfileUpdateInput, Prisma.ParentProfileUncheckedUpdateInput>;
};
export type ParentProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentProfileSelect<ExtArgs> | null;
    omit?: Prisma.ParentProfileOmit<ExtArgs> | null;
    include?: Prisma.ParentProfileInclude<ExtArgs> | null;
    where: Prisma.ParentProfileWhereUniqueInput;
};
export type ParentProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParentProfileWhereInput;
    limit?: number;
};
export type ParentProfile$studentLinksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ParentProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParentProfileSelect<ExtArgs> | null;
    omit?: Prisma.ParentProfileOmit<ExtArgs> | null;
    include?: Prisma.ParentProfileInclude<ExtArgs> | null;
};
