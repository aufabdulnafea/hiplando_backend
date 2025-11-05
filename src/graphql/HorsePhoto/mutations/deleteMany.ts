import { mutationField, nonNull } from 'nexus'

export const HorsePhotoDeleteManyMutation = mutationField(
  'deleteManyHorsePhoto',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'HorsePhotoWhereInput',
      limit: 'Int',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.horsePhoto.deleteMany({ where } as any)
    },
  },
)
