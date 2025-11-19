import { enumType, inputObjectType, objectType } from 'nexus'

export const TransactionIsolationLevel = enumType({
  name: 'TransactionIsolationLevel',
  members: [
    'ReadUncommitted',
    'ReadCommitted',
    'RepeatableRead',
    'Serializable',
  ],
})

export const HorseCategoryScalarFieldEnum = enumType({
  name: 'HorseCategoryScalarFieldEnum',
  members: ['id', 'name', 'imageURL', 'createdAt', 'updatedAt'],
})

export const HorseDisciplineScalarFieldEnum = enumType({
  name: 'HorseDisciplineScalarFieldEnum',
  members: ['id', 'name', 'createdAt', 'updatedAt'],
})

export const HorseGenderScalarFieldEnum = enumType({
  name: 'HorseGenderScalarFieldEnum',
  members: ['id', 'name', 'createdAt', 'updatedAt'],
})

export const HorseScalarFieldEnum = enumType({
  name: 'HorseScalarFieldEnum',
  members: [
    'id',
    'userUid',
    'categoryId',
    'name',
    'pedigreeURL',
    'yearOfBirth',
    'genderId',
    'height',
    'disciplineId',
    'location',
    'price',
    'description',
    'photos',
    'videoURL',
    'vetReport',
    'xrayResults',
    'status',
    'createdAt',
    'updatedAt',
    'pedigree',
  ],
})

export const NotificationScalarFieldEnum = enumType({
  name: 'NotificationScalarFieldEnum',
  members: [
    'id',
    'userUid',
    'title',
    'message',
    'read',
    'createdAt',
    'updatedAt',
  ],
})

export const UserFavoriteHorsesScalarFieldEnum = enumType({
  name: 'UserFavoriteHorsesScalarFieldEnum',
  members: ['id', 'userUid', 'horseId', 'createdAt'],
})

export const UserReviewScalarFieldEnum = enumType({
  name: 'UserReviewScalarFieldEnum',
  members: [
    'id',
    'userUid',
    'reviewer',
    'rating',
    'comment',
    'createdAt',
    'updatedAt',
  ],
})

export const UserScalarFieldEnum = enumType({
  name: 'UserScalarFieldEnum',
  members: [
    'uid',
    'name',
    'phoneNumber',
    'email',
    'whatsAppNumber',
    'verifiedSeller',
    'role',
    'createdAt',
    'updatedAt',
  ],
})

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

export const NullableJsonNullValueInput = enumType({
  name: 'NullableJsonNullValueInput',
  members: ['DbNull', 'JsonNull'],
})

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ['default', 'insensitive'],
})

export const JsonNullValueFilter = enumType({
  name: 'JsonNullValueFilter',
  members: ['DbNull', 'JsonNull', 'AnyNull'],
})

export const NullsOrder = enumType({
  name: 'NullsOrder',
  members: ['first', 'last'],
})

export const HorseStatus = enumType({
  name: 'HorseStatus',
  members: ['SUBMITTED', 'APPROVED', 'ACCEPTED', 'SOLD'],
})

export const UserRole = enumType({
  name: 'UserRole',
  members: ['USER', 'ADMIN'],
})

export const HorseCategoryWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'HorseCategoryWhereInput' })
    t.list.field('OR', { type: 'HorseCategoryWhereInput' })
    t.list.field('NOT', { type: 'HorseCategoryWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('imageURL', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('horses', { type: 'HorseListRelationFilter' })
  },
})

export const HorseCategoryOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('imageURL', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('horses', { type: 'HorseOrderByRelationAggregateInput' })
  },
})

export const HorseCategoryWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('name', { type: 'String' })
    t.list.field('AND', { type: 'HorseCategoryWhereInput' })
    t.list.field('OR', { type: 'HorseCategoryWhereInput' })
    t.list.field('NOT', { type: 'HorseCategoryWhereInput' })
    t.field('imageURL', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('horses', { type: 'HorseListRelationFilter' })
  },
})

export const HorseCategoryOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('imageURL', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'HorseCategoryCountOrderByAggregateInput' })
    t.field('_max', { type: 'HorseCategoryMaxOrderByAggregateInput' })
    t.field('_min', { type: 'HorseCategoryMinOrderByAggregateInput' })
  },
})

export const HorseCategoryScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'HorseCategoryScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'HorseCategoryScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'HorseCategoryScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('imageURL', { type: 'StringWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const HorseDisciplineWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'HorseDisciplineWhereInput' })
    t.list.field('OR', { type: 'HorseDisciplineWhereInput' })
    t.list.field('NOT', { type: 'HorseDisciplineWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('horses', { type: 'HorseListRelationFilter' })
  },
})

export const HorseDisciplineOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('horses', { type: 'HorseOrderByRelationAggregateInput' })
  },
})

export const HorseDisciplineWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('name', { type: 'String' })
    t.list.field('AND', { type: 'HorseDisciplineWhereInput' })
    t.list.field('OR', { type: 'HorseDisciplineWhereInput' })
    t.list.field('NOT', { type: 'HorseDisciplineWhereInput' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('horses', { type: 'HorseListRelationFilter' })
  },
})

export const HorseDisciplineOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'HorseDisciplineCountOrderByAggregateInput' })
    t.field('_max', { type: 'HorseDisciplineMaxOrderByAggregateInput' })
    t.field('_min', { type: 'HorseDisciplineMinOrderByAggregateInput' })
  },
})

export const HorseDisciplineScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', {
      type: 'HorseDisciplineScalarWhereWithAggregatesInput',
    })
    t.list.field('OR', {
      type: 'HorseDisciplineScalarWhereWithAggregatesInput',
    })
    t.list.field('NOT', {
      type: 'HorseDisciplineScalarWhereWithAggregatesInput',
    })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const HorseGenderWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'HorseGenderWhereInput' })
    t.list.field('OR', { type: 'HorseGenderWhereInput' })
    t.list.field('NOT', { type: 'HorseGenderWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('horses', { type: 'HorseListRelationFilter' })
  },
})

export const HorseGenderOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('horses', { type: 'HorseOrderByRelationAggregateInput' })
  },
})

export const HorseGenderWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('name', { type: 'String' })
    t.list.field('AND', { type: 'HorseGenderWhereInput' })
    t.list.field('OR', { type: 'HorseGenderWhereInput' })
    t.list.field('NOT', { type: 'HorseGenderWhereInput' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('horses', { type: 'HorseListRelationFilter' })
  },
})

export const HorseGenderOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'HorseGenderCountOrderByAggregateInput' })
    t.field('_max', { type: 'HorseGenderMaxOrderByAggregateInput' })
    t.field('_min', { type: 'HorseGenderMinOrderByAggregateInput' })
  },
})

export const HorseGenderScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'HorseGenderScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'HorseGenderScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'HorseGenderScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const HorseWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'HorseWhereInput' })
    t.list.field('OR', { type: 'HorseWhereInput' })
    t.list.field('NOT', { type: 'HorseWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('userUid', { type: 'StringFilter' })
    t.field('categoryId', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('pedigreeURL', { type: 'StringNullableFilter' })
    t.field('yearOfBirth', { type: 'IntFilter' })
    t.field('genderId', { type: 'StringFilter' })
    t.field('height', { type: 'IntFilter' })
    t.field('disciplineId', { type: 'StringFilter' })
    t.field('location', { type: 'StringFilter' })
    t.field('price', { type: 'FloatFilter' })
    t.field('description', { type: 'StringFilter' })
    t.field('photos', { type: 'StringNullableListFilter' })
    t.field('videoURL', { type: 'StringNullableFilter' })
    t.field('vetReport', { type: 'StringNullableFilter' })
    t.field('xrayResults', { type: 'StringNullableFilter' })
    t.field('status', { type: 'EnumHorseStatusFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('pedigree', { type: 'JsonNullableFilter' })
    t.field('user', { type: 'UserScalarRelationFilter' })
    t.field('category', { type: 'HorseCategoryScalarRelationFilter' })
    t.field('gender', { type: 'HorseGenderScalarRelationFilter' })
    t.field('discipline', { type: 'HorseDisciplineScalarRelationFilter' })
    t.field('favoriteByUsers', { type: 'UserFavoriteHorsesListRelationFilter' })
  },
})

export const HorseOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('categoryId', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('pedigreeURL', { type: 'SortOrderInput' })
    t.field('yearOfBirth', { type: 'SortOrder' })
    t.field('genderId', { type: 'SortOrder' })
    t.field('height', { type: 'SortOrder' })
    t.field('disciplineId', { type: 'SortOrder' })
    t.field('location', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('photos', { type: 'SortOrder' })
    t.field('videoURL', { type: 'SortOrderInput' })
    t.field('vetReport', { type: 'SortOrderInput' })
    t.field('xrayResults', { type: 'SortOrderInput' })
    t.field('status', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('pedigree', { type: 'SortOrderInput' })
    t.field('user', { type: 'UserOrderByWithRelationInput' })
    t.field('category', { type: 'HorseCategoryOrderByWithRelationInput' })
    t.field('gender', { type: 'HorseGenderOrderByWithRelationInput' })
    t.field('discipline', { type: 'HorseDisciplineOrderByWithRelationInput' })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesOrderByRelationAggregateInput',
    })
  },
})

export const HorseWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.list.field('AND', { type: 'HorseWhereInput' })
    t.list.field('OR', { type: 'HorseWhereInput' })
    t.list.field('NOT', { type: 'HorseWhereInput' })
    t.field('userUid', { type: 'StringFilter' })
    t.field('categoryId', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('pedigreeURL', { type: 'StringNullableFilter' })
    t.field('yearOfBirth', { type: 'IntFilter' })
    t.field('genderId', { type: 'StringFilter' })
    t.field('height', { type: 'IntFilter' })
    t.field('disciplineId', { type: 'StringFilter' })
    t.field('location', { type: 'StringFilter' })
    t.field('price', { type: 'FloatFilter' })
    t.field('description', { type: 'StringFilter' })
    t.field('photos', { type: 'StringNullableListFilter' })
    t.field('videoURL', { type: 'StringNullableFilter' })
    t.field('vetReport', { type: 'StringNullableFilter' })
    t.field('xrayResults', { type: 'StringNullableFilter' })
    t.field('status', { type: 'EnumHorseStatusFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('pedigree', { type: 'JsonNullableFilter' })
    t.field('user', { type: 'UserScalarRelationFilter' })
    t.field('category', { type: 'HorseCategoryScalarRelationFilter' })
    t.field('gender', { type: 'HorseGenderScalarRelationFilter' })
    t.field('discipline', { type: 'HorseDisciplineScalarRelationFilter' })
    t.field('favoriteByUsers', { type: 'UserFavoriteHorsesListRelationFilter' })
  },
})

export const HorseOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('categoryId', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('pedigreeURL', { type: 'SortOrderInput' })
    t.field('yearOfBirth', { type: 'SortOrder' })
    t.field('genderId', { type: 'SortOrder' })
    t.field('height', { type: 'SortOrder' })
    t.field('disciplineId', { type: 'SortOrder' })
    t.field('location', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('photos', { type: 'SortOrder' })
    t.field('videoURL', { type: 'SortOrderInput' })
    t.field('vetReport', { type: 'SortOrderInput' })
    t.field('xrayResults', { type: 'SortOrderInput' })
    t.field('status', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('pedigree', { type: 'SortOrderInput' })
    t.field('_count', { type: 'HorseCountOrderByAggregateInput' })
    t.field('_avg', { type: 'HorseAvgOrderByAggregateInput' })
    t.field('_max', { type: 'HorseMaxOrderByAggregateInput' })
    t.field('_min', { type: 'HorseMinOrderByAggregateInput' })
    t.field('_sum', { type: 'HorseSumOrderByAggregateInput' })
  },
})

export const HorseScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'HorseScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'HorseScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'HorseScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('userUid', { type: 'StringWithAggregatesFilter' })
    t.field('categoryId', { type: 'StringWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('pedigreeURL', { type: 'StringNullableWithAggregatesFilter' })
    t.field('yearOfBirth', { type: 'IntWithAggregatesFilter' })
    t.field('genderId', { type: 'StringWithAggregatesFilter' })
    t.field('height', { type: 'IntWithAggregatesFilter' })
    t.field('disciplineId', { type: 'StringWithAggregatesFilter' })
    t.field('location', { type: 'StringWithAggregatesFilter' })
    t.field('price', { type: 'FloatWithAggregatesFilter' })
    t.field('description', { type: 'StringWithAggregatesFilter' })
    t.field('photos', { type: 'StringNullableListFilter' })
    t.field('videoURL', { type: 'StringNullableWithAggregatesFilter' })
    t.field('vetReport', { type: 'StringNullableWithAggregatesFilter' })
    t.field('xrayResults', { type: 'StringNullableWithAggregatesFilter' })
    t.field('status', { type: 'EnumHorseStatusWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('pedigree', { type: 'JsonNullableWithAggregatesFilter' })
  },
})

export const NotificationWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'NotificationWhereInput' })
    t.list.field('OR', { type: 'NotificationWhereInput' })
    t.list.field('NOT', { type: 'NotificationWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('userUid', { type: 'StringFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('message', { type: 'StringFilter' })
    t.field('read', { type: 'BoolFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('user', { type: 'UserScalarRelationFilter' })
  },
})

export const NotificationOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('message', { type: 'SortOrder' })
    t.field('read', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('user', { type: 'UserOrderByWithRelationInput' })
  },
})

export const NotificationWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.list.field('AND', { type: 'NotificationWhereInput' })
    t.list.field('OR', { type: 'NotificationWhereInput' })
    t.list.field('NOT', { type: 'NotificationWhereInput' })
    t.field('userUid', { type: 'StringFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('message', { type: 'StringFilter' })
    t.field('read', { type: 'BoolFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('user', { type: 'UserScalarRelationFilter' })
  },
})

export const NotificationOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('message', { type: 'SortOrder' })
    t.field('read', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'NotificationCountOrderByAggregateInput' })
    t.field('_max', { type: 'NotificationMaxOrderByAggregateInput' })
    t.field('_min', { type: 'NotificationMinOrderByAggregateInput' })
  },
})

export const NotificationScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'NotificationScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'NotificationScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'NotificationScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('userUid', { type: 'StringWithAggregatesFilter' })
    t.field('title', { type: 'StringWithAggregatesFilter' })
    t.field('message', { type: 'StringWithAggregatesFilter' })
    t.field('read', { type: 'BoolWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const UserFavoriteHorsesWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserFavoriteHorsesWhereInput' })
    t.list.field('OR', { type: 'UserFavoriteHorsesWhereInput' })
    t.list.field('NOT', { type: 'UserFavoriteHorsesWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('userUid', { type: 'StringFilter' })
    t.field('horseId', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('user', { type: 'UserScalarRelationFilter' })
    t.field('horse', { type: 'HorseScalarRelationFilter' })
  },
})

export const UserFavoriteHorsesOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('horseId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('user', { type: 'UserOrderByWithRelationInput' })
    t.field('horse', { type: 'HorseOrderByWithRelationInput' })
  },
})

