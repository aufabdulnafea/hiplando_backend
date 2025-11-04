import { queryField, list } from 'nexus'

export const HorseCategoryFindFirstQuery = queryField(
  'findFirstHorseCategory',
  {
    type: 'HorseCategory',
    args: {
      where: 'HorseCategoryWhereInput',
      orderBy: list('HorseCategoryOrderByWithRelationInput'),
      cursor: 'HorseCategoryWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('HorseCategoryScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseCategory.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
