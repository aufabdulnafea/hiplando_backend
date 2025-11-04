import { queryField, list } from 'nexus'

export const HorseVetReportAggregateQuery = queryField(
  'aggregateHorseVetReport',
  {
    type: 'AggregateHorseVetReport',
    args: {
      where: 'HorseVetReportWhereInput',
      orderBy: list('HorseVetReportOrderByWithRelationInput'),
      cursor: 'HorseVetReportWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseVetReport.aggregate({ ...args, ...select }) as any
    },
  },
)
