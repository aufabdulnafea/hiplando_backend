import { objectType, list } from 'nexus'


export const Horse = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Horse',
  definition(t) {
    t.string('id')
    t.string('userUid')
    t.string('categoryId')
    t.string('name')
    t.nullable.string('pedigreeURL')
    t.int('yearOfBirth')
    t.string('genderId')
    t.int('height')
    t.string('disciplineId')
    t.string('location')
    t.float('price')
    t.string('description')
    t.list.string('photos')
    t.nullable.string('videoURL')
    t.nullable.string('vetReport')
    t.nullable.string('xrayResults')
    t.field('status', { type: 'HorseStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('pedigree', { type: 'Json' })
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.field('category', {
      type: 'HorseCategory',
      resolve(root: any) {
        return root.category
      },
    })
    t.field('gender', {
      type: 'HorseGender',
      resolve(root: any) {
        return root.gender
      },
    })
    t.field('discipline', {
      type: 'HorseDiscipline',
      resolve(root: any) {
        return root.discipline
      },
    })
    t.list.field('favoriteByUsers', {
      type: 'UserFavoriteHorses',
      args: {
        where: 'UserFavoriteHorsesWhereInput',
        orderBy: list('UserFavoriteHorsesOrderByWithRelationInput'),
        cursor: 'UserFavoriteHorsesWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('UserFavoriteHorsesScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.favoriteByUsers
      },
    })
    t.field('_count', {
      type: 'HorseCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
