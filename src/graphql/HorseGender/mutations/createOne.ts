import { mutationField, nonNull } from 'nexus'

export const HorseGenderCreateOneMutation = mutationField(
  'createOneHorseGender',
  {
    type: nonNull('HorseGender'),
    args: {
      data: nonNull('HorseGenderCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.horseGender.create({
        data,
        ...select,
      })
    },
  },
)
