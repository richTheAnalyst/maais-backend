import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AttendanceRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendanceRecordPayload>;
export type AggregateAttendanceRecord = {
    _count: AttendanceRecordCountAggregateOutputType | null;
    _avg: AttendanceRecordAvgAggregateOutputType | null;
    _sum: AttendanceRecordSumAggregateOutputType | null;
    _min: AttendanceRecordMinAggregateOutputType | null;
    _max: AttendanceRecordMaxAggregateOutputType | null;
};
export type AttendanceRecordAvgAggregateOutputType = {
    daysPresent: number | null;
    daysAbsent: number | null;
    totalDays: number | null;
};
export type AttendanceRecordSumAggregateOutputType = {
    daysPresent: number | null;
    daysAbsent: number | null;
    totalDays: number | null;
};
export type AttendanceRecordMinAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    termId: string | null;
    daysPresent: number | null;
    daysAbsent: number | null;
    totalDays: number | null;
};
export type AttendanceRecordMaxAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    termId: string | null;
    daysPresent: number | null;
    daysAbsent: number | null;
    totalDays: number | null;
};
export type AttendanceRecordCountAggregateOutputType = {
    id: number;
    studentId: number;
    termId: number;
    daysPresent: number;
    daysAbsent: number;
    totalDays: number;
    _all: number;
};
export type AttendanceRecordAvgAggregateInputType = {
    daysPresent?: true;
    daysAbsent?: true;
    totalDays?: true;
};
export type AttendanceRecordSumAggregateInputType = {
    daysPresent?: true;
    daysAbsent?: true;
    totalDays?: true;
};
export type AttendanceRecordMinAggregateInputType = {
    id?: true;
    studentId?: true;
    termId?: true;
    daysPresent?: true;
    daysAbsent?: true;
    totalDays?: true;
};
export type AttendanceRecordMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    termId?: true;
    daysPresent?: true;
    daysAbsent?: true;
    totalDays?: true;
};
export type AttendanceRecordCountAggregateInputType = {
    id?: true;
    studentId?: true;
    termId?: true;
    daysPresent?: true;
    daysAbsent?: true;
    totalDays?: true;
    _all?: true;
};
export type AttendanceRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceRecordWhereInput;
    orderBy?: Prisma.AttendanceRecordOrderByWithRelationInput | Prisma.AttendanceRecordOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttendanceRecordCountAggregateInputType;
    _avg?: AttendanceRecordAvgAggregateInputType;
    _sum?: AttendanceRecordSumAggregateInputType;
    _min?: AttendanceRecordMinAggregateInputType;
    _max?: AttendanceRecordMaxAggregateInputType;
};
export type GetAttendanceRecordAggregateType<T extends AttendanceRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendanceRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendanceRecord[P]> : Prisma.GetScalarType<T[P], AggregateAttendanceRecord[P]>;
};
export type AttendanceRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceRecordWhereInput;
    orderBy?: Prisma.AttendanceRecordOrderByWithAggregationInput | Prisma.AttendanceRecordOrderByWithAggregationInput[];
    by: Prisma.AttendanceRecordScalarFieldEnum[] | Prisma.AttendanceRecordScalarFieldEnum;
    having?: Prisma.AttendanceRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceRecordCountAggregateInputType | true;
    _avg?: AttendanceRecordAvgAggregateInputType;
    _sum?: AttendanceRecordSumAggregateInputType;
    _min?: AttendanceRecordMinAggregateInputType;
    _max?: AttendanceRecordMaxAggregateInputType;
};
export type AttendanceRecordGroupByOutputType = {
    id: string;
    studentId: string;
    termId: string;
    daysPresent: number;
    daysAbsent: number;
    totalDays: number;
    _count: AttendanceRecordCountAggregateOutputType | null;
    _avg: AttendanceRecordAvgAggregateOutputType | null;
    _sum: AttendanceRecordSumAggregateOutputType | null;
    _min: AttendanceRecordMinAggregateOutputType | null;
    _max: AttendanceRecordMaxAggregateOutputType | null;
};
export type GetAttendanceRecordGroupByPayload<T extends AttendanceRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendanceRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendanceRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]>;
}>>;
export type AttendanceRecordWhereInput = {
    AND?: Prisma.AttendanceRecordWhereInput | Prisma.AttendanceRecordWhereInput[];
    OR?: Prisma.AttendanceRecordWhereInput[];
    NOT?: Prisma.AttendanceRecordWhereInput | Prisma.AttendanceRecordWhereInput[];
    id?: Prisma.StringFilter<"AttendanceRecord"> | string;
    studentId?: Prisma.StringFilter<"AttendanceRecord"> | string;
    termId?: Prisma.StringFilter<"AttendanceRecord"> | string;
    daysPresent?: Prisma.IntFilter<"AttendanceRecord"> | number;
    daysAbsent?: Prisma.IntFilter<"AttendanceRecord"> | number;
    totalDays?: Prisma.IntFilter<"AttendanceRecord"> | number;
    student?: Prisma.XOR<Prisma.StudentProfileScalarRelationFilter, Prisma.StudentProfileWhereInput>;
    term?: Prisma.XOR<Prisma.TermScalarRelationFilter, Prisma.TermWhereInput>;
};
export type AttendanceRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    termId?: Prisma.SortOrder;
    daysPresent?: Prisma.SortOrder;
    daysAbsent?: Prisma.SortOrder;
    totalDays?: Prisma.SortOrder;
    student?: Prisma.StudentProfileOrderByWithRelationInput;
    term?: Prisma.TermOrderByWithRelationInput;
};
export type AttendanceRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    studentId_termId?: Prisma.AttendanceRecordStudentIdTermIdCompoundUniqueInput;
    AND?: Prisma.AttendanceRecordWhereInput | Prisma.AttendanceRecordWhereInput[];
    OR?: Prisma.AttendanceRecordWhereInput[];
    NOT?: Prisma.AttendanceRecordWhereInput | Prisma.AttendanceRecordWhereInput[];
    studentId?: Prisma.StringFilter<"AttendanceRecord"> | string;
    termId?: Prisma.StringFilter<"AttendanceRecord"> | string;
    daysPresent?: Prisma.IntFilter<"AttendanceRecord"> | number;
    daysAbsent?: Prisma.IntFilter<"AttendanceRecord"> | number;
    totalDays?: Prisma.IntFilter<"AttendanceRecord"> | number;
    student?: Prisma.XOR<Prisma.StudentProfileScalarRelationFilter, Prisma.StudentProfileWhereInput>;
    term?: Prisma.XOR<Prisma.TermScalarRelationFilter, Prisma.TermWhereInput>;
}, "id" | "studentId_termId">;
export type AttendanceRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    termId?: Prisma.SortOrder;
    daysPresent?: Prisma.SortOrder;
    daysAbsent?: Prisma.SortOrder;
    totalDays?: Prisma.SortOrder;
    _count?: Prisma.AttendanceRecordCountOrderByAggregateInput;
    _avg?: Prisma.AttendanceRecordAvgOrderByAggregateInput;
    _max?: Prisma.AttendanceRecordMaxOrderByAggregateInput;
    _min?: Prisma.AttendanceRecordMinOrderByAggregateInput;
    _sum?: Prisma.AttendanceRecordSumOrderByAggregateInput;
};
export type AttendanceRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendanceRecordScalarWhereWithAggregatesInput | Prisma.AttendanceRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendanceRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendanceRecordScalarWhereWithAggregatesInput | Prisma.AttendanceRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AttendanceRecord"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"AttendanceRecord"> | string;
    termId?: Prisma.StringWithAggregatesFilter<"AttendanceRecord"> | string;
    daysPresent?: Prisma.IntWithAggregatesFilter<"AttendanceRecord"> | number;
    daysAbsent?: Prisma.IntWithAggregatesFilter<"AttendanceRecord"> | number;
    totalDays?: Prisma.IntWithAggregatesFilter<"AttendanceRecord"> | number;
};
export type AttendanceRecordCreateInput = {
    id?: string;
    daysPresent?: number;
    daysAbsent?: number;
    totalDays: number;
    student: Prisma.StudentProfileCreateNestedOneWithoutAttendanceInput;
    term: Prisma.TermCreateNestedOneWithoutAttendanceInput;
};
export type AttendanceRecordUncheckedCreateInput = {
    id?: string;
    studentId: string;
    termId: string;
    daysPresent?: number;
    daysAbsent?: number;
    totalDays: number;
};
export type AttendanceRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPresent?: Prisma.IntFieldUpdateOperationsInput | number;
    daysAbsent?: Prisma.IntFieldUpdateOperationsInput | number;
    totalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    student?: Prisma.StudentProfileUpdateOneRequiredWithoutAttendanceNestedInput;
    term?: Prisma.TermUpdateOneRequiredWithoutAttendanceNestedInput;
};
export type AttendanceRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    termId?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPresent?: Prisma.IntFieldUpdateOperationsInput | number;
    daysAbsent?: Prisma.IntFieldUpdateOperationsInput | number;
    totalDays?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AttendanceRecordCreateManyInput = {
    id?: string;
    studentId: string;
    termId: string;
    daysPresent?: number;
    daysAbsent?: number;
    totalDays: number;
};
export type AttendanceRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPresent?: Prisma.IntFieldUpdateOperationsInput | number;
    daysAbsent?: Prisma.IntFieldUpdateOperationsInput | number;
    totalDays?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AttendanceRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    termId?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPresent?: Prisma.IntFieldUpdateOperationsInput | number;
    daysAbsent?: Prisma.IntFieldUpdateOperationsInput | number;
    totalDays?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AttendanceRecordListRelationFilter = {
    every?: Prisma.AttendanceRecordWhereInput;
    some?: Prisma.AttendanceRecordWhereInput;
    none?: Prisma.AttendanceRecordWhereInput;
};
export type AttendanceRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttendanceRecordStudentIdTermIdCompoundUniqueInput = {
    studentId: string;
    termId: string;
};
export type AttendanceRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    termId?: Prisma.SortOrder;
    daysPresent?: Prisma.SortOrder;
    daysAbsent?: Prisma.SortOrder;
    totalDays?: Prisma.SortOrder;
};
export type AttendanceRecordAvgOrderByAggregateInput = {
    daysPresent?: Prisma.SortOrder;
    daysAbsent?: Prisma.SortOrder;
    totalDays?: Prisma.SortOrder;
};
export type AttendanceRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    termId?: Prisma.SortOrder;
    daysPresent?: Prisma.SortOrder;
    daysAbsent?: Prisma.SortOrder;
    totalDays?: Prisma.SortOrder;
};
export type AttendanceRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    termId?: Prisma.SortOrder;
    daysPresent?: Prisma.SortOrder;
    daysAbsent?: Prisma.SortOrder;
    totalDays?: Prisma.SortOrder;
};
export type AttendanceRecordSumOrderByAggregateInput = {
    daysPresent?: Prisma.SortOrder;
    daysAbsent?: Prisma.SortOrder;
    totalDays?: Prisma.SortOrder;
};
export type AttendanceRecordCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutStudentInput, Prisma.AttendanceRecordUncheckedCreateWithoutStudentInput> | Prisma.AttendanceRecordCreateWithoutStudentInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutStudentInput | Prisma.AttendanceRecordCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.AttendanceRecordCreateManyStudentInputEnvelope;
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
};
export type AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutStudentInput, Prisma.AttendanceRecordUncheckedCreateWithoutStudentInput> | Prisma.AttendanceRecordCreateWithoutStudentInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutStudentInput | Prisma.AttendanceRecordCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.AttendanceRecordCreateManyStudentInputEnvelope;
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
};
export type AttendanceRecordUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutStudentInput, Prisma.AttendanceRecordUncheckedCreateWithoutStudentInput> | Prisma.AttendanceRecordCreateWithoutStudentInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutStudentInput | Prisma.AttendanceRecordCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput | Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.AttendanceRecordCreateManyStudentInputEnvelope;
    set?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    disconnect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    delete?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    update?: Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput | Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.AttendanceRecordUpdateManyWithWhereWithoutStudentInput | Prisma.AttendanceRecordUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.AttendanceRecordScalarWhereInput | Prisma.AttendanceRecordScalarWhereInput[];
};
export type AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutStudentInput, Prisma.AttendanceRecordUncheckedCreateWithoutStudentInput> | Prisma.AttendanceRecordCreateWithoutStudentInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutStudentInput | Prisma.AttendanceRecordCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput | Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.AttendanceRecordCreateManyStudentInputEnvelope;
    set?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    disconnect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    delete?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    update?: Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput | Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.AttendanceRecordUpdateManyWithWhereWithoutStudentInput | Prisma.AttendanceRecordUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.AttendanceRecordScalarWhereInput | Prisma.AttendanceRecordScalarWhereInput[];
};
export type AttendanceRecordCreateNestedManyWithoutTermInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutTermInput, Prisma.AttendanceRecordUncheckedCreateWithoutTermInput> | Prisma.AttendanceRecordCreateWithoutTermInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutTermInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutTermInput | Prisma.AttendanceRecordCreateOrConnectWithoutTermInput[];
    createMany?: Prisma.AttendanceRecordCreateManyTermInputEnvelope;
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
};
export type AttendanceRecordUncheckedCreateNestedManyWithoutTermInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutTermInput, Prisma.AttendanceRecordUncheckedCreateWithoutTermInput> | Prisma.AttendanceRecordCreateWithoutTermInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutTermInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutTermInput | Prisma.AttendanceRecordCreateOrConnectWithoutTermInput[];
    createMany?: Prisma.AttendanceRecordCreateManyTermInputEnvelope;
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
};
export type AttendanceRecordUpdateManyWithoutTermNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutTermInput, Prisma.AttendanceRecordUncheckedCreateWithoutTermInput> | Prisma.AttendanceRecordCreateWithoutTermInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutTermInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutTermInput | Prisma.AttendanceRecordCreateOrConnectWithoutTermInput[];
    upsert?: Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutTermInput | Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutTermInput[];
    createMany?: Prisma.AttendanceRecordCreateManyTermInputEnvelope;
    set?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    disconnect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    delete?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    update?: Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutTermInput | Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutTermInput[];
    updateMany?: Prisma.AttendanceRecordUpdateManyWithWhereWithoutTermInput | Prisma.AttendanceRecordUpdateManyWithWhereWithoutTermInput[];
    deleteMany?: Prisma.AttendanceRecordScalarWhereInput | Prisma.AttendanceRecordScalarWhereInput[];
};
export type AttendanceRecordUncheckedUpdateManyWithoutTermNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutTermInput, Prisma.AttendanceRecordUncheckedCreateWithoutTermInput> | Prisma.AttendanceRecordCreateWithoutTermInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutTermInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutTermInput | Prisma.AttendanceRecordCreateOrConnectWithoutTermInput[];
    upsert?: Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutTermInput | Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutTermInput[];
    createMany?: Prisma.AttendanceRecordCreateManyTermInputEnvelope;
    set?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    disconnect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    delete?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    update?: Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutTermInput | Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutTermInput[];
    updateMany?: Prisma.AttendanceRecordUpdateManyWithWhereWithoutTermInput | Prisma.AttendanceRecordUpdateManyWithWhereWithoutTermInput[];
    deleteMany?: Prisma.AttendanceRecordScalarWhereInput | Prisma.AttendanceRecordScalarWhereInput[];
};
export type AttendanceRecordCreateWithoutStudentInput = {
    id?: string;
    daysPresent?: number;
    daysAbsent?: number;
    totalDays: number;
    term: Prisma.TermCreateNestedOneWithoutAttendanceInput;
};
export type AttendanceRecordUncheckedCreateWithoutStudentInput = {
    id?: string;
    termId: string;
    daysPresent?: number;
    daysAbsent?: number;
    totalDays: number;
};
export type AttendanceRecordCreateOrConnectWithoutStudentInput = {
    where: Prisma.AttendanceRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutStudentInput, Prisma.AttendanceRecordUncheckedCreateWithoutStudentInput>;
};
export type AttendanceRecordCreateManyStudentInputEnvelope = {
    data: Prisma.AttendanceRecordCreateManyStudentInput | Prisma.AttendanceRecordCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.AttendanceRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceRecordUpdateWithoutStudentInput, Prisma.AttendanceRecordUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutStudentInput, Prisma.AttendanceRecordUncheckedCreateWithoutStudentInput>;
};
export type AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.AttendanceRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceRecordUpdateWithoutStudentInput, Prisma.AttendanceRecordUncheckedUpdateWithoutStudentInput>;
};
export type AttendanceRecordUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.AttendanceRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceRecordUpdateManyMutationInput, Prisma.AttendanceRecordUncheckedUpdateManyWithoutStudentInput>;
};
export type AttendanceRecordScalarWhereInput = {
    AND?: Prisma.AttendanceRecordScalarWhereInput | Prisma.AttendanceRecordScalarWhereInput[];
    OR?: Prisma.AttendanceRecordScalarWhereInput[];
    NOT?: Prisma.AttendanceRecordScalarWhereInput | Prisma.AttendanceRecordScalarWhereInput[];
    id?: Prisma.StringFilter<"AttendanceRecord"> | string;
    studentId?: Prisma.StringFilter<"AttendanceRecord"> | string;
    termId?: Prisma.StringFilter<"AttendanceRecord"> | string;
    daysPresent?: Prisma.IntFilter<"AttendanceRecord"> | number;
    daysAbsent?: Prisma.IntFilter<"AttendanceRecord"> | number;
    totalDays?: Prisma.IntFilter<"AttendanceRecord"> | number;
};
export type AttendanceRecordCreateWithoutTermInput = {
    id?: string;
    daysPresent?: number;
    daysAbsent?: number;
    totalDays: number;
    student: Prisma.StudentProfileCreateNestedOneWithoutAttendanceInput;
};
export type AttendanceRecordUncheckedCreateWithoutTermInput = {
    id?: string;
    studentId: string;
    daysPresent?: number;
    daysAbsent?: number;
    totalDays: number;
};
export type AttendanceRecordCreateOrConnectWithoutTermInput = {
    where: Prisma.AttendanceRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutTermInput, Prisma.AttendanceRecordUncheckedCreateWithoutTermInput>;
};
export type AttendanceRecordCreateManyTermInputEnvelope = {
    data: Prisma.AttendanceRecordCreateManyTermInput | Prisma.AttendanceRecordCreateManyTermInput[];
    skipDuplicates?: boolean;
};
export type AttendanceRecordUpsertWithWhereUniqueWithoutTermInput = {
    where: Prisma.AttendanceRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceRecordUpdateWithoutTermInput, Prisma.AttendanceRecordUncheckedUpdateWithoutTermInput>;
    create: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutTermInput, Prisma.AttendanceRecordUncheckedCreateWithoutTermInput>;
};
export type AttendanceRecordUpdateWithWhereUniqueWithoutTermInput = {
    where: Prisma.AttendanceRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceRecordUpdateWithoutTermInput, Prisma.AttendanceRecordUncheckedUpdateWithoutTermInput>;
};
export type AttendanceRecordUpdateManyWithWhereWithoutTermInput = {
    where: Prisma.AttendanceRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceRecordUpdateManyMutationInput, Prisma.AttendanceRecordUncheckedUpdateManyWithoutTermInput>;
};
export type AttendanceRecordCreateManyStudentInput = {
    id?: string;
    termId: string;
    daysPresent?: number;
    daysAbsent?: number;
    totalDays: number;
};
export type AttendanceRecordUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPresent?: Prisma.IntFieldUpdateOperationsInput | number;
    daysAbsent?: Prisma.IntFieldUpdateOperationsInput | number;
    totalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    term?: Prisma.TermUpdateOneRequiredWithoutAttendanceNestedInput;
};
export type AttendanceRecordUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    termId?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPresent?: Prisma.IntFieldUpdateOperationsInput | number;
    daysAbsent?: Prisma.IntFieldUpdateOperationsInput | number;
    totalDays?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AttendanceRecordUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    termId?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPresent?: Prisma.IntFieldUpdateOperationsInput | number;
    daysAbsent?: Prisma.IntFieldUpdateOperationsInput | number;
    totalDays?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AttendanceRecordCreateManyTermInput = {
    id?: string;
    studentId: string;
    daysPresent?: number;
    daysAbsent?: number;
    totalDays: number;
};
export type AttendanceRecordUpdateWithoutTermInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPresent?: Prisma.IntFieldUpdateOperationsInput | number;
    daysAbsent?: Prisma.IntFieldUpdateOperationsInput | number;
    totalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    student?: Prisma.StudentProfileUpdateOneRequiredWithoutAttendanceNestedInput;
};
export type AttendanceRecordUncheckedUpdateWithoutTermInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPresent?: Prisma.IntFieldUpdateOperationsInput | number;
    daysAbsent?: Prisma.IntFieldUpdateOperationsInput | number;
    totalDays?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AttendanceRecordUncheckedUpdateManyWithoutTermInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPresent?: Prisma.IntFieldUpdateOperationsInput | number;
    daysAbsent?: Prisma.IntFieldUpdateOperationsInput | number;
    totalDays?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AttendanceRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    termId?: boolean;
    daysPresent?: boolean;
    daysAbsent?: boolean;
    totalDays?: boolean;
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    term?: boolean | Prisma.TermDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceRecord"]>;
export type AttendanceRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    termId?: boolean;
    daysPresent?: boolean;
    daysAbsent?: boolean;
    totalDays?: boolean;
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    term?: boolean | Prisma.TermDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceRecord"]>;
export type AttendanceRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    termId?: boolean;
    daysPresent?: boolean;
    daysAbsent?: boolean;
    totalDays?: boolean;
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    term?: boolean | Prisma.TermDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceRecord"]>;
export type AttendanceRecordSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    termId?: boolean;
    daysPresent?: boolean;
    daysAbsent?: boolean;
    totalDays?: boolean;
};
export type AttendanceRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "termId" | "daysPresent" | "daysAbsent" | "totalDays", ExtArgs["result"]["attendanceRecord"]>;
export type AttendanceRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    term?: boolean | Prisma.TermDefaultArgs<ExtArgs>;
};
export type AttendanceRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    term?: boolean | Prisma.TermDefaultArgs<ExtArgs>;
};
export type AttendanceRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    term?: boolean | Prisma.TermDefaultArgs<ExtArgs>;
};
export type $AttendanceRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AttendanceRecord";
    objects: {
        student: Prisma.$StudentProfilePayload<ExtArgs>;
        term: Prisma.$TermPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        studentId: string;
        termId: string;
        daysPresent: number;
        daysAbsent: number;
        totalDays: number;
    }, ExtArgs["result"]["attendanceRecord"]>;
    composites: {};
};
export type AttendanceRecordGetPayload<S extends boolean | null | undefined | AttendanceRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload, S>;
export type AttendanceRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendanceRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendanceRecordCountAggregateInputType | true;
};
export interface AttendanceRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AttendanceRecord'];
        meta: {
            name: 'AttendanceRecord';
        };
    };
    findUnique<T extends AttendanceRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendanceRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttendanceRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendanceRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttendanceRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendanceRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttendanceRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendanceRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttendanceRecordFindManyArgs>(args?: Prisma.SelectSubset<T, AttendanceRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttendanceRecordCreateArgs>(args: Prisma.SelectSubset<T, AttendanceRecordCreateArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttendanceRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendanceRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttendanceRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendanceRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttendanceRecordDeleteArgs>(args: Prisma.SelectSubset<T, AttendanceRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttendanceRecordUpdateArgs>(args: Prisma.SelectSubset<T, AttendanceRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttendanceRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendanceRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttendanceRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendanceRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttendanceRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendanceRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttendanceRecordUpsertArgs>(args: Prisma.SelectSubset<T, AttendanceRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttendanceRecordCountArgs>(args?: Prisma.Subset<T, AttendanceRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendanceRecordCountAggregateOutputType> : number>;
    aggregate<T extends AttendanceRecordAggregateArgs>(args: Prisma.Subset<T, AttendanceRecordAggregateArgs>): Prisma.PrismaPromise<GetAttendanceRecordAggregateType<T>>;
    groupBy<T extends AttendanceRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendanceRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendanceRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendanceRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttendanceRecordFieldRefs;
}
export interface Prisma__AttendanceRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    term<T extends Prisma.TermDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TermDefaultArgs<ExtArgs>>): Prisma.Prisma__TermClient<runtime.Types.Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttendanceRecordFieldRefs {
    readonly id: Prisma.FieldRef<"AttendanceRecord", 'String'>;
    readonly studentId: Prisma.FieldRef<"AttendanceRecord", 'String'>;
    readonly termId: Prisma.FieldRef<"AttendanceRecord", 'String'>;
    readonly daysPresent: Prisma.FieldRef<"AttendanceRecord", 'Int'>;
    readonly daysAbsent: Prisma.FieldRef<"AttendanceRecord", 'Int'>;
    readonly totalDays: Prisma.FieldRef<"AttendanceRecord", 'Int'>;
}
export type AttendanceRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    where: Prisma.AttendanceRecordWhereUniqueInput;
};
export type AttendanceRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    where: Prisma.AttendanceRecordWhereUniqueInput;
};
export type AttendanceRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    where?: Prisma.AttendanceRecordWhereInput;
    orderBy?: Prisma.AttendanceRecordOrderByWithRelationInput | Prisma.AttendanceRecordOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceRecordScalarFieldEnum | Prisma.AttendanceRecordScalarFieldEnum[];
};
export type AttendanceRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    where?: Prisma.AttendanceRecordWhereInput;
    orderBy?: Prisma.AttendanceRecordOrderByWithRelationInput | Prisma.AttendanceRecordOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceRecordScalarFieldEnum | Prisma.AttendanceRecordScalarFieldEnum[];
};
export type AttendanceRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    where?: Prisma.AttendanceRecordWhereInput;
    orderBy?: Prisma.AttendanceRecordOrderByWithRelationInput | Prisma.AttendanceRecordOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceRecordScalarFieldEnum | Prisma.AttendanceRecordScalarFieldEnum[];
};
export type AttendanceRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceRecordCreateInput, Prisma.AttendanceRecordUncheckedCreateInput>;
};
export type AttendanceRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttendanceRecordCreateManyInput | Prisma.AttendanceRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttendanceRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    data: Prisma.AttendanceRecordCreateManyInput | Prisma.AttendanceRecordCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AttendanceRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AttendanceRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceRecordUpdateInput, Prisma.AttendanceRecordUncheckedUpdateInput>;
    where: Prisma.AttendanceRecordWhereUniqueInput;
};
export type AttendanceRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttendanceRecordUpdateManyMutationInput, Prisma.AttendanceRecordUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceRecordWhereInput;
    limit?: number;
};
export type AttendanceRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceRecordUpdateManyMutationInput, Prisma.AttendanceRecordUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceRecordWhereInput;
    limit?: number;
    include?: Prisma.AttendanceRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AttendanceRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    where: Prisma.AttendanceRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceRecordCreateInput, Prisma.AttendanceRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttendanceRecordUpdateInput, Prisma.AttendanceRecordUncheckedUpdateInput>;
};
export type AttendanceRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    where: Prisma.AttendanceRecordWhereUniqueInput;
};
export type AttendanceRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceRecordWhereInput;
    limit?: number;
};
export type AttendanceRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
};
