import { mutationField, nonNull } from 'nexus'

export const HorseDisciplineCreateOneMutation = mutationField(
  'createOneHorseDiscipline',
  {
    type: nonNull('HorseDiscipline'),
    args: {
      data: nonNull('HorseDisciplineCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.horseDiscipline.create({
        data,
        ...select,
      })
    },
  },
)
