import { mutationField, nonNull } from 'nexus'

export const HorseCategoryUpdateOneMutation = mutationField(
  'updateOneHorseCategory',
  {
    type: nonNull('HorseCategory'),
    args: {
      data: nonNull('HorseCategoryUpdateInput'),
      where: nonNull('HorseCategoryWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.horseCategory.update({
        where,
        data,
        ...select,
      })
    },
  },
)
