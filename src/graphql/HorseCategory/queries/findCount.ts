import { queryField, nonNull, list } from 'nexus'

export const HorseCategoryFindCountQuery = queryField(
  'findManyHorseCategoryCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'HorseCategoryWhereInput',
      orderBy: list('HorseCategoryOrderByWithRelationInput'),
      cursor: 'HorseCategoryWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('HorseCategoryScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.horseCategory.count(args as any)
    },
  },
)
