import { mutationField, nonNull } from 'nexus'

export const UserReviewCreateOneMutation = mutationField(
  'createOneUserReview',
  {
    type: nonNull('UserReview'),
    args: {
      data: nonNull('UserReviewCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.userReview.create({
        data,
        ...select,
      })
    },
  },
)