export const UserFavoriteHorsesWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('userUid_horseId', {
      type: 'UserFavoriteHorsesUserUidHorseIdCompoundUniqueInput',
    })
    t.list.field('AND', { type: 'UserFavoriteHorsesWhereInput' })
    t.list.field('OR', { type: 'UserFavoriteHorsesWhereInput' })
    t.list.field('NOT', { type: 'UserFavoriteHorsesWhereInput' })
    t.field('userUid', { type: 'StringFilter' })
    t.field('horseId', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('user', { type: 'UserScalarRelationFilter' })
    t.field('horse', { type: 'HorseScalarRelationFilter' })
  },
})

export const UserFavoriteHorsesOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('horseId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('_count', { type: 'UserFavoriteHorsesCountOrderByAggregateInput' })
    t.field('_max', { type: 'UserFavoriteHorsesMaxOrderByAggregateInput' })
    t.field('_min', { type: 'UserFavoriteHorsesMinOrderByAggregateInput' })
  },
})

export const UserFavoriteHorsesScalarWhereWithAggregatesInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesScalarWhereWithAggregatesInput',
    definition(t) {
      t.list.field('AND', {
        type: 'UserFavoriteHorsesScalarWhereWithAggregatesInput',
      })
      t.list.field('OR', {
        type: 'UserFavoriteHorsesScalarWhereWithAggregatesInput',
      })
      t.list.field('NOT', {
        type: 'UserFavoriteHorsesScalarWhereWithAggregatesInput',
      })
      t.field('id', { type: 'StringWithAggregatesFilter' })
      t.field('userUid', { type: 'StringWithAggregatesFilter' })
      t.field('horseId', { type: 'StringWithAggregatesFilter' })
      t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    },
  },
)

export const UserReviewWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserReviewWhereInput' })
    t.list.field('OR', { type: 'UserReviewWhereInput' })
    t.list.field('NOT', { type: 'UserReviewWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('userUid', { type: 'StringFilter' })
    t.field('reviewer', { type: 'StringFilter' })
    t.field('rating', { type: 'IntFilter' })
    t.field('comment', { type: 'StringNullableFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('user', { type: 'UserScalarRelationFilter' })
  },
})

export const UserReviewOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('reviewer', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('comment', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('user', { type: 'UserOrderByWithRelationInput' })
  },
})

export const UserReviewWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.list.field('AND', { type: 'UserReviewWhereInput' })
    t.list.field('OR', { type: 'UserReviewWhereInput' })
    t.list.field('NOT', { type: 'UserReviewWhereInput' })
    t.field('userUid', { type: 'StringFilter' })
    t.field('reviewer', { type: 'StringFilter' })
    t.field('rating', { type: 'IntFilter' })
    t.field('comment', { type: 'StringNullableFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('user', { type: 'UserScalarRelationFilter' })
  },
})

export const UserReviewOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('reviewer', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('comment', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'UserReviewCountOrderByAggregateInput' })
    t.field('_avg', { type: 'UserReviewAvgOrderByAggregateInput' })
    t.field('_max', { type: 'UserReviewMaxOrderByAggregateInput' })
    t.field('_min', { type: 'UserReviewMinOrderByAggregateInput' })
    t.field('_sum', { type: 'UserReviewSumOrderByAggregateInput' })
  },
})

export const UserReviewScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'UserReviewScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'UserReviewScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'UserReviewScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('userUid', { type: 'StringWithAggregatesFilter' })
    t.field('reviewer', { type: 'StringWithAggregatesFilter' })
    t.field('rating', { type: 'IntWithAggregatesFilter' })
    t.field('comment', { type: 'StringNullableWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const UserWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserWhereInput' })
    t.list.field('OR', { type: 'UserWhereInput' })
    t.list.field('NOT', { type: 'UserWhereInput' })
    t.field('uid', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('phoneNumber', { type: 'StringNullableFilter' })
    t.field('email', { type: 'StringNullableFilter' })
    t.field('whatsAppNumber', { type: 'StringNullableFilter' })
    t.field('verifiedSeller', { type: 'BoolFilter' })
    t.field('role', { type: 'EnumUserRoleFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesListRelationFilter',
    })
    t.field('notifications', { type: 'NotificationListRelationFilter' })
    t.field('horses', { type: 'HorseListRelationFilter' })
    t.field('reviews', { type: 'UserReviewListRelationFilter' })
  },
})

export const UserOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithRelationInput',
  definition(t) {
    t.field('uid', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('phoneNumber', { type: 'SortOrderInput' })
    t.field('email', { type: 'SortOrderInput' })
    t.field('whatsAppNumber', { type: 'SortOrderInput' })
    t.field('verifiedSeller', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesOrderByRelationAggregateInput',
    })
    t.field('notifications', {
      type: 'NotificationOrderByRelationAggregateInput',
    })
    t.field('horses', { type: 'HorseOrderByRelationAggregateInput' })
    t.field('reviews', { type: 'UserReviewOrderByRelationAggregateInput' })
  },
})

export const UserWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.field('uid', { type: 'String' })
    t.field('email', { type: 'String' })
    t.list.field('AND', { type: 'UserWhereInput' })
    t.list.field('OR', { type: 'UserWhereInput' })
    t.list.field('NOT', { type: 'UserWhereInput' })
    t.field('name', { type: 'StringFilter' })
    t.field('phoneNumber', { type: 'StringNullableFilter' })
    t.field('whatsAppNumber', { type: 'StringNullableFilter' })
    t.field('verifiedSeller', { type: 'BoolFilter' })
    t.field('role', { type: 'EnumUserRoleFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesListRelationFilter',
    })
    t.field('notifications', { type: 'NotificationListRelationFilter' })
    t.field('horses', { type: 'HorseListRelationFilter' })
    t.field('reviews', { type: 'UserReviewListRelationFilter' })
  },
})

export const UserOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithAggregationInput',
  definition(t) {
    t.field('uid', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('phoneNumber', { type: 'SortOrderInput' })
    t.field('email', { type: 'SortOrderInput' })
    t.field('whatsAppNumber', { type: 'SortOrderInput' })
    t.field('verifiedSeller', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'UserCountOrderByAggregateInput' })
    t.field('_max', { type: 'UserMaxOrderByAggregateInput' })
    t.field('_min', { type: 'UserMinOrderByAggregateInput' })
  },
})

export const UserScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'UserScalarWhereWithAggregatesInput' })
    t.field('uid', { type: 'StringWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('phoneNumber', { type: 'StringNullableWithAggregatesFilter' })
    t.field('email', { type: 'StringNullableWithAggregatesFilter' })
    t.field('whatsAppNumber', { type: 'StringNullableWithAggregatesFilter' })
    t.field('verifiedSeller', { type: 'BoolWithAggregatesFilter' })
    t.field('role', { type: 'EnumUserRoleWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const HorseCategoryCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('imageURL', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('horses', { type: 'HorseCreateNestedManyWithoutCategoryInput' })
  },
})

export const HorseCategoryUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('imageURL', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('horses', {
      type: 'HorseUncheckedCreateNestedManyWithoutCategoryInput',
    })
  },
})

export const HorseCategoryUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('imageURL', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('horses', { type: 'HorseUpdateManyWithoutCategoryNestedInput' })
  },
})

export const HorseCategoryUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('imageURL', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('horses', {
      type: 'HorseUncheckedUpdateManyWithoutCategoryNestedInput',
    })
  },
})

export const HorseCategoryCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('imageURL', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseCategoryUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('imageURL', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const HorseCategoryUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('imageURL', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const HorseDisciplineCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('horses', { type: 'HorseCreateNestedManyWithoutDisciplineInput' })
  },
})

export const HorseDisciplineUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('horses', {
      type: 'HorseUncheckedCreateNestedManyWithoutDisciplineInput',
    })
  },
})

export const HorseDisciplineUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('horses', { type: 'HorseUpdateManyWithoutDisciplineNestedInput' })
  },
})

export const HorseDisciplineUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('horses', {
      type: 'HorseUncheckedUpdateManyWithoutDisciplineNestedInput',
    })
  },
})

export const HorseDisciplineCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseDisciplineUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const HorseDisciplineUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const HorseGenderCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('horses', { type: 'HorseCreateNestedManyWithoutGenderInput' })
  },
})

export const HorseGenderUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('horses', {
      type: 'HorseUncheckedCreateNestedManyWithoutGenderInput',
    })
  },
})

export const HorseGenderUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('horses', { type: 'HorseUpdateManyWithoutGenderNestedInput' })
  },
})

export const HorseGenderUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('horses', {
      type: 'HorseUncheckedUpdateManyWithoutGenderNestedInput',
    })
  },
})

export const HorseGenderCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseGenderUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const HorseGenderUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const HorseCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutHorsesInput' })
    t.nonNull.field('category', {
      type: 'HorseCategoryCreateNestedOneWithoutHorsesInput',
    })
    t.nonNull.field('gender', {
      type: 'HorseGenderCreateNestedOneWithoutHorsesInput',
    })
    t.nonNull.field('discipline', {
      type: 'HorseDisciplineCreateNestedOneWithoutHorsesInput',
    })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesCreateNestedManyWithoutHorseInput',
    })
  },
})

export const HorseUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.nonNull.field('categoryId', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('genderId', { type: 'String' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('disciplineId', { type: 'String' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput',
    })
  },
})

export const HorseUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutHorsesNestedInput' })
    t.field('category', {
      type: 'HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput',
    })
    t.field('gender', {
      type: 'HorseGenderUpdateOneRequiredWithoutHorsesNestedInput',
    })
    t.field('discipline', {
      type: 'HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput',
    })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesUpdateManyWithoutHorseNestedInput',
    })
  },
})

export const HorseUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('categoryId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('genderId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('disciplineId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput',
    })
  },
})

export const HorseCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.nonNull.field('categoryId', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('genderId', { type: 'String' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('disciplineId', { type: 'String' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
  },
})

export const HorseUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
  },
})

export const HorseUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('categoryId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('genderId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('disciplineId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
  },
})

export const NotificationCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('message', { type: 'String' })
    t.field('read', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nonNull.field('user', {
      type: 'UserCreateNestedOneWithoutNotificationsInput',
    })
  },
})

export const NotificationUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('message', { type: 'String' })
    t.field('read', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const NotificationUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('user', {
      type: 'UserUpdateOneRequiredWithoutNotificationsNestedInput',
    })
  },
})

export const NotificationUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const NotificationCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('message', { type: 'String' })
    t.field('read', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const NotificationUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const NotificationUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserFavoriteHorsesCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('user', {
      type: 'UserCreateNestedOneWithoutUserFavoriteHorsesInput',
    })
    t.nonNull.field('horse', {
      type: 'HorseCreateNestedOneWithoutFavoriteByUsersInput',
    })
  },
})

export const UserFavoriteHorsesUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.nonNull.field('horseId', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const UserFavoriteHorsesUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('user', {
      type: 'UserUpdateOneRequiredWithoutUserFavoriteHorsesNestedInput',
    })
    t.field('horse', {
      type: 'HorseUpdateOneRequiredWithoutFavoriteByUsersNestedInput',
    })
  },
})

export const UserFavoriteHorsesUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('horseId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserFavoriteHorsesCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.nonNull.field('horseId', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const UserFavoriteHorsesUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserFavoriteHorsesUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('horseId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserReviewCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('reviewer', { type: 'String' })
    t.nonNull.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutReviewsInput' })
  },
})

export const UserReviewUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.nonNull.field('reviewer', { type: 'String' })
    t.nonNull.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserReviewUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('reviewer', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('comment', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutReviewsNestedInput' })
  },
})

export const UserReviewUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('reviewer', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('comment', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserReviewCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.nonNull.field('reviewer', { type: 'String' })
    t.nonNull.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserReviewUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('reviewer', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('comment', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserReviewUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('reviewer', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('comment', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateInput',
  definition(t) {
    t.nonNull.field('uid', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('phoneNumber', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('whatsAppNumber', { type: 'String' })
    t.field('verifiedSeller', { type: 'Boolean' })
    t.field('role', { type: 'UserRole' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesCreateNestedManyWithoutUserInput',
    })
    t.field('notifications', {
      type: 'NotificationCreateNestedManyWithoutUserInput',
    })
    t.field('horses', { type: 'HorseCreateNestedManyWithoutUserInput' })
    t.field('reviews', { type: 'UserReviewCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateInput',
  definition(t) {
    t.nonNull.field('uid', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('phoneNumber', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('whatsAppNumber', { type: 'String' })
    t.field('verifiedSeller', { type: 'Boolean' })
    t.field('role', { type: 'UserRole' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('notifications', {
      type: 'NotificationUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('horses', {
      type: 'HorseUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('reviews', {
      type: 'UserReviewUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateInput',
  definition(t) {
    t.field('uid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('email', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('whatsAppNumber', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('verifiedSeller', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesUpdateManyWithoutUserNestedInput',
    })
    t.field('notifications', {
      type: 'NotificationUpdateManyWithoutUserNestedInput',
    })
    t.field('horses', { type: 'HorseUpdateManyWithoutUserNestedInput' })
    t.field('reviews', { type: 'UserReviewUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateInput',
  definition(t) {
    t.field('uid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('email', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('whatsAppNumber', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('verifiedSeller', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('notifications', {
      type: 'NotificationUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('horses', {
      type: 'HorseUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('reviews', {
      type: 'UserReviewUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const UserCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateManyInput',
  definition(t) {
    t.nonNull.field('uid', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('phoneNumber', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('whatsAppNumber', { type: 'String' })
    t.field('verifiedSeller', { type: 'Boolean' })
    t.field('role', { type: 'UserRole' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyMutationInput',
  definition(t) {
    t.field('uid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('email', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('whatsAppNumber', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('verifiedSeller', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyInput',
  definition(t) {
    t.field('uid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('email', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('whatsAppNumber', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('verifiedSeller', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const StringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const DateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const HorseListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseListRelationFilter',
  definition(t) {
    t.field('every', { type: 'HorseWhereInput' })
    t.field('some', { type: 'HorseWhereInput' })
    t.field('none', { type: 'HorseWhereInput' })
  },
})

export const HorseOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const HorseCategoryCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('imageURL', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const HorseCategoryMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('imageURL', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const HorseCategoryMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('imageURL', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const StringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const DateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const HorseDisciplineCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const HorseDisciplineMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const HorseDisciplineMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const HorseGenderCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const HorseGenderMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const HorseGenderMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const StringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const IntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const FloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatFilter' })
  },
})

export const StringNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableListFilter',
  definition(t) {
    t.list.field('equals', { type: 'String' })
    t.field('has', { type: 'String' })
    t.list.field('hasEvery', { type: 'String' })
    t.list.field('hasSome', { type: 'String' })
    t.field('isEmpty', { type: 'Boolean' })
  },
})

export const EnumHorseStatusFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumHorseStatusFilter',
  definition(t) {
    t.field('equals', { type: 'HorseStatus' })
    t.list.field('in', { type: 'HorseStatus' })
    t.list.field('notIn', { type: 'HorseStatus' })
    t.field('not', { type: 'NestedEnumHorseStatusFilter' })
  },
})

export const JsonNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'JsonNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Json' })
    t.list.field('path', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('string_contains', { type: 'String' })
    t.field('string_starts_with', { type: 'String' })
    t.field('string_ends_with', { type: 'String' })
    t.field('array_starts_with', { type: 'Json' })
    t.field('array_ends_with', { type: 'Json' })
    t.field('array_contains', { type: 'Json' })
    t.field('lt', { type: 'Json' })
    t.field('lte', { type: 'Json' })
    t.field('gt', { type: 'Json' })
    t.field('gte', { type: 'Json' })
    t.field('not', { type: 'Json' })
  },
})

export const UserScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'UserWhereInput' })
    t.field('isNot', { type: 'UserWhereInput' })
  },
})

export const HorseCategoryScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'HorseCategoryWhereInput' })
    t.field('isNot', { type: 'HorseCategoryWhereInput' })
  },
})

export const HorseGenderScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'HorseGenderWhereInput' })
    t.field('isNot', { type: 'HorseGenderWhereInput' })
  },
})

export const HorseDisciplineScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'HorseDisciplineWhereInput' })
    t.field('isNot', { type: 'HorseDisciplineWhereInput' })
  },
})

export const UserFavoriteHorsesListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesListRelationFilter',
  definition(t) {
    t.field('every', { type: 'UserFavoriteHorsesWhereInput' })
    t.field('some', { type: 'UserFavoriteHorsesWhereInput' })
    t.field('none', { type: 'UserFavoriteHorsesWhereInput' })
  },
})

