import { queryField, list } from 'nexus'

export const UserReviewAggregateQuery = queryField('aggregateUserReview', {
  type: 'AggregateUserReview',
  args: {
    where: 'UserReviewWhereInput',
    orderBy: list('UserReviewOrderByWithRelationInput'),
    cursor: 'UserReviewWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.userReview.aggregate({ ...args, ...select }) as any
  },
})
