import { mutationField, nonNull } from 'nexus'

export const UserReviewDeleteManyMutation = mutationField(
  'deleteManyUserReview',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'UserReviewWhereInput',
      limit: 'Int',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.userReview.deleteMany({ where } as any)
    },
  },
)
