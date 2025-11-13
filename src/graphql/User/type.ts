import { objectType, list } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.string('uid')
    t.string('name')
    t.nullable.string('phoneNumber')
    t.nullable.string('email')
    t.nullable.string('whatsAppNumber')
    t.boolean('verifiedSeller')
    t.field('role', { type: 'UserRole' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('userFavoriteHorses', {
      type: 'UserFavoriteHorses',
      args: {
        where: 'UserFavoriteHorsesWhereInput',
        orderBy: list('UserFavoriteHorsesOrderByWithRelationInput'),
        cursor: 'UserFavoriteHorsesWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('UserFavoriteHorsesScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.userFavoriteHorses
      },
    })
    t.list.field('notifications', {
      type: 'Notification',
      args: {
        where: 'NotificationWhereInput',
        orderBy: list('NotificationOrderByWithRelationInput'),
        cursor: 'NotificationWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('NotificationScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.notifications
      },
    })
    t.list.field('horses', {
      type: 'Horse',
      args: {
        where: 'HorseWhereInput',
        orderBy: list('HorseOrderByWithRelationInput'),
        cursor: 'HorseWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('HorseScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.horses
      },
    })
    t.list.field('reviews', {
      type: 'UserReview',
      args: {
        where: 'UserReviewWhereInput',
        orderBy: list('UserReviewOrderByWithRelationInput'),
        cursor: 'UserReviewWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('UserReviewScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.reviews
      },
    })
    t.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
