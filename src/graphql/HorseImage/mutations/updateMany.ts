import { mutationField, nonNull } from 'nexus'

export const HorseImageUpdateManyMutation = mutationField(
  'updateManyHorseImage',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('HorseImageUpdateManyMutationInput'),
      where: 'HorseImageWhereInput',
      limit: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.horseImage.updateMany(args as any)
    },
  },
)
