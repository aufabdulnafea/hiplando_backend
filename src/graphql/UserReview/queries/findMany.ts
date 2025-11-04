import { queryField, nonNull, list } from 'nexus'

export const UserReviewFindManyQuery = queryField('findManyUserReview', {
  type: nonNull(list(nonNull('UserReview'))),
  args: {
    where: 'UserReviewWhereInput',
    orderBy: list('UserReviewOrderByWithRelationInput'),
    cursor: 'UserReviewWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('UserReviewScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.userReview.findMany({
      ...args,
      ...select,
    })
  },
})
