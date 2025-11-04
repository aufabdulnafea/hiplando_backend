import { queryField, nonNull } from 'nexus'

export const HorseCategoryFindUniqueQuery = queryField(
  'findUniqueHorseCategory',
  {
    type: 'HorseCategory',
    args: {
      where: nonNull('HorseCategoryWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.horseCategory.findUnique({
        where,
        ...select,
      })
    },
  },
)
