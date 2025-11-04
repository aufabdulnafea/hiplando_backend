import { queryField, nonNull } from 'nexus'

export const HorseVetReportFindUniqueQuery = queryField(
  'findUniqueHorseVetReport',
  {
    type: 'HorseVetReport',
    args: {
      where: nonNull('HorseVetReportWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.horseVetReport.findUnique({
        where,
        ...select,
      })
    },
  },
)
