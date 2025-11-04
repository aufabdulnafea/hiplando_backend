import { mutationField, nonNull } from 'nexus'

export const UserReviewUpdateOneMutation = mutationField(
  'updateOneUserReview',
  {
    type: nonNull('UserReview'),
    args: {
      data: nonNull('UserReviewUpdateInput'),
      where: nonNull('UserReviewWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.userReview.update({
        where,
        data,
        ...select,
      })
    },
  },
)
