import { mutationField, nonNull } from 'nexus'

export const HorseDisciplineUpsertOneMutation = mutationField(
  'upsertOneHorseDiscipline',
  {
    type: nonNull('HorseDiscipline'),
    args: {
      where: nonNull('HorseDisciplineWhereUniqueInput'),
      create: nonNull('HorseDisciplineCreateInput'),
      update: nonNull('HorseDisciplineUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseDiscipline.upsert({
        ...args,
        ...select,
      })
    },
  },
)
