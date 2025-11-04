import { mutationField, nonNull } from 'nexus'

export const HorseXrayResultsUpsertOneMutation = mutationField(
  'upsertOneHorseXrayResults',
  {
    type: nonNull('HorseXrayResults'),
    args: {
      where: nonNull('HorseXrayResultsWhereUniqueInput'),
      create: nonNull('HorseXrayResultsCreateInput'),
      update: nonNull('HorseXrayResultsUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseXrayResults.upsert({
        ...args,
        ...select,
      })
    },
  },
)
