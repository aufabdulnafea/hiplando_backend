import { mutationField, nonNull } from 'nexus'

export const HorseDisciplineUpdateManyMutation = mutationField(
  'updateManyHorseDiscipline',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('HorseDisciplineUpdateManyMutationInput'),
      where: 'HorseDisciplineWhereInput',
      limit: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.horseDiscipline.updateMany(args as any)
    },
  },
)
