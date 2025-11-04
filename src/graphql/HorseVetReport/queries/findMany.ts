import { queryField, nonNull, list } from 'nexus'

export const HorseVetReportFindManyQuery = queryField(
  'findManyHorseVetReport',
  {
    type: nonNull(list(nonNull('HorseVetReport'))),
    args: {
      where: 'HorseVetReportWhereInput',
      orderBy: list('HorseVetReportOrderByWithRelationInput'),
      cursor: 'HorseVetReportWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('HorseVetReportScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseVetReport.findMany({
        ...args,
        ...select,
      })
    },
  },
)
