import { queryField, nonNull } from 'nexus'

export const HorseFindUniqueQuery = queryField('findUniqueHorse', {
  type: 'Horse',
  args: {
    where: nonNull('HorseWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.horse.findUnique({
      where,
      ...select,
    })
  },
})
