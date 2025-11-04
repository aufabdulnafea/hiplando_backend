import { mutationField, nonNull } from 'nexus'

export const UserFavoriteHorsesUpdateManyMutation = mutationField(
  'updateManyUserFavoriteHorses',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('UserFavoriteHorsesUpdateManyMutationInput'),
      where: 'UserFavoriteHorsesWhereInput',
      limit: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.userFavoriteHorses.updateMany(args as any)
    },
  },
)
