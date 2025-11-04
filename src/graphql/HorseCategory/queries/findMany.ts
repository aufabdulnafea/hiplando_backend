import { queryField, nonNull, list } from 'nexus'

export const HorseCategoryFindManyQuery = queryField('findManyHorseCategory', {
  type: nonNull(list(nonNull('HorseCategory'))),
  args: {
    where: 'HorseCategoryWhereInput',
    orderBy: list('HorseCategoryOrderByWithRelationInput'),
    cursor: 'HorseCategoryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('HorseCategoryScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.horseCategory.findMany({
      ...args,
      ...select,
    })
  },
})
