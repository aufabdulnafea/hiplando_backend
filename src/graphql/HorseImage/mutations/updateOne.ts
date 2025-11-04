import { mutationField, nonNull } from 'nexus'

export const HorseImageUpdateOneMutation = mutationField(
  'updateOneHorseImage',
  {
    type: nonNull('HorseImage'),
    args: {
      data: nonNull('HorseImageUpdateInput'),
      where: nonNull('HorseImageWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.horseImage.update({
        where,
        data,
        ...select,
      })
    },
  },
)
