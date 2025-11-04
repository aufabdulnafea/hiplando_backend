import { mutationField, nonNull } from 'nexus'

export const UserDeleteManyMutation = mutationField('deleteManyUser', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'UserWhereInput',
    limit: 'Int',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.user.deleteMany({ where } as any)
  },
})
