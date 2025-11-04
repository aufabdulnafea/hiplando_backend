import { objectType } from 'nexus'

export const HorseVetReport = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'HorseVetReport',
  definition(t) {
    t.string('id')
    t.string('horseId')
    t.string('reportUrl')
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
