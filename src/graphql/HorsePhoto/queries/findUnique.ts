import { queryField, nonNull } from 'nexus'

export const HorsePhotoFindUniqueQuery = queryField('findUniqueHorsePhoto', {
  type: 'HorsePhoto',
  args: {
    where: nonNull('HorsePhotoWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.horsePhoto.findUnique({
      where,
      ...select,
    })
  },
})
