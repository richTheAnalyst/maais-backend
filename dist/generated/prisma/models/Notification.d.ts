import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type NotificationModel = runtime.Types.Result.DefaultSelection<Prisma.$NotificationPayload>;
export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
};
export type NotificationMinAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    title: string | null;
    body: string | null;
    channel: $Enums.NotificationChannel | null;
    isRead: boolean | null;
    deliveredAt: Date | null;
    failedAt: Date | null;
    errorMsg: string | null;
    createdAt: Date | null;
    createdById: string | null;
};
export type NotificationMaxAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    title: string | null;
    body: string | null;
    channel: $Enums.NotificationChannel | null;
    isRead: boolean | null;
    deliveredAt: Date | null;
    failedAt: Date | null;
    errorMsg: string | null;
    createdAt: Date | null;
    createdById: string | null;
};
export type NotificationCountAggregateOutputType = {
    id: number;
    studentId: number;
    title: number;
    body: number;
    channel: number;
    isRead: number;
    deliveredAt: number;
    failedAt: number;
    errorMsg: number;
    createdAt: number;
    createdById: number;
    _all: number;
};
export type NotificationMinAggregateInputType = {
    id?: true;
    studentId?: true;
    title?: true;
    body?: true;
    channel?: true;
    isRead?: true;
    deliveredAt?: true;
    failedAt?: true;
    errorMsg?: true;
    createdAt?: true;
    createdById?: true;
};
export type NotificationMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    title?: true;
    body?: true;
    channel?: true;
    isRead?: true;
    deliveredAt?: true;
    failedAt?: true;
    errorMsg?: true;
    createdAt?: true;
    createdById?: true;
};
export type NotificationCountAggregateInputType = {
    id?: true;
    studentId?: true;
    title?: true;
    body?: true;
    channel?: true;
    isRead?: true;
    deliveredAt?: true;
    failedAt?: true;
    errorMsg?: true;
    createdAt?: true;
    createdById?: true;
    _all?: true;
};
export type NotificationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotificationCountAggregateInputType;
    _min?: NotificationMinAggregateInputType;
    _max?: NotificationMaxAggregateInputType;
};
export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
    [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotification[P]> : Prisma.GetScalarType<T[P], AggregateNotification[P]>;
};
export type NotificationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithAggregationInput | Prisma.NotificationOrderByWithAggregationInput[];
    by: Prisma.NotificationScalarFieldEnum[] | Prisma.NotificationScalarFieldEnum;
    having?: Prisma.NotificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationCountAggregateInputType | true;
    _min?: NotificationMinAggregateInputType;
    _max?: NotificationMaxAggregateInputType;
};
export type NotificationGroupByOutputType = {
    id: string;
    studentId: string | null;
    title: string;
    body: string;
    channel: $Enums.NotificationChannel;
    isRead: boolean;
    deliveredAt: Date | null;
    failedAt: Date | null;
    errorMsg: string | null;
    createdAt: Date;
    createdById: string | null;
    _count: NotificationCountAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
};
export type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotificationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotificationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotificationGroupByOutputType[P]>;
}>>;
export type NotificationWhereInput = {
    AND?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    OR?: Prisma.NotificationWhereInput[];
    NOT?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    id?: Prisma.StringFilter<"Notification"> | string;
    studentId?: Prisma.StringNullableFilter<"Notification"> | string | null;
    title?: Prisma.StringFilter<"Notification"> | string;
    body?: Prisma.StringFilter<"Notification"> | string;
    channel?: Prisma.EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel;
    isRead?: Prisma.BoolFilter<"Notification"> | boolean;
    deliveredAt?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    failedAt?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    errorMsg?: Prisma.StringNullableFilter<"Notification"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    createdById?: Prisma.StringNullableFilter<"Notification"> | string | null;
    student?: Prisma.XOR<Prisma.StudentProfileNullableScalarRelationFilter, Prisma.StudentProfileWhereInput> | null;
};
export type NotificationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    failedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMsg?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    student?: Prisma.StudentProfileOrderByWithRelationInput;
};
export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    OR?: Prisma.NotificationWhereInput[];
    NOT?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    studentId?: Prisma.StringNullableFilter<"Notification"> | string | null;
    title?: Prisma.StringFilter<"Notification"> | string;
    body?: Prisma.StringFilter<"Notification"> | string;
    channel?: Prisma.EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel;
    isRead?: Prisma.BoolFilter<"Notification"> | boolean;
    deliveredAt?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    failedAt?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    errorMsg?: Prisma.StringNullableFilter<"Notification"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    createdById?: Prisma.StringNullableFilter<"Notification"> | string | null;
    student?: Prisma.XOR<Prisma.StudentProfileNullableScalarRelationFilter, Prisma.StudentProfileWhereInput> | null;
}, "id">;
export type NotificationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    failedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMsg?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.NotificationCountOrderByAggregateInput;
    _max?: Prisma.NotificationMaxOrderByAggregateInput;
    _min?: Prisma.NotificationMinOrderByAggregateInput;
};
export type NotificationScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotificationScalarWhereWithAggregatesInput | Prisma.NotificationScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotificationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotificationScalarWhereWithAggregatesInput | Prisma.NotificationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    studentId?: Prisma.StringNullableWithAggregatesFilter<"Notification"> | string | null;
    title?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    body?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    channel?: Prisma.EnumNotificationChannelWithAggregatesFilter<"Notification"> | $Enums.NotificationChannel;
    isRead?: Prisma.BoolWithAggregatesFilter<"Notification"> | boolean;
    deliveredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null;
    failedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null;
    errorMsg?: Prisma.StringNullableWithAggregatesFilter<"Notification"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Notification"> | Date | string;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"Notification"> | string | null;
};
export type NotificationCreateInput = {
    id?: string;
    title: string;
    body: string;
    channel: $Enums.NotificationChannel;
    isRead?: boolean;
    deliveredAt?: Date | string | null;
    failedAt?: Date | string | null;
    errorMsg?: string | null;
    createdAt?: Date | string;
    createdById?: string | null;
    student?: Prisma.StudentProfileCreateNestedOneWithoutNotificationsInput;
};
export type NotificationUncheckedCreateInput = {
    id?: string;
    studentId?: string | null;
    title: string;
    body: string;
    channel: $Enums.NotificationChannel;
    isRead?: boolean;
    deliveredAt?: Date | string | null;
    failedAt?: Date | string | null;
    errorMsg?: string | null;
    createdAt?: Date | string;
    createdById?: string | null;
};
export type NotificationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMsg?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    student?: Prisma.StudentProfileUpdateOneWithoutNotificationsNestedInput;
};
export type NotificationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMsg?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type NotificationCreateManyInput = {
    id?: string;
    studentId?: string | null;
    title: string;
    body: string;
    channel: $Enums.NotificationChannel;
    isRead?: boolean;
    deliveredAt?: Date | string | null;
    failedAt?: Date | string | null;
    errorMsg?: string | null;
    createdAt?: Date | string;
    createdById?: string | null;
};
export type NotificationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMsg?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type NotificationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMsg?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type NotificationListRelationFilter = {
    every?: Prisma.NotificationWhereInput;
    some?: Prisma.NotificationWhereInput;
    none?: Prisma.NotificationWhereInput;
};
export type NotificationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NotificationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    failedAt?: Prisma.SortOrder;
    errorMsg?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
};
export type NotificationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    failedAt?: Prisma.SortOrder;
    errorMsg?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
};
export type NotificationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    failedAt?: Prisma.SortOrder;
    errorMsg?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
};
export type NotificationCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutStudentInput, Prisma.NotificationUncheckedCreateWithoutStudentInput> | Prisma.NotificationCreateWithoutStudentInput[] | Prisma.NotificationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutStudentInput | Prisma.NotificationCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.NotificationCreateManyStudentInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutStudentInput, Prisma.NotificationUncheckedCreateWithoutStudentInput> | Prisma.NotificationCreateWithoutStudentInput[] | Prisma.NotificationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutStudentInput | Prisma.NotificationCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.NotificationCreateManyStudentInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutStudentInput, Prisma.NotificationUncheckedCreateWithoutStudentInput> | Prisma.NotificationCreateWithoutStudentInput[] | Prisma.NotificationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutStudentInput | Prisma.NotificationCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutStudentInput | Prisma.NotificationUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.NotificationCreateManyStudentInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutStudentInput | Prisma.NotificationUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutStudentInput | Prisma.NotificationUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutStudentInput, Prisma.NotificationUncheckedCreateWithoutStudentInput> | Prisma.NotificationCreateWithoutStudentInput[] | Prisma.NotificationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutStudentInput | Prisma.NotificationCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutStudentInput | Prisma.NotificationUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.NotificationCreateManyStudentInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutStudentInput | Prisma.NotificationUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutStudentInput | Prisma.NotificationUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type EnumNotificationChannelFieldUpdateOperationsInput = {
    set?: $Enums.NotificationChannel;
};
export type NotificationCreateWithoutStudentInput = {
    id?: string;
    title: string;
    body: string;
    channel: $Enums.NotificationChannel;
    isRead?: boolean;
    deliveredAt?: Date | string | null;
    failedAt?: Date | string | null;
    errorMsg?: string | null;
    createdAt?: Date | string;
    createdById?: string | null;
};
export type NotificationUncheckedCreateWithoutStudentInput = {
    id?: string;
    title: string;
    body: string;
    channel: $Enums.NotificationChannel;
    isRead?: boolean;
    deliveredAt?: Date | string | null;
    failedAt?: Date | string | null;
    errorMsg?: string | null;
    createdAt?: Date | string;
    createdById?: string | null;
};
export type NotificationCreateOrConnectWithoutStudentInput = {
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutStudentInput, Prisma.NotificationUncheckedCreateWithoutStudentInput>;
};
export type NotificationCreateManyStudentInputEnvelope = {
    data: Prisma.NotificationCreateManyStudentInput | Prisma.NotificationCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type NotificationUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.NotificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationUpdateWithoutStudentInput, Prisma.NotificationUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutStudentInput, Prisma.NotificationUncheckedCreateWithoutStudentInput>;
};
export type NotificationUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.NotificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationUpdateWithoutStudentInput, Prisma.NotificationUncheckedUpdateWithoutStudentInput>;
};
export type NotificationUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.NotificationScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyWithoutStudentInput>;
};
export type NotificationScalarWhereInput = {
    AND?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
    OR?: Prisma.NotificationScalarWhereInput[];
    NOT?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
    id?: Prisma.StringFilter<"Notification"> | string;
    studentId?: Prisma.StringNullableFilter<"Notification"> | string | null;
    title?: Prisma.StringFilter<"Notification"> | string;
    body?: Prisma.StringFilter<"Notification"> | string;
    channel?: Prisma.EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel;
    isRead?: Prisma.BoolFilter<"Notification"> | boolean;
    deliveredAt?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    failedAt?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    errorMsg?: Prisma.StringNullableFilter<"Notification"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    createdById?: Prisma.StringNullableFilter<"Notification"> | string | null;
};
export type NotificationCreateManyStudentInput = {
    id?: string;
    title: string;
    body: string;
    channel: $Enums.NotificationChannel;
    isRead?: boolean;
    deliveredAt?: Date | string | null;
    failedAt?: Date | string | null;
    errorMsg?: string | null;
    createdAt?: Date | string;
    createdById?: string | null;
};
export type NotificationUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMsg?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type NotificationUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMsg?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type NotificationUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMsg?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type NotificationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    title?: boolean;
    body?: boolean;
    channel?: boolean;
    isRead?: boolean;
    deliveredAt?: boolean;
    failedAt?: boolean;
    errorMsg?: boolean;
    createdAt?: boolean;
    createdById?: boolean;
    student?: boolean | Prisma.Notification$studentArgs<ExtArgs>;
}, ExtArgs["result"]["notification"]>;
export type NotificationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    title?: boolean;
    body?: boolean;
    channel?: boolean;
    isRead?: boolean;
    deliveredAt?: boolean;
    failedAt?: boolean;
    errorMsg?: boolean;
    createdAt?: boolean;
    createdById?: boolean;
    student?: boolean | Prisma.Notification$studentArgs<ExtArgs>;
}, ExtArgs["result"]["notification"]>;
export type NotificationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    title?: boolean;
    body?: boolean;
    channel?: boolean;
    isRead?: boolean;
    deliveredAt?: boolean;
    failedAt?: boolean;
    errorMsg?: boolean;
    createdAt?: boolean;
    createdById?: boolean;
    student?: boolean | Prisma.Notification$studentArgs<ExtArgs>;
}, ExtArgs["result"]["notification"]>;
export type NotificationSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    title?: boolean;
    body?: boolean;
    channel?: boolean;
    isRead?: boolean;
    deliveredAt?: boolean;
    failedAt?: boolean;
    errorMsg?: boolean;
    createdAt?: boolean;
    createdById?: boolean;
};
export type NotificationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "title" | "body" | "channel" | "isRead" | "deliveredAt" | "failedAt" | "errorMsg" | "createdAt" | "createdById", ExtArgs["result"]["notification"]>;
export type NotificationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.Notification$studentArgs<ExtArgs>;
};
export type NotificationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.Notification$studentArgs<ExtArgs>;
};
export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.Notification$studentArgs<ExtArgs>;
};
export type $NotificationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Notification";
    objects: {
        student: Prisma.$StudentProfilePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        studentId: string | null;
        title: string;
        body: string;
        channel: $Enums.NotificationChannel;
        isRead: boolean;
        deliveredAt: Date | null;
        failedAt: Date | null;
        errorMsg: string | null;
        createdAt: Date;
        createdById: string | null;
    }, ExtArgs["result"]["notification"]>;
    composites: {};
};
export type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotificationPayload, S>;
export type NotificationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotificationCountAggregateInputType | true;
};
export interface NotificationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Notification'];
        meta: {
            name: 'Notification';
        };
    };
    findUnique<T extends NotificationFindUniqueArgs>(args: Prisma.SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NotificationFindFirstArgs>(args?: Prisma.SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NotificationFindManyArgs>(args?: Prisma.SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NotificationCreateArgs>(args: Prisma.SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NotificationCreateManyArgs>(args?: Prisma.SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NotificationDeleteArgs>(args: Prisma.SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NotificationUpdateArgs>(args: Prisma.SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NotificationDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NotificationUpdateManyArgs>(args: Prisma.SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NotificationUpsertArgs>(args: Prisma.SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NotificationCountArgs>(args?: Prisma.Subset<T, NotificationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotificationCountAggregateOutputType> : number>;
    aggregate<T extends NotificationAggregateArgs>(args: Prisma.Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>;
    groupBy<T extends NotificationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotificationGroupByArgs['orderBy'];
    } : {
        orderBy?: NotificationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NotificationFieldRefs;
}
export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.Notification$studentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Notification$studentArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NotificationFieldRefs {
    readonly id: Prisma.FieldRef<"Notification", 'String'>;
    readonly studentId: Prisma.FieldRef<"Notification", 'String'>;
    readonly title: Prisma.FieldRef<"Notification", 'String'>;
    readonly body: Prisma.FieldRef<"Notification", 'String'>;
    readonly channel: Prisma.FieldRef<"Notification", 'NotificationChannel'>;
    readonly isRead: Prisma.FieldRef<"Notification", 'Boolean'>;
    readonly deliveredAt: Prisma.FieldRef<"Notification", 'DateTime'>;
    readonly failedAt: Prisma.FieldRef<"Notification", 'DateTime'>;
    readonly errorMsg: Prisma.FieldRef<"Notification", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Notification", 'DateTime'>;
    readonly createdById: Prisma.FieldRef<"Notification", 'String'>;
}
export type NotificationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NotificationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NotificationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NotificationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationCreateInput, Prisma.NotificationUncheckedCreateInput>;
};
export type NotificationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NotificationCreateManyInput | Prisma.NotificationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NotificationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    data: Prisma.NotificationCreateManyInput | Prisma.NotificationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NotificationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NotificationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationUpdateInput, Prisma.NotificationUncheckedUpdateInput>;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyInput>;
    where?: Prisma.NotificationWhereInput;
    limit?: number;
};
export type NotificationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyInput>;
    where?: Prisma.NotificationWhereInput;
    limit?: number;
    include?: Prisma.NotificationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NotificationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateInput, Prisma.NotificationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NotificationUpdateInput, Prisma.NotificationUncheckedUpdateInput>;
};
export type NotificationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
    limit?: number;
};
export type Notification$studentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProfileSelect<ExtArgs> | null;
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    include?: Prisma.StudentProfileInclude<ExtArgs> | null;
    where?: Prisma.StudentProfileWhereInput;
};
export type NotificationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
};
