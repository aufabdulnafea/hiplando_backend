import { objectType } from 'nexus'

export const UserFavoriteHorses = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'UserFavoriteHorses',
  definition(t) {
    t.string('id')
    t.string('userId')
    t.string('horseId')
    t.field('createdAt', { type: 'DateTime' })
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.field('horse', {
      type: 'Horse',
      resolve(root: any) {
        return root.horse
      },
    })
  },
})
