import { queryField, nonNull, list } from 'nexus'

export const HorseXrayResultsFindManyQuery = queryField(
  'findManyHorseXrayResults',
  {
    type: nonNull(list(nonNull('HorseXrayResults'))),
    args: {
      where: 'HorseXrayResultsWhereInput',
      orderBy: list('HorseXrayResultsOrderByWithRelationInput'),
      cursor: 'HorseXrayResultsWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('HorseXrayResultsScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseXrayResults.findMany({
        ...args,
        ...select,
      })
    },
  },
)
