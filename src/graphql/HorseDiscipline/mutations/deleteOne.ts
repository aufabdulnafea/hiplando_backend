import { mutationField, nonNull } from 'nexus'

export const HorseDisciplineDeleteOneMutation = mutationField(
  'deleteOneHorseDiscipline',
  {
    type: 'HorseDiscipline',
    args: {
      where: nonNull('HorseDisciplineWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.horseDiscipline.delete({
        where,
        ...select,
      })
    },
  },
)
