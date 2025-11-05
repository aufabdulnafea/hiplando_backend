import { mutationField, nonNull } from 'nexus'

export const HorsePhotoUpdateManyMutation = mutationField(
  'updateManyHorsePhoto',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('HorsePhotoUpdateManyMutationInput'),
      where: 'HorsePhotoWhereInput',
      limit: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.horsePhoto.updateMany(args as any)
    },
  },
)
