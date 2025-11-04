import { mutationField, nonNull } from 'nexus'

export const HorseVetReportUpsertOneMutation = mutationField(
  'upsertOneHorseVetReport',
  {
    type: nonNull('HorseVetReport'),
    args: {
      where: nonNull('HorseVetReportWhereUniqueInput'),
      create: nonNull('HorseVetReportCreateInput'),
      update: nonNull('HorseVetReportUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseVetReport.upsert({
        ...args,
        ...select,
      })
    },
  },
)
