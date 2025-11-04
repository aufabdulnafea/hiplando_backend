import { mutationField, nonNull } from 'nexus'

export const HorseDeleteManyMutation = mutationField('deleteManyHorse', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'HorseWhereInput',
    limit: 'Int',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.horse.deleteMany({ where } as any)
  },
})
