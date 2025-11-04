import { queryField, nonNull, list } from 'nexus'

export const UserFavoriteHorsesFindManyQuery = queryField(
  'findManyUserFavoriteHorses',
  {
    type: nonNull(list(nonNull('UserFavoriteHorses'))),
    args: {
      where: 'UserFavoriteHorsesWhereInput',
      orderBy: list('UserFavoriteHorsesOrderByWithRelationInput'),
      cursor: 'UserFavoriteHorsesWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('UserFavoriteHorsesScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.userFavoriteHorses.findMany({
        ...args,
        ...select,
      })
    },
  },
)
