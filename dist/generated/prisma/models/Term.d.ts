import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type TermModel = runtime.Types.Result.DefaultSelection<Prisma.$TermPayload>;
export type AggregateTerm = {
    _count: TermCountAggregateOutputType | null;
    _min: TermMinAggregateOutputType | null;
    _max: TermMaxAggregateOutputType | null;
};
export type TermMinAggregateOutputType = {
    id: string | null;
    academicYearId: string | null;
    termNumber: $Enums.TermNumber | null;
    startDate: Date | null;
    endDate: Date | null;
    isActive: boolean | null;
    isLocked: boolean | null;
};
export type TermMaxAggregateOutputType = {
    id: string | null;
    academicYearId: string | null;
    termNumber: $Enums.TermNumber | null;
    startDate: Date | null;
    endDate: Date | null;
    isActive: boolean | null;
    isLocked: boolean | null;
};
export type TermCountAggregateOutputType = {
    id: number;
    academicYearId: number;
    termNumber: number;
    startDate: number;
    endDate: number;
    isActive: number;
    isLocked: number;
    _all: number;
};
export type TermMinAggregateInputType = {
    id?: true;
    academicYearId?: true;
    termNumber?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    isLocked?: true;
};
export type TermMaxAggregateInputType = {
    id?: true;
    academicYearId?: true;
    termNumber?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    isLocked?: true;
};
export type TermCountAggregateInputType = {
    id?: true;
    academicYearId?: true;
    termNumber?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    isLocked?: true;
    _all?: true;
};
export type TermAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TermWhereInput;
    orderBy?: Prisma.TermOrderByWithRelationInput | Prisma.TermOrderByWithRelationInput[];
    cursor?: Prisma.TermWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TermCountAggregateInputType;
    _min?: TermMinAggregateInputType;
    _max?: TermMaxAggregateInputType;
};
export type GetTermAggregateType<T extends TermAggregateArgs> = {
    [P in keyof T & keyof AggregateTerm]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTerm[P]> : Prisma.GetScalarType<T[P], AggregateTerm[P]>;
};
export type TermGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TermWhereInput;
    orderBy?: Prisma.TermOrderByWithAggregationInput | Prisma.TermOrderByWithAggregationInput[];
    by: Prisma.TermScalarFieldEnum[] | Prisma.TermScalarFieldEnum;
    having?: Prisma.TermScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TermCountAggregateInputType | true;
    _min?: TermMinAggregateInputType;
    _max?: TermMaxAggregateInputType;
};
export type TermGroupByOutputType = {
    id: string;
    academicYearId: string;
    termNumber: $Enums.TermNumber;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
    isLocked: boolean;
    _count: TermCountAggregateOutputType | null;
    _min: TermMinAggregateOutputType | null;
    _max: TermMaxAggregateOutputType | null;
};
export type GetTermGroupByPayload<T extends TermGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TermGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TermGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TermGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TermGroupByOutputType[P]>;
}>>;
export type TermWhereInput = {
    AND?: Prisma.TermWhereInput | Prisma.TermWhereInput[];
    OR?: Prisma.TermWhereInput[];
    NOT?: Prisma.TermWhereInput | Prisma.TermWhereInput[];
    id?: Prisma.StringFilter<"Term"> | string;
    academicYearId?: Prisma.StringFilter<"Term"> | string;
    termNumber?: Prisma.EnumTermNumberFilter<"Term"> | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFilter<"Term"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Term"> | Date | string;
    isActive?: Prisma.BoolFilter<"Term"> | boolean;
    isLocked?: Prisma.BoolFilter<"Term"> | boolean;
    academicYear?: Prisma.XOR<Prisma.AcademicYearScalarRelationFilter, Prisma.AcademicYearWhereInput>;
    grades?: Prisma.GradeEntryListRelationFilter;
    attendance?: Prisma.AttendanceRecordListRelationFilter;
    reportCards?: Prisma.ReportCardListRelationFilter;
};
export type TermOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    termNumber?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    academicYear?: Prisma.AcademicYearOrderByWithRelationInput;
    grades?: Prisma.GradeEntryOrderByRelationAggregateInput;
    attendance?: Prisma.AttendanceRecordOrderByRelationAggregateInput;
    reportCards?: Prisma.ReportCardOrderByRelationAggregateInput;
};
export type TermWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    academicYearId_termNumber?: Prisma.TermAcademicYearIdTermNumberCompoundUniqueInput;
    AND?: Prisma.TermWhereInput | Prisma.TermWhereInput[];
    OR?: Prisma.TermWhereInput[];
    NOT?: Prisma.TermWhereInput | Prisma.TermWhereInput[];
    academicYearId?: Prisma.StringFilter<"Term"> | string;
    termNumber?: Prisma.EnumTermNumberFilter<"Term"> | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFilter<"Term"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Term"> | Date | string;
    isActive?: Prisma.BoolFilter<"Term"> | boolean;
    isLocked?: Prisma.BoolFilter<"Term"> | boolean;
    academicYear?: Prisma.XOR<Prisma.AcademicYearScalarRelationFilter, Prisma.AcademicYearWhereInput>;
    grades?: Prisma.GradeEntryListRelationFilter;
    attendance?: Prisma.AttendanceRecordListRelationFilter;
    reportCards?: Prisma.ReportCardListRelationFilter;
}, "id" | "academicYearId_termNumber">;
export type TermOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    termNumber?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    _count?: Prisma.TermCountOrderByAggregateInput;
    _max?: Prisma.TermMaxOrderByAggregateInput;
    _min?: Prisma.TermMinOrderByAggregateInput;
};
export type TermScalarWhereWithAggregatesInput = {
    AND?: Prisma.TermScalarWhereWithAggregatesInput | Prisma.TermScalarWhereWithAggregatesInput[];
    OR?: Prisma.TermScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TermScalarWhereWithAggregatesInput | Prisma.TermScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Term"> | string;
    academicYearId?: Prisma.StringWithAggregatesFilter<"Term"> | string;
    termNumber?: Prisma.EnumTermNumberWithAggregatesFilter<"Term"> | $Enums.TermNumber;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"Term"> | Date | string;
    endDate?: Prisma.DateTimeWithAggregatesFilter<"Term"> | Date | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"Term"> | boolean;
    isLocked?: Prisma.BoolWithAggregatesFilter<"Term"> | boolean;
};
export type TermCreateInput = {
    id?: string;
    termNumber: $Enums.TermNumber;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    isLocked?: boolean;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutTermsInput;
    grades?: Prisma.GradeEntryCreateNestedManyWithoutTermInput;
    attendance?: Prisma.AttendanceRecordCreateNestedManyWithoutTermInput;
    reportCards?: Prisma.ReportCardCreateNestedManyWithoutTermInput;
};
export type TermUncheckedCreateInput = {
    id?: string;
    academicYearId: string;
    termNumber: $Enums.TermNumber;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    isLocked?: boolean;
    grades?: Prisma.GradeEntryUncheckedCreateNestedManyWithoutTermInput;
    attendance?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutTermInput;
    reportCards?: Prisma.ReportCardUncheckedCreateNestedManyWithoutTermInput;
};
export type TermUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    termNumber?: Prisma.EnumTermNumberFieldUpdateOperationsInput | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutTermsNestedInput;
    grades?: Prisma.GradeEntryUpdateManyWithoutTermNestedInput;
    attendance?: Prisma.AttendanceRecordUpdateManyWithoutTermNestedInput;
    reportCards?: Prisma.ReportCardUpdateManyWithoutTermNestedInput;
};
export type TermUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    termNumber?: Prisma.EnumTermNumberFieldUpdateOperationsInput | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grades?: Prisma.GradeEntryUncheckedUpdateManyWithoutTermNestedInput;
    attendance?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutTermNestedInput;
    reportCards?: Prisma.ReportCardUncheckedUpdateManyWithoutTermNestedInput;
};
export type TermCreateManyInput = {
    id?: string;
    academicYearId: string;
    termNumber: $Enums.TermNumber;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    isLocked?: boolean;
};
export type TermUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    termNumber?: Prisma.EnumTermNumberFieldUpdateOperationsInput | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TermUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    termNumber?: Prisma.EnumTermNumberFieldUpdateOperationsInput | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TermListRelationFilter = {
    every?: Prisma.TermWhereInput;
    some?: Prisma.TermWhereInput;
    none?: Prisma.TermWhereInput;
};
export type TermOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TermAcademicYearIdTermNumberCompoundUniqueInput = {
    academicYearId: string;
    termNumber: $Enums.TermNumber;
};
export type TermCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    termNumber?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
};
export type TermMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    termNumber?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
};
export type TermMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    termNumber?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
};
export type TermScalarRelationFilter = {
    is?: Prisma.TermWhereInput;
    isNot?: Prisma.TermWhereInput;
};
export type TermCreateNestedManyWithoutAcademicYearInput = {
    create?: Prisma.XOR<Prisma.TermCreateWithoutAcademicYearInput, Prisma.TermUncheckedCreateWithoutAcademicYearInput> | Prisma.TermCreateWithoutAcademicYearInput[] | Prisma.TermUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.TermCreateOrConnectWithoutAcademicYearInput | Prisma.TermCreateOrConnectWithoutAcademicYearInput[];
    createMany?: Prisma.TermCreateManyAcademicYearInputEnvelope;
    connect?: Prisma.TermWhereUniqueInput | Prisma.TermWhereUniqueInput[];
};
export type TermUncheckedCreateNestedManyWithoutAcademicYearInput = {
    create?: Prisma.XOR<Prisma.TermCreateWithoutAcademicYearInput, Prisma.TermUncheckedCreateWithoutAcademicYearInput> | Prisma.TermCreateWithoutAcademicYearInput[] | Prisma.TermUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.TermCreateOrConnectWithoutAcademicYearInput | Prisma.TermCreateOrConnectWithoutAcademicYearInput[];
    createMany?: Prisma.TermCreateManyAcademicYearInputEnvelope;
    connect?: Prisma.TermWhereUniqueInput | Prisma.TermWhereUniqueInput[];
};
export type TermUpdateManyWithoutAcademicYearNestedInput = {
    create?: Prisma.XOR<Prisma.TermCreateWithoutAcademicYearInput, Prisma.TermUncheckedCreateWithoutAcademicYearInput> | Prisma.TermCreateWithoutAcademicYearInput[] | Prisma.TermUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.TermCreateOrConnectWithoutAcademicYearInput | Prisma.TermCreateOrConnectWithoutAcademicYearInput[];
    upsert?: Prisma.TermUpsertWithWhereUniqueWithoutAcademicYearInput | Prisma.TermUpsertWithWhereUniqueWithoutAcademicYearInput[];
    createMany?: Prisma.TermCreateManyAcademicYearInputEnvelope;
    set?: Prisma.TermWhereUniqueInput | Prisma.TermWhereUniqueInput[];
    disconnect?: Prisma.TermWhereUniqueInput | Prisma.TermWhereUniqueInput[];
    delete?: Prisma.TermWhereUniqueInput | Prisma.TermWhereUniqueInput[];
    connect?: Prisma.TermWhereUniqueInput | Prisma.TermWhereUniqueInput[];
    update?: Prisma.TermUpdateWithWhereUniqueWithoutAcademicYearInput | Prisma.TermUpdateWithWhereUniqueWithoutAcademicYearInput[];
    updateMany?: Prisma.TermUpdateManyWithWhereWithoutAcademicYearInput | Prisma.TermUpdateManyWithWhereWithoutAcademicYearInput[];
    deleteMany?: Prisma.TermScalarWhereInput | Prisma.TermScalarWhereInput[];
};
export type TermUncheckedUpdateManyWithoutAcademicYearNestedInput = {
    create?: Prisma.XOR<Prisma.TermCreateWithoutAcademicYearInput, Prisma.TermUncheckedCreateWithoutAcademicYearInput> | Prisma.TermCreateWithoutAcademicYearInput[] | Prisma.TermUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.TermCreateOrConnectWithoutAcademicYearInput | Prisma.TermCreateOrConnectWithoutAcademicYearInput[];
    upsert?: Prisma.TermUpsertWithWhereUniqueWithoutAcademicYearInput | Prisma.TermUpsertWithWhereUniqueWithoutAcademicYearInput[];
    createMany?: Prisma.TermCreateManyAcademicYearInputEnvelope;
    set?: Prisma.TermWhereUniqueInput | Prisma.TermWhereUniqueInput[];
    disconnect?: Prisma.TermWhereUniqueInput | Prisma.TermWhereUniqueInput[];
    delete?: Prisma.TermWhereUniqueInput | Prisma.TermWhereUniqueInput[];
    connect?: Prisma.TermWhereUniqueInput | Prisma.TermWhereUniqueInput[];
    update?: Prisma.TermUpdateWithWhereUniqueWithoutAcademicYearInput | Prisma.TermUpdateWithWhereUniqueWithoutAcademicYearInput[];
    updateMany?: Prisma.TermUpdateManyWithWhereWithoutAcademicYearInput | Prisma.TermUpdateManyWithWhereWithoutAcademicYearInput[];
    deleteMany?: Prisma.TermScalarWhereInput | Prisma.TermScalarWhereInput[];
};
export type EnumTermNumberFieldUpdateOperationsInput = {
    set?: $Enums.TermNumber;
};
export type TermCreateNestedOneWithoutGradesInput = {
    create?: Prisma.XOR<Prisma.TermCreateWithoutGradesInput, Prisma.TermUncheckedCreateWithoutGradesInput>;
    connectOrCreate?: Prisma.TermCreateOrConnectWithoutGradesInput;
    connect?: Prisma.TermWhereUniqueInput;
};
export type TermUpdateOneRequiredWithoutGradesNestedInput = {
    create?: Prisma.XOR<Prisma.TermCreateWithoutGradesInput, Prisma.TermUncheckedCreateWithoutGradesInput>;
    connectOrCreate?: Prisma.TermCreateOrConnectWithoutGradesInput;
    upsert?: Prisma.TermUpsertWithoutGradesInput;
    connect?: Prisma.TermWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TermUpdateToOneWithWhereWithoutGradesInput, Prisma.TermUpdateWithoutGradesInput>, Prisma.TermUncheckedUpdateWithoutGradesInput>;
};
export type TermCreateNestedOneWithoutAttendanceInput = {
    create?: Prisma.XOR<Prisma.TermCreateWithoutAttendanceInput, Prisma.TermUncheckedCreateWithoutAttendanceInput>;
    connectOrCreate?: Prisma.TermCreateOrConnectWithoutAttendanceInput;
    connect?: Prisma.TermWhereUniqueInput;
};
export type TermUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: Prisma.XOR<Prisma.TermCreateWithoutAttendanceInput, Prisma.TermUncheckedCreateWithoutAttendanceInput>;
    connectOrCreate?: Prisma.TermCreateOrConnectWithoutAttendanceInput;
    upsert?: Prisma.TermUpsertWithoutAttendanceInput;
    connect?: Prisma.TermWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TermUpdateToOneWithWhereWithoutAttendanceInput, Prisma.TermUpdateWithoutAttendanceInput>, Prisma.TermUncheckedUpdateWithoutAttendanceInput>;
};
export type TermCreateNestedOneWithoutReportCardsInput = {
    create?: Prisma.XOR<Prisma.TermCreateWithoutReportCardsInput, Prisma.TermUncheckedCreateWithoutReportCardsInput>;
    connectOrCreate?: Prisma.TermCreateOrConnectWithoutReportCardsInput;
    connect?: Prisma.TermWhereUniqueInput;
};
export type TermUpdateOneRequiredWithoutReportCardsNestedInput = {
    create?: Prisma.XOR<Prisma.TermCreateWithoutReportCardsInput, Prisma.TermUncheckedCreateWithoutReportCardsInput>;
    connectOrCreate?: Prisma.TermCreateOrConnectWithoutReportCardsInput;
    upsert?: Prisma.TermUpsertWithoutReportCardsInput;
    connect?: Prisma.TermWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TermUpdateToOneWithWhereWithoutReportCardsInput, Prisma.TermUpdateWithoutReportCardsInput>, Prisma.TermUncheckedUpdateWithoutReportCardsInput>;
};
export type TermCreateWithoutAcademicYearInput = {
    id?: string;
    termNumber: $Enums.TermNumber;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    isLocked?: boolean;
    grades?: Prisma.GradeEntryCreateNestedManyWithoutTermInput;
    attendance?: Prisma.AttendanceRecordCreateNestedManyWithoutTermInput;
    reportCards?: Prisma.ReportCardCreateNestedManyWithoutTermInput;
};
export type TermUncheckedCreateWithoutAcademicYearInput = {
    id?: string;
    termNumber: $Enums.TermNumber;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    isLocked?: boolean;
    grades?: Prisma.GradeEntryUncheckedCreateNestedManyWithoutTermInput;
    attendance?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutTermInput;
    reportCards?: Prisma.ReportCardUncheckedCreateNestedManyWithoutTermInput;
};
export type TermCreateOrConnectWithoutAcademicYearInput = {
    where: Prisma.TermWhereUniqueInput;
    create: Prisma.XOR<Prisma.TermCreateWithoutAcademicYearInput, Prisma.TermUncheckedCreateWithoutAcademicYearInput>;
};
export type TermCreateManyAcademicYearInputEnvelope = {
    data: Prisma.TermCreateManyAcademicYearInput | Prisma.TermCreateManyAcademicYearInput[];
    skipDuplicates?: boolean;
};
export type TermUpsertWithWhereUniqueWithoutAcademicYearInput = {
    where: Prisma.TermWhereUniqueInput;
    update: Prisma.XOR<Prisma.TermUpdateWithoutAcademicYearInput, Prisma.TermUncheckedUpdateWithoutAcademicYearInput>;
    create: Prisma.XOR<Prisma.TermCreateWithoutAcademicYearInput, Prisma.TermUncheckedCreateWithoutAcademicYearInput>;
};
export type TermUpdateWithWhereUniqueWithoutAcademicYearInput = {
    where: Prisma.TermWhereUniqueInput;
    data: Prisma.XOR<Prisma.TermUpdateWithoutAcademicYearInput, Prisma.TermUncheckedUpdateWithoutAcademicYearInput>;
};
export type TermUpdateManyWithWhereWithoutAcademicYearInput = {
    where: Prisma.TermScalarWhereInput;
    data: Prisma.XOR<Prisma.TermUpdateManyMutationInput, Prisma.TermUncheckedUpdateManyWithoutAcademicYearInput>;
};
export type TermScalarWhereInput = {
    AND?: Prisma.TermScalarWhereInput | Prisma.TermScalarWhereInput[];
    OR?: Prisma.TermScalarWhereInput[];
    NOT?: Prisma.TermScalarWhereInput | Prisma.TermScalarWhereInput[];
    id?: Prisma.StringFilter<"Term"> | string;
    academicYearId?: Prisma.StringFilter<"Term"> | string;
    termNumber?: Prisma.EnumTermNumberFilter<"Term"> | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFilter<"Term"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Term"> | Date | string;
    isActive?: Prisma.BoolFilter<"Term"> | boolean;
    isLocked?: Prisma.BoolFilter<"Term"> | boolean;
};
export type TermCreateWithoutGradesInput = {
    id?: string;
    termNumber: $Enums.TermNumber;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    isLocked?: boolean;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutTermsInput;
    attendance?: Prisma.AttendanceRecordCreateNestedManyWithoutTermInput;
    reportCards?: Prisma.ReportCardCreateNestedManyWithoutTermInput;
};
export type TermUncheckedCreateWithoutGradesInput = {
    id?: string;
    academicYearId: string;
    termNumber: $Enums.TermNumber;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    isLocked?: boolean;
    attendance?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutTermInput;
    reportCards?: Prisma.ReportCardUncheckedCreateNestedManyWithoutTermInput;
};
export type TermCreateOrConnectWithoutGradesInput = {
    where: Prisma.TermWhereUniqueInput;
    create: Prisma.XOR<Prisma.TermCreateWithoutGradesInput, Prisma.TermUncheckedCreateWithoutGradesInput>;
};
export type TermUpsertWithoutGradesInput = {
    update: Prisma.XOR<Prisma.TermUpdateWithoutGradesInput, Prisma.TermUncheckedUpdateWithoutGradesInput>;
    create: Prisma.XOR<Prisma.TermCreateWithoutGradesInput, Prisma.TermUncheckedCreateWithoutGradesInput>;
    where?: Prisma.TermWhereInput;
};
export type TermUpdateToOneWithWhereWithoutGradesInput = {
    where?: Prisma.TermWhereInput;
    data: Prisma.XOR<Prisma.TermUpdateWithoutGradesInput, Prisma.TermUncheckedUpdateWithoutGradesInput>;
};
export type TermUpdateWithoutGradesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    termNumber?: Prisma.EnumTermNumberFieldUpdateOperationsInput | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutTermsNestedInput;
    attendance?: Prisma.AttendanceRecordUpdateManyWithoutTermNestedInput;
    reportCards?: Prisma.ReportCardUpdateManyWithoutTermNestedInput;
};
export type TermUncheckedUpdateWithoutGradesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    termNumber?: Prisma.EnumTermNumberFieldUpdateOperationsInput | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    attendance?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutTermNestedInput;
    reportCards?: Prisma.ReportCardUncheckedUpdateManyWithoutTermNestedInput;
};
export type TermCreateWithoutAttendanceInput = {
    id?: string;
    termNumber: $Enums.TermNumber;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    isLocked?: boolean;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutTermsInput;
    grades?: Prisma.GradeEntryCreateNestedManyWithoutTermInput;
    reportCards?: Prisma.ReportCardCreateNestedManyWithoutTermInput;
};
export type TermUncheckedCreateWithoutAttendanceInput = {
    id?: string;
    academicYearId: string;
    termNumber: $Enums.TermNumber;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    isLocked?: boolean;
    grades?: Prisma.GradeEntryUncheckedCreateNestedManyWithoutTermInput;
    reportCards?: Prisma.ReportCardUncheckedCreateNestedManyWithoutTermInput;
};
export type TermCreateOrConnectWithoutAttendanceInput = {
    where: Prisma.TermWhereUniqueInput;
    create: Prisma.XOR<Prisma.TermCreateWithoutAttendanceInput, Prisma.TermUncheckedCreateWithoutAttendanceInput>;
};
export type TermUpsertWithoutAttendanceInput = {
    update: Prisma.XOR<Prisma.TermUpdateWithoutAttendanceInput, Prisma.TermUncheckedUpdateWithoutAttendanceInput>;
    create: Prisma.XOR<Prisma.TermCreateWithoutAttendanceInput, Prisma.TermUncheckedCreateWithoutAttendanceInput>;
    where?: Prisma.TermWhereInput;
};
export type TermUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: Prisma.TermWhereInput;
    data: Prisma.XOR<Prisma.TermUpdateWithoutAttendanceInput, Prisma.TermUncheckedUpdateWithoutAttendanceInput>;
};
export type TermUpdateWithoutAttendanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    termNumber?: Prisma.EnumTermNumberFieldUpdateOperationsInput | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutTermsNestedInput;
    grades?: Prisma.GradeEntryUpdateManyWithoutTermNestedInput;
    reportCards?: Prisma.ReportCardUpdateManyWithoutTermNestedInput;
};
export type TermUncheckedUpdateWithoutAttendanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    termNumber?: Prisma.EnumTermNumberFieldUpdateOperationsInput | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grades?: Prisma.GradeEntryUncheckedUpdateManyWithoutTermNestedInput;
    reportCards?: Prisma.ReportCardUncheckedUpdateManyWithoutTermNestedInput;
};
export type TermCreateWithoutReportCardsInput = {
    id?: string;
    termNumber: $Enums.TermNumber;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    isLocked?: boolean;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutTermsInput;
    grades?: Prisma.GradeEntryCreateNestedManyWithoutTermInput;
    attendance?: Prisma.AttendanceRecordCreateNestedManyWithoutTermInput;
};
export type TermUncheckedCreateWithoutReportCardsInput = {
    id?: string;
    academicYearId: string;
    termNumber: $Enums.TermNumber;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    isLocked?: boolean;
    grades?: Prisma.GradeEntryUncheckedCreateNestedManyWithoutTermInput;
    attendance?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutTermInput;
};
export type TermCreateOrConnectWithoutReportCardsInput = {
    where: Prisma.TermWhereUniqueInput;
    create: Prisma.XOR<Prisma.TermCreateWithoutReportCardsInput, Prisma.TermUncheckedCreateWithoutReportCardsInput>;
};
export type TermUpsertWithoutReportCardsInput = {
    update: Prisma.XOR<Prisma.TermUpdateWithoutReportCardsInput, Prisma.TermUncheckedUpdateWithoutReportCardsInput>;
    create: Prisma.XOR<Prisma.TermCreateWithoutReportCardsInput, Prisma.TermUncheckedCreateWithoutReportCardsInput>;
    where?: Prisma.TermWhereInput;
};
export type TermUpdateToOneWithWhereWithoutReportCardsInput = {
    where?: Prisma.TermWhereInput;
    data: Prisma.XOR<Prisma.TermUpdateWithoutReportCardsInput, Prisma.TermUncheckedUpdateWithoutReportCardsInput>;
};
export type TermUpdateWithoutReportCardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    termNumber?: Prisma.EnumTermNumberFieldUpdateOperationsInput | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutTermsNestedInput;
    grades?: Prisma.GradeEntryUpdateManyWithoutTermNestedInput;
    attendance?: Prisma.AttendanceRecordUpdateManyWithoutTermNestedInput;
};
export type TermUncheckedUpdateWithoutReportCardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    termNumber?: Prisma.EnumTermNumberFieldUpdateOperationsInput | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grades?: Prisma.GradeEntryUncheckedUpdateManyWithoutTermNestedInput;
    attendance?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutTermNestedInput;
};
export type TermCreateManyAcademicYearInput = {
    id?: string;
    termNumber: $Enums.TermNumber;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    isLocked?: boolean;
};
export type TermUpdateWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    termNumber?: Prisma.EnumTermNumberFieldUpdateOperationsInput | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grades?: Prisma.GradeEntryUpdateManyWithoutTermNestedInput;
    attendance?: Prisma.AttendanceRecordUpdateManyWithoutTermNestedInput;
    reportCards?: Prisma.ReportCardUpdateManyWithoutTermNestedInput;
};
export type TermUncheckedUpdateWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    termNumber?: Prisma.EnumTermNumberFieldUpdateOperationsInput | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grades?: Prisma.GradeEntryUncheckedUpdateManyWithoutTermNestedInput;
    attendance?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutTermNestedInput;
    reportCards?: Prisma.ReportCardUncheckedUpdateManyWithoutTermNestedInput;
};
export type TermUncheckedUpdateManyWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    termNumber?: Prisma.EnumTermNumberFieldUpdateOperationsInput | $Enums.TermNumber;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TermCountOutputType = {
    grades: number;
    attendance: number;
    reportCards: number;
};
export type TermCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    grades?: boolean | TermCountOutputTypeCountGradesArgs;
    attendance?: boolean | TermCountOutputTypeCountAttendanceArgs;
    reportCards?: boolean | TermCountOutputTypeCountReportCardsArgs;
};
export type TermCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TermCountOutputTypeSelect<ExtArgs> | null;
};
export type TermCountOutputTypeCountGradesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeEntryWhereInput;
};
export type TermCountOutputTypeCountAttendanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceRecordWhereInput;
};
export type TermCountOutputTypeCountReportCardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportCardWhereInput;
};
export type TermSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    academicYearId?: boolean;
    termNumber?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    isLocked?: boolean;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    grades?: boolean | Prisma.Term$gradesArgs<ExtArgs>;
    attendance?: boolean | Prisma.Term$attendanceArgs<ExtArgs>;
    reportCards?: boolean | Prisma.Term$reportCardsArgs<ExtArgs>;
    _count?: boolean | Prisma.TermCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["term"]>;
