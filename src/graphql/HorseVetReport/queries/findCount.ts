import { queryField, nonNull, list } from 'nexus'

export const HorseVetReportFindCountQuery = queryField(
  'findManyHorseVetReportCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'HorseVetReportWhereInput',
      orderBy: list('HorseVetReportOrderByWithRelationInput'),
      cursor: 'HorseVetReportWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('HorseVetReportScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.horseVetReport.count(args as any)
    },
  },
)
