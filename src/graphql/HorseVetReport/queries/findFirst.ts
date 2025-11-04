import { queryField, list } from 'nexus'

export const HorseVetReportFindFirstQuery = queryField(
  'findFirstHorseVetReport',
  {
    type: 'HorseVetReport',
    args: {
      where: 'HorseVetReportWhereInput',
      orderBy: list('HorseVetReportOrderByWithRelationInput'),
      cursor: 'HorseVetReportWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('HorseVetReportScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseVetReport.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
