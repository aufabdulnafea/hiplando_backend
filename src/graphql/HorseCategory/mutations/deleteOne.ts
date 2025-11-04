import { mutationField, nonNull } from 'nexus'

export const HorseCategoryDeleteOneMutation = mutationField(
  'deleteOneHorseCategory',
  {
    type: 'HorseCategory',
    args: {
      where: nonNull('HorseCategoryWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.horseCategory.delete({
        where,
        ...select,
      })
    },
  },
)
