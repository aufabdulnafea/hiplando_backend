import { queryField, nonNull, list } from 'nexus'
import { Context } from '../../../context'

export const HorseFindManyQuery = queryField('findManyHorse', {
  type: nonNull(list(nonNull('Horse'))),
  args: {
    where: 'HorseWhereInput',
    orderBy: list('HorseOrderByWithRelationInput'),
    cursor: 'HorseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('HorseScalarFieldEnum'),
  },
  resolve: async (_parent, args, context: Context & { select: any }) => {
    const horses = await context.prisma.horse.findMany({
      ...args,
      // ...context.select,
      select: {
        ...(context.select?.select ?? {}),
        user: true,
      },
    })
    console.log(horses)
    return horses
    // return horses.filter((horse) => horse.status === 'ACCEPTED')
    // return horses.filter((horse: any) => horse.user.uid === context.user?.uid)
  },
})
