import { objectType } from 'nexus'

export const Notification = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Notification',
  definition(t) {
    t.string('id')
    t.string('userId')
    t.string('title')
    t.string('message')
    t.boolean('read')
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
