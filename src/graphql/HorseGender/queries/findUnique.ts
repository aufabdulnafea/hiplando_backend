import { queryField, nonNull } from 'nexus'

export const HorseGenderFindUniqueQuery = queryField('findUniqueHorseGender', {
  type: 'HorseGender',
  args: {
    where: nonNull('HorseGenderWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.horseGender.findUnique({
      where,
      ...select,
    })
  },
})
