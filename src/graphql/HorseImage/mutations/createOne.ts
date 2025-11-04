import { mutationField, nonNull } from 'nexus'

export const HorseImageCreateOneMutation = mutationField(
  'createOneHorseImage',
  {
    type: nonNull('HorseImage'),
    args: {
      data: nonNull('HorseImageCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.horseImage.create({
        data,
        ...select,
      })
    },
  },
)
