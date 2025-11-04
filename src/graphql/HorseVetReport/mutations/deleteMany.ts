import { mutationField, nonNull } from 'nexus'

export const HorseVetReportDeleteManyMutation = mutationField(
  'deleteManyHorseVetReport',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'HorseVetReportWhereInput',
      limit: 'Int',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.horseVetReport.deleteMany({ where } as any)
    },
  },
)
