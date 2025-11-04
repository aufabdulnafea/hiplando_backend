import { mutationField, nonNull } from 'nexus'

export const HorseXrayResultsDeleteManyMutation = mutationField(
  'deleteManyHorseXrayResults',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'HorseXrayResultsWhereInput',
      limit: 'Int',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.horseXrayResults.deleteMany({ where } as any)
    },
  },
)
