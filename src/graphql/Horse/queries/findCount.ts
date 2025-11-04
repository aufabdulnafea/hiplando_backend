import { queryField, nonNull, list } from 'nexus'

export const HorseFindCountQuery = queryField('findManyHorseCount', {
  type: nonNull('Int'),
  args: {
    where: 'HorseWhereInput',
    orderBy: list('HorseOrderByWithRelationInput'),
    cursor: 'HorseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('HorseScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.horse.count(args as any)
  },
})