export const SortOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SortOrderInput',
  definition(t) {
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.field('nulls', { type: 'NullsOrder' })
  },
})

export const UserFavoriteHorsesOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const HorseCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('categoryId', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('pedigreeURL', { type: 'SortOrder' })
    t.field('yearOfBirth', { type: 'SortOrder' })
    t.field('genderId', { type: 'SortOrder' })
    t.field('height', { type: 'SortOrder' })
    t.field('disciplineId', { type: 'SortOrder' })
    t.field('location', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('photos', { type: 'SortOrder' })
    t.field('videoURL', { type: 'SortOrder' })
    t.field('vetReport', { type: 'SortOrder' })
    t.field('xrayResults', { type: 'SortOrder' })
    t.field('status', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('pedigree', { type: 'SortOrder' })
  },
})

export const HorseAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseAvgOrderByAggregateInput',
  definition(t) {
    t.field('yearOfBirth', { type: 'SortOrder' })
    t.field('height', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
  },
})

export const HorseMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('categoryId', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('pedigreeURL', { type: 'SortOrder' })
    t.field('yearOfBirth', { type: 'SortOrder' })
    t.field('genderId', { type: 'SortOrder' })
    t.field('height', { type: 'SortOrder' })
    t.field('disciplineId', { type: 'SortOrder' })
    t.field('location', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('videoURL', { type: 'SortOrder' })
    t.field('vetReport', { type: 'SortOrder' })
    t.field('xrayResults', { type: 'SortOrder' })
    t.field('status', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const HorseMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('categoryId', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('pedigreeURL', { type: 'SortOrder' })
    t.field('yearOfBirth', { type: 'SortOrder' })
    t.field('genderId', { type: 'SortOrder' })
    t.field('height', { type: 'SortOrder' })
    t.field('disciplineId', { type: 'SortOrder' })
    t.field('location', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('videoURL', { type: 'SortOrder' })
    t.field('vetReport', { type: 'SortOrder' })
    t.field('xrayResults', { type: 'SortOrder' })
    t.field('status', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const HorseSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseSumOrderByAggregateInput',
  definition(t) {
    t.field('yearOfBirth', { type: 'SortOrder' })
    t.field('height', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
  },
})

export const StringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const IntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const FloatWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedFloatFilter' })
    t.field('_min', { type: 'NestedFloatFilter' })
    t.field('_max', { type: 'NestedFloatFilter' })
  },
})

export const EnumHorseStatusWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumHorseStatusWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'HorseStatus' })
    t.list.field('in', { type: 'HorseStatus' })
    t.list.field('notIn', { type: 'HorseStatus' })
    t.field('not', { type: 'NestedEnumHorseStatusWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumHorseStatusFilter' })
    t.field('_max', { type: 'NestedEnumHorseStatusFilter' })
  },
})

export const JsonNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'JsonNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Json' })
    t.list.field('path', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('string_contains', { type: 'String' })
    t.field('string_starts_with', { type: 'String' })
    t.field('string_ends_with', { type: 'String' })
    t.field('array_starts_with', { type: 'Json' })
    t.field('array_ends_with', { type: 'Json' })
    t.field('array_contains', { type: 'Json' })
    t.field('lt', { type: 'Json' })
    t.field('lte', { type: 'Json' })
    t.field('gt', { type: 'Json' })
    t.field('gte', { type: 'Json' })
    t.field('not', { type: 'Json' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedJsonNullableFilter' })
    t.field('_max', { type: 'NestedJsonNullableFilter' })
  },
})

export const BoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
  },
})

export const NotificationCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('message', { type: 'SortOrder' })
    t.field('read', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const NotificationMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('message', { type: 'SortOrder' })
    t.field('read', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const NotificationMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('message', { type: 'SortOrder' })
    t.field('read', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const BoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
  },
})

export const HorseScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'HorseWhereInput' })
    t.field('isNot', { type: 'HorseWhereInput' })
  },
})

export const UserFavoriteHorsesUserUidHorseIdCompoundUniqueInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUserUidHorseIdCompoundUniqueInput',
    definition(t) {
      t.nonNull.field('userUid', { type: 'String' })
      t.nonNull.field('horseId', { type: 'String' })
    },
  })

export const UserFavoriteHorsesCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('horseId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const UserFavoriteHorsesMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('horseId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const UserFavoriteHorsesMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('horseId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const UserReviewCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('reviewer', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('comment', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const UserReviewAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewAvgOrderByAggregateInput',
  definition(t) {
    t.field('rating', { type: 'SortOrder' })
  },
})

export const UserReviewMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('reviewer', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('comment', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const UserReviewMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userUid', { type: 'SortOrder' })
    t.field('reviewer', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('comment', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const UserReviewSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewSumOrderByAggregateInput',
  definition(t) {
    t.field('rating', { type: 'SortOrder' })
  },
})

export const EnumUserRoleFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumUserRoleFilter',
  definition(t) {
    t.field('equals', { type: 'UserRole' })
    t.list.field('in', { type: 'UserRole' })
    t.list.field('notIn', { type: 'UserRole' })
    t.field('not', { type: 'NestedEnumUserRoleFilter' })
  },
})

export const NotificationListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationListRelationFilter',
  definition(t) {
    t.field('every', { type: 'NotificationWhereInput' })
    t.field('some', { type: 'NotificationWhereInput' })
    t.field('none', { type: 'NotificationWhereInput' })
  },
})

export const UserReviewListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewListRelationFilter',
  definition(t) {
    t.field('every', { type: 'UserReviewWhereInput' })
    t.field('some', { type: 'UserReviewWhereInput' })
    t.field('none', { type: 'UserReviewWhereInput' })
  },
})

export const NotificationOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const UserReviewOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const UserCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCountOrderByAggregateInput',
  definition(t) {
    t.field('uid', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('phoneNumber', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('whatsAppNumber', { type: 'SortOrder' })
    t.field('verifiedSeller', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const UserMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMaxOrderByAggregateInput',
  definition(t) {
    t.field('uid', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('phoneNumber', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('whatsAppNumber', { type: 'SortOrder' })
    t.field('verifiedSeller', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const UserMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMinOrderByAggregateInput',
  definition(t) {
    t.field('uid', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('phoneNumber', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('whatsAppNumber', { type: 'SortOrder' })
    t.field('verifiedSeller', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const EnumUserRoleWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumUserRoleWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'UserRole' })
    t.list.field('in', { type: 'UserRole' })
    t.list.field('notIn', { type: 'UserRole' })
    t.field('not', { type: 'NestedEnumUserRoleWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumUserRoleFilter' })
    t.field('_max', { type: 'NestedEnumUserRoleFilter' })
  },
})

export const HorseCreateNestedManyWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateNestedManyWithoutCategoryInput',
  definition(t) {
    t.list.field('create', { type: 'HorseCreateWithoutCategoryInput' })
    t.list.field('connectOrCreate', {
      type: 'HorseCreateOrConnectWithoutCategoryInput',
    })
    t.field('createMany', { type: 'HorseCreateManyCategoryInputEnvelope' })
    t.list.field('connect', { type: 'HorseWhereUniqueInput' })
  },
})

export const HorseUncheckedCreateNestedManyWithoutCategoryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseUncheckedCreateNestedManyWithoutCategoryInput',
    definition(t) {
      t.list.field('create', { type: 'HorseCreateWithoutCategoryInput' })
      t.list.field('connectOrCreate', {
        type: 'HorseCreateOrConnectWithoutCategoryInput',
      })
      t.field('createMany', { type: 'HorseCreateManyCategoryInputEnvelope' })
      t.list.field('connect', { type: 'HorseWhereUniqueInput' })
    },
  })

export const StringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' })
  },
})

export const HorseUpdateManyWithoutCategoryNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateManyWithoutCategoryNestedInput',
  definition(t) {
    t.list.field('create', { type: 'HorseCreateWithoutCategoryInput' })
    t.list.field('connectOrCreate', {
      type: 'HorseCreateOrConnectWithoutCategoryInput',
    })
    t.list.field('upsert', {
      type: 'HorseUpsertWithWhereUniqueWithoutCategoryInput',
    })
    t.field('createMany', { type: 'HorseCreateManyCategoryInputEnvelope' })
    t.list.field('set', { type: 'HorseWhereUniqueInput' })
    t.list.field('disconnect', { type: 'HorseWhereUniqueInput' })
    t.list.field('delete', { type: 'HorseWhereUniqueInput' })
    t.list.field('connect', { type: 'HorseWhereUniqueInput' })
    t.list.field('update', {
      type: 'HorseUpdateWithWhereUniqueWithoutCategoryInput',
    })
    t.list.field('updateMany', {
      type: 'HorseUpdateManyWithWhereWithoutCategoryInput',
    })
    t.list.field('deleteMany', { type: 'HorseScalarWhereInput' })
  },
})

export const HorseUncheckedUpdateManyWithoutCategoryNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseUncheckedUpdateManyWithoutCategoryNestedInput',
    definition(t) {
      t.list.field('create', { type: 'HorseCreateWithoutCategoryInput' })
      t.list.field('connectOrCreate', {
        type: 'HorseCreateOrConnectWithoutCategoryInput',
      })
      t.list.field('upsert', {
        type: 'HorseUpsertWithWhereUniqueWithoutCategoryInput',
      })
      t.field('createMany', { type: 'HorseCreateManyCategoryInputEnvelope' })
      t.list.field('set', { type: 'HorseWhereUniqueInput' })
      t.list.field('disconnect', { type: 'HorseWhereUniqueInput' })
      t.list.field('delete', { type: 'HorseWhereUniqueInput' })
      t.list.field('connect', { type: 'HorseWhereUniqueInput' })
      t.list.field('update', {
        type: 'HorseUpdateWithWhereUniqueWithoutCategoryInput',
      })
      t.list.field('updateMany', {
        type: 'HorseUpdateManyWithWhereWithoutCategoryInput',
      })
      t.list.field('deleteMany', { type: 'HorseScalarWhereInput' })
    },
  })

export const HorseCreateNestedManyWithoutDisciplineInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateNestedManyWithoutDisciplineInput',
  definition(t) {
    t.list.field('create', { type: 'HorseCreateWithoutDisciplineInput' })
    t.list.field('connectOrCreate', {
      type: 'HorseCreateOrConnectWithoutDisciplineInput',
    })
    t.field('createMany', { type: 'HorseCreateManyDisciplineInputEnvelope' })
    t.list.field('connect', { type: 'HorseWhereUniqueInput' })
  },
})

export const HorseUncheckedCreateNestedManyWithoutDisciplineInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseUncheckedCreateNestedManyWithoutDisciplineInput',
    definition(t) {
      t.list.field('create', { type: 'HorseCreateWithoutDisciplineInput' })
      t.list.field('connectOrCreate', {
        type: 'HorseCreateOrConnectWithoutDisciplineInput',
      })
      t.field('createMany', { type: 'HorseCreateManyDisciplineInputEnvelope' })
      t.list.field('connect', { type: 'HorseWhereUniqueInput' })
    },
  })

export const HorseUpdateManyWithoutDisciplineNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateManyWithoutDisciplineNestedInput',
  definition(t) {
    t.list.field('create', { type: 'HorseCreateWithoutDisciplineInput' })
    t.list.field('connectOrCreate', {
      type: 'HorseCreateOrConnectWithoutDisciplineInput',
    })
    t.list.field('upsert', {
      type: 'HorseUpsertWithWhereUniqueWithoutDisciplineInput',
    })
    t.field('createMany', { type: 'HorseCreateManyDisciplineInputEnvelope' })
    t.list.field('set', { type: 'HorseWhereUniqueInput' })
    t.list.field('disconnect', { type: 'HorseWhereUniqueInput' })
    t.list.field('delete', { type: 'HorseWhereUniqueInput' })
    t.list.field('connect', { type: 'HorseWhereUniqueInput' })
    t.list.field('update', {
      type: 'HorseUpdateWithWhereUniqueWithoutDisciplineInput',
    })
    t.list.field('updateMany', {
      type: 'HorseUpdateManyWithWhereWithoutDisciplineInput',
    })
    t.list.field('deleteMany', { type: 'HorseScalarWhereInput' })
  },
})

export const HorseUncheckedUpdateManyWithoutDisciplineNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseUncheckedUpdateManyWithoutDisciplineNestedInput',
    definition(t) {
      t.list.field('create', { type: 'HorseCreateWithoutDisciplineInput' })
      t.list.field('connectOrCreate', {
        type: 'HorseCreateOrConnectWithoutDisciplineInput',
      })
      t.list.field('upsert', {
        type: 'HorseUpsertWithWhereUniqueWithoutDisciplineInput',
      })
      t.field('createMany', { type: 'HorseCreateManyDisciplineInputEnvelope' })
      t.list.field('set', { type: 'HorseWhereUniqueInput' })
      t.list.field('disconnect', { type: 'HorseWhereUniqueInput' })
      t.list.field('delete', { type: 'HorseWhereUniqueInput' })
      t.list.field('connect', { type: 'HorseWhereUniqueInput' })
      t.list.field('update', {
        type: 'HorseUpdateWithWhereUniqueWithoutDisciplineInput',
      })
      t.list.field('updateMany', {
        type: 'HorseUpdateManyWithWhereWithoutDisciplineInput',
      })
      t.list.field('deleteMany', { type: 'HorseScalarWhereInput' })
    },
  })

export const HorseCreateNestedManyWithoutGenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateNestedManyWithoutGenderInput',
  definition(t) {
    t.list.field('create', { type: 'HorseCreateWithoutGenderInput' })
    t.list.field('connectOrCreate', {
      type: 'HorseCreateOrConnectWithoutGenderInput',
    })
    t.field('createMany', { type: 'HorseCreateManyGenderInputEnvelope' })
    t.list.field('connect', { type: 'HorseWhereUniqueInput' })
  },
})

export const HorseUncheckedCreateNestedManyWithoutGenderInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseUncheckedCreateNestedManyWithoutGenderInput',
    definition(t) {
      t.list.field('create', { type: 'HorseCreateWithoutGenderInput' })
      t.list.field('connectOrCreate', {
        type: 'HorseCreateOrConnectWithoutGenderInput',
      })
      t.field('createMany', { type: 'HorseCreateManyGenderInputEnvelope' })
      t.list.field('connect', { type: 'HorseWhereUniqueInput' })
    },
  },
)

export const HorseUpdateManyWithoutGenderNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateManyWithoutGenderNestedInput',
  definition(t) {
    t.list.field('create', { type: 'HorseCreateWithoutGenderInput' })
    t.list.field('connectOrCreate', {
      type: 'HorseCreateOrConnectWithoutGenderInput',
    })
    t.list.field('upsert', {
      type: 'HorseUpsertWithWhereUniqueWithoutGenderInput',
    })
    t.field('createMany', { type: 'HorseCreateManyGenderInputEnvelope' })
    t.list.field('set', { type: 'HorseWhereUniqueInput' })
    t.list.field('disconnect', { type: 'HorseWhereUniqueInput' })
    t.list.field('delete', { type: 'HorseWhereUniqueInput' })
    t.list.field('connect', { type: 'HorseWhereUniqueInput' })
    t.list.field('update', {
      type: 'HorseUpdateWithWhereUniqueWithoutGenderInput',
    })
    t.list.field('updateMany', {
      type: 'HorseUpdateManyWithWhereWithoutGenderInput',
    })
    t.list.field('deleteMany', { type: 'HorseScalarWhereInput' })
  },
})

export const HorseUncheckedUpdateManyWithoutGenderNestedInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseUncheckedUpdateManyWithoutGenderNestedInput',
    definition(t) {
      t.list.field('create', { type: 'HorseCreateWithoutGenderInput' })
      t.list.field('connectOrCreate', {
        type: 'HorseCreateOrConnectWithoutGenderInput',
      })
      t.list.field('upsert', {
        type: 'HorseUpsertWithWhereUniqueWithoutGenderInput',
      })
      t.field('createMany', { type: 'HorseCreateManyGenderInputEnvelope' })
      t.list.field('set', { type: 'HorseWhereUniqueInput' })
      t.list.field('disconnect', { type: 'HorseWhereUniqueInput' })
      t.list.field('delete', { type: 'HorseWhereUniqueInput' })
      t.list.field('connect', { type: 'HorseWhereUniqueInput' })
      t.list.field('update', {
        type: 'HorseUpdateWithWhereUniqueWithoutGenderInput',
      })
      t.list.field('updateMany', {
        type: 'HorseUpdateManyWithWhereWithoutGenderInput',
      })
      t.list.field('deleteMany', { type: 'HorseScalarWhereInput' })
    },
  },
)

export const HorseCreatephotosInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreatephotosInput',
  definition(t) {
    t.nonNull.field('set', { type: 'String' })
  },
})

export const UserCreateNestedOneWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutHorsesInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutHorsesInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutHorsesInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const HorseCategoryCreateNestedOneWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryCreateNestedOneWithoutHorsesInput',
  definition(t) {
    t.field('create', { type: 'HorseCategoryCreateWithoutHorsesInput' })
    t.field('connectOrCreate', {
      type: 'HorseCategoryCreateOrConnectWithoutHorsesInput',
    })
    t.field('connect', { type: 'HorseCategoryWhereUniqueInput' })
  },
})

export const HorseGenderCreateNestedOneWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderCreateNestedOneWithoutHorsesInput',
  definition(t) {
    t.field('create', { type: 'HorseGenderCreateWithoutHorsesInput' })
    t.field('connectOrCreate', {
      type: 'HorseGenderCreateOrConnectWithoutHorsesInput',
    })
    t.field('connect', { type: 'HorseGenderWhereUniqueInput' })
  },
})

export const HorseDisciplineCreateNestedOneWithoutHorsesInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseDisciplineCreateNestedOneWithoutHorsesInput',
    definition(t) {
      t.field('create', { type: 'HorseDisciplineCreateWithoutHorsesInput' })
      t.field('connectOrCreate', {
        type: 'HorseDisciplineCreateOrConnectWithoutHorsesInput',
      })
      t.field('connect', { type: 'HorseDisciplineWhereUniqueInput' })
    },
  },
)

export const UserFavoriteHorsesCreateNestedManyWithoutHorseInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesCreateNestedManyWithoutHorseInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserFavoriteHorsesCreateWithoutHorseInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserFavoriteHorsesCreateOrConnectWithoutHorseInput',
      })
      t.field('createMany', {
        type: 'UserFavoriteHorsesCreateManyHorseInputEnvelope',
      })
      t.list.field('connect', { type: 'UserFavoriteHorsesWhereUniqueInput' })
    },
  })

export const UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserFavoriteHorsesCreateWithoutHorseInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserFavoriteHorsesCreateOrConnectWithoutHorseInput',
      })
      t.field('createMany', {
        type: 'UserFavoriteHorsesCreateManyHorseInputEnvelope',
      })
      t.list.field('connect', { type: 'UserFavoriteHorsesWhereUniqueInput' })
    },
  })

export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableStringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const IntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  },
})

export const FloatFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Float' })
    t.field('increment', { type: 'Float' })
    t.field('decrement', { type: 'Float' })
    t.field('multiply', { type: 'Float' })
    t.field('divide', { type: 'Float' })
  },
})

export const HorseUpdatephotosInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdatephotosInput',
  definition(t) {
    t.list.field('set', { type: 'String' })
    t.list.field('push', { type: 'String' })
  },
})

export const EnumHorseStatusFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumHorseStatusFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'HorseStatus' })
  },
})

export const UserUpdateOneRequiredWithoutHorsesNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutHorsesNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutHorsesInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutHorsesInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutHorsesInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutHorsesInput' })
  },
})

export const HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput',
    definition(t) {
      t.field('create', { type: 'HorseCategoryCreateWithoutHorsesInput' })
      t.field('connectOrCreate', {
        type: 'HorseCategoryCreateOrConnectWithoutHorsesInput',
      })
      t.field('upsert', { type: 'HorseCategoryUpsertWithoutHorsesInput' })
      t.field('connect', { type: 'HorseCategoryWhereUniqueInput' })
      t.field('update', {
        type: 'HorseCategoryUpdateToOneWithWhereWithoutHorsesInput',
      })
    },
  })

export const HorseGenderUpdateOneRequiredWithoutHorsesNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseGenderUpdateOneRequiredWithoutHorsesNestedInput',
    definition(t) {
      t.field('create', { type: 'HorseGenderCreateWithoutHorsesInput' })
      t.field('connectOrCreate', {
        type: 'HorseGenderCreateOrConnectWithoutHorsesInput',
      })
      t.field('upsert', { type: 'HorseGenderUpsertWithoutHorsesInput' })
      t.field('connect', { type: 'HorseGenderWhereUniqueInput' })
      t.field('update', {
        type: 'HorseGenderUpdateToOneWithWhereWithoutHorsesInput',
      })
    },
  })

export const HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput',
    definition(t) {
      t.field('create', { type: 'HorseDisciplineCreateWithoutHorsesInput' })
      t.field('connectOrCreate', {
        type: 'HorseDisciplineCreateOrConnectWithoutHorsesInput',
      })
      t.field('upsert', { type: 'HorseDisciplineUpsertWithoutHorsesInput' })
      t.field('connect', { type: 'HorseDisciplineWhereUniqueInput' })
      t.field('update', {
        type: 'HorseDisciplineUpdateToOneWithWhereWithoutHorsesInput',
      })
    },
  })

export const UserFavoriteHorsesUpdateManyWithoutHorseNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUpdateManyWithoutHorseNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserFavoriteHorsesCreateWithoutHorseInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserFavoriteHorsesCreateOrConnectWithoutHorseInput',
      })
      t.list.field('upsert', {
        type: 'UserFavoriteHorsesUpsertWithWhereUniqueWithoutHorseInput',
      })
      t.field('createMany', {
        type: 'UserFavoriteHorsesCreateManyHorseInputEnvelope',
      })
      t.list.field('set', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('disconnect', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('delete', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('connect', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('update', {
        type: 'UserFavoriteHorsesUpdateWithWhereUniqueWithoutHorseInput',
      })
      t.list.field('updateMany', {
        type: 'UserFavoriteHorsesUpdateManyWithWhereWithoutHorseInput',
      })
      t.list.field('deleteMany', { type: 'UserFavoriteHorsesScalarWhereInput' })
    },
  })

export const UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserFavoriteHorsesCreateWithoutHorseInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserFavoriteHorsesCreateOrConnectWithoutHorseInput',
      })
      t.list.field('upsert', {
        type: 'UserFavoriteHorsesUpsertWithWhereUniqueWithoutHorseInput',
      })
      t.field('createMany', {
        type: 'UserFavoriteHorsesCreateManyHorseInputEnvelope',
      })
      t.list.field('set', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('disconnect', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('delete', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('connect', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('update', {
        type: 'UserFavoriteHorsesUpdateWithWhereUniqueWithoutHorseInput',
      })
      t.list.field('updateMany', {
        type: 'UserFavoriteHorsesUpdateManyWithWhereWithoutHorseInput',
      })
      t.list.field('deleteMany', { type: 'UserFavoriteHorsesScalarWhereInput' })
    },
  })

export const UserCreateNestedOneWithoutNotificationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutNotificationsInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutNotificationsInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutNotificationsInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const BoolFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Boolean' })
  },
})

export const UserUpdateOneRequiredWithoutNotificationsNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUpdateOneRequiredWithoutNotificationsNestedInput',
    definition(t) {
      t.field('create', { type: 'UserCreateWithoutNotificationsInput' })
      t.field('connectOrCreate', {
        type: 'UserCreateOrConnectWithoutNotificationsInput',
      })
      t.field('upsert', { type: 'UserUpsertWithoutNotificationsInput' })
      t.field('connect', { type: 'UserWhereUniqueInput' })
      t.field('update', {
        type: 'UserUpdateToOneWithWhereWithoutNotificationsInput',
      })
    },
  })

export const UserCreateNestedOneWithoutUserFavoriteHorsesInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserCreateNestedOneWithoutUserFavoriteHorsesInput',
    definition(t) {
      t.field('create', { type: 'UserCreateWithoutUserFavoriteHorsesInput' })
      t.field('connectOrCreate', {
        type: 'UserCreateOrConnectWithoutUserFavoriteHorsesInput',
      })
      t.field('connect', { type: 'UserWhereUniqueInput' })
    },
  })

export const HorseCreateNestedOneWithoutFavoriteByUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateNestedOneWithoutFavoriteByUsersInput',
  definition(t) {
    t.field('create', { type: 'HorseCreateWithoutFavoriteByUsersInput' })
    t.field('connectOrCreate', {
      type: 'HorseCreateOrConnectWithoutFavoriteByUsersInput',
    })
    t.field('connect', { type: 'HorseWhereUniqueInput' })
  },
})

export const UserUpdateOneRequiredWithoutUserFavoriteHorsesNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUpdateOneRequiredWithoutUserFavoriteHorsesNestedInput',
    definition(t) {
      t.field('create', { type: 'UserCreateWithoutUserFavoriteHorsesInput' })
      t.field('connectOrCreate', {
        type: 'UserCreateOrConnectWithoutUserFavoriteHorsesInput',
      })
      t.field('upsert', { type: 'UserUpsertWithoutUserFavoriteHorsesInput' })
      t.field('connect', { type: 'UserWhereUniqueInput' })
      t.field('update', {
        type: 'UserUpdateToOneWithWhereWithoutUserFavoriteHorsesInput',
      })
    },
  })

export const HorseUpdateOneRequiredWithoutFavoriteByUsersNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseUpdateOneRequiredWithoutFavoriteByUsersNestedInput',
    definition(t) {
      t.field('create', { type: 'HorseCreateWithoutFavoriteByUsersInput' })
      t.field('connectOrCreate', {
        type: 'HorseCreateOrConnectWithoutFavoriteByUsersInput',
      })
      t.field('upsert', { type: 'HorseUpsertWithoutFavoriteByUsersInput' })
      t.field('connect', { type: 'HorseWhereUniqueInput' })
      t.field('update', {
        type: 'HorseUpdateToOneWithWhereWithoutFavoriteByUsersInput',
      })
    },
  })

export const UserCreateNestedOneWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutReviewsInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutReviewsInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutReviewsInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const UserUpdateOneRequiredWithoutReviewsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutReviewsNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutReviewsInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutReviewsInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutReviewsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutReviewsInput' })
  },
})

export const UserFavoriteHorsesCreateNestedManyWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesCreateNestedManyWithoutUserInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserFavoriteHorsesCreateWithoutUserInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserFavoriteHorsesCreateOrConnectWithoutUserInput',
      })
      t.field('createMany', {
        type: 'UserFavoriteHorsesCreateManyUserInputEnvelope',
      })
      t.list.field('connect', { type: 'UserFavoriteHorsesWhereUniqueInput' })
    },
  })

export const NotificationCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'NotificationCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'NotificationCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'NotificationCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'NotificationWhereUniqueInput' })
  },
})

export const HorseCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'HorseCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'HorseCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'HorseCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'HorseWhereUniqueInput' })
  },
})

export const UserReviewCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'UserReviewCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'UserReviewCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'UserReviewCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'UserReviewWhereUniqueInput' })
  },
})

export const UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserFavoriteHorsesCreateWithoutUserInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserFavoriteHorsesCreateOrConnectWithoutUserInput',
      })
      t.field('createMany', {
        type: 'UserFavoriteHorsesCreateManyUserInputEnvelope',
      })
      t.list.field('connect', { type: 'UserFavoriteHorsesWhereUniqueInput' })
    },
  })

export const NotificationUncheckedCreateNestedManyWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'NotificationUncheckedCreateNestedManyWithoutUserInput',
    definition(t) {
      t.list.field('create', { type: 'NotificationCreateWithoutUserInput' })
      t.list.field('connectOrCreate', {
        type: 'NotificationCreateOrConnectWithoutUserInput',
      })
      t.field('createMany', { type: 'NotificationCreateManyUserInputEnvelope' })
      t.list.field('connect', { type: 'NotificationWhereUniqueInput' })
    },
  })

export const HorseUncheckedCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'HorseCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'HorseCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'HorseCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'HorseWhereUniqueInput' })
  },
})

export const UserReviewUncheckedCreateNestedManyWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserReviewUncheckedCreateNestedManyWithoutUserInput',
    definition(t) {
      t.list.field('create', { type: 'UserReviewCreateWithoutUserInput' })
      t.list.field('connectOrCreate', {
        type: 'UserReviewCreateOrConnectWithoutUserInput',
      })
      t.field('createMany', { type: 'UserReviewCreateManyUserInputEnvelope' })
      t.list.field('connect', { type: 'UserReviewWhereUniqueInput' })
    },
  })

export const EnumUserRoleFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumUserRoleFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'UserRole' })
  },
})

