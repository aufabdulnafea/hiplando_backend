import { mutationField, nonNull } from 'nexus'

export const HorseUpdateOneMutation = mutationField('updateOneHorse', {
  type: nonNull('Horse'),
  args: {
    data: nonNull('HorseUpdateInput'),
    where: nonNull('HorseWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.horse.update({
      where,
      data,
      ...select,
    })
  },
})
