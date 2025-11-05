import { queryField, nonNull, list } from 'nexus'

export const HorsePhotoFindManyQuery = queryField('findManyHorsePhoto', {
  type: nonNull(list(nonNull('HorsePhoto'))),
  args: {
    where: 'HorsePhotoWhereInput',
    orderBy: list('HorsePhotoOrderByWithRelationInput'),
    cursor: 'HorsePhotoWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('HorsePhotoScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.horsePhoto.findMany({
      ...args,
      ...select,
    })
  },
})
