import { queryField, list } from 'nexus'

export const UserReviewFindFirstQuery = queryField('findFirstUserReview', {
  type: 'UserReview',
  args: {
    where: 'UserReviewWhereInput',
    orderBy: list('UserReviewOrderByWithRelationInput'),
    cursor: 'UserReviewWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('UserReviewScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.userReview.findFirst({
      ...args,
      ...select,
    })
  },
})
