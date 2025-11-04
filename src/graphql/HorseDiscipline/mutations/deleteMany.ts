import { mutationField, nonNull } from 'nexus'

export const HorseDisciplineDeleteManyMutation = mutationField(
  'deleteManyHorseDiscipline',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'HorseDisciplineWhereInput',
      limit: 'Int',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.horseDiscipline.deleteMany({ where } as any)
    },
  },
)
