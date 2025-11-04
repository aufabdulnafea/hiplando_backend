import { queryField, list } from 'nexus'

export const HorseCategoryAggregateQuery = queryField(
  'aggregateHorseCategory',
  {
    type: 'AggregateHorseCategory',
    args: {
      where: 'HorseCategoryWhereInput',
      orderBy: list('HorseCategoryOrderByWithRelationInput'),
      cursor: 'HorseCategoryWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseCategory.aggregate({ ...args, ...select }) as any
    },
  },
)
