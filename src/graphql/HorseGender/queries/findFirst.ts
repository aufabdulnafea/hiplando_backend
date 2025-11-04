import { queryField, list } from 'nexus'

export const HorseGenderFindFirstQuery = queryField('findFirstHorseGender', {
  type: 'HorseGender',
  args: {
    where: 'HorseGenderWhereInput',
    orderBy: list('HorseGenderOrderByWithRelationInput'),
    cursor: 'HorseGenderWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('HorseGenderScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.horseGender.findFirst({
      ...args,
      ...select,
    })
  },
})
