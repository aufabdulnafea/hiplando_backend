import { mutationField, nonNull } from 'nexus'

export const HorseGenderDeleteManyMutation = mutationField(
  'deleteManyHorseGender',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'HorseGenderWhereInput',
      limit: 'Int',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.horseGender.deleteMany({ where } as any)
    },
  },
)
