import { mutationField, nonNull } from 'nexus'

export const HorseCategoryUpsertOneMutation = mutationField(
  'upsertOneHorseCategory',
  {
    type: nonNull('HorseCategory'),
    args: {
      where: nonNull('HorseCategoryWhereUniqueInput'),
      create: nonNull('HorseCategoryCreateInput'),
      update: nonNull('HorseCategoryUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseCategory.upsert({
        ...args,
        ...select,
      })
    },
  },
)
