import { mutationField, nonNull } from 'nexus'

export const HorseXrayResultsDeleteOneMutation = mutationField(
  'deleteOneHorseXrayResults',
  {
    type: 'HorseXrayResults',
    args: {
      where: nonNull('HorseXrayResultsWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.horseXrayResults.delete({
        where,
        ...select,
      })
    },
  },
)
