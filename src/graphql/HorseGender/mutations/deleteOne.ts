import { mutationField, nonNull } from 'nexus'

export const HorseGenderDeleteOneMutation = mutationField(
  'deleteOneHorseGender',
  {
    type: 'HorseGender',
    args: {
      where: nonNull('HorseGenderWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.horseGender.delete({
        where,
        ...select,
      })
    },
  },
)
