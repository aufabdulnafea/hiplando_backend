import { queryField, nonNull } from 'nexus'

export const HorseDisciplineFindUniqueQuery = queryField(
  'findUniqueHorseDiscipline',
  {
    type: 'HorseDiscipline',
    args: {
      where: nonNull('HorseDisciplineWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.horseDiscipline.findUnique({
        where,
        ...select,
      })
    },
  },
)
