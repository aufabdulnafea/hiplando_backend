import { queryField, list } from 'nexus'

export const HorseDisciplineAggregateQuery = queryField(
  'aggregateHorseDiscipline',
  {
    type: 'AggregateHorseDiscipline',
    args: {
      where: 'HorseDisciplineWhereInput',
      orderBy: list('HorseDisciplineOrderByWithRelationInput'),
      cursor: 'HorseDisciplineWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseDiscipline.aggregate({ ...args, ...select }) as any
    },
  },
)
