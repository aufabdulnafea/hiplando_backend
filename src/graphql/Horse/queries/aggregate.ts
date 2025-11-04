import { queryField, list } from 'nexus'

export const HorseAggregateQuery = queryField('aggregateHorse', {
  type: 'AggregateHorse',
  args: {
    where: 'HorseWhereInput',
    orderBy: list('HorseOrderByWithRelationInput'),
    cursor: 'HorseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.horse.aggregate({ ...args, ...select }) as any
  },
})
