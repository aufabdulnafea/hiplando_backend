import { queryField, list } from 'nexus'

export const HorseXrayResultsFindFirstQuery = queryField(
  'findFirstHorseXrayResults',
  {
    type: 'HorseXrayResults',
    args: {
      where: 'HorseXrayResultsWhereInput',
      orderBy: list('HorseXrayResultsOrderByWithRelationInput'),
      cursor: 'HorseXrayResultsWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('HorseXrayResultsScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseXrayResults.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
