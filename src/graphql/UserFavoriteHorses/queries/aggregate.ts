import { queryField, list } from 'nexus'

export const UserFavoriteHorsesAggregateQuery = queryField(
  'aggregateUserFavoriteHorses',
  {
    type: 'AggregateUserFavoriteHorses',
    args: {
      where: 'UserFavoriteHorsesWhereInput',
      orderBy: list('UserFavoriteHorsesOrderByWithRelationInput'),
      cursor: 'UserFavoriteHorsesWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.userFavoriteHorses.aggregate({ ...args, ...select }) as any
    },
  },
)
