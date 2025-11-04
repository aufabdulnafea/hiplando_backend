import { mutationField, nonNull } from 'nexus'

export const UserFavoriteHorsesDeleteOneMutation = mutationField(
  'deleteOneUserFavoriteHorses',
  {
    type: 'UserFavoriteHorses',
    args: {
      where: nonNull('UserFavoriteHorsesWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.userFavoriteHorses.delete({
        where,
        ...select,
      })
    },
  },
)
