import { readFileSync } from 'node:fs'
import path from 'node:path'
import { createSchema, createYoga } from 'graphql-yoga'
import { resolvers } from './resolvers.js'
import { createContext } from '../context.js'

const typeDefs = readFileSync(path.join('src', 'graphql', 'schema.graphql'), 'utf8')

export const yoga = createYoga({
    schema: createSchema({
        typeDefs,
        resolvers
    }),
    context: createContext,
    graphiql: true
})