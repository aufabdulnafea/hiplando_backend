import { mutationField, nonNull } from 'nexus'

export const UserReviewUpsertOneMutation = mutationField(
  'upsertOneUserReview',
  {
    type: nonNull('UserReview'),
    args: {
      where: nonNull('UserReviewWhereUniqueInput'),
      create: nonNull('UserReviewCreateInput'),
      update: nonNull('UserReviewUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.userReview.upsert({
        ...args,
        ...select,
      })
    },
  },
)
