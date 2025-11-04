import { objectType, list } from 'nexus'

export const HorseGender = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'HorseGender',
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
      type: 'HorseGenderCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
