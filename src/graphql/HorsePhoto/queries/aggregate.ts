import { queryField, list } from 'nexus'

export const HorsePhotoAggregateQuery = queryField('aggregateHorsePhoto', {
  type: 'AggregateHorsePhoto',
  args: {
    where: 'HorsePhotoWhereInput',
    orderBy: list('HorsePhotoOrderByWithRelationInput'),
    cursor: 'HorsePhotoWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.horsePhoto.aggregate({ ...args, ...select }) as any
  },
})
