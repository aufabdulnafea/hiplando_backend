import { queryField, nonNull, list } from 'nexus'

export const UserFavoriteHorsesFindCountQuery = queryField(
  'findManyUserFavoriteHorsesCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'UserFavoriteHorsesWhereInput',
      orderBy: list('UserFavoriteHorsesOrderByWithRelationInput'),
      cursor: 'UserFavoriteHorsesWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('UserFavoriteHorsesScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.userFavoriteHorses.count(args as any)
    },
  },
)
