import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type StudentProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentProfilePayload>;
export type AggregateStudentProfile = {
    _count: StudentProfileCountAggregateOutputType | null;
    _min: StudentProfileMinAggregateOutputType | null;
    _max: StudentProfileMaxAggregateOutputType | null;
};
export type StudentProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    indexNumber: string | null;
    firstName: string | null;
    lastName: string | null;
    middleName: string | null;
    gender: $Enums.Gender | null;
    dateOfBirth: Date | null;
    photoUrl: string | null;
    admissionDate: Date | null;
    currentClassId: string | null;
    archivedAt: Date | null;
};
export type StudentProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    indexNumber: string | null;
    firstName: string | null;
    lastName: string | null;
    middleName: string | null;
    gender: $Enums.Gender | null;
    dateOfBirth: Date | null;
    photoUrl: string | null;
    admissionDate: Date | null;
    currentClassId: string | null;
    archivedAt: Date | null;
};
export type StudentProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    indexNumber: number;
    firstName: number;
    lastName: number;
    middleName: number;
    gender: number;
    dateOfBirth: number;
    photoUrl: number;
    admissionDate: number;
    currentClassId: number;
    archivedAt: number;
    _all: number;
};
export type StudentProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    indexNumber?: true;
    firstName?: true;
    lastName?: true;
    middleName?: true;
    gender?: true;
    dateOfBirth?: true;
    photoUrl?: true;
    admissionDate?: true;
    currentClassId?: true;
    archivedAt?: true;
};
export type StudentProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    indexNumber?: true;
    firstName?: true;
    lastName?: true;
    middleName?: true;
    gender?: true;
    dateOfBirth?: true;
    photoUrl?: true;
    admissionDate?: true;
    currentClassId?: true;
    archivedAt?: true;
};
export type StudentProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    indexNumber?: true;
    firstName?: true;
    lastName?: true;
    middleName?: true;
    gender?: true;
    dateOfBirth?: true;
    photoUrl?: true;
    admissionDate?: true;
    currentClassId?: true;
    archivedAt?: true;
    _all?: true;
};
export type StudentProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentProfileWhereInput;
    orderBy?: Prisma.StudentProfileOrderByWithRelationInput | Prisma.StudentProfileOrderByWithRelationInput[];
    cursor?: Prisma.StudentProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentProfileCountAggregateInputType;
    _min?: StudentProfileMinAggregateInputType;
    _max?: StudentProfileMaxAggregateInputType;
};
export type GetStudentProfileAggregateType<T extends StudentProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateStudentProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudentProfile[P]> : Prisma.GetScalarType<T[P], AggregateStudentProfile[P]>;
};
export type StudentProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentProfileWhereInput;
    orderBy?: Prisma.StudentProfileOrderByWithAggregationInput | Prisma.StudentProfileOrderByWithAggregationInput[];
    by: Prisma.StudentProfileScalarFieldEnum[] | Prisma.StudentProfileScalarFieldEnum;
    having?: Prisma.StudentProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentProfileCountAggregateInputType | true;
    _min?: StudentProfileMinAggregateInputType;
    _max?: StudentProfileMaxAggregateInputType;
};
export type StudentProfileGroupByOutputType = {
    id: string;
    userId: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName: string | null;
    gender: $Enums.Gender;
    dateOfBirth: Date | null;
    photoUrl: string | null;
    admissionDate: Date;
    currentClassId: string | null;
    archivedAt: Date | null;
    _count: StudentProfileCountAggregateOutputType | null;
    _min: StudentProfileMinAggregateOutputType | null;
    _max: StudentProfileMaxAggregateOutputType | null;
};
export type GetStudentProfileGroupByPayload<T extends StudentProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentProfileGroupByOutputType[P]>;
}>>;
export type StudentProfileWhereInput = {
    AND?: Prisma.StudentProfileWhereInput | Prisma.StudentProfileWhereInput[];
    OR?: Prisma.StudentProfileWhereInput[];
    NOT?: Prisma.StudentProfileWhereInput | Prisma.StudentProfileWhereInput[];
    id?: Prisma.StringFilter<"StudentProfile"> | string;
    userId?: Prisma.StringFilter<"StudentProfile"> | string;
    indexNumber?: Prisma.StringFilter<"StudentProfile"> | string;
    firstName?: Prisma.StringFilter<"StudentProfile"> | string;
    lastName?: Prisma.StringFilter<"StudentProfile"> | string;
    middleName?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    gender?: Prisma.EnumGenderFilter<"StudentProfile"> | $Enums.Gender;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"StudentProfile"> | Date | string | null;
    photoUrl?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    admissionDate?: Prisma.DateTimeFilter<"StudentProfile"> | Date | string;
    currentClassId?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    archivedAt?: Prisma.DateTimeNullableFilter<"StudentProfile"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    currentClass?: Prisma.XOR<Prisma.ClassSectionNullableScalarRelationFilter, Prisma.ClassSectionWhereInput> | null;
    grades?: Prisma.GradeEntryListRelationFilter;
    attendance?: Prisma.AttendanceRecordListRelationFilter;
    promotions?: Prisma.PromotionRecordListRelationFilter;
    reportCards?: Prisma.ReportCardListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    parentLinks?: Prisma.StudentParentLinkListRelationFilter;
};
export type StudentProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    indexNumber?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    middleName?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    photoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    admissionDate?: Prisma.SortOrder;
    currentClassId?: Prisma.SortOrderInput | Prisma.SortOrder;
    archivedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    currentClass?: Prisma.ClassSectionOrderByWithRelationInput;
    grades?: Prisma.GradeEntryOrderByRelationAggregateInput;
    attendance?: Prisma.AttendanceRecordOrderByRelationAggregateInput;
    promotions?: Prisma.PromotionRecordOrderByRelationAggregateInput;
    reportCards?: Prisma.ReportCardOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    parentLinks?: Prisma.StudentParentLinkOrderByRelationAggregateInput;
};
export type StudentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    indexNumber?: string;
    AND?: Prisma.StudentProfileWhereInput | Prisma.StudentProfileWhereInput[];
    OR?: Prisma.StudentProfileWhereInput[];
    NOT?: Prisma.StudentProfileWhereInput | Prisma.StudentProfileWhereInput[];
    firstName?: Prisma.StringFilter<"StudentProfile"> | string;
    lastName?: Prisma.StringFilter<"StudentProfile"> | string;
    middleName?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    gender?: Prisma.EnumGenderFilter<"StudentProfile"> | $Enums.Gender;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"StudentProfile"> | Date | string | null;
    photoUrl?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    admissionDate?: Prisma.DateTimeFilter<"StudentProfile"> | Date | string;
    currentClassId?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    archivedAt?: Prisma.DateTimeNullableFilter<"StudentProfile"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    currentClass?: Prisma.XOR<Prisma.ClassSectionNullableScalarRelationFilter, Prisma.ClassSectionWhereInput> | null;
    grades?: Prisma.GradeEntryListRelationFilter;
    attendance?: Prisma.AttendanceRecordListRelationFilter;
    promotions?: Prisma.PromotionRecordListRelationFilter;
    reportCards?: Prisma.ReportCardListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    parentLinks?: Prisma.StudentParentLinkListRelationFilter;
}, "id" | "userId" | "indexNumber">;
export type StudentProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    indexNumber?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    middleName?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    photoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    admissionDate?: Prisma.SortOrder;
    currentClassId?: Prisma.SortOrderInput | Prisma.SortOrder;
    archivedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.StudentProfileCountOrderByAggregateInput;
    _max?: Prisma.StudentProfileMaxOrderByAggregateInput;
    _min?: Prisma.StudentProfileMinOrderByAggregateInput;
};
export type StudentProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentProfileScalarWhereWithAggregatesInput | Prisma.StudentProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentProfileScalarWhereWithAggregatesInput | Prisma.StudentProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StudentProfile"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"StudentProfile"> | string;
    indexNumber?: Prisma.StringWithAggregatesFilter<"StudentProfile"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"StudentProfile"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"StudentProfile"> | string;
    middleName?: Prisma.StringNullableWithAggregatesFilter<"StudentProfile"> | string | null;
    gender?: Prisma.EnumGenderWithAggregatesFilter<"StudentProfile"> | $Enums.Gender;
    dateOfBirth?: Prisma.DateTimeNullableWithAggregatesFilter<"StudentProfile"> | Date | string | null;
    photoUrl?: Prisma.StringNullableWithAggregatesFilter<"StudentProfile"> | string | null;
    admissionDate?: Prisma.DateTimeWithAggregatesFilter<"StudentProfile"> | Date | string;
    currentClassId?: Prisma.StringNullableWithAggregatesFilter<"StudentProfile"> | string | null;
    archivedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"StudentProfile"> | Date | string | null;
};
export type StudentProfileCreateInput = {
    id?: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    archivedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    currentClass?: Prisma.ClassSectionCreateNestedOneWithoutStudentsInput;
    grades?: Prisma.GradeEntryCreateNestedManyWithoutStudentInput;
    attendance?: Prisma.AttendanceRecordCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    currentClassId?: string | null;
    archivedAt?: Date | string | null;
    grades?: Prisma.GradeEntryUncheckedCreateNestedManyWithoutStudentInput;
    attendance?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordUncheckedCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardUncheckedCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    currentClass?: Prisma.ClassSectionUpdateOneWithoutStudentsNestedInput;
    grades?: Prisma.GradeEntryUpdateManyWithoutStudentNestedInput;
    attendance?: Prisma.AttendanceRecordUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    currentClassId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grades?: Prisma.GradeEntryUncheckedUpdateManyWithoutStudentNestedInput;
    attendance?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUncheckedUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUncheckedUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateManyInput = {
    id?: string;
    userId: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    currentClassId?: string | null;
    archivedAt?: Date | string | null;
};
export type StudentProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type StudentProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    currentClassId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type StudentProfileNullableScalarRelationFilter = {
    is?: Prisma.StudentProfileWhereInput | null;
    isNot?: Prisma.StudentProfileWhereInput | null;
};
export type StudentProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    indexNumber?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    middleName?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    admissionDate?: Prisma.SortOrder;
    currentClassId?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrder;
};
export type StudentProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    indexNumber?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    middleName?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    admissionDate?: Prisma.SortOrder;
    currentClassId?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrder;
};
export type StudentProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    indexNumber?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    middleName?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    admissionDate?: Prisma.SortOrder;
    currentClassId?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrder;
};
export type StudentProfileScalarRelationFilter = {
    is?: Prisma.StudentProfileWhereInput;
    isNot?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileListRelationFilter = {
    every?: Prisma.StudentProfileWhereInput;
    some?: Prisma.StudentProfileWhereInput;
    none?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutUserInput, Prisma.StudentProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutUserInput, Prisma.StudentProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutUserInput, Prisma.StudentProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.StudentProfileUpsertWithoutUserInput;
    disconnect?: Prisma.StudentProfileWhereInput | boolean;
    delete?: Prisma.StudentProfileWhereInput | boolean;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutUserInput, Prisma.StudentProfileUpdateWithoutUserInput>, Prisma.StudentProfileUncheckedUpdateWithoutUserInput>;
};
export type StudentProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutUserInput, Prisma.StudentProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.StudentProfileUpsertWithoutUserInput;
    disconnect?: Prisma.StudentProfileWhereInput | boolean;
    delete?: Prisma.StudentProfileWhereInput | boolean;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutUserInput, Prisma.StudentProfileUpdateWithoutUserInput>, Prisma.StudentProfileUncheckedUpdateWithoutUserInput>;
};
export type StudentProfileCreateNestedOneWithoutParentLinksInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutParentLinksInput, Prisma.StudentProfileUncheckedCreateWithoutParentLinksInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutParentLinksInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateOneRequiredWithoutParentLinksNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutParentLinksInput, Prisma.StudentProfileUncheckedCreateWithoutParentLinksInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutParentLinksInput;
    upsert?: Prisma.StudentProfileUpsertWithoutParentLinksInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutParentLinksInput, Prisma.StudentProfileUpdateWithoutParentLinksInput>, Prisma.StudentProfileUncheckedUpdateWithoutParentLinksInput>;
};
export type StudentProfileCreateNestedManyWithoutCurrentClassInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutCurrentClassInput, Prisma.StudentProfileUncheckedCreateWithoutCurrentClassInput> | Prisma.StudentProfileCreateWithoutCurrentClassInput[] | Prisma.StudentProfileUncheckedCreateWithoutCurrentClassInput[];
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutCurrentClassInput | Prisma.StudentProfileCreateOrConnectWithoutCurrentClassInput[];
    createMany?: Prisma.StudentProfileCreateManyCurrentClassInputEnvelope;
    connect?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
};
export type StudentProfileUncheckedCreateNestedManyWithoutCurrentClassInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutCurrentClassInput, Prisma.StudentProfileUncheckedCreateWithoutCurrentClassInput> | Prisma.StudentProfileCreateWithoutCurrentClassInput[] | Prisma.StudentProfileUncheckedCreateWithoutCurrentClassInput[];
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutCurrentClassInput | Prisma.StudentProfileCreateOrConnectWithoutCurrentClassInput[];
    createMany?: Prisma.StudentProfileCreateManyCurrentClassInputEnvelope;
    connect?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
};
export type StudentProfileUpdateManyWithoutCurrentClassNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutCurrentClassInput, Prisma.StudentProfileUncheckedCreateWithoutCurrentClassInput> | Prisma.StudentProfileCreateWithoutCurrentClassInput[] | Prisma.StudentProfileUncheckedCreateWithoutCurrentClassInput[];
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutCurrentClassInput | Prisma.StudentProfileCreateOrConnectWithoutCurrentClassInput[];
    upsert?: Prisma.StudentProfileUpsertWithWhereUniqueWithoutCurrentClassInput | Prisma.StudentProfileUpsertWithWhereUniqueWithoutCurrentClassInput[];
    createMany?: Prisma.StudentProfileCreateManyCurrentClassInputEnvelope;
    set?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    disconnect?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    delete?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    connect?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    update?: Prisma.StudentProfileUpdateWithWhereUniqueWithoutCurrentClassInput | Prisma.StudentProfileUpdateWithWhereUniqueWithoutCurrentClassInput[];
    updateMany?: Prisma.StudentProfileUpdateManyWithWhereWithoutCurrentClassInput | Prisma.StudentProfileUpdateManyWithWhereWithoutCurrentClassInput[];
    deleteMany?: Prisma.StudentProfileScalarWhereInput | Prisma.StudentProfileScalarWhereInput[];
};
export type StudentProfileUncheckedUpdateManyWithoutCurrentClassNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutCurrentClassInput, Prisma.StudentProfileUncheckedCreateWithoutCurrentClassInput> | Prisma.StudentProfileCreateWithoutCurrentClassInput[] | Prisma.StudentProfileUncheckedCreateWithoutCurrentClassInput[];
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutCurrentClassInput | Prisma.StudentProfileCreateOrConnectWithoutCurrentClassInput[];
    upsert?: Prisma.StudentProfileUpsertWithWhereUniqueWithoutCurrentClassInput | Prisma.StudentProfileUpsertWithWhereUniqueWithoutCurrentClassInput[];
    createMany?: Prisma.StudentProfileCreateManyCurrentClassInputEnvelope;
    set?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    disconnect?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    delete?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    connect?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    update?: Prisma.StudentProfileUpdateWithWhereUniqueWithoutCurrentClassInput | Prisma.StudentProfileUpdateWithWhereUniqueWithoutCurrentClassInput[];
    updateMany?: Prisma.StudentProfileUpdateManyWithWhereWithoutCurrentClassInput | Prisma.StudentProfileUpdateManyWithWhereWithoutCurrentClassInput[];
    deleteMany?: Prisma.StudentProfileScalarWhereInput | Prisma.StudentProfileScalarWhereInput[];
};
export type StudentProfileCreateNestedOneWithoutGradesInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutGradesInput, Prisma.StudentProfileUncheckedCreateWithoutGradesInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutGradesInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateOneRequiredWithoutGradesNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutGradesInput, Prisma.StudentProfileUncheckedCreateWithoutGradesInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutGradesInput;
    upsert?: Prisma.StudentProfileUpsertWithoutGradesInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutGradesInput, Prisma.StudentProfileUpdateWithoutGradesInput>, Prisma.StudentProfileUncheckedUpdateWithoutGradesInput>;
};
export type StudentProfileCreateNestedOneWithoutAttendanceInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutAttendanceInput, Prisma.StudentProfileUncheckedCreateWithoutAttendanceInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutAttendanceInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutAttendanceInput, Prisma.StudentProfileUncheckedCreateWithoutAttendanceInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutAttendanceInput;
    upsert?: Prisma.StudentProfileUpsertWithoutAttendanceInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutAttendanceInput, Prisma.StudentProfileUpdateWithoutAttendanceInput>, Prisma.StudentProfileUncheckedUpdateWithoutAttendanceInput>;
};
export type StudentProfileCreateNestedOneWithoutReportCardsInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutReportCardsInput, Prisma.StudentProfileUncheckedCreateWithoutReportCardsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutReportCardsInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateOneRequiredWithoutReportCardsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutReportCardsInput, Prisma.StudentProfileUncheckedCreateWithoutReportCardsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutReportCardsInput;
    upsert?: Prisma.StudentProfileUpsertWithoutReportCardsInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutReportCardsInput, Prisma.StudentProfileUpdateWithoutReportCardsInput>, Prisma.StudentProfileUncheckedUpdateWithoutReportCardsInput>;
};
export type StudentProfileCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutNotificationsInput, Prisma.StudentProfileUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateOneWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutNotificationsInput, Prisma.StudentProfileUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.StudentProfileUpsertWithoutNotificationsInput;
    disconnect?: Prisma.StudentProfileWhereInput | boolean;
    delete?: Prisma.StudentProfileWhereInput | boolean;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutNotificationsInput, Prisma.StudentProfileUpdateWithoutNotificationsInput>, Prisma.StudentProfileUncheckedUpdateWithoutNotificationsInput>;
};
export type StudentProfileCreateNestedOneWithoutPromotionsInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutPromotionsInput, Prisma.StudentProfileUncheckedCreateWithoutPromotionsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutPromotionsInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateOneRequiredWithoutPromotionsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutPromotionsInput, Prisma.StudentProfileUncheckedCreateWithoutPromotionsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutPromotionsInput;
    upsert?: Prisma.StudentProfileUpsertWithoutPromotionsInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutPromotionsInput, Prisma.StudentProfileUpdateWithoutPromotionsInput>, Prisma.StudentProfileUncheckedUpdateWithoutPromotionsInput>;
};
export type StudentProfileCreateWithoutUserInput = {
    id?: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    archivedAt?: Date | string | null;
    currentClass?: Prisma.ClassSectionCreateNestedOneWithoutStudentsInput;
    grades?: Prisma.GradeEntryCreateNestedManyWithoutStudentInput;
    attendance?: Prisma.AttendanceRecordCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    currentClassId?: string | null;
    archivedAt?: Date | string | null;
    grades?: Prisma.GradeEntryUncheckedCreateNestedManyWithoutStudentInput;
    attendance?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordUncheckedCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardUncheckedCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutUserInput, Prisma.StudentProfileUncheckedCreateWithoutUserInput>;
};
export type StudentProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutUserInput, Prisma.StudentProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutUserInput, Prisma.StudentProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.StudentProfileWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutUserInput, Prisma.StudentProfileUncheckedUpdateWithoutUserInput>;
};
export type StudentProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    currentClass?: Prisma.ClassSectionUpdateOneWithoutStudentsNestedInput;
    grades?: Prisma.GradeEntryUpdateManyWithoutStudentNestedInput;
    attendance?: Prisma.AttendanceRecordUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    currentClassId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grades?: Prisma.GradeEntryUncheckedUpdateManyWithoutStudentNestedInput;
    attendance?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUncheckedUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUncheckedUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateWithoutParentLinksInput = {
    id?: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    archivedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    currentClass?: Prisma.ClassSectionCreateNestedOneWithoutStudentsInput;
    grades?: Prisma.GradeEntryCreateNestedManyWithoutStudentInput;
    attendance?: Prisma.AttendanceRecordCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutParentLinksInput = {
    id?: string;
    userId: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    currentClassId?: string | null;
    archivedAt?: Date | string | null;
    grades?: Prisma.GradeEntryUncheckedCreateNestedManyWithoutStudentInput;
    attendance?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordUncheckedCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardUncheckedCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutParentLinksInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutParentLinksInput, Prisma.StudentProfileUncheckedCreateWithoutParentLinksInput>;
};
export type StudentProfileUpsertWithoutParentLinksInput = {
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutParentLinksInput, Prisma.StudentProfileUncheckedUpdateWithoutParentLinksInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutParentLinksInput, Prisma.StudentProfileUncheckedCreateWithoutParentLinksInput>;
    where?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileUpdateToOneWithWhereWithoutParentLinksInput = {
    where?: Prisma.StudentProfileWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutParentLinksInput, Prisma.StudentProfileUncheckedUpdateWithoutParentLinksInput>;
};
export type StudentProfileUpdateWithoutParentLinksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    currentClass?: Prisma.ClassSectionUpdateOneWithoutStudentsNestedInput;
    grades?: Prisma.GradeEntryUpdateManyWithoutStudentNestedInput;
    attendance?: Prisma.AttendanceRecordUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutParentLinksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    currentClassId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grades?: Prisma.GradeEntryUncheckedUpdateManyWithoutStudentNestedInput;
    attendance?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUncheckedUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUncheckedUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateWithoutCurrentClassInput = {
    id?: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    archivedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    grades?: Prisma.GradeEntryCreateNestedManyWithoutStudentInput;
    attendance?: Prisma.AttendanceRecordCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutCurrentClassInput = {
    id?: string;
    userId: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    archivedAt?: Date | string | null;
    grades?: Prisma.GradeEntryUncheckedCreateNestedManyWithoutStudentInput;
    attendance?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordUncheckedCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardUncheckedCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutCurrentClassInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutCurrentClassInput, Prisma.StudentProfileUncheckedCreateWithoutCurrentClassInput>;
};
export type StudentProfileCreateManyCurrentClassInputEnvelope = {
    data: Prisma.StudentProfileCreateManyCurrentClassInput | Prisma.StudentProfileCreateManyCurrentClassInput[];
    skipDuplicates?: boolean;
};
export type StudentProfileUpsertWithWhereUniqueWithoutCurrentClassInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutCurrentClassInput, Prisma.StudentProfileUncheckedUpdateWithoutCurrentClassInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutCurrentClassInput, Prisma.StudentProfileUncheckedCreateWithoutCurrentClassInput>;
};
export type StudentProfileUpdateWithWhereUniqueWithoutCurrentClassInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutCurrentClassInput, Prisma.StudentProfileUncheckedUpdateWithoutCurrentClassInput>;
};
export type StudentProfileUpdateManyWithWhereWithoutCurrentClassInput = {
    where: Prisma.StudentProfileScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateManyMutationInput, Prisma.StudentProfileUncheckedUpdateManyWithoutCurrentClassInput>;
};
export type StudentProfileScalarWhereInput = {
    AND?: Prisma.StudentProfileScalarWhereInput | Prisma.StudentProfileScalarWhereInput[];
    OR?: Prisma.StudentProfileScalarWhereInput[];
    NOT?: Prisma.StudentProfileScalarWhereInput | Prisma.StudentProfileScalarWhereInput[];
    id?: Prisma.StringFilter<"StudentProfile"> | string;
    userId?: Prisma.StringFilter<"StudentProfile"> | string;
    indexNumber?: Prisma.StringFilter<"StudentProfile"> | string;
    firstName?: Prisma.StringFilter<"StudentProfile"> | string;
    lastName?: Prisma.StringFilter<"StudentProfile"> | string;
    middleName?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    gender?: Prisma.EnumGenderFilter<"StudentProfile"> | $Enums.Gender;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"StudentProfile"> | Date | string | null;
    photoUrl?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    admissionDate?: Prisma.DateTimeFilter<"StudentProfile"> | Date | string;
    currentClassId?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    archivedAt?: Prisma.DateTimeNullableFilter<"StudentProfile"> | Date | string | null;
};
export type StudentProfileCreateWithoutGradesInput = {
    id?: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    archivedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    currentClass?: Prisma.ClassSectionCreateNestedOneWithoutStudentsInput;
    attendance?: Prisma.AttendanceRecordCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutGradesInput = {
    id?: string;
    userId: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    currentClassId?: string | null;
    archivedAt?: Date | string | null;
    attendance?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordUncheckedCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardUncheckedCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutGradesInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutGradesInput, Prisma.StudentProfileUncheckedCreateWithoutGradesInput>;
};
export type StudentProfileUpsertWithoutGradesInput = {
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutGradesInput, Prisma.StudentProfileUncheckedUpdateWithoutGradesInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutGradesInput, Prisma.StudentProfileUncheckedCreateWithoutGradesInput>;
    where?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileUpdateToOneWithWhereWithoutGradesInput = {
    where?: Prisma.StudentProfileWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutGradesInput, Prisma.StudentProfileUncheckedUpdateWithoutGradesInput>;
};
export type StudentProfileUpdateWithoutGradesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    currentClass?: Prisma.ClassSectionUpdateOneWithoutStudentsNestedInput;
    attendance?: Prisma.AttendanceRecordUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutGradesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    currentClassId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attendance?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUncheckedUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUncheckedUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateWithoutAttendanceInput = {
    id?: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    archivedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    currentClass?: Prisma.ClassSectionCreateNestedOneWithoutStudentsInput;
    grades?: Prisma.GradeEntryCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutAttendanceInput = {
    id?: string;
    userId: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    currentClassId?: string | null;
    archivedAt?: Date | string | null;
    grades?: Prisma.GradeEntryUncheckedCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordUncheckedCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardUncheckedCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutAttendanceInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutAttendanceInput, Prisma.StudentProfileUncheckedCreateWithoutAttendanceInput>;
};
export type StudentProfileUpsertWithoutAttendanceInput = {
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutAttendanceInput, Prisma.StudentProfileUncheckedUpdateWithoutAttendanceInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutAttendanceInput, Prisma.StudentProfileUncheckedCreateWithoutAttendanceInput>;
    where?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: Prisma.StudentProfileWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutAttendanceInput, Prisma.StudentProfileUncheckedUpdateWithoutAttendanceInput>;
};
export type StudentProfileUpdateWithoutAttendanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    currentClass?: Prisma.ClassSectionUpdateOneWithoutStudentsNestedInput;
    grades?: Prisma.GradeEntryUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutAttendanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    currentClassId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grades?: Prisma.GradeEntryUncheckedUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUncheckedUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUncheckedUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateWithoutReportCardsInput = {
    id?: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    archivedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    currentClass?: Prisma.ClassSectionCreateNestedOneWithoutStudentsInput;
    grades?: Prisma.GradeEntryCreateNestedManyWithoutStudentInput;
    attendance?: Prisma.AttendanceRecordCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutReportCardsInput = {
    id?: string;
    userId: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    currentClassId?: string | null;
    archivedAt?: Date | string | null;
    grades?: Prisma.GradeEntryUncheckedCreateNestedManyWithoutStudentInput;
    attendance?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordUncheckedCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutReportCardsInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutReportCardsInput, Prisma.StudentProfileUncheckedCreateWithoutReportCardsInput>;
};
export type StudentProfileUpsertWithoutReportCardsInput = {
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutReportCardsInput, Prisma.StudentProfileUncheckedUpdateWithoutReportCardsInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutReportCardsInput, Prisma.StudentProfileUncheckedCreateWithoutReportCardsInput>;
    where?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileUpdateToOneWithWhereWithoutReportCardsInput = {
    where?: Prisma.StudentProfileWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutReportCardsInput, Prisma.StudentProfileUncheckedUpdateWithoutReportCardsInput>;
};
export type StudentProfileUpdateWithoutReportCardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    currentClass?: Prisma.ClassSectionUpdateOneWithoutStudentsNestedInput;
    grades?: Prisma.GradeEntryUpdateManyWithoutStudentNestedInput;
    attendance?: Prisma.AttendanceRecordUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutReportCardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    currentClassId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grades?: Prisma.GradeEntryUncheckedUpdateManyWithoutStudentNestedInput;
    attendance?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUncheckedUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateWithoutNotificationsInput = {
    id?: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    archivedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    currentClass?: Prisma.ClassSectionCreateNestedOneWithoutStudentsInput;
    grades?: Prisma.GradeEntryCreateNestedManyWithoutStudentInput;
    attendance?: Prisma.AttendanceRecordCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    userId: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    currentClassId?: string | null;
    archivedAt?: Date | string | null;
    grades?: Prisma.GradeEntryUncheckedCreateNestedManyWithoutStudentInput;
    attendance?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput;
    promotions?: Prisma.PromotionRecordUncheckedCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardUncheckedCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutNotificationsInput, Prisma.StudentProfileUncheckedCreateWithoutNotificationsInput>;
};
export type StudentProfileUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutNotificationsInput, Prisma.StudentProfileUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutNotificationsInput, Prisma.StudentProfileUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.StudentProfileWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutNotificationsInput, Prisma.StudentProfileUncheckedUpdateWithoutNotificationsInput>;
};
export type StudentProfileUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    currentClass?: Prisma.ClassSectionUpdateOneWithoutStudentsNestedInput;
    grades?: Prisma.GradeEntryUpdateManyWithoutStudentNestedInput;
    attendance?: Prisma.AttendanceRecordUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    currentClassId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grades?: Prisma.GradeEntryUncheckedUpdateManyWithoutStudentNestedInput;
    attendance?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUncheckedUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUncheckedUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateWithoutPromotionsInput = {
    id?: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    archivedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    currentClass?: Prisma.ClassSectionCreateNestedOneWithoutStudentsInput;
    grades?: Prisma.GradeEntryCreateNestedManyWithoutStudentInput;
    attendance?: Prisma.AttendanceRecordCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutPromotionsInput = {
    id?: string;
    userId: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    currentClassId?: string | null;
    archivedAt?: Date | string | null;
    grades?: Prisma.GradeEntryUncheckedCreateNestedManyWithoutStudentInput;
    attendance?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput;
    reportCards?: Prisma.ReportCardUncheckedCreateNestedManyWithoutStudentInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutStudentInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutPromotionsInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutPromotionsInput, Prisma.StudentProfileUncheckedCreateWithoutPromotionsInput>;
};
export type StudentProfileUpsertWithoutPromotionsInput = {
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutPromotionsInput, Prisma.StudentProfileUncheckedUpdateWithoutPromotionsInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutPromotionsInput, Prisma.StudentProfileUncheckedCreateWithoutPromotionsInput>;
    where?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileUpdateToOneWithWhereWithoutPromotionsInput = {
    where?: Prisma.StudentProfileWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutPromotionsInput, Prisma.StudentProfileUncheckedUpdateWithoutPromotionsInput>;
};
export type StudentProfileUpdateWithoutPromotionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    currentClass?: Prisma.ClassSectionUpdateOneWithoutStudentsNestedInput;
    grades?: Prisma.GradeEntryUpdateManyWithoutStudentNestedInput;
    attendance?: Prisma.AttendanceRecordUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutPromotionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    currentClassId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grades?: Prisma.GradeEntryUncheckedUpdateManyWithoutStudentNestedInput;
    attendance?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUncheckedUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateManyCurrentClassInput = {
    id?: string;
    userId: string;
    indexNumber: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    gender: $Enums.Gender;
    dateOfBirth?: Date | string | null;
    photoUrl?: string | null;
    admissionDate?: Date | string;
    archivedAt?: Date | string | null;
};
export type StudentProfileUpdateWithoutCurrentClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    grades?: Prisma.GradeEntryUpdateManyWithoutStudentNestedInput;
    attendance?: Prisma.AttendanceRecordUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutCurrentClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grades?: Prisma.GradeEntryUncheckedUpdateManyWithoutStudentNestedInput;
    attendance?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput;
    promotions?: Prisma.PromotionRecordUncheckedUpdateManyWithoutStudentNestedInput;
    reportCards?: Prisma.ReportCardUncheckedUpdateManyWithoutStudentNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutStudentNestedInput;
    parentLinks?: Prisma.StudentParentLinkUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateManyWithoutCurrentClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    indexNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admissionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type StudentProfileCountOutputType = {
    grades: number;
    attendance: number;
    promotions: number;
    reportCards: number;
    notifications: number;
    parentLinks: number;
};
export type StudentProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    grades?: boolean | StudentProfileCountOutputTypeCountGradesArgs;
    attendance?: boolean | StudentProfileCountOutputTypeCountAttendanceArgs;
    promotions?: boolean | StudentProfileCountOutputTypeCountPromotionsArgs;
    reportCards?: boolean | StudentProfileCountOutputTypeCountReportCardsArgs;
    notifications?: boolean | StudentProfileCountOutputTypeCountNotificationsArgs;
    parentLinks?: boolean | StudentProfileCountOutputTypeCountParentLinksArgs;
};
export type StudentProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileCountOutputTypeSelect<ExtArgs> | null;
};
export type StudentProfileCountOutputTypeCountGradesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeEntryWhereInput;
};
export type StudentProfileCountOutputTypeCountAttendanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceRecordWhereInput;
};
export type StudentProfileCountOutputTypeCountPromotionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PromotionRecordWhereInput;
};
export type StudentProfileCountOutputTypeCountReportCardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportCardWhereInput;
};
export type StudentProfileCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type StudentProfileCountOutputTypeCountParentLinksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentParentLinkWhereInput;
};
export type StudentProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    indexNumber?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    middleName?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    photoUrl?: boolean;
    admissionDate?: boolean;
    currentClassId?: boolean;
    archivedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    currentClass?: boolean | Prisma.StudentProfile$currentClassArgs<ExtArgs>;
    grades?: boolean | Prisma.StudentProfile$gradesArgs<ExtArgs>;
    attendance?: boolean | Prisma.StudentProfile$attendanceArgs<ExtArgs>;
    promotions?: boolean | Prisma.StudentProfile$promotionsArgs<ExtArgs>;
    reportCards?: boolean | Prisma.StudentProfile$reportCardsArgs<ExtArgs>;
    notifications?: boolean | Prisma.StudentProfile$notificationsArgs<ExtArgs>;
    parentLinks?: boolean | Prisma.StudentProfile$parentLinksArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentProfile"]>;
