import { queryField, nonNull } from 'nexus'

export const HorseImageFindUniqueQuery = queryField('findUniqueHorseImage', {
  type: 'HorseImage',
  args: {
    where: nonNull('HorseImageWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.horseImage.findUnique({
      where,
      ...select,
    })
  },
})
