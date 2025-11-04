import { mutationField, nonNull } from 'nexus'

export const HorseUpsertOneMutation = mutationField('upsertOneHorse', {
  type: nonNull('Horse'),
  args: {
    where: nonNull('HorseWhereUniqueInput'),
    create: nonNull('HorseCreateInput'),
    update: nonNull('HorseUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.horse.upsert({
      ...args,
      ...select,
    })
  },
})
