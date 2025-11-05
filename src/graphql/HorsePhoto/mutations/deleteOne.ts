import { mutationField, nonNull } from 'nexus'

export const HorsePhotoDeleteOneMutation = mutationField(
  'deleteOneHorsePhoto',
  {
    type: 'HorsePhoto',
    args: {
      where: nonNull('HorsePhotoWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.horsePhoto.delete({
        where,
        ...select,
      })
    },
  },
)
