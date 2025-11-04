import { mutationField, nonNull } from 'nexus'

export const HorseVetReportCreateOneMutation = mutationField(
  'createOneHorseVetReport',
  {
    type: nonNull('HorseVetReport'),
    args: {
      data: nonNull('HorseVetReportCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.horseVetReport.create({
        data,
        ...select,
      })
    },
  },
)
