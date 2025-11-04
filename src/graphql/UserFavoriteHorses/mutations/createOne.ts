import { mutationField, nonNull } from 'nexus'

export const UserFavoriteHorsesCreateOneMutation = mutationField(
  'createOneUserFavoriteHorses',
  {
    type: nonNull('UserFavoriteHorses'),
    args: {
      data: nonNull('UserFavoriteHorsesCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.userFavoriteHorses.create({
        data,
        ...select,
      })
    },
  },
)
