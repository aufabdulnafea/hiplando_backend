import { queryField, list } from 'nexus'

export const HorseDisciplineFindFirstQuery = queryField(
  'findFirstHorseDiscipline',
  {
    type: 'HorseDiscipline',
    args: {
      where: 'HorseDisciplineWhereInput',
      orderBy: list('HorseDisciplineOrderByWithRelationInput'),
      cursor: 'HorseDisciplineWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('HorseDisciplineScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseDiscipline.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
