import { objectType } from 'nexus'

export const HorseXrayResults = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'HorseXrayResults',
  definition(t) {
    t.string('id')
    t.string('horseId')
    t.string('url')
    t.boolean('public')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('horse', {
      type: 'Horse',
      resolve(root: any) {
        return root.horse
      },
    })
  },
})
