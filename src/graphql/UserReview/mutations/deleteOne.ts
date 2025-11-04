import { mutationField, nonNull } from 'nexus'

export const UserReviewDeleteOneMutation = mutationField(
  'deleteOneUserReview',
  {
    type: 'UserReview',
    args: {
      where: nonNull('UserReviewWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.userReview.delete({
        where,
        ...select,
      })
    },
  },
)
