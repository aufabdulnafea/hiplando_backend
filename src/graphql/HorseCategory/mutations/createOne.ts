import { mutationField, nonNull } from 'nexus'

export const HorseCategoryCreateOneMutation = mutationField(
  'createOneHorseCategory',
  {
    type: nonNull('HorseCategory'),
    args: {
      data: nonNull('HorseCategoryCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.horseCategory.create({
        data,
        ...select,
      })
    },
  },
)
