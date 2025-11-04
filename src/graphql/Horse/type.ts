import { objectType, list } from 'nexus'

export const Horse = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Horse',
  definition(t) {
    t.string('id')
    t.string('userId')
    t.string('categoryId')
    t.string('name')
    t.nullable.string('pedigree')
    t.int('age')
    t.string('genderId')
    t.int('height')
    t.string('disciplineId')
    t.string('location')
    t.float('price')
    t.string('description')
    t.boolean('veterinaryDocumentAvailable')
    t.boolean('xrayResultsAvailable')
    t.nullable.string('videoUrl')
    t.string('status')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
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
    t.list.field('images', {
      type: 'HorseImage',
      args: {
        where: 'HorseImageWhereInput',
        orderBy: list('HorseImageOrderByWithRelationInput'),
        cursor: 'HorseImageWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('HorseImageScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.images
      },
    })
    t.nullable.field('vetReport', {
      type: 'HorseVetReport',
      args: {
        where: 'HorseVetReportWhereInput',
      },
      resolve(root: any) {
        return root.vetReport
      },
    })
    t.nullable.field('xrayResults', {
      type: 'HorseXrayResults',
      args: {
        where: 'HorseXrayResultsWhereInput',
      },
      resolve(root: any) {
        return root.xrayResults
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
