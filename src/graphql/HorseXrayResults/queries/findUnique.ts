import { queryField, nonNull } from 'nexus'

export const HorseXrayResultsFindUniqueQuery = queryField(
  'findUniqueHorseXrayResults',
  {
    type: 'HorseXrayResults',
    args: {
      where: nonNull('HorseXrayResultsWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.horseXrayResults.findUnique({
        where,
        ...select,
      })
    },
  },
)
