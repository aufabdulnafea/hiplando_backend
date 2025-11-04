import { mutationField, nonNull } from 'nexus'

export const HorseGenderUpdateManyMutation = mutationField(
  'updateManyHorseGender',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('HorseGenderUpdateManyMutationInput'),
      where: 'HorseGenderWhereInput',
      limit: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.horseGender.updateMany(args as any)
    },
  },
)
