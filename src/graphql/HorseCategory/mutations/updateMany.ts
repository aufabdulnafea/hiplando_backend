import { mutationField, nonNull } from 'nexus'

export const HorseCategoryUpdateManyMutation = mutationField(
  'updateManyHorseCategory',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('HorseCategoryUpdateManyMutationInput'),
      where: 'HorseCategoryWhereInput',
      limit: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.horseCategory.updateMany(args as any)
    },
  },
)