export type StudentProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    indexNumber?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    middleName?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    photoUrl?: boolean;
    admissionDate?: boolean;
    currentClassId?: boolean;
    archivedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    currentClass?: boolean | Prisma.StudentProfile$currentClassArgs<ExtArgs>;
}, ExtArgs["result"]["studentProfile"]>;
export type StudentProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    indexNumber?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    middleName?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    photoUrl?: boolean;
    admissionDate?: boolean;
    currentClassId?: boolean;
    archivedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    currentClass?: boolean | Prisma.StudentProfile$currentClassArgs<ExtArgs>;
}, ExtArgs["result"]["studentProfile"]>;
export type StudentProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    indexNumber?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    middleName?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    photoUrl?: boolean;
    admissionDate?: boolean;
    currentClassId?: boolean;
    archivedAt?: boolean;
};
export type StudentProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "indexNumber" | "firstName" | "lastName" | "middleName" | "gender" | "dateOfBirth" | "photoUrl" | "admissionDate" | "currentClassId" | "archivedAt", ExtArgs["result"]["studentProfile"]>;
export type StudentProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    currentClass?: boolean | Prisma.StudentProfile$currentClassArgs<ExtArgs>;
    grades?: boolean | Prisma.StudentProfile$gradesArgs<ExtArgs>;
    attendance?: boolean | Prisma.StudentProfile$attendanceArgs<ExtArgs>;
    promotions?: boolean | Prisma.StudentProfile$promotionsArgs<ExtArgs>;
    reportCards?: boolean | Prisma.StudentProfile$reportCardsArgs<ExtArgs>;
    notifications?: boolean | Prisma.StudentProfile$notificationsArgs<ExtArgs>;
    parentLinks?: boolean | Prisma.StudentProfile$parentLinksArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StudentProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    currentClass?: boolean | Prisma.StudentProfile$currentClassArgs<ExtArgs>;
};
export type StudentProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    currentClass?: boolean | Prisma.StudentProfile$currentClassArgs<ExtArgs>;
};
export type $StudentProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StudentProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        currentClass: Prisma.$ClassSectionPayload<ExtArgs> | null;
        grades: Prisma.$GradeEntryPayload<ExtArgs>[];
        attendance: Prisma.$AttendanceRecordPayload<ExtArgs>[];
        promotions: Prisma.$PromotionRecordPayload<ExtArgs>[];
        reportCards: Prisma.$ReportCardPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        parentLinks: Prisma.$StudentParentLinkPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        indexNumber: string;
        firstName: string;
        lastName: string;
        middleName: string | null;
        gender: $Enums.Gender;
        dateOfBirth: Date | null;
        photoUrl: string | null;
        admissionDate: Date;
        currentClassId: string | null;
        archivedAt: Date | null;
    }, ExtArgs["result"]["studentProfile"]>;
    composites: {};
};
export type StudentProfileGetPayload<S extends boolean | null | undefined | StudentProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload, S>;
export type StudentProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentProfileCountAggregateInputType | true;
};
export interface StudentProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StudentProfile'];
        meta: {
            name: 'StudentProfile';
        };
    };
    findUnique<T extends StudentProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentProfileFindManyArgs>(args?: Prisma.SelectSubset<T, StudentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentProfileCreateArgs>(args: Prisma.SelectSubset<T, StudentProfileCreateArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentProfileDeleteArgs>(args: Prisma.SelectSubset<T, StudentProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentProfileUpdateArgs>(args: Prisma.SelectSubset<T, StudentProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentProfileUpsertArgs>(args: Prisma.SelectSubset<T, StudentProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentProfileCountArgs>(args?: Prisma.Subset<T, StudentProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentProfileCountAggregateOutputType> : number>;
    aggregate<T extends StudentProfileAggregateArgs>(args: Prisma.Subset<T, StudentProfileAggregateArgs>): Prisma.PrismaPromise<GetStudentProfileAggregateType<T>>;
    groupBy<T extends StudentProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentProfileFieldRefs;
}
export interface Prisma__StudentProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    currentClass<T extends Prisma.StudentProfile$currentClassArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfile$currentClassArgs<ExtArgs>>): Prisma.Prisma__ClassSectionClient<runtime.Types.Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    grades<T extends Prisma.StudentProfile$gradesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfile$gradesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attendance<T extends Prisma.StudentProfile$attendanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfile$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    promotions<T extends Prisma.StudentProfile$promotionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfile$promotionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PromotionRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reportCards<T extends Prisma.StudentProfile$reportCardsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfile$reportCardsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.StudentProfile$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfile$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    parentLinks<T extends Prisma.StudentProfile$parentLinksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfile$parentLinksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentParentLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentProfileFieldRefs {
    readonly id: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly userId: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly indexNumber: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly firstName: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly lastName: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly middleName: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly gender: Prisma.FieldRef<"StudentProfile", 'Gender'>;
    readonly dateOfBirth: Prisma.FieldRef<"StudentProfile", 'DateTime'>;
    readonly photoUrl: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly admissionDate: Prisma.FieldRef<"StudentProfile", 'DateTime'>;
    readonly currentClassId: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly archivedAt: Prisma.FieldRef<"StudentProfile", 'DateTime'>;
}
export type StudentProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelect<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    include?: Prisma.StudentProfileInclude<ExtArgs> | null;
    where: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelect<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    include?: Prisma.StudentProfileInclude<ExtArgs> | null;
    where: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelect<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    include?: Prisma.StudentProfileInclude<ExtArgs> | null;
    where?: Prisma.StudentProfileWhereInput;
    orderBy?: Prisma.StudentProfileOrderByWithRelationInput | Prisma.StudentProfileOrderByWithRelationInput[];
    cursor?: Prisma.StudentProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentProfileScalarFieldEnum | Prisma.StudentProfileScalarFieldEnum[];
};
export type StudentProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelect<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    include?: Prisma.StudentProfileInclude<ExtArgs> | null;
    where?: Prisma.StudentProfileWhereInput;
    orderBy?: Prisma.StudentProfileOrderByWithRelationInput | Prisma.StudentProfileOrderByWithRelationInput[];
    cursor?: Prisma.StudentProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentProfileScalarFieldEnum | Prisma.StudentProfileScalarFieldEnum[];
};
export type StudentProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelect<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    include?: Prisma.StudentProfileInclude<ExtArgs> | null;
    where?: Prisma.StudentProfileWhereInput;
    orderBy?: Prisma.StudentProfileOrderByWithRelationInput | Prisma.StudentProfileOrderByWithRelationInput[];
    cursor?: Prisma.StudentProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentProfileScalarFieldEnum | Prisma.StudentProfileScalarFieldEnum[];
};
export type StudentProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelect<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    include?: Prisma.StudentProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentProfileCreateInput, Prisma.StudentProfileUncheckedCreateInput>;
};
export type StudentProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentProfileCreateManyInput | Prisma.StudentProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    data: Prisma.StudentProfileCreateManyInput | Prisma.StudentProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StudentProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StudentProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelect<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    include?: Prisma.StudentProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentProfileUpdateInput, Prisma.StudentProfileUncheckedUpdateInput>;
    where: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentProfileUpdateManyMutationInput, Prisma.StudentProfileUncheckedUpdateManyInput>;
    where?: Prisma.StudentProfileWhereInput;
    limit?: number;
};
export type StudentProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentProfileUpdateManyMutationInput, Prisma.StudentProfileUncheckedUpdateManyInput>;
    where?: Prisma.StudentProfileWhereInput;
    limit?: number;
    include?: Prisma.StudentProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StudentProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelect<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    include?: Prisma.StudentProfileInclude<ExtArgs> | null;
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateInput, Prisma.StudentProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentProfileUpdateInput, Prisma.StudentProfileUncheckedUpdateInput>;
};
export type StudentProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelect<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    include?: Prisma.StudentProfileInclude<ExtArgs> | null;
    where: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentProfileWhereInput;
    limit?: number;
};
export type StudentProfile$currentClassArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSectionSelect<ExtArgs> | null;
    omit?: Prisma.ClassSectionOmit<ExtArgs> | null;
    include?: Prisma.ClassSectionInclude<ExtArgs> | null;
    where?: Prisma.ClassSectionWhereInput;
};
export type StudentProfile$gradesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentProfile$attendanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentProfile$promotionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromotionRecordSelect<ExtArgs> | null;
    omit?: Prisma.PromotionRecordOmit<ExtArgs> | null;
    include?: Prisma.PromotionRecordInclude<ExtArgs> | null;
    where?: Prisma.PromotionRecordWhereInput;
    orderBy?: Prisma.PromotionRecordOrderByWithRelationInput | Prisma.PromotionRecordOrderByWithRelationInput[];
    cursor?: Prisma.PromotionRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PromotionRecordScalarFieldEnum | Prisma.PromotionRecordScalarFieldEnum[];
};
export type StudentProfile$reportCardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentProfile$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type StudentProfile$parentLinksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelect<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    include?: Prisma.StudentProfileInclude<ExtArgs> | null;
};
