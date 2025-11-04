import { objectType } from 'nexus'

export const HorseImage = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'HorseImage',
  definition(t) {
    t.string('id')
    t.string('url')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.string('horseId')
    t.field('horse', {
      type: 'Horse',
      resolve(root: any) {
        return root.horse
      },
    })
  },
})
