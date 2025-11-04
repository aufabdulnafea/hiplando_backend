import { queryField, list } from 'nexus'

export const HorseImageFindFirstQuery = queryField('findFirstHorseImage', {
  type: 'HorseImage',
  args: {
    where: 'HorseImageWhereInput',
    orderBy: list('HorseImageOrderByWithRelationInput'),
    cursor: 'HorseImageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('HorseImageScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.horseImage.findFirst({
      ...args,
      ...select,
    })
  },
})
