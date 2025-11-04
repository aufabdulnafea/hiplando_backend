import { queryField, nonNull, list } from 'nexus'

export const HorseDisciplineFindCountQuery = queryField(
  'findManyHorseDisciplineCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'HorseDisciplineWhereInput',
      orderBy: list('HorseDisciplineOrderByWithRelationInput'),
      cursor: 'HorseDisciplineWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('HorseDisciplineScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.horseDiscipline.count(args as any)
    },
  },
)
