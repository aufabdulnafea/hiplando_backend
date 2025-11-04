import { createYoga } from 'graphql-yoga'
import * as GeneratedTypes from './graphql'

import { makeSchema } from 'nexus';
import { paljs } from '@paljs/nexus';
import { prisma } from './context';


const schema = makeSchema({
    types: [GeneratedTypes],
    plugins: [
        paljs({
            // Plugin configuration
            includeAdmin: true,
            adminSchemaPath: '../prisma/schema.prisma',
            prismaSelectOptions: {
                defaultFields: {
                    User: { id: true, email: true },
                },
                excludeFields: {
                    User: ['password'],
                },
            },
        }),
    ],
});


export const yoga = createYoga({ schema, context: { prisma } })