import { mutationField, nonNull } from 'nexus'

export const UserReviewUpdateManyMutation = mutationField(
  'updateManyUserReview',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('UserReviewUpdateManyMutationInput'),
      where: 'UserReviewWhereInput',
      limit: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.userReview.updateMany(args as any)
    },
  },
)
