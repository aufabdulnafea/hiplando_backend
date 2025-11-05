import { queryField, nonNull, list } from 'nexus'

export const HorsePhotoFindCountQuery = queryField('findManyHorsePhotoCount', {
  type: nonNull('Int'),
  args: {
    where: 'HorsePhotoWhereInput',
    orderBy: list('HorsePhotoOrderByWithRelationInput'),
    cursor: 'HorsePhotoWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('HorsePhotoScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.horsePhoto.count(args as any)
  },
})
