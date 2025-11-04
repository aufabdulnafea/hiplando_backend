import { mutationField, nonNull } from 'nexus'

export const HorseImageDeleteOneMutation = mutationField(
  'deleteOneHorseImage',
  {
    type: 'HorseImage',
    args: {
      where: nonNull('HorseImageWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.horseImage.delete({
        where,
        ...select,
      })
    },
  },
)
