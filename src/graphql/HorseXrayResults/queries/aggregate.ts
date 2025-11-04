import { queryField, list } from 'nexus'

export const HorseXrayResultsAggregateQuery = queryField(
  'aggregateHorseXrayResults',
  {
    type: 'AggregateHorseXrayResults',
    args: {
      where: 'HorseXrayResultsWhereInput',
      orderBy: list('HorseXrayResultsOrderByWithRelationInput'),
      cursor: 'HorseXrayResultsWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseXrayResults.aggregate({ ...args, ...select }) as any
    },
  },
)
