import { mutationField, nonNull } from 'nexus'

export const HorsePhotoUpdateOneMutation = mutationField(
  'updateOneHorsePhoto',
  {
    type: nonNull('HorsePhoto'),
    args: {
      data: nonNull('HorsePhotoUpdateInput'),
      where: nonNull('HorsePhotoWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.horsePhoto.update({
        where,
        data,
        ...select,
      })
    },
  },
)
