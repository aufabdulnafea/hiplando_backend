import { mutationField, nonNull } from 'nexus'

export const HorseXrayResultsCreateOneMutation = mutationField(
  'createOneHorseXrayResults',
  {
    type: nonNull('HorseXrayResults'),
    args: {
      data: nonNull('HorseXrayResultsCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.horseXrayResults.create({
        data,
        ...select,
      })
    },
  },
)
