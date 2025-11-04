import { mutationField, nonNull } from 'nexus'

export const HorseVetReportUpdateManyMutation = mutationField(
  'updateManyHorseVetReport',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('HorseVetReportUpdateManyMutationInput'),
      where: 'HorseVetReportWhereInput',
      limit: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.horseVetReport.updateMany(args as any)
    },
  },
)
