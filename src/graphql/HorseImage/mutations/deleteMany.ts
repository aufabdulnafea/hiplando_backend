import { mutationField, nonNull } from 'nexus'

export const HorseImageDeleteManyMutation = mutationField(
  'deleteManyHorseImage',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'HorseImageWhereInput',
      limit: 'Int',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.horseImage.deleteMany({ where } as any)
    },
  },
)
