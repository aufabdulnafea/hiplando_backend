import { mutationField, nonNull } from 'nexus'

export const HorsePhotoCreateOneMutation = mutationField(
  'createOneHorsePhoto',
  {
    type: nonNull('HorsePhoto'),
    args: {
      data: nonNull('HorsePhotoCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.horsePhoto.create({
        data,
        ...select,
      })
    },
  },
)
