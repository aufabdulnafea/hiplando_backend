import { queryField, nonNull, list } from 'nexus'

export const HorseFindManyQuery = queryField('findManyHorse', {
  type: nonNull(list(nonNull('Horse'))),
  args: {
    where: 'HorseWhereInput',
    orderBy: list('HorseOrderByWithRelationInput'),
    cursor: 'HorseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('HorseScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.horse.findMany({
      ...args,
      ...select,
    })
  },
})
