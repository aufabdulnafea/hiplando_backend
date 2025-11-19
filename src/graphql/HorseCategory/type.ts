import { objectType, list } from 'nexus'

export const HorseCategory = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'HorseCategory',
  definition(t) {
    t.string('id')
    t.string('name')
    t.string('imageURL')
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
      type: 'HorseCategoryCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
