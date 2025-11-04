import { mutationField, nonNull } from 'nexus'

export const HorseVetReportDeleteOneMutation = mutationField(
  'deleteOneHorseVetReport',
  {
    type: 'HorseVetReport',
    args: {
      where: nonNull('HorseVetReportWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.horseVetReport.delete({
        where,
        ...select,
      })
    },
  },
)
