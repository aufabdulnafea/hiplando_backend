import { mutationField, nonNull } from 'nexus'

export const HorseCategoryDeleteManyMutation = mutationField(
  'deleteManyHorseCategory',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'HorseCategoryWhereInput',
      limit: 'Int',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.horseCategory.deleteMany({ where } as any)
    },
  },
)
