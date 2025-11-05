import { mutationField, nonNull } from 'nexus'

export const HorsePhotoUpsertOneMutation = mutationField(
  'upsertOneHorsePhoto',
  {
    type: nonNull('HorsePhoto'),
    args: {
      where: nonNull('HorsePhotoWhereUniqueInput'),
      create: nonNull('HorsePhotoCreateInput'),
      update: nonNull('HorsePhotoUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horsePhoto.upsert({
        ...args,
        ...select,
      })
    },
  },
)
