import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TranscriptModel = runtime.Types.Result.DefaultSelection<Prisma.$TranscriptPayload>;
export type AggregateTranscript = {
    _count: TranscriptCountAggregateOutputType | null;
    _min: TranscriptMinAggregateOutputType | null;
    _max: TranscriptMaxAggregateOutputType | null;
};
export type TranscriptMinAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    indexNumber: string | null;
    systemHash: string | null;
    qrCodeUrl: string | null;
    verificationUrl: string | null;
    pdfUrl: string | null;
    purpose: string | null;
    requestedById: string | null;
    generatedAt: Date | null;
};
export type TranscriptMaxAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    indexNumber: string | null;
    systemHash: string | null;
    qrCodeUrl: string | null;
    verificationUrl: string | null;
    pdfUrl: string | null;
    purpose: string | null;
    requestedById: string | null;
    generatedAt: Date | null;
};
export type TranscriptCountAggregateOutputType = {
    id: number;
    studentId: number;
    indexNumber: number;
    systemHash: number;
    qrCodeUrl: number;
    verificationUrl: number;
    pdfUrl: number;
    purpose: number;
    requestedById: number;
    generatedAt: number;
    _all: number;
};
export type TranscriptMinAggregateInputType = {
    id?: true;
    studentId?: true;
    indexNumber?: true;
    systemHash?: true;
    qrCodeUrl?: true;
    verificationUrl?: true;
    pdfUrl?: true;
    purpose?: true;
    requestedById?: true;
    generatedAt?: true;
};
export type TranscriptMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    indexNumber?: true;
    systemHash?: true;
    qrCodeUrl?: true;
    verificationUrl?: true;
    pdfUrl?: true;
    purpose?: true;
    requestedById?: true;
    generatedAt?: true;
};
export type TranscriptCountAggregateInputType = {
    id?: true;
    studentId?: true;
    indexNumber?: true;
    systemHash?: true;
    qrCodeUrl?: true;
    verificationUrl?: true;
    pdfUrl?: true;
    purpose?: true;
    requestedById?: true;
    generatedAt?: true;
    _all?: true;
};
export type TranscriptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TranscriptWhereInput;
    orderBy?: Prisma.TranscriptOrderByWithRelationInput | Prisma.TranscriptOrderByWithRelationInput[];
    cursor?: Prisma.TranscriptWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TranscriptCountAggregateInputType;
    _min?: TranscriptMinAggregateInputType;
    _max?: TranscriptMaxAggregateInputType;
};
export type GetTranscriptAggregateType<T extends TranscriptAggregateArgs> = {
    [P in keyof T & keyof AggregateTranscript]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTranscript[P]> : Prisma.GetScalarType<T[P], AggregateTranscript[P]>;
};
export type TranscriptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TranscriptWhereInput;
    orderBy?: Prisma.TranscriptOrderByWithAggregationInput | Prisma.TranscriptOrderByWithAggregationInput[];
    by: Prisma.TranscriptScalarFieldEnum[] | Prisma.TranscriptScalarFieldEnum;
    having?: Prisma.TranscriptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TranscriptCountAggregateInputType | true;
    _min?: TranscriptMinAggregateInputType;
    _max?: TranscriptMaxAggregateInputType;
};
export type TranscriptGroupByOutputType = {
    id: string;
    studentId: string;
    indexNumber: string;
    systemHash: string;
    qrCodeUrl: string | null;
    verificationUrl: string | null;
    pdfUrl: string | null;
    purpose: string | null;
    requestedById: string | null;
    generatedAt: Date;
    _count: TranscriptCountAggregateOutputType | null;
    _min: TranscriptMinAggregateOutputType | null;
    _max: TranscriptMaxAggregateOutputType | null;
};
export type GetTranscriptGroupByPayload<T extends TranscriptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TranscriptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TranscriptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TranscriptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TranscriptGroupByOutputType[P]>;
}>>;
export type TranscriptWhereInput = {
    AND?: Prisma.TranscriptWhereInput | Prisma.TranscriptWhereInput[];
    OR?: Prisma.TranscriptWhereInput[];
    NOT?: Prisma.TranscriptWhereInput | Prisma.TranscriptWhereInput[];
    id?: Prisma.StringFilter<"Transcript"> | string;
    studentId?: Prisma.StringFilter<"Transcript"> | string;
    indexNumber?: Prisma.StringFilter<"Transcript"> | string;
    systemHash?: Prisma.StringFilter<"Transcript"> | string;
    qrCodeUrl?: Prisma.StringNullableFilter<"Transcript"> | string | null;
    verificationUrl?: Prisma.StringNullableFilter<"Transcript"> | string | null;
    pdfUrl?: Prisma.StringNullableFilter<"Transcript"> | string | null;
    purpose?: Prisma.StringNullableFilter<"Transcript"> | string | null;
    requestedById?: Prisma.StringNullableFilter<"Transcript"> | string | null;
    generatedAt?: Prisma.DateTimeFilter<"Transcript"> | Date | string;
};
export type TranscriptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    indexNumber?: Prisma.SortOrder;
    systemHash?: Prisma.SortOrder;
    qrCodeUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    verificationUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    purpose?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type TranscriptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    systemHash?: string;
    AND?: Prisma.TranscriptWhereInput | Prisma.TranscriptWhereInput[];
    OR?: Prisma.TranscriptWhereInput[];
    NOT?: Prisma.TranscriptWhereInput | Prisma.TranscriptWhereInput[];
    studentId?: Prisma.StringFilter<"Transcript"> | string;
    indexNumber?: Prisma.StringFilter<"Transcript"> | string;
    qrCodeUrl?: Prisma.StringNullableFilter<"Transcript"> | string | null;
    verificationUrl?: Prisma.StringNullableFilter<"Transcript"> | string | null;
    pdfUrl?: Prisma.StringNullableFilter<"Transcript"> | string | null;
    purpose?: Prisma.StringNullableFilter<"Transcript"> | string | null;
    requestedById?: Prisma.StringNullableFilter<"Transcript"> | string | null;
    generatedAt?: Prisma.DateTimeFilter<"Transcript"> | Date | string;
}, "id" | "systemHash">;
export type TranscriptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    indexNumber?: Prisma.SortOrder;
    systemHash?: Prisma.SortOrder;
    qrCodeUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    verificationUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    purpose?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    _count?: Prisma.TranscriptCountOrderByAggregateInput;
    _max?: Prisma.TranscriptMaxOrderByAggregateInput;
    _min?: Prisma.TranscriptMinOrderByAggregateInput;
};
export type TranscriptScalarWhereWithAggregatesInput = {
    AND?: Prisma.TranscriptScalarWhereWithAggregatesInput | Prisma.TranscriptScalarWhereWithAggregatesInput[];
    OR?: Prisma.TranscriptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TranscriptScalarWhereWithAggregatesInput | Prisma.TranscriptScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Transcript"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"Transcript"> | string;
    indexNumber?: Prisma.StringWithAggregatesFilter<"Transcript"> | string;
    systemHash?: Prisma.StringWithAggregatesFilter<"Transcript"> | string;
    qrCodeUrl?: Prisma.StringNullableWithAggregatesFilter<"Transcript"> | string | null;
    verificationUrl?: Prisma.StringNullableWithAggregatesFilter<"Transcript"> | string | null;
    pdfUrl?: Prisma.StringNullableWithAggregatesFilter<"Transcript"> | string | null;
    purpose?: Prisma.StringNullableWithAggregatesFilter<"Transcript"> | string | null;
    requestedById?: Prisma.StringNullableWithAggregatesFilter<"Transcript"> | string | null;
    generatedAt?: Prisma.DateTimeWithAggregatesFilter<"Transcript"> | Date | string;
};
export type TranscriptCreateInput = {
    id?: string;
    studentId: string;
    indexNumber: string;
    systemHash: string;
    qrCodeUrl?: string | null;
    verificationUrl?: string | null;
    pdfUrl?: string | null;
    purpose?: string | null;
    requestedById?: string | null;
    generatedAt?: Date | string;
};
export type TranscriptUncheckedCreateInput = {
    id?: string;
    studentId: string;
    indexNumber: string;
    systemHash: string;
    qrCodeUrl?: string | null;
    verificationUrl?: string | null;
    pdfUrl?: string | null;
    purpose?: string | null;
    requestedById?: string | null;
    generatedAt?: Date | string;
};
export type TranscriptUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    systemHash?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCodeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TranscriptUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    systemHash?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCodeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TranscriptCreateManyInput = {
    id?: string;
    studentId: string;
    indexNumber: string;
    systemHash: string;
    qrCodeUrl?: string | null;
    verificationUrl?: string | null;
    pdfUrl?: string | null;
    purpose?: string | null;
    requestedById?: string | null;
    generatedAt?: Date | string;
};
export type TranscriptUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    systemHash?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCodeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TranscriptUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    systemHash?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCodeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TranscriptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    indexNumber?: Prisma.SortOrder;
    systemHash?: Prisma.SortOrder;
    qrCodeUrl?: Prisma.SortOrder;
    verificationUrl?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type TranscriptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    indexNumber?: Prisma.SortOrder;
    systemHash?: Prisma.SortOrder;
    qrCodeUrl?: Prisma.SortOrder;
    verificationUrl?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type TranscriptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    indexNumber?: Prisma.SortOrder;
    systemHash?: Prisma.SortOrder;
    qrCodeUrl?: Prisma.SortOrder;
    verificationUrl?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type TranscriptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    indexNumber?: boolean;
    systemHash?: boolean;
    qrCodeUrl?: boolean;
    verificationUrl?: boolean;
    pdfUrl?: boolean;
    purpose?: boolean;
    requestedById?: boolean;
    generatedAt?: boolean;
}, ExtArgs["result"]["transcript"]>;
export type TranscriptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    indexNumber?: boolean;
    systemHash?: boolean;
    qrCodeUrl?: boolean;
    verificationUrl?: boolean;
    pdfUrl?: boolean;
    purpose?: boolean;
    requestedById?: boolean;
    generatedAt?: boolean;
}, ExtArgs["result"]["transcript"]>;
export type TranscriptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    indexNumber?: boolean;
    systemHash?: boolean;
    qrCodeUrl?: boolean;
    verificationUrl?: boolean;
    pdfUrl?: boolean;
    purpose?: boolean;
    requestedById?: boolean;
    generatedAt?: boolean;
}, ExtArgs["result"]["transcript"]>;
export type TranscriptSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    indexNumber?: boolean;
    systemHash?: boolean;
    qrCodeUrl?: boolean;
    verificationUrl?: boolean;
    pdfUrl?: boolean;
    purpose?: boolean;
    requestedById?: boolean;
    generatedAt?: boolean;
};
export type TranscriptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "indexNumber" | "systemHash" | "qrCodeUrl" | "verificationUrl" | "pdfUrl" | "purpose" | "requestedById" | "generatedAt", ExtArgs["result"]["transcript"]>;
export type $TranscriptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Transcript";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        studentId: string;
        indexNumber: string;
        systemHash: string;
        qrCodeUrl: string | null;
        verificationUrl: string | null;
        pdfUrl: string | null;
        purpose: string | null;
        requestedById: string | null;
        generatedAt: Date;
    }, ExtArgs["result"]["transcript"]>;
    composites: {};
};
export type TranscriptGetPayload<S extends boolean | null | undefined | TranscriptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TranscriptPayload, S>;
export type TranscriptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TranscriptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TranscriptCountAggregateInputType | true;
};
export interface TranscriptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Transcript'];
        meta: {
            name: 'Transcript';
        };
    };
    findUnique<T extends TranscriptFindUniqueArgs>(args: Prisma.SelectSubset<T, TranscriptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TranscriptClient<runtime.Types.Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TranscriptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TranscriptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TranscriptClient<runtime.Types.Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TranscriptFindFirstArgs>(args?: Prisma.SelectSubset<T, TranscriptFindFirstArgs<ExtArgs>>): Prisma.Prisma__TranscriptClient<runtime.Types.Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TranscriptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TranscriptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TranscriptClient<runtime.Types.Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TranscriptFindManyArgs>(args?: Prisma.SelectSubset<T, TranscriptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TranscriptCreateArgs>(args: Prisma.SelectSubset<T, TranscriptCreateArgs<ExtArgs>>): Prisma.Prisma__TranscriptClient<runtime.Types.Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TranscriptCreateManyArgs>(args?: Prisma.SelectSubset<T, TranscriptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TranscriptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TranscriptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TranscriptDeleteArgs>(args: Prisma.SelectSubset<T, TranscriptDeleteArgs<ExtArgs>>): Prisma.Prisma__TranscriptClient<runtime.Types.Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TranscriptUpdateArgs>(args: Prisma.SelectSubset<T, TranscriptUpdateArgs<ExtArgs>>): Prisma.Prisma__TranscriptClient<runtime.Types.Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TranscriptDeleteManyArgs>(args?: Prisma.SelectSubset<T, TranscriptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TranscriptUpdateManyArgs>(args: Prisma.SelectSubset<T, TranscriptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TranscriptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TranscriptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TranscriptUpsertArgs>(args: Prisma.SelectSubset<T, TranscriptUpsertArgs<ExtArgs>>): Prisma.Prisma__TranscriptClient<runtime.Types.Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TranscriptCountArgs>(args?: Prisma.Subset<T, TranscriptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TranscriptCountAggregateOutputType> : number>;
    aggregate<T extends TranscriptAggregateArgs>(args: Prisma.Subset<T, TranscriptAggregateArgs>): Prisma.PrismaPromise<GetTranscriptAggregateType<T>>;
    groupBy<T extends TranscriptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TranscriptGroupByArgs['orderBy'];
    } : {
        orderBy?: TranscriptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TranscriptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranscriptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TranscriptFieldRefs;
}
export interface Prisma__TranscriptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TranscriptFieldRefs {
    readonly id: Prisma.FieldRef<"Transcript", 'String'>;
    readonly studentId: Prisma.FieldRef<"Transcript", 'String'>;
    readonly indexNumber: Prisma.FieldRef<"Transcript", 'String'>;
    readonly systemHash: Prisma.FieldRef<"Transcript", 'String'>;
    readonly qrCodeUrl: Prisma.FieldRef<"Transcript", 'String'>;
    readonly verificationUrl: Prisma.FieldRef<"Transcript", 'String'>;
    readonly pdfUrl: Prisma.FieldRef<"Transcript", 'String'>;
    readonly purpose: Prisma.FieldRef<"Transcript", 'String'>;
    readonly requestedById: Prisma.FieldRef<"Transcript", 'String'>;
    readonly generatedAt: Prisma.FieldRef<"Transcript", 'DateTime'>;
}
export type TranscriptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptOmit<ExtArgs> | null;
    where: Prisma.TranscriptWhereUniqueInput;
};
export type TranscriptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptOmit<ExtArgs> | null;
    where: Prisma.TranscriptWhereUniqueInput;
};
export type TranscriptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptOmit<ExtArgs> | null;
    where?: Prisma.TranscriptWhereInput;
    orderBy?: Prisma.TranscriptOrderByWithRelationInput | Prisma.TranscriptOrderByWithRelationInput[];
    cursor?: Prisma.TranscriptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TranscriptScalarFieldEnum | Prisma.TranscriptScalarFieldEnum[];
};
export type TranscriptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptOmit<ExtArgs> | null;
    where?: Prisma.TranscriptWhereInput;
    orderBy?: Prisma.TranscriptOrderByWithRelationInput | Prisma.TranscriptOrderByWithRelationInput[];
    cursor?: Prisma.TranscriptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TranscriptScalarFieldEnum | Prisma.TranscriptScalarFieldEnum[];
};
export type TranscriptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptOmit<ExtArgs> | null;
    where?: Prisma.TranscriptWhereInput;
    orderBy?: Prisma.TranscriptOrderByWithRelationInput | Prisma.TranscriptOrderByWithRelationInput[];
    cursor?: Prisma.TranscriptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TranscriptScalarFieldEnum | Prisma.TranscriptScalarFieldEnum[];
};
export type TranscriptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TranscriptCreateInput, Prisma.TranscriptUncheckedCreateInput>;
};
export type TranscriptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TranscriptCreateManyInput | Prisma.TranscriptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TranscriptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TranscriptOmit<ExtArgs> | null;
    data: Prisma.TranscriptCreateManyInput | Prisma.TranscriptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TranscriptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TranscriptUpdateInput, Prisma.TranscriptUncheckedUpdateInput>;
    where: Prisma.TranscriptWhereUniqueInput;
};
export type TranscriptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TranscriptUpdateManyMutationInput, Prisma.TranscriptUncheckedUpdateManyInput>;
    where?: Prisma.TranscriptWhereInput;
    limit?: number;
};
export type TranscriptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TranscriptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TranscriptUpdateManyMutationInput, Prisma.TranscriptUncheckedUpdateManyInput>;
    where?: Prisma.TranscriptWhereInput;
    limit?: number;
};
export type TranscriptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptOmit<ExtArgs> | null;
    where: Prisma.TranscriptWhereUniqueInput;
    create: Prisma.XOR<Prisma.TranscriptCreateInput, Prisma.TranscriptUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TranscriptUpdateInput, Prisma.TranscriptUncheckedUpdateInput>;
};
export type TranscriptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptOmit<ExtArgs> | null;
    where: Prisma.TranscriptWhereUniqueInput;
};
export type TranscriptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TranscriptWhereInput;
    limit?: number;
};
export type TranscriptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptOmit<ExtArgs> | null;
};
