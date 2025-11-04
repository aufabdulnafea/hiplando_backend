import { objectType, list } from 'nexus'

export const HorseDiscipline = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'HorseDiscipline',
  definition(t) {
    t.string('id')
    t.string('name')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('horses', {
      type: 'Horse',
      args: {
        where: 'HorseWhereInput',
        orderBy: list('HorseOrderByWithRelationInput'),
        cursor: 'HorseWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('HorseScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.horses
      },
    })
    t.field('_count', {
      type: 'HorseDisciplineCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
