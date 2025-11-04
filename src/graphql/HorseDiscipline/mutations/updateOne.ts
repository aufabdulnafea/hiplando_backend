import { mutationField, nonNull } from 'nexus'

export const HorseDisciplineUpdateOneMutation = mutationField(
  'updateOneHorseDiscipline',
  {
    type: nonNull('HorseDiscipline'),
    args: {
      data: nonNull('HorseDisciplineUpdateInput'),
      where: nonNull('HorseDisciplineWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.horseDiscipline.update({
        where,
        data,
        ...select,
      })
    },
  },
)
