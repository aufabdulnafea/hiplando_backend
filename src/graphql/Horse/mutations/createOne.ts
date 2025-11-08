import { GraphQLError } from 'graphql'
import { mutationField, nonNull } from 'nexus'

export const HorseCreateOneMutation = mutationField('createOneHorse', {
  type: nonNull('Horse'),
  args: {
    data: nonNull('HorseCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select, user }) {
    console.log(user)
    if (!user) throw new GraphQLError("Not good", { extensions: { code: "UNAUTHORIZED" } })
    return prisma.horse.create({
      data,
      ...select,
    })
  },
})