export const UserFavoriteHorsesUpdateManyWithoutUserNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUpdateManyWithoutUserNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserFavoriteHorsesCreateWithoutUserInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserFavoriteHorsesCreateOrConnectWithoutUserInput',
      })
      t.list.field('upsert', {
        type: 'UserFavoriteHorsesUpsertWithWhereUniqueWithoutUserInput',
      })
      t.field('createMany', {
        type: 'UserFavoriteHorsesCreateManyUserInputEnvelope',
      })
      t.list.field('set', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('disconnect', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('delete', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('connect', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('update', {
        type: 'UserFavoriteHorsesUpdateWithWhereUniqueWithoutUserInput',
      })
      t.list.field('updateMany', {
        type: 'UserFavoriteHorsesUpdateManyWithWhereWithoutUserInput',
      })
      t.list.field('deleteMany', { type: 'UserFavoriteHorsesScalarWhereInput' })
    },
  })

export const NotificationUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'NotificationCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'NotificationCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'NotificationUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'NotificationCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'NotificationWhereUniqueInput' })
    t.list.field('disconnect', { type: 'NotificationWhereUniqueInput' })
    t.list.field('delete', { type: 'NotificationWhereUniqueInput' })
    t.list.field('connect', { type: 'NotificationWhereUniqueInput' })
    t.list.field('update', {
      type: 'NotificationUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'NotificationUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'NotificationScalarWhereInput' })
  },
})

export const HorseUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'HorseCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'HorseCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'HorseUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'HorseCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'HorseWhereUniqueInput' })
    t.list.field('disconnect', { type: 'HorseWhereUniqueInput' })
    t.list.field('delete', { type: 'HorseWhereUniqueInput' })
    t.list.field('connect', { type: 'HorseWhereUniqueInput' })
    t.list.field('update', {
      type: 'HorseUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'HorseUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'HorseScalarWhereInput' })
  },
})

export const UserReviewUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'UserReviewCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'UserReviewCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'UserReviewUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'UserReviewCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'UserReviewWhereUniqueInput' })
    t.list.field('disconnect', { type: 'UserReviewWhereUniqueInput' })
    t.list.field('delete', { type: 'UserReviewWhereUniqueInput' })
    t.list.field('connect', { type: 'UserReviewWhereUniqueInput' })
    t.list.field('update', {
      type: 'UserReviewUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'UserReviewUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'UserReviewScalarWhereInput' })
  },
})

export const UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserFavoriteHorsesCreateWithoutUserInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserFavoriteHorsesCreateOrConnectWithoutUserInput',
      })
      t.list.field('upsert', {
        type: 'UserFavoriteHorsesUpsertWithWhereUniqueWithoutUserInput',
      })
      t.field('createMany', {
        type: 'UserFavoriteHorsesCreateManyUserInputEnvelope',
      })
      t.list.field('set', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('disconnect', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('delete', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('connect', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.list.field('update', {
        type: 'UserFavoriteHorsesUpdateWithWhereUniqueWithoutUserInput',
      })
      t.list.field('updateMany', {
        type: 'UserFavoriteHorsesUpdateManyWithWhereWithoutUserInput',
      })
      t.list.field('deleteMany', { type: 'UserFavoriteHorsesScalarWhereInput' })
    },
  })

export const NotificationUncheckedUpdateManyWithoutUserNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'NotificationUncheckedUpdateManyWithoutUserNestedInput',
    definition(t) {
      t.list.field('create', { type: 'NotificationCreateWithoutUserInput' })
      t.list.field('connectOrCreate', {
        type: 'NotificationCreateOrConnectWithoutUserInput',
      })
      t.list.field('upsert', {
        type: 'NotificationUpsertWithWhereUniqueWithoutUserInput',
      })
      t.field('createMany', { type: 'NotificationCreateManyUserInputEnvelope' })
      t.list.field('set', { type: 'NotificationWhereUniqueInput' })
      t.list.field('disconnect', { type: 'NotificationWhereUniqueInput' })
      t.list.field('delete', { type: 'NotificationWhereUniqueInput' })
      t.list.field('connect', { type: 'NotificationWhereUniqueInput' })
      t.list.field('update', {
        type: 'NotificationUpdateWithWhereUniqueWithoutUserInput',
      })
      t.list.field('updateMany', {
        type: 'NotificationUpdateManyWithWhereWithoutUserInput',
      })
      t.list.field('deleteMany', { type: 'NotificationScalarWhereInput' })
    },
  })

export const HorseUncheckedUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'HorseCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'HorseCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'HorseUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'HorseCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'HorseWhereUniqueInput' })
    t.list.field('disconnect', { type: 'HorseWhereUniqueInput' })
    t.list.field('delete', { type: 'HorseWhereUniqueInput' })
    t.list.field('connect', { type: 'HorseWhereUniqueInput' })
    t.list.field('update', {
      type: 'HorseUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'HorseUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'HorseScalarWhereInput' })
  },
})

export const UserReviewUncheckedUpdateManyWithoutUserNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserReviewUncheckedUpdateManyWithoutUserNestedInput',
    definition(t) {
      t.list.field('create', { type: 'UserReviewCreateWithoutUserInput' })
      t.list.field('connectOrCreate', {
        type: 'UserReviewCreateOrConnectWithoutUserInput',
      })
      t.list.field('upsert', {
        type: 'UserReviewUpsertWithWhereUniqueWithoutUserInput',
      })
      t.field('createMany', { type: 'UserReviewCreateManyUserInputEnvelope' })
      t.list.field('set', { type: 'UserReviewWhereUniqueInput' })
      t.list.field('disconnect', { type: 'UserReviewWhereUniqueInput' })
      t.list.field('delete', { type: 'UserReviewWhereUniqueInput' })
      t.list.field('connect', { type: 'UserReviewWhereUniqueInput' })
      t.list.field('update', {
        type: 'UserReviewUpdateWithWhereUniqueWithoutUserInput',
      })
      t.list.field('updateMany', {
        type: 'UserReviewUpdateManyWithWhereWithoutUserInput',
      })
      t.list.field('deleteMany', { type: 'UserReviewScalarWhereInput' })
    },
  })

export const NestedStringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const NestedDateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedStringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const NestedIntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const NestedDateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedStringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedFloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatFilter' })
  },
})

export const NestedEnumHorseStatusFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumHorseStatusFilter',
  definition(t) {
    t.field('equals', { type: 'HorseStatus' })
    t.list.field('in', { type: 'HorseStatus' })
    t.list.field('notIn', { type: 'HorseStatus' })
    t.field('not', { type: 'NestedEnumHorseStatusFilter' })
  },
})

export const NestedStringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  },
})

export const NestedIntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const NestedFloatWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedFloatFilter' })
    t.field('_min', { type: 'NestedFloatFilter' })
    t.field('_max', { type: 'NestedFloatFilter' })
  },
})

export const NestedEnumHorseStatusWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumHorseStatusWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'HorseStatus' })
    t.list.field('in', { type: 'HorseStatus' })
    t.list.field('notIn', { type: 'HorseStatus' })
    t.field('not', { type: 'NestedEnumHorseStatusWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumHorseStatusFilter' })
    t.field('_max', { type: 'NestedEnumHorseStatusFilter' })
  },
})

export const NestedJsonNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedJsonNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Json' })
    t.list.field('path', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('string_contains', { type: 'String' })
    t.field('string_starts_with', { type: 'String' })
    t.field('string_ends_with', { type: 'String' })
    t.field('array_starts_with', { type: 'Json' })
    t.field('array_ends_with', { type: 'Json' })
    t.field('array_contains', { type: 'Json' })
    t.field('lt', { type: 'Json' })
    t.field('lte', { type: 'Json' })
    t.field('gt', { type: 'Json' })
    t.field('gte', { type: 'Json' })
    t.field('not', { type: 'Json' })
  },
})

export const NestedBoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
  },
})

export const NestedBoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
  },
})

export const NestedEnumUserRoleFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumUserRoleFilter',
  definition(t) {
    t.field('equals', { type: 'UserRole' })
    t.list.field('in', { type: 'UserRole' })
    t.list.field('notIn', { type: 'UserRole' })
    t.field('not', { type: 'NestedEnumUserRoleFilter' })
  },
})

export const NestedEnumUserRoleWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumUserRoleWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'UserRole' })
    t.list.field('in', { type: 'UserRole' })
    t.list.field('notIn', { type: 'UserRole' })
    t.field('not', { type: 'NestedEnumUserRoleWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumUserRoleFilter' })
    t.field('_max', { type: 'NestedEnumUserRoleFilter' })
  },
})

export const HorseCreateWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateWithoutCategoryInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutHorsesInput' })
    t.nonNull.field('gender', {
      type: 'HorseGenderCreateNestedOneWithoutHorsesInput',
    })
    t.nonNull.field('discipline', {
      type: 'HorseDisciplineCreateNestedOneWithoutHorsesInput',
    })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesCreateNestedManyWithoutHorseInput',
    })
  },
})

export const HorseUncheckedCreateWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedCreateWithoutCategoryInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('genderId', { type: 'String' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('disciplineId', { type: 'String' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput',
    })
  },
})

export const HorseCreateOrConnectWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateOrConnectWithoutCategoryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseWhereUniqueInput' })
    t.nonNull.field('create', { type: 'HorseCreateWithoutCategoryInput' })
  },
})

export const HorseCreateManyCategoryInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateManyCategoryInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'HorseCreateManyCategoryInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const HorseUpsertWithWhereUniqueWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpsertWithWhereUniqueWithoutCategoryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseWhereUniqueInput' })
    t.nonNull.field('update', { type: 'HorseUpdateWithoutCategoryInput' })
    t.nonNull.field('create', { type: 'HorseCreateWithoutCategoryInput' })
  },
})

export const HorseUpdateWithWhereUniqueWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateWithWhereUniqueWithoutCategoryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseWhereUniqueInput' })
    t.nonNull.field('data', { type: 'HorseUpdateWithoutCategoryInput' })
  },
})

export const HorseUpdateManyWithWhereWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateManyWithWhereWithoutCategoryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseScalarWhereInput' })
    t.nonNull.field('data', { type: 'HorseUpdateManyMutationInput' })
  },
})

export const HorseScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'HorseScalarWhereInput' })
    t.list.field('OR', { type: 'HorseScalarWhereInput' })
    t.list.field('NOT', { type: 'HorseScalarWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('userUid', { type: 'StringFilter' })
    t.field('categoryId', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('pedigreeURL', { type: 'StringNullableFilter' })
    t.field('yearOfBirth', { type: 'IntFilter' })
    t.field('genderId', { type: 'StringFilter' })
    t.field('height', { type: 'IntFilter' })
    t.field('disciplineId', { type: 'StringFilter' })
    t.field('location', { type: 'StringFilter' })
    t.field('price', { type: 'FloatFilter' })
    t.field('description', { type: 'StringFilter' })
    t.field('photos', { type: 'StringNullableListFilter' })
    t.field('videoURL', { type: 'StringNullableFilter' })
    t.field('vetReport', { type: 'StringNullableFilter' })
    t.field('xrayResults', { type: 'StringNullableFilter' })
    t.field('status', { type: 'EnumHorseStatusFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('pedigree', { type: 'JsonNullableFilter' })
  },
})

export const HorseCreateWithoutDisciplineInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateWithoutDisciplineInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutHorsesInput' })
    t.nonNull.field('category', {
      type: 'HorseCategoryCreateNestedOneWithoutHorsesInput',
    })
    t.nonNull.field('gender', {
      type: 'HorseGenderCreateNestedOneWithoutHorsesInput',
    })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesCreateNestedManyWithoutHorseInput',
    })
  },
})

export const HorseUncheckedCreateWithoutDisciplineInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedCreateWithoutDisciplineInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.nonNull.field('categoryId', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('genderId', { type: 'String' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput',
    })
  },
})

export const HorseCreateOrConnectWithoutDisciplineInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateOrConnectWithoutDisciplineInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseWhereUniqueInput' })
    t.nonNull.field('create', { type: 'HorseCreateWithoutDisciplineInput' })
  },
})

export const HorseCreateManyDisciplineInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateManyDisciplineInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'HorseCreateManyDisciplineInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const HorseUpsertWithWhereUniqueWithoutDisciplineInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseUpsertWithWhereUniqueWithoutDisciplineInput',
    definition(t) {
      t.nonNull.field('where', { type: 'HorseWhereUniqueInput' })
      t.nonNull.field('update', { type: 'HorseUpdateWithoutDisciplineInput' })
      t.nonNull.field('create', { type: 'HorseCreateWithoutDisciplineInput' })
    },
  },
)

export const HorseUpdateWithWhereUniqueWithoutDisciplineInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseUpdateWithWhereUniqueWithoutDisciplineInput',
    definition(t) {
      t.nonNull.field('where', { type: 'HorseWhereUniqueInput' })
      t.nonNull.field('data', { type: 'HorseUpdateWithoutDisciplineInput' })
    },
  },
)

export const HorseUpdateManyWithWhereWithoutDisciplineInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateManyWithWhereWithoutDisciplineInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseScalarWhereInput' })
    t.nonNull.field('data', { type: 'HorseUpdateManyMutationInput' })
  },
})

export const HorseCreateWithoutGenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateWithoutGenderInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutHorsesInput' })
    t.nonNull.field('category', {
      type: 'HorseCategoryCreateNestedOneWithoutHorsesInput',
    })
    t.nonNull.field('discipline', {
      type: 'HorseDisciplineCreateNestedOneWithoutHorsesInput',
    })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesCreateNestedManyWithoutHorseInput',
    })
  },
})

export const HorseUncheckedCreateWithoutGenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedCreateWithoutGenderInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.nonNull.field('categoryId', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('disciplineId', { type: 'String' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput',
    })
  },
})

export const HorseCreateOrConnectWithoutGenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateOrConnectWithoutGenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseWhereUniqueInput' })
    t.nonNull.field('create', { type: 'HorseCreateWithoutGenderInput' })
  },
})

export const HorseCreateManyGenderInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateManyGenderInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'HorseCreateManyGenderInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const HorseUpsertWithWhereUniqueWithoutGenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpsertWithWhereUniqueWithoutGenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseWhereUniqueInput' })
    t.nonNull.field('update', { type: 'HorseUpdateWithoutGenderInput' })
    t.nonNull.field('create', { type: 'HorseCreateWithoutGenderInput' })
  },
})

export const HorseUpdateWithWhereUniqueWithoutGenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateWithWhereUniqueWithoutGenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseWhereUniqueInput' })
    t.nonNull.field('data', { type: 'HorseUpdateWithoutGenderInput' })
  },
})

export const HorseUpdateManyWithWhereWithoutGenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateManyWithWhereWithoutGenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseScalarWhereInput' })
    t.nonNull.field('data', { type: 'HorseUpdateManyMutationInput' })
  },
})

