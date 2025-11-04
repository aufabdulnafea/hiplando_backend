import { queryField, list } from 'nexus'

export const UserFavoriteHorsesFindFirstQuery = queryField(
  'findFirstUserFavoriteHorses',
  {
    type: 'UserFavoriteHorses',
    args: {
      where: 'UserFavoriteHorsesWhereInput',
      orderBy: list('UserFavoriteHorsesOrderByWithRelationInput'),
      cursor: 'UserFavoriteHorsesWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('UserFavoriteHorsesScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.userFavoriteHorses.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
