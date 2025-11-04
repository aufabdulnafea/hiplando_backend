import { mutationField, nonNull } from 'nexus'

export const HorseGenderUpdateOneMutation = mutationField(
  'updateOneHorseGender',
  {
    type: nonNull('HorseGender'),
    args: {
      data: nonNull('HorseGenderUpdateInput'),
      where: nonNull('HorseGenderWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.horseGender.update({
        where,
        data,
        ...select,
      })
    },
  },
)
