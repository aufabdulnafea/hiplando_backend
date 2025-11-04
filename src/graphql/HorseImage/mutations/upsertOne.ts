import { mutationField, nonNull } from 'nexus'

export const HorseImageUpsertOneMutation = mutationField(
  'upsertOneHorseImage',
  {
    type: nonNull('HorseImage'),
    args: {
      where: nonNull('HorseImageWhereUniqueInput'),
      create: nonNull('HorseImageCreateInput'),
      update: nonNull('HorseImageUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseImage.upsert({
        ...args,
        ...select,
      })
    },
  },
)
