import { queryField, nonNull, list } from 'nexus'

export const HorseGenderFindCountQuery = queryField(
  'findManyHorseGenderCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'HorseGenderWhereInput',
      orderBy: list('HorseGenderOrderByWithRelationInput'),
      cursor: 'HorseGenderWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('HorseGenderScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.horseGender.count(args as any)
    },
  },
)
