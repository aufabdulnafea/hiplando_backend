import { objectType } from 'nexus'

export const UserReview = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'UserReview',
  definition(t) {
    t.string('id')
    t.string('userId')
    t.string('reviewer')
    t.int('rating')
    t.nullable.string('comment')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
  },
})
