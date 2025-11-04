import { mutationField, nonNull } from 'nexus'

export const HorseCreateOneMutation = mutationField('createOneHorse', {
  type: nonNull('Horse'),
  args: {
    data: nonNull('HorseCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.horse.create({
      data,
      ...select,
    })
  },
})
