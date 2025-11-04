import { queryField, nonNull, list } from 'nexus'

export const HorseGenderFindManyQuery = queryField('findManyHorseGender', {
  type: nonNull(list(nonNull('HorseGender'))),
  args: {
    where: 'HorseGenderWhereInput',
    orderBy: list('HorseGenderOrderByWithRelationInput'),
    cursor: 'HorseGenderWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('HorseGenderScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.horseGender.findMany({
      ...args,
      ...select,
    })
  },
})