export type TermSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    academicYearId?: boolean;
    termNumber?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    isLocked?: boolean;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["term"]>;
export type TermSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    academicYearId?: boolean;
    termNumber?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    isLocked?: boolean;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["term"]>;
export type TermSelectScalar = {
    id?: boolean;
    academicYearId?: boolean;
    termNumber?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    isLocked?: boolean;
};
export type TermOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "academicYearId" | "termNumber" | "startDate" | "endDate" | "isActive" | "isLocked", ExtArgs["result"]["term"]>;
export type TermInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    grades?: boolean | Prisma.Term$gradesArgs<ExtArgs>;
    attendance?: boolean | Prisma.Term$attendanceArgs<ExtArgs>;
    reportCards?: boolean | Prisma.Term$reportCardsArgs<ExtArgs>;
    _count?: boolean | Prisma.TermCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TermIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
};
export type TermIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
};
export type $TermPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Term";
    objects: {
        academicYear: Prisma.$AcademicYearPayload<ExtArgs>;
        grades: Prisma.$GradeEntryPayload<ExtArgs>[];
        attendance: Prisma.$AttendanceRecordPayload<ExtArgs>[];
        reportCards: Prisma.$ReportCardPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        academicYearId: string;
        termNumber: $Enums.TermNumber;
        startDate: Date;
        endDate: Date;
        isActive: boolean;
        isLocked: boolean;
    }, ExtArgs["result"]["term"]>;
    composites: {};
};
export type TermGetPayload<S extends boolean | null | undefined | TermDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TermPayload, S>;
export type TermCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TermFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TermCountAggregateInputType | true;
};
export interface TermDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Term'];
        meta: {
            name: 'Term';
        };
    };
    findUnique<T extends TermFindUniqueArgs>(args: Prisma.SelectSubset<T, TermFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TermClient<runtime.Types.Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TermFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TermFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TermClient<runtime.Types.Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TermFindFirstArgs>(args?: Prisma.SelectSubset<T, TermFindFirstArgs<ExtArgs>>): Prisma.Prisma__TermClient<runtime.Types.Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TermFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TermFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TermClient<runtime.Types.Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TermFindManyArgs>(args?: Prisma.SelectSubset<T, TermFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TermCreateArgs>(args: Prisma.SelectSubset<T, TermCreateArgs<ExtArgs>>): Prisma.Prisma__TermClient<runtime.Types.Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TermCreateManyArgs>(args?: Prisma.SelectSubset<T, TermCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TermCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TermCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TermDeleteArgs>(args: Prisma.SelectSubset<T, TermDeleteArgs<ExtArgs>>): Prisma.Prisma__TermClient<runtime.Types.Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TermUpdateArgs>(args: Prisma.SelectSubset<T, TermUpdateArgs<ExtArgs>>): Prisma.Prisma__TermClient<runtime.Types.Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TermDeleteManyArgs>(args?: Prisma.SelectSubset<T, TermDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TermUpdateManyArgs>(args: Prisma.SelectSubset<T, TermUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TermUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TermUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TermUpsertArgs>(args: Prisma.SelectSubset<T, TermUpsertArgs<ExtArgs>>): Prisma.Prisma__TermClient<runtime.Types.Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TermCountArgs>(args?: Prisma.Subset<T, TermCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TermCountAggregateOutputType> : number>;
    aggregate<T extends TermAggregateArgs>(args: Prisma.Subset<T, TermAggregateArgs>): Prisma.PrismaPromise<GetTermAggregateType<T>>;
    groupBy<T extends TermGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TermGroupByArgs['orderBy'];
    } : {
        orderBy?: TermGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TermGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TermFieldRefs;
}
export interface Prisma__TermClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    academicYear<T extends Prisma.AcademicYearDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AcademicYearDefaultArgs<ExtArgs>>): Prisma.Prisma__AcademicYearClient<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    grades<T extends Prisma.Term$gradesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Term$gradesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attendance<T extends Prisma.Term$attendanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Term$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reportCards<T extends Prisma.Term$reportCardsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Term$reportCardsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TermFieldRefs {
    readonly id: Prisma.FieldRef<"Term", 'String'>;
    readonly academicYearId: Prisma.FieldRef<"Term", 'String'>;
    readonly termNumber: Prisma.FieldRef<"Term", 'TermNumber'>;
    readonly startDate: Prisma.FieldRef<"Term", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"Term", 'DateTime'>;
    readonly isActive: Prisma.FieldRef<"Term", 'Boolean'>;
    readonly isLocked: Prisma.FieldRef<"Term", 'Boolean'>;
}
export type TermFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TermSelect<ExtArgs> | null;
    omit?: Prisma.TermOmit<ExtArgs> | null;
    include?: Prisma.TermInclude<ExtArgs> | null;
    where: Prisma.TermWhereUniqueInput;
};
export type TermFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TermSelect<ExtArgs> | null;
    omit?: Prisma.TermOmit<ExtArgs> | null;
    include?: Prisma.TermInclude<ExtArgs> | null;
    where: Prisma.TermWhereUniqueInput;
};
export type TermFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TermSelect<ExtArgs> | null;
    omit?: Prisma.TermOmit<ExtArgs> | null;
    include?: Prisma.TermInclude<ExtArgs> | null;
    where?: Prisma.TermWhereInput;
    orderBy?: Prisma.TermOrderByWithRelationInput | Prisma.TermOrderByWithRelationInput[];
    cursor?: Prisma.TermWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TermScalarFieldEnum | Prisma.TermScalarFieldEnum[];
};
export type TermFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TermSelect<ExtArgs> | null;
    omit?: Prisma.TermOmit<ExtArgs> | null;
    include?: Prisma.TermInclude<ExtArgs> | null;
    where?: Prisma.TermWhereInput;
    orderBy?: Prisma.TermOrderByWithRelationInput | Prisma.TermOrderByWithRelationInput[];
    cursor?: Prisma.TermWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TermScalarFieldEnum | Prisma.TermScalarFieldEnum[];
};
export type TermFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TermSelect<ExtArgs> | null;
    omit?: Prisma.TermOmit<ExtArgs> | null;
    include?: Prisma.TermInclude<ExtArgs> | null;
    where?: Prisma.TermWhereInput;
    orderBy?: Prisma.TermOrderByWithRelationInput | Prisma.TermOrderByWithRelationInput[];
    cursor?: Prisma.TermWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TermScalarFieldEnum | Prisma.TermScalarFieldEnum[];
};
export type TermCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TermSelect<ExtArgs> | null;
    omit?: Prisma.TermOmit<ExtArgs> | null;
    include?: Prisma.TermInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TermCreateInput, Prisma.TermUncheckedCreateInput>;
};
export type TermCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TermCreateManyInput | Prisma.TermCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TermCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TermSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TermOmit<ExtArgs> | null;
    data: Prisma.TermCreateManyInput | Prisma.TermCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TermIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TermUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TermSelect<ExtArgs> | null;
    omit?: Prisma.TermOmit<ExtArgs> | null;
    include?: Prisma.TermInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TermUpdateInput, Prisma.TermUncheckedUpdateInput>;
    where: Prisma.TermWhereUniqueInput;
};
export type TermUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TermUpdateManyMutationInput, Prisma.TermUncheckedUpdateManyInput>;
    where?: Prisma.TermWhereInput;
    limit?: number;
};
export type TermUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TermSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TermOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TermUpdateManyMutationInput, Prisma.TermUncheckedUpdateManyInput>;
    where?: Prisma.TermWhereInput;
    limit?: number;
    include?: Prisma.TermIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TermUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TermSelect<ExtArgs> | null;
    omit?: Prisma.TermOmit<ExtArgs> | null;
    include?: Prisma.TermInclude<ExtArgs> | null;
    where: Prisma.TermWhereUniqueInput;
    create: Prisma.XOR<Prisma.TermCreateInput, Prisma.TermUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TermUpdateInput, Prisma.TermUncheckedUpdateInput>;
};
export type TermDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TermSelect<ExtArgs> | null;
    omit?: Prisma.TermOmit<ExtArgs> | null;
    include?: Prisma.TermInclude<ExtArgs> | null;
    where: Prisma.TermWhereUniqueInput;
};
export type TermDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TermWhereInput;
    limit?: number;
};
export type Term$gradesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeEntrySelect<ExtArgs> | null;
    omit?: Prisma.GradeEntryOmit<ExtArgs> | null;
    include?: Prisma.GradeEntryInclude<ExtArgs> | null;
    where?: Prisma.GradeEntryWhereInput;
    orderBy?: Prisma.GradeEntryOrderByWithRelationInput | Prisma.GradeEntryOrderByWithRelationInput[];
    cursor?: Prisma.GradeEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradeEntryScalarFieldEnum | Prisma.GradeEntryScalarFieldEnum[];
};
export type Term$attendanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Term$reportCardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportCardSelect<ExtArgs> | null;
    omit?: Prisma.ReportCardOmit<ExtArgs> | null;
    include?: Prisma.ReportCardInclude<ExtArgs> | null;
    where?: Prisma.ReportCardWhereInput;
    orderBy?: Prisma.ReportCardOrderByWithRelationInput | Prisma.ReportCardOrderByWithRelationInput[];
    cursor?: Prisma.ReportCardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportCardScalarFieldEnum | Prisma.ReportCardScalarFieldEnum[];
};
export type TermDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TermSelect<ExtArgs> | null;
    omit?: Prisma.TermOmit<ExtArgs> | null;
    include?: Prisma.TermInclude<ExtArgs> | null;
};
