import { queryField, nonNull } from 'nexus'

export const UserFavoriteHorsesFindUniqueQuery = queryField(
  'findUniqueUserFavoriteHorses',
  {
    type: 'UserFavoriteHorses',
    args: {
      where: nonNull('UserFavoriteHorsesWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.userFavoriteHorses.findUnique({
        where,
        ...select,
      })
    },
  },
)
