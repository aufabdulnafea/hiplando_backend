import { queryField, nonNull, list } from 'nexus'

export const HorseImageFindCountQuery = queryField('findManyHorseImageCount', {
  type: nonNull('Int'),
  args: {
    where: 'HorseImageWhereInput',
    orderBy: list('HorseImageOrderByWithRelationInput'),
    cursor: 'HorseImageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('HorseImageScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.horseImage.count(args as any)
  },
})
