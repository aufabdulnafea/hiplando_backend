import { queryField, nonNull, list } from 'nexus'

export const HorseXrayResultsFindCountQuery = queryField(
  'findManyHorseXrayResultsCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'HorseXrayResultsWhereInput',
      orderBy: list('HorseXrayResultsOrderByWithRelationInput'),
      cursor: 'HorseXrayResultsWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('HorseXrayResultsScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.horseXrayResults.count(args as any)
    },
  },
)
