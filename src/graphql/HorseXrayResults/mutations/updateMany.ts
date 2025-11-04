import { mutationField, nonNull } from 'nexus'

export const HorseXrayResultsUpdateManyMutation = mutationField(
  'updateManyHorseXrayResults',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('HorseXrayResultsUpdateManyMutationInput'),
      where: 'HorseXrayResultsWhereInput',
      limit: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.horseXrayResults.updateMany(args as any)
    },
  },
)
