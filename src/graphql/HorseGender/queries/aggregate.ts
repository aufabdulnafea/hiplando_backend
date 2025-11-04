import { queryField, list } from 'nexus'

export const HorseGenderAggregateQuery = queryField('aggregateHorseGender', {
  type: 'AggregateHorseGender',
  args: {
    where: 'HorseGenderWhereInput',
    orderBy: list('HorseGenderOrderByWithRelationInput'),
    cursor: 'HorseGenderWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.horseGender.aggregate({ ...args, ...select }) as any
  },
})
