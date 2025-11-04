import { queryField, list } from 'nexus'

export const HorseFindFirstQuery = queryField('findFirstHorse', {
  type: 'Horse',
  args: {
    where: 'HorseWhereInput',
    orderBy: list('HorseOrderByWithRelationInput'),
    cursor: 'HorseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('HorseScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.horse.findFirst({
      ...args,
      ...select,
    })
  },
})
