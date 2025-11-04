import { mutationField, nonNull } from 'nexus'

export const HorseVetReportUpdateOneMutation = mutationField(
  'updateOneHorseVetReport',
  {
    type: nonNull('HorseVetReport'),
    args: {
      data: nonNull('HorseVetReportUpdateInput'),
      where: nonNull('HorseVetReportWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.horseVetReport.update({
        where,
        data,
        ...select,
      })
    },
  },
)
