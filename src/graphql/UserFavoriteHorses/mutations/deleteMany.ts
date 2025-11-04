import { mutationField, nonNull } from 'nexus'

export const UserFavoriteHorsesDeleteManyMutation = mutationField(
  'deleteManyUserFavoriteHorses',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'UserFavoriteHorsesWhereInput',
      limit: 'Int',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.userFavoriteHorses.deleteMany({ where } as any)
    },
  },
)
