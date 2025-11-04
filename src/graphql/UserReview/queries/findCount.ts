import { queryField, nonNull, list } from 'nexus'

export const UserReviewFindCountQuery = queryField('findManyUserReviewCount', {
  type: nonNull('Int'),
  args: {
    where: 'UserReviewWhereInput',
    orderBy: list('UserReviewOrderByWithRelationInput'),
    cursor: 'UserReviewWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('UserReviewScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.userReview.count(args as any)
  },
})
