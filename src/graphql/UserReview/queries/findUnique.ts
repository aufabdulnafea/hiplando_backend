import { queryField, nonNull } from 'nexus'

export const UserReviewFindUniqueQuery = queryField('findUniqueUserReview', {
  type: 'UserReview',
  args: {
    where: nonNull('UserReviewWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.userReview.findUnique({
      where,
      ...select,
    })
  },
})
