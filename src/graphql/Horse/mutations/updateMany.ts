import { mutationField, nonNull } from 'nexus'

export const HorseUpdateManyMutation = mutationField('updateManyHorse', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('HorseUpdateManyMutationInput'),
    where: 'HorseWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.horse.updateMany(args as any)
  },
})
