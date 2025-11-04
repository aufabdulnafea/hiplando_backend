import { mutationField, nonNull } from 'nexus'

export const HorseXrayResultsUpdateOneMutation = mutationField(
  'updateOneHorseXrayResults',
  {
    type: nonNull('HorseXrayResults'),
    args: {
      data: nonNull('HorseXrayResultsUpdateInput'),
      where: nonNull('HorseXrayResultsWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.horseXrayResults.update({
        where,
        data,
        ...select,
      })
    },
  },
)
