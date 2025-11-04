import { queryField, nonNull, list } from 'nexus'

export const HorseDisciplineFindManyQuery = queryField(
  'findManyHorseDiscipline',
  {
    type: nonNull(list(nonNull('HorseDiscipline'))),
    args: {
      where: 'HorseDisciplineWhereInput',
      orderBy: list('HorseDisciplineOrderByWithRelationInput'),
      cursor: 'HorseDisciplineWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('HorseDisciplineScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseDiscipline.findMany({
        ...args,
        ...select,
      })
    },
  },
)
