import { queryField, nonNull, list } from 'nexus'

export const HorseImageFindManyQuery = queryField('findManyHorseImage', {
  type: nonNull(list(nonNull('HorseImage'))),
  args: {
    where: 'HorseImageWhereInput',
    orderBy: list('HorseImageOrderByWithRelationInput'),
    cursor: 'HorseImageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('HorseImageScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.horseImage.findMany({
      ...args,
      ...select,
    })
  },
})