export const UserCreateWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutHorsesInput',
  definition(t) {
    t.nonNull.field('uid', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('phoneNumber', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('whatsAppNumber', { type: 'String' })
    t.field('verifiedSeller', { type: 'Boolean' })
    t.field('role', { type: 'UserRole' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesCreateNestedManyWithoutUserInput',
    })
    t.field('notifications', {
      type: 'NotificationCreateNestedManyWithoutUserInput',
    })
    t.field('reviews', { type: 'UserReviewCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutHorsesInput',
  definition(t) {
    t.nonNull.field('uid', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('phoneNumber', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('whatsAppNumber', { type: 'String' })
    t.field('verifiedSeller', { type: 'Boolean' })
    t.field('role', { type: 'UserRole' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('notifications', {
      type: 'NotificationUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('reviews', {
      type: 'UserReviewUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutHorsesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutHorsesInput' })
  },
})

export const HorseCategoryCreateWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryCreateWithoutHorsesInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('imageURL', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseCategoryUncheckedCreateWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryUncheckedCreateWithoutHorsesInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('imageURL', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseCategoryCreateOrConnectWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryCreateOrConnectWithoutHorsesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseCategoryWhereUniqueInput' })
    t.nonNull.field('create', { type: 'HorseCategoryCreateWithoutHorsesInput' })
  },
})

export const HorseGenderCreateWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderCreateWithoutHorsesInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseGenderUncheckedCreateWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderUncheckedCreateWithoutHorsesInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseGenderCreateOrConnectWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderCreateOrConnectWithoutHorsesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseGenderWhereUniqueInput' })
    t.nonNull.field('create', { type: 'HorseGenderCreateWithoutHorsesInput' })
  },
})

export const HorseDisciplineCreateWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineCreateWithoutHorsesInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseDisciplineUncheckedCreateWithoutHorsesInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseDisciplineUncheckedCreateWithoutHorsesInput',
    definition(t) {
      t.field('id', { type: 'String' })
      t.nonNull.field('name', { type: 'String' })
      t.field('createdAt', { type: 'DateTime' })
      t.field('updatedAt', { type: 'DateTime' })
    },
  },
)

export const HorseDisciplineCreateOrConnectWithoutHorsesInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseDisciplineCreateOrConnectWithoutHorsesInput',
    definition(t) {
      t.nonNull.field('where', { type: 'HorseDisciplineWhereUniqueInput' })
      t.nonNull.field('create', {
        type: 'HorseDisciplineCreateWithoutHorsesInput',
      })
    },
  },
)

export const UserFavoriteHorsesCreateWithoutHorseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesCreateWithoutHorseInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('user', {
      type: 'UserCreateNestedOneWithoutUserFavoriteHorsesInput',
    })
  },
})

export const UserFavoriteHorsesUncheckedCreateWithoutHorseInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUncheckedCreateWithoutHorseInput',
    definition(t) {
      t.field('id', { type: 'String' })
      t.nonNull.field('userUid', { type: 'String' })
      t.field('createdAt', { type: 'DateTime' })
    },
  })

export const UserFavoriteHorsesCreateOrConnectWithoutHorseInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesCreateOrConnectWithoutHorseInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.nonNull.field('create', {
        type: 'UserFavoriteHorsesCreateWithoutHorseInput',
      })
    },
  })

export const UserFavoriteHorsesCreateManyHorseInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesCreateManyHorseInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'UserFavoriteHorsesCreateManyHorseInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const UserUpsertWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutHorsesInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutHorsesInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutHorsesInput' })
    t.field('where', { type: 'UserWhereInput' })
  },
})

export const UserUpdateToOneWithWhereWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutHorsesInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' })
    t.nonNull.field('data', { type: 'UserUpdateWithoutHorsesInput' })
  },
})

export const UserUpdateWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutHorsesInput',
  definition(t) {
    t.field('uid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('email', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('whatsAppNumber', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('verifiedSeller', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesUpdateManyWithoutUserNestedInput',
    })
    t.field('notifications', {
      type: 'NotificationUpdateManyWithoutUserNestedInput',
    })
    t.field('reviews', { type: 'UserReviewUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutHorsesInput',
  definition(t) {
    t.field('uid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('email', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('whatsAppNumber', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('verifiedSeller', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('notifications', {
      type: 'NotificationUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('reviews', {
      type: 'UserReviewUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const HorseCategoryUpsertWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryUpsertWithoutHorsesInput',
  definition(t) {
    t.nonNull.field('update', { type: 'HorseCategoryUpdateWithoutHorsesInput' })
    t.nonNull.field('create', { type: 'HorseCategoryCreateWithoutHorsesInput' })
    t.field('where', { type: 'HorseCategoryWhereInput' })
  },
})

export const HorseCategoryUpdateToOneWithWhereWithoutHorsesInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseCategoryUpdateToOneWithWhereWithoutHorsesInput',
    definition(t) {
      t.field('where', { type: 'HorseCategoryWhereInput' })
      t.nonNull.field('data', { type: 'HorseCategoryUpdateWithoutHorsesInput' })
    },
  })

export const HorseCategoryUpdateWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryUpdateWithoutHorsesInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('imageURL', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const HorseCategoryUncheckedUpdateWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCategoryUncheckedUpdateWithoutHorsesInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('imageURL', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const HorseGenderUpsertWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderUpsertWithoutHorsesInput',
  definition(t) {
    t.nonNull.field('update', { type: 'HorseGenderUpdateWithoutHorsesInput' })
    t.nonNull.field('create', { type: 'HorseGenderCreateWithoutHorsesInput' })
    t.field('where', { type: 'HorseGenderWhereInput' })
  },
})

export const HorseGenderUpdateToOneWithWhereWithoutHorsesInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseGenderUpdateToOneWithWhereWithoutHorsesInput',
    definition(t) {
      t.field('where', { type: 'HorseGenderWhereInput' })
      t.nonNull.field('data', { type: 'HorseGenderUpdateWithoutHorsesInput' })
    },
  })

export const HorseGenderUpdateWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderUpdateWithoutHorsesInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const HorseGenderUncheckedUpdateWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseGenderUncheckedUpdateWithoutHorsesInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const HorseDisciplineUpsertWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineUpsertWithoutHorsesInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'HorseDisciplineUpdateWithoutHorsesInput',
    })
    t.nonNull.field('create', {
      type: 'HorseDisciplineCreateWithoutHorsesInput',
    })
    t.field('where', { type: 'HorseDisciplineWhereInput' })
  },
})

export const HorseDisciplineUpdateToOneWithWhereWithoutHorsesInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseDisciplineUpdateToOneWithWhereWithoutHorsesInput',
    definition(t) {
      t.field('where', { type: 'HorseDisciplineWhereInput' })
      t.nonNull.field('data', {
        type: 'HorseDisciplineUpdateWithoutHorsesInput',
      })
    },
  })

export const HorseDisciplineUpdateWithoutHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseDisciplineUpdateWithoutHorsesInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const HorseDisciplineUncheckedUpdateWithoutHorsesInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseDisciplineUncheckedUpdateWithoutHorsesInput',
    definition(t) {
      t.field('id', { type: 'StringFieldUpdateOperationsInput' })
      t.field('name', { type: 'StringFieldUpdateOperationsInput' })
      t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    },
  },
)

export const UserFavoriteHorsesUpsertWithWhereUniqueWithoutHorseInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUpsertWithWhereUniqueWithoutHorseInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.nonNull.field('update', {
        type: 'UserFavoriteHorsesUpdateWithoutHorseInput',
      })
      t.nonNull.field('create', {
        type: 'UserFavoriteHorsesCreateWithoutHorseInput',
      })
    },
  })

export const UserFavoriteHorsesUpdateWithWhereUniqueWithoutHorseInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUpdateWithWhereUniqueWithoutHorseInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.nonNull.field('data', {
        type: 'UserFavoriteHorsesUpdateWithoutHorseInput',
      })
    },
  })

export const UserFavoriteHorsesUpdateManyWithWhereWithoutHorseInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUpdateManyWithWhereWithoutHorseInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserFavoriteHorsesScalarWhereInput' })
      t.nonNull.field('data', {
        type: 'UserFavoriteHorsesUpdateManyMutationInput',
      })
    },
  })

export const UserFavoriteHorsesScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserFavoriteHorsesScalarWhereInput' })
    t.list.field('OR', { type: 'UserFavoriteHorsesScalarWhereInput' })
    t.list.field('NOT', { type: 'UserFavoriteHorsesScalarWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('userUid', { type: 'StringFilter' })
    t.field('horseId', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
  },
})

export const UserCreateWithoutNotificationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutNotificationsInput',
  definition(t) {
    t.nonNull.field('uid', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('phoneNumber', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('whatsAppNumber', { type: 'String' })
    t.field('verifiedSeller', { type: 'Boolean' })
    t.field('role', { type: 'UserRole' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesCreateNestedManyWithoutUserInput',
    })
    t.field('horses', { type: 'HorseCreateNestedManyWithoutUserInput' })
    t.field('reviews', { type: 'UserReviewCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutNotificationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutNotificationsInput',
  definition(t) {
    t.nonNull.field('uid', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('phoneNumber', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('whatsAppNumber', { type: 'String' })
    t.field('verifiedSeller', { type: 'Boolean' })
    t.field('role', { type: 'UserRole' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('horses', {
      type: 'HorseUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('reviews', {
      type: 'UserReviewUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutNotificationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutNotificationsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutNotificationsInput' })
  },
})

export const UserUpsertWithoutNotificationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutNotificationsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutNotificationsInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutNotificationsInput' })
    t.field('where', { type: 'UserWhereInput' })
  },
})

export const UserUpdateToOneWithWhereWithoutNotificationsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUpdateToOneWithWhereWithoutNotificationsInput',
    definition(t) {
      t.field('where', { type: 'UserWhereInput' })
      t.nonNull.field('data', { type: 'UserUpdateWithoutNotificationsInput' })
    },
  })

export const UserUpdateWithoutNotificationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutNotificationsInput',
  definition(t) {
    t.field('uid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('email', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('whatsAppNumber', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('verifiedSeller', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesUpdateManyWithoutUserNestedInput',
    })
    t.field('horses', { type: 'HorseUpdateManyWithoutUserNestedInput' })
    t.field('reviews', { type: 'UserReviewUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutNotificationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutNotificationsInput',
  definition(t) {
    t.field('uid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('email', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('whatsAppNumber', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('verifiedSeller', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('horses', {
      type: 'HorseUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('reviews', {
      type: 'UserReviewUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const UserCreateWithoutUserFavoriteHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutUserFavoriteHorsesInput',
  definition(t) {
    t.nonNull.field('uid', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('phoneNumber', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('whatsAppNumber', { type: 'String' })
    t.field('verifiedSeller', { type: 'Boolean' })
    t.field('role', { type: 'UserRole' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('notifications', {
      type: 'NotificationCreateNestedManyWithoutUserInput',
    })
    t.field('horses', { type: 'HorseCreateNestedManyWithoutUserInput' })
    t.field('reviews', { type: 'UserReviewCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutUserFavoriteHorsesInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUncheckedCreateWithoutUserFavoriteHorsesInput',
    definition(t) {
      t.nonNull.field('uid', { type: 'String' })
      t.nonNull.field('name', { type: 'String' })
      t.field('phoneNumber', { type: 'String' })
      t.field('email', { type: 'String' })
      t.field('whatsAppNumber', { type: 'String' })
      t.field('verifiedSeller', { type: 'Boolean' })
      t.field('role', { type: 'UserRole' })
      t.field('createdAt', { type: 'DateTime' })
      t.field('updatedAt', { type: 'DateTime' })
      t.field('notifications', {
        type: 'NotificationUncheckedCreateNestedManyWithoutUserInput',
      })
      t.field('horses', {
        type: 'HorseUncheckedCreateNestedManyWithoutUserInput',
      })
      t.field('reviews', {
        type: 'UserReviewUncheckedCreateNestedManyWithoutUserInput',
      })
    },
  })

export const UserCreateOrConnectWithoutUserFavoriteHorsesInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserCreateOrConnectWithoutUserFavoriteHorsesInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
      t.nonNull.field('create', {
        type: 'UserCreateWithoutUserFavoriteHorsesInput',
      })
    },
  })

export const HorseCreateWithoutFavoriteByUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateWithoutFavoriteByUsersInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutHorsesInput' })
    t.nonNull.field('category', {
      type: 'HorseCategoryCreateNestedOneWithoutHorsesInput',
    })
    t.nonNull.field('gender', {
      type: 'HorseGenderCreateNestedOneWithoutHorsesInput',
    })
    t.nonNull.field('discipline', {
      type: 'HorseDisciplineCreateNestedOneWithoutHorsesInput',
    })
  },
})

export const HorseUncheckedCreateWithoutFavoriteByUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedCreateWithoutFavoriteByUsersInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.nonNull.field('categoryId', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('genderId', { type: 'String' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('disciplineId', { type: 'String' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
  },
})

export const HorseCreateOrConnectWithoutFavoriteByUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateOrConnectWithoutFavoriteByUsersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'HorseCreateWithoutFavoriteByUsersInput',
    })
  },
})

export const UserUpsertWithoutUserFavoriteHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutUserFavoriteHorsesInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'UserUpdateWithoutUserFavoriteHorsesInput',
    })
    t.nonNull.field('create', {
      type: 'UserCreateWithoutUserFavoriteHorsesInput',
    })
    t.field('where', { type: 'UserWhereInput' })
  },
})

export const UserUpdateToOneWithWhereWithoutUserFavoriteHorsesInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUpdateToOneWithWhereWithoutUserFavoriteHorsesInput',
    definition(t) {
      t.field('where', { type: 'UserWhereInput' })
      t.nonNull.field('data', {
        type: 'UserUpdateWithoutUserFavoriteHorsesInput',
      })
    },
  })

export const UserUpdateWithoutUserFavoriteHorsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutUserFavoriteHorsesInput',
  definition(t) {
    t.field('uid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('email', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('whatsAppNumber', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('verifiedSeller', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('notifications', {
      type: 'NotificationUpdateManyWithoutUserNestedInput',
    })
    t.field('horses', { type: 'HorseUpdateManyWithoutUserNestedInput' })
    t.field('reviews', { type: 'UserReviewUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutUserFavoriteHorsesInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUncheckedUpdateWithoutUserFavoriteHorsesInput',
    definition(t) {
      t.field('uid', { type: 'StringFieldUpdateOperationsInput' })
      t.field('name', { type: 'StringFieldUpdateOperationsInput' })
      t.field('phoneNumber', {
        type: 'NullableStringFieldUpdateOperationsInput',
      })
      t.field('email', { type: 'NullableStringFieldUpdateOperationsInput' })
      t.field('whatsAppNumber', {
        type: 'NullableStringFieldUpdateOperationsInput',
      })
      t.field('verifiedSeller', { type: 'BoolFieldUpdateOperationsInput' })
      t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
      t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('notifications', {
        type: 'NotificationUncheckedUpdateManyWithoutUserNestedInput',
      })
      t.field('horses', {
        type: 'HorseUncheckedUpdateManyWithoutUserNestedInput',
      })
      t.field('reviews', {
        type: 'UserReviewUncheckedUpdateManyWithoutUserNestedInput',
      })
    },
  })

export const HorseUpsertWithoutFavoriteByUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpsertWithoutFavoriteByUsersInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'HorseUpdateWithoutFavoriteByUsersInput',
    })
    t.nonNull.field('create', {
      type: 'HorseCreateWithoutFavoriteByUsersInput',
    })
    t.field('where', { type: 'HorseWhereInput' })
  },
})

export const HorseUpdateToOneWithWhereWithoutFavoriteByUsersInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'HorseUpdateToOneWithWhereWithoutFavoriteByUsersInput',
    definition(t) {
      t.field('where', { type: 'HorseWhereInput' })
      t.nonNull.field('data', {
        type: 'HorseUpdateWithoutFavoriteByUsersInput',
      })
    },
  })

export const HorseUpdateWithoutFavoriteByUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateWithoutFavoriteByUsersInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutHorsesNestedInput' })
    t.field('category', {
      type: 'HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput',
    })
    t.field('gender', {
      type: 'HorseGenderUpdateOneRequiredWithoutHorsesNestedInput',
    })
    t.field('discipline', {
      type: 'HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput',
    })
  },
})

export const HorseUncheckedUpdateWithoutFavoriteByUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedUpdateWithoutFavoriteByUsersInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('categoryId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('genderId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('disciplineId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
  },
})

export const UserCreateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('uid', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('phoneNumber', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('whatsAppNumber', { type: 'String' })
    t.field('verifiedSeller', { type: 'Boolean' })
    t.field('role', { type: 'UserRole' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesCreateNestedManyWithoutUserInput',
    })
    t.field('notifications', {
      type: 'NotificationCreateNestedManyWithoutUserInput',
    })
    t.field('horses', { type: 'HorseCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('uid', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('phoneNumber', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('whatsAppNumber', { type: 'String' })
    t.field('verifiedSeller', { type: 'Boolean' })
    t.field('role', { type: 'UserRole' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('notifications', {
      type: 'NotificationUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('horses', {
      type: 'HorseUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutReviewsInput' })
  },
})

export const UserUpsertWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutReviewsInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutReviewsInput' })
    t.field('where', { type: 'UserWhereInput' })
  },
})

export const UserUpdateToOneWithWhereWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutReviewsInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' })
    t.nonNull.field('data', { type: 'UserUpdateWithoutReviewsInput' })
  },
})

export const UserUpdateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutReviewsInput',
  definition(t) {
    t.field('uid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('email', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('whatsAppNumber', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('verifiedSeller', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesUpdateManyWithoutUserNestedInput',
    })
    t.field('notifications', {
      type: 'NotificationUpdateManyWithoutUserNestedInput',
    })
    t.field('horses', { type: 'HorseUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutReviewsInput',
  definition(t) {
    t.field('uid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('email', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('whatsAppNumber', {
      type: 'NullableStringFieldUpdateOperationsInput',
    })
    t.field('verifiedSeller', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('userFavoriteHorses', {
      type: 'UserFavoriteHorsesUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('notifications', {
      type: 'NotificationUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('horses', {
      type: 'HorseUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const UserFavoriteHorsesCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('horse', {
      type: 'HorseCreateNestedOneWithoutFavoriteByUsersInput',
    })
  },
})

export const UserFavoriteHorsesUncheckedCreateWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUncheckedCreateWithoutUserInput',
    definition(t) {
      t.field('id', { type: 'String' })
      t.nonNull.field('horseId', { type: 'String' })
      t.field('createdAt', { type: 'DateTime' })
    },
  })

export const UserFavoriteHorsesCreateOrConnectWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesCreateOrConnectWithoutUserInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.nonNull.field('create', {
        type: 'UserFavoriteHorsesCreateWithoutUserInput',
      })
    },
  })

export const UserFavoriteHorsesCreateManyUserInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesCreateManyUserInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'UserFavoriteHorsesCreateManyUserInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const NotificationCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('message', { type: 'String' })
    t.field('read', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const NotificationUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationUncheckedCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('message', { type: 'String' })
    t.field('read', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const NotificationCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationCreateOrConnectWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'NotificationWhereUniqueInput' })
    t.nonNull.field('create', { type: 'NotificationCreateWithoutUserInput' })
  },
})

export const NotificationCreateManyUserInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationCreateManyUserInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'NotificationCreateManyUserInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const HorseCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
    t.nonNull.field('category', {
      type: 'HorseCategoryCreateNestedOneWithoutHorsesInput',
    })
    t.nonNull.field('gender', {
      type: 'HorseGenderCreateNestedOneWithoutHorsesInput',
    })
    t.nonNull.field('discipline', {
      type: 'HorseDisciplineCreateNestedOneWithoutHorsesInput',
    })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesCreateNestedManyWithoutHorseInput',
    })
  },
})

export const HorseUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('categoryId', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('genderId', { type: 'String' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('disciplineId', { type: 'String' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesUncheckedCreateNestedManyWithoutHorseInput',
    })
  },
})

export const HorseCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateOrConnectWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseWhereUniqueInput' })
    t.nonNull.field('create', { type: 'HorseCreateWithoutUserInput' })
  },
})

export const HorseCreateManyUserInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateManyUserInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'HorseCreateManyUserInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const UserReviewCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('reviewer', { type: 'String' })
    t.nonNull.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserReviewUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewUncheckedCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('reviewer', { type: 'String' })
    t.nonNull.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserReviewCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewCreateOrConnectWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserReviewWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserReviewCreateWithoutUserInput' })
  },
})

export const UserReviewCreateManyUserInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewCreateManyUserInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'UserReviewCreateManyUserInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const UserFavoriteHorsesUpsertWithWhereUniqueWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUpsertWithWhereUniqueWithoutUserInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.nonNull.field('update', {
        type: 'UserFavoriteHorsesUpdateWithoutUserInput',
      })
      t.nonNull.field('create', {
        type: 'UserFavoriteHorsesCreateWithoutUserInput',
      })
    },
  })

export const UserFavoriteHorsesUpdateWithWhereUniqueWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUpdateWithWhereUniqueWithoutUserInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserFavoriteHorsesWhereUniqueInput' })
      t.nonNull.field('data', {
        type: 'UserFavoriteHorsesUpdateWithoutUserInput',
      })
    },
  })

export const UserFavoriteHorsesUpdateManyWithWhereWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUpdateManyWithWhereWithoutUserInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserFavoriteHorsesScalarWhereInput' })
      t.nonNull.field('data', {
        type: 'UserFavoriteHorsesUpdateManyMutationInput',
      })
    },
  })

export const NotificationUpsertWithWhereUniqueWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'NotificationUpsertWithWhereUniqueWithoutUserInput',
    definition(t) {
      t.nonNull.field('where', { type: 'NotificationWhereUniqueInput' })
      t.nonNull.field('update', { type: 'NotificationUpdateWithoutUserInput' })
      t.nonNull.field('create', { type: 'NotificationCreateWithoutUserInput' })
    },
  })

export const NotificationUpdateWithWhereUniqueWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'NotificationUpdateWithWhereUniqueWithoutUserInput',
    definition(t) {
      t.nonNull.field('where', { type: 'NotificationWhereUniqueInput' })
      t.nonNull.field('data', { type: 'NotificationUpdateWithoutUserInput' })
    },
  })

export const NotificationUpdateManyWithWhereWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationUpdateManyWithWhereWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'NotificationScalarWhereInput' })
    t.nonNull.field('data', { type: 'NotificationUpdateManyMutationInput' })
  },
})

export const NotificationScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'NotificationScalarWhereInput' })
    t.list.field('OR', { type: 'NotificationScalarWhereInput' })
    t.list.field('NOT', { type: 'NotificationScalarWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('userUid', { type: 'StringFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('message', { type: 'StringFilter' })
    t.field('read', { type: 'BoolFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
  },
})

export const HorseUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpsertWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseWhereUniqueInput' })
    t.nonNull.field('update', { type: 'HorseUpdateWithoutUserInput' })
    t.nonNull.field('create', { type: 'HorseCreateWithoutUserInput' })
  },
})

export const HorseUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseWhereUniqueInput' })
    t.nonNull.field('data', { type: 'HorseUpdateWithoutUserInput' })
  },
})

export const HorseUpdateManyWithWhereWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateManyWithWhereWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'HorseScalarWhereInput' })
    t.nonNull.field('data', { type: 'HorseUpdateManyMutationInput' })
  },
})

export const UserReviewUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewUpsertWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserReviewWhereUniqueInput' })
    t.nonNull.field('update', { type: 'UserReviewUpdateWithoutUserInput' })
    t.nonNull.field('create', { type: 'UserReviewCreateWithoutUserInput' })
  },
})

export const UserReviewUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewUpdateWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserReviewWhereUniqueInput' })
    t.nonNull.field('data', { type: 'UserReviewUpdateWithoutUserInput' })
  },
})

export const UserReviewUpdateManyWithWhereWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewUpdateManyWithWhereWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserReviewScalarWhereInput' })
    t.nonNull.field('data', { type: 'UserReviewUpdateManyMutationInput' })
  },
})

export const UserReviewScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserReviewScalarWhereInput' })
    t.list.field('OR', { type: 'UserReviewScalarWhereInput' })
    t.list.field('NOT', { type: 'UserReviewScalarWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('userUid', { type: 'StringFilter' })
    t.field('reviewer', { type: 'StringFilter' })
    t.field('rating', { type: 'IntFilter' })
    t.field('comment', { type: 'StringNullableFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
  },
})

export const HorseCreateManyCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateManyCategoryInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('genderId', { type: 'String' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('disciplineId', { type: 'String' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
  },
})

export const HorseUpdateWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateWithoutCategoryInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutHorsesNestedInput' })
    t.field('gender', {
      type: 'HorseGenderUpdateOneRequiredWithoutHorsesNestedInput',
    })
    t.field('discipline', {
      type: 'HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput',
    })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesUpdateManyWithoutHorseNestedInput',
    })
  },
})

export const HorseUncheckedUpdateWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedUpdateWithoutCategoryInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('genderId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('disciplineId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput',
    })
  },
})

export const HorseUncheckedUpdateManyWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedUpdateManyWithoutCategoryInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('genderId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('disciplineId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
  },
})

export const HorseCreateManyDisciplineInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateManyDisciplineInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.nonNull.field('categoryId', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('genderId', { type: 'String' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
  },
})

export const HorseUpdateWithoutDisciplineInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateWithoutDisciplineInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutHorsesNestedInput' })
    t.field('category', {
      type: 'HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput',
    })
    t.field('gender', {
      type: 'HorseGenderUpdateOneRequiredWithoutHorsesNestedInput',
    })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesUpdateManyWithoutHorseNestedInput',
    })
  },
})

export const HorseUncheckedUpdateWithoutDisciplineInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedUpdateWithoutDisciplineInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('categoryId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('genderId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput',
    })
  },
})

export const HorseUncheckedUpdateManyWithoutDisciplineInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedUpdateManyWithoutDisciplineInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('categoryId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('genderId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
  },
})

export const HorseCreateManyGenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateManyGenderInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.nonNull.field('categoryId', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('disciplineId', { type: 'String' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
  },
})

export const HorseUpdateWithoutGenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateWithoutGenderInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutHorsesNestedInput' })
    t.field('category', {
      type: 'HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput',
    })
    t.field('discipline', {
      type: 'HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput',
    })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesUpdateManyWithoutHorseNestedInput',
    })
  },
})

export const HorseUncheckedUpdateWithoutGenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedUpdateWithoutGenderInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('categoryId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('disciplineId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput',
    })
  },
})

export const HorseUncheckedUpdateManyWithoutGenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedUpdateManyWithoutGenderInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
    t.field('categoryId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('disciplineId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
  },
})

export const UserFavoriteHorsesCreateManyHorseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesCreateManyHorseInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userUid', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const UserFavoriteHorsesUpdateWithoutHorseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesUpdateWithoutHorseInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('user', {
      type: 'UserUpdateOneRequiredWithoutUserFavoriteHorsesNestedInput',
    })
  },
})

export const UserFavoriteHorsesUncheckedUpdateWithoutHorseInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUncheckedUpdateWithoutHorseInput',
    definition(t) {
      t.field('id', { type: 'StringFieldUpdateOperationsInput' })
      t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
      t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    },
  })

export const UserFavoriteHorsesUncheckedUpdateManyWithoutHorseInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUncheckedUpdateManyWithoutHorseInput',
    definition(t) {
      t.field('id', { type: 'StringFieldUpdateOperationsInput' })
      t.field('userUid', { type: 'StringFieldUpdateOperationsInput' })
      t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    },
  })

export const UserFavoriteHorsesCreateManyUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesCreateManyUserInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('horseId', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const NotificationCreateManyUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationCreateManyUserInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('message', { type: 'String' })
    t.field('read', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseCreateManyUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseCreateManyUserInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('categoryId', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('pedigreeURL', { type: 'String' })
    t.nonNull.field('yearOfBirth', { type: 'Int' })
    t.nonNull.field('genderId', { type: 'String' })
    t.nonNull.field('height', { type: 'Int' })
    t.nonNull.field('disciplineId', { type: 'String' })
    t.nonNull.field('location', { type: 'String' })
    t.nonNull.field('price', { type: 'Float' })
    t.nonNull.field('description', { type: 'String' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'String' })
    t.field('vetReport', { type: 'String' })
    t.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('pedigree', { type: 'Json' })
  },
})

export const UserReviewCreateManyUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewCreateManyUserInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('reviewer', { type: 'String' })
    t.nonNull.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserFavoriteHorsesUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFavoriteHorsesUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('horse', {
      type: 'HorseUpdateOneRequiredWithoutFavoriteByUsersNestedInput',
    })
  },
})

export const UserFavoriteHorsesUncheckedUpdateWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUncheckedUpdateWithoutUserInput',
    definition(t) {
      t.field('id', { type: 'StringFieldUpdateOperationsInput' })
      t.field('horseId', { type: 'StringFieldUpdateOperationsInput' })
      t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    },
  })

export const UserFavoriteHorsesUncheckedUpdateManyWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserFavoriteHorsesUncheckedUpdateManyWithoutUserInput',
    definition(t) {
      t.field('id', { type: 'StringFieldUpdateOperationsInput' })
      t.field('horseId', { type: 'StringFieldUpdateOperationsInput' })
      t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    },
  })

export const NotificationUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const NotificationUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationUncheckedUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const NotificationUncheckedUpdateManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NotificationUncheckedUpdateManyWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const HorseUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
    t.field('category', {
      type: 'HorseCategoryUpdateOneRequiredWithoutHorsesNestedInput',
    })
    t.field('gender', {
      type: 'HorseGenderUpdateOneRequiredWithoutHorsesNestedInput',
    })
    t.field('discipline', {
      type: 'HorseDisciplineUpdateOneRequiredWithoutHorsesNestedInput',
    })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesUpdateManyWithoutHorseNestedInput',
    })
  },
})

export const HorseUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('categoryId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('genderId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('disciplineId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
    t.field('favoriteByUsers', {
      type: 'UserFavoriteHorsesUncheckedUpdateManyWithoutHorseNestedInput',
    })
  },
})

export const HorseUncheckedUpdateManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'HorseUncheckedUpdateManyWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('categoryId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('pedigreeURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('yearOfBirth', { type: 'IntFieldUpdateOperationsInput' })
    t.field('genderId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('height', { type: 'IntFieldUpdateOperationsInput' })
    t.field('disciplineId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('location', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('photos', { type: 'String' })
    t.field('videoURL', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vetReport', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('xrayResults', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('status', { type: 'EnumHorseStatusFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('pedigree', { type: 'Json' })
  },
})

export const UserReviewUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('reviewer', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('comment', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserReviewUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewUncheckedUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('reviewer', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('comment', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserReviewUncheckedUpdateManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserReviewUncheckedUpdateManyWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('reviewer', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('comment', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const AggregateHorseCategory = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateHorseCategory',
  definition(t) {
    t.nullable.field('_count', {
      type: 'HorseCategoryCountAggregateOutputType',
    })
    t.nullable.field('_min', { type: 'HorseCategoryMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'HorseCategoryMaxAggregateOutputType' })
  },
})

export const HorseCategoryGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseCategoryGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('imageURL', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('_count', {
      type: 'HorseCategoryCountAggregateOutputType',
    })
    t.nullable.field('_min', { type: 'HorseCategoryMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'HorseCategoryMaxAggregateOutputType' })
  },
})

export const AggregateHorseDiscipline = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateHorseDiscipline',
  definition(t) {
    t.nullable.field('_count', {
      type: 'HorseDisciplineCountAggregateOutputType',
    })
    t.nullable.field('_min', { type: 'HorseDisciplineMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'HorseDisciplineMaxAggregateOutputType' })
  },
})

export const HorseDisciplineGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseDisciplineGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('_count', {
      type: 'HorseDisciplineCountAggregateOutputType',
    })
    t.nullable.field('_min', { type: 'HorseDisciplineMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'HorseDisciplineMaxAggregateOutputType' })
  },
})

export const AggregateHorseGender = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateHorseGender',
  definition(t) {
    t.nullable.field('_count', { type: 'HorseGenderCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'HorseGenderMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'HorseGenderMaxAggregateOutputType' })
  },
})

export const HorseGenderGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseGenderGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('_count', { type: 'HorseGenderCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'HorseGenderMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'HorseGenderMaxAggregateOutputType' })
  },
})

export const AggregateHorse = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateHorse',
  definition(t) {
    t.nullable.field('_count', { type: 'HorseCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'HorseAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'HorseSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'HorseMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'HorseMaxAggregateOutputType' })
  },
})

export const HorseGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('userUid', { type: 'String' })
    t.field('categoryId', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nullable.field('pedigreeURL', { type: 'String' })
    t.field('yearOfBirth', { type: 'Int' })
    t.field('genderId', { type: 'String' })
    t.field('height', { type: 'Int' })
    t.field('disciplineId', { type: 'String' })
    t.field('location', { type: 'String' })
    t.field('price', { type: 'Float' })
    t.field('description', { type: 'String' })
    t.nullable.field('photos', { type: 'String' })
    t.nullable.field('videoURL', { type: 'String' })
    t.nullable.field('vetReport', { type: 'String' })
    t.nullable.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('pedigree', { type: 'Json' })
    t.nullable.field('_count', { type: 'HorseCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'HorseAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'HorseSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'HorseMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'HorseMaxAggregateOutputType' })
  },
})

export const AggregateNotification = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateNotification',
  definition(t) {
    t.nullable.field('_count', { type: 'NotificationCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'NotificationMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'NotificationMaxAggregateOutputType' })
  },
})

export const NotificationGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'NotificationGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('userUid', { type: 'String' })
    t.field('title', { type: 'String' })
    t.field('message', { type: 'String' })
    t.field('read', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('_count', { type: 'NotificationCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'NotificationMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'NotificationMaxAggregateOutputType' })
  },
})

export const AggregateUserFavoriteHorses = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateUserFavoriteHorses',
  definition(t) {
    t.nullable.field('_count', {
      type: 'UserFavoriteHorsesCountAggregateOutputType',
    })
    t.nullable.field('_min', {
      type: 'UserFavoriteHorsesMinAggregateOutputType',
    })
    t.nullable.field('_max', {
      type: 'UserFavoriteHorsesMaxAggregateOutputType',
    })
  },
})

export const UserFavoriteHorsesGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserFavoriteHorsesGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('userUid', { type: 'String' })
    t.field('horseId', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.nullable.field('_count', {
      type: 'UserFavoriteHorsesCountAggregateOutputType',
    })
    t.nullable.field('_min', {
      type: 'UserFavoriteHorsesMinAggregateOutputType',
    })
    t.nullable.field('_max', {
      type: 'UserFavoriteHorsesMaxAggregateOutputType',
    })
  },
})

export const AggregateUserReview = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateUserReview',
  definition(t) {
    t.nullable.field('_count', { type: 'UserReviewCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'UserReviewAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'UserReviewSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'UserReviewMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'UserReviewMaxAggregateOutputType' })
  },
})

export const UserReviewGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserReviewGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('userUid', { type: 'String' })
    t.field('reviewer', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.nullable.field('comment', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('_count', { type: 'UserReviewCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'UserReviewAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'UserReviewSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'UserReviewMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'UserReviewMaxAggregateOutputType' })
  },
})

export const AggregateUser = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateUser',
  definition(t) {
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' })
  },
})

export const UserGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserGroupByOutputType',
  definition(t) {
    t.field('uid', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nullable.field('phoneNumber', { type: 'String' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('whatsAppNumber', { type: 'String' })
    t.field('verifiedSeller', { type: 'Boolean' })
    t.field('role', { type: 'UserRole' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' })
  },
})

export const HorseCategoryCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseCategoryCountOutputType',
  definition(t) {
    t.field('horses', { type: 'Int' })
  },
})

export const HorseCategoryCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseCategoryCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('imageURL', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const HorseCategoryMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseCategoryMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('imageURL', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseCategoryMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseCategoryMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('imageURL', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseDisciplineCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseDisciplineCountOutputType',
  definition(t) {
    t.field('horses', { type: 'Int' })
  },
})

export const HorseDisciplineCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseDisciplineCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const HorseDisciplineMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseDisciplineMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseDisciplineMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseDisciplineMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseGenderCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseGenderCountOutputType',
  definition(t) {
    t.field('horses', { type: 'Int' })
  },
})

export const HorseGenderCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseGenderCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const HorseGenderMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseGenderMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseGenderMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseGenderMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseCountOutputType',
  definition(t) {
    t.field('favoriteByUsers', { type: 'Int' })
  },
})

export const HorseCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('userUid', { type: 'Int' })
    t.field('categoryId', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('pedigreeURL', { type: 'Int' })
    t.field('yearOfBirth', { type: 'Int' })
    t.field('genderId', { type: 'Int' })
    t.field('height', { type: 'Int' })
    t.field('disciplineId', { type: 'Int' })
    t.field('location', { type: 'Int' })
    t.field('price', { type: 'Int' })
    t.field('description', { type: 'Int' })
    t.field('photos', { type: 'Int' })
    t.field('videoURL', { type: 'Int' })
    t.field('vetReport', { type: 'Int' })
    t.field('xrayResults', { type: 'Int' })
    t.field('status', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('pedigree', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const HorseAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('yearOfBirth', { type: 'Float' })
    t.nullable.field('height', { type: 'Float' })
    t.nullable.field('price', { type: 'Float' })
  },
})

export const HorseSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseSumAggregateOutputType',
  definition(t) {
    t.nullable.field('yearOfBirth', { type: 'Int' })
    t.nullable.field('height', { type: 'Int' })
    t.nullable.field('price', { type: 'Float' })
  },
})

export const HorseMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('userUid', { type: 'String' })
    t.nullable.field('categoryId', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('pedigreeURL', { type: 'String' })
    t.nullable.field('yearOfBirth', { type: 'Int' })
    t.nullable.field('genderId', { type: 'String' })
    t.nullable.field('height', { type: 'Int' })
    t.nullable.field('disciplineId', { type: 'String' })
    t.nullable.field('location', { type: 'String' })
    t.nullable.field('price', { type: 'Float' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('videoURL', { type: 'String' })
    t.nullable.field('vetReport', { type: 'String' })
    t.nullable.field('xrayResults', { type: 'String' })
    t.nullable.field('status', { type: 'HorseStatus' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const HorseMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'HorseMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('userUid', { type: 'String' })
    t.nullable.field('categoryId', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('pedigreeURL', { type: 'String' })
    t.nullable.field('yearOfBirth', { type: 'Int' })
    t.nullable.field('genderId', { type: 'String' })
    t.nullable.field('height', { type: 'Int' })
    t.nullable.field('disciplineId', { type: 'String' })
    t.nullable.field('location', { type: 'String' })
    t.nullable.field('price', { type: 'Float' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('videoURL', { type: 'String' })
    t.nullable.field('vetReport', { type: 'String' })
    t.nullable.field('xrayResults', { type: 'String' })
    t.nullable.field('status', { type: 'HorseStatus' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const NotificationCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'NotificationCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('userUid', { type: 'Int' })
    t.field('title', { type: 'Int' })
    t.field('message', { type: 'Int' })
    t.field('read', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const NotificationMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'NotificationMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('userUid', { type: 'String' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('message', { type: 'String' })
    t.nullable.field('read', { type: 'Boolean' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const NotificationMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'NotificationMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('userUid', { type: 'String' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('message', { type: 'String' })
    t.nullable.field('read', { type: 'Boolean' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserFavoriteHorsesCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserFavoriteHorsesCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('userUid', { type: 'Int' })
    t.field('horseId', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const UserFavoriteHorsesMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserFavoriteHorsesMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('userUid', { type: 'String' })
    t.nullable.field('horseId', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
  },
})

export const UserFavoriteHorsesMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserFavoriteHorsesMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('userUid', { type: 'String' })
    t.nullable.field('horseId', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
  },
})

export const UserReviewCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserReviewCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('userUid', { type: 'Int' })
    t.field('reviewer', { type: 'Int' })
    t.field('rating', { type: 'Int' })
    t.field('comment', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const UserReviewAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserReviewAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('rating', { type: 'Float' })
  },
})

export const UserReviewSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserReviewSumAggregateOutputType',
  definition(t) {
    t.nullable.field('rating', { type: 'Int' })
  },
})

export const UserReviewMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserReviewMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('userUid', { type: 'String' })
    t.nullable.field('reviewer', { type: 'String' })
    t.nullable.field('rating', { type: 'Int' })
    t.nullable.field('comment', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserReviewMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserReviewMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('userUid', { type: 'String' })
    t.nullable.field('reviewer', { type: 'String' })
    t.nullable.field('rating', { type: 'Int' })
    t.nullable.field('comment', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountOutputType',
  definition(t) {
    t.field('userFavoriteHorses', { type: 'Int' })
    t.field('notifications', { type: 'Int' })
    t.field('horses', { type: 'Int' })
    t.field('reviews', { type: 'Int' })
  },
})

export const UserCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountAggregateOutputType',
  definition(t) {
    t.field('uid', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('phoneNumber', { type: 'Int' })
    t.field('email', { type: 'Int' })
    t.field('whatsAppNumber', { type: 'Int' })
    t.field('verifiedSeller', { type: 'Int' })
    t.field('role', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const UserMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMinAggregateOutputType',
  definition(t) {
    t.nullable.field('uid', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('phoneNumber', { type: 'String' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('whatsAppNumber', { type: 'String' })
    t.nullable.field('verifiedSeller', { type: 'Boolean' })
    t.nullable.field('role', { type: 'UserRole' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('uid', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('phoneNumber', { type: 'String' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('whatsAppNumber', { type: 'String' })
    t.nullable.field('verifiedSeller', { type: 'Boolean' })
    t.nullable.field('role', { type: 'UserRole' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const CreateManyHorseCategoryAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyHorseCategoryAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('imageURL', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UpdateManyHorseCategoryAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyHorseCategoryAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('imageURL', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CreateManyHorseDisciplineAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyHorseDisciplineAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UpdateManyHorseDisciplineAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyHorseDisciplineAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CreateManyHorseGenderAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyHorseGenderAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UpdateManyHorseGenderAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyHorseGenderAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CreateManyHorseAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyHorseAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('userUid', { type: 'String' })
    t.field('categoryId', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nullable.field('pedigreeURL', { type: 'String' })
    t.field('yearOfBirth', { type: 'Int' })
    t.field('genderId', { type: 'String' })
    t.field('height', { type: 'Int' })
    t.field('disciplineId', { type: 'String' })
    t.field('location', { type: 'String' })
    t.field('price', { type: 'Float' })
    t.field('description', { type: 'String' })
    t.nullable.field('photos', { type: 'String' })
    t.nullable.field('videoURL', { type: 'String' })
    t.nullable.field('vetReport', { type: 'String' })
    t.nullable.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('pedigree', { type: 'Json' })
    t.field('user', { type: 'User' })
    t.field('category', { type: 'HorseCategory' })
    t.field('gender', { type: 'HorseGender' })
    t.field('discipline', { type: 'HorseDiscipline' })
  },
})

export const UpdateManyHorseAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyHorseAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('userUid', { type: 'String' })
    t.field('categoryId', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nullable.field('pedigreeURL', { type: 'String' })
    t.field('yearOfBirth', { type: 'Int' })
    t.field('genderId', { type: 'String' })
    t.field('height', { type: 'Int' })
    t.field('disciplineId', { type: 'String' })
    t.field('location', { type: 'String' })
    t.field('price', { type: 'Float' })
    t.field('description', { type: 'String' })
    t.nullable.field('photos', { type: 'String' })
    t.nullable.field('videoURL', { type: 'String' })
    t.nullable.field('vetReport', { type: 'String' })
    t.nullable.field('xrayResults', { type: 'String' })
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('pedigree', { type: 'Json' })
    t.field('user', { type: 'User' })
    t.field('category', { type: 'HorseCategory' })
    t.field('gender', { type: 'HorseGender' })
    t.field('discipline', { type: 'HorseDiscipline' })
  },
})

export const CreateManyNotificationAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyNotificationAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('userUid', { type: 'String' })
    t.field('title', { type: 'String' })
    t.field('message', { type: 'String' })
    t.field('read', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('user', { type: 'User' })
  },
})

export const UpdateManyNotificationAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyNotificationAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('userUid', { type: 'String' })
    t.field('title', { type: 'String' })
    t.field('message', { type: 'String' })
    t.field('read', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('user', { type: 'User' })
  },
})

export const CreateManyUserFavoriteHorsesAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyUserFavoriteHorsesAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('userUid', { type: 'String' })
    t.field('horseId', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('user', { type: 'User' })
    t.field('horse', { type: 'Horse' })
  },
})

export const UpdateManyUserFavoriteHorsesAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyUserFavoriteHorsesAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('userUid', { type: 'String' })
    t.field('horseId', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('user', { type: 'User' })
    t.field('horse', { type: 'Horse' })
  },
})

export const CreateManyUserReviewAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyUserReviewAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('userUid', { type: 'String' })
    t.field('reviewer', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.nullable.field('comment', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('user', { type: 'User' })
  },
})

export const UpdateManyUserReviewAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyUserReviewAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('userUid', { type: 'String' })
    t.field('reviewer', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.nullable.field('comment', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('user', { type: 'User' })
  },
})

export const CreateManyUserAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyUserAndReturnOutputType',
  definition(t) {
    t.field('uid', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nullable.field('phoneNumber', { type: 'String' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('whatsAppNumber', { type: 'String' })
    t.field('verifiedSeller', { type: 'Boolean' })
    t.field('role', { type: 'UserRole' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UpdateManyUserAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyUserAndReturnOutputType',
  definition(t) {
    t.field('uid', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nullable.field('phoneNumber', { type: 'String' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('whatsAppNumber', { type: 'String' })
    t.field('verifiedSeller', { type: 'Boolean' })
    t.field('role', { type: 'UserRole' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
