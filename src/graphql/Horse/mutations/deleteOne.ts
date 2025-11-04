import { mutationField, nonNull } from 'nexus'

export const HorseDeleteOneMutation = mutationField('deleteOneHorse', {
  type: 'Horse',
  args: {
    where: nonNull('HorseWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.horse.delete({
      where,
      ...select,
    })
  },
})
