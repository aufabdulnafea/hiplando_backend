import { mutationField, nonNull } from 'nexus'

export const HorseGenderUpsertOneMutation = mutationField(
  'upsertOneHorseGender',
  {
    type: nonNull('HorseGender'),
    args: {
      where: nonNull('HorseGenderWhereUniqueInput'),
      create: nonNull('HorseGenderCreateInput'),
      update: nonNull('HorseGenderUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.horseGender.upsert({
        ...args,
        ...select,
      })
    },
  },
)
