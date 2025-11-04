import { mutationField, nonNull } from 'nexus'

export const UserFavoriteHorsesUpdateOneMutation = mutationField(
  'updateOneUserFavoriteHorses',
  {
    type: nonNull('UserFavoriteHorses'),
    args: {
      data: nonNull('UserFavoriteHorsesUpdateInput'),
      where: nonNull('UserFavoriteHorsesWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.userFavoriteHorses.update({
        where,
        data,
        ...select,
      })
    },
  },
)
