import { queryField, list } from 'nexus'

export const HorseImageAggregateQuery = queryField('aggregateHorseImage', {
  type: 'AggregateHorseImage',
  args: {
    where: 'HorseImageWhereInput',
    orderBy: list('HorseImageOrderByWithRelationInput'),
    cursor: 'HorseImageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.horseImage.aggregate({ ...args, ...select }) as any
  },
})
