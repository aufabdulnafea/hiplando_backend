import { mutationField, nonNull } from 'nexus'

export const UserFavoriteHorsesUpsertOneMutation = mutationField(
  'upsertOneUserFavoriteHorses',
  {
    type: nonNull('UserFavoriteHorses'),
    args: {
      where: nonNull('UserFavoriteHorsesWhereUniqueInput'),
      create: nonNull('UserFavoriteHorsesCreateInput'),
      update: nonNull('UserFavoriteHorsesUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.userFavoriteHorses.upsert({
        ...args,
        ...select,
      })
    },
  },
)
