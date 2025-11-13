import { createYoga } from 'graphql-yoga';
import * as GeneratedTypes from './graphql';
import { makeSchema } from 'nexus';
import { paljs } from '@paljs/nexus';
import { createContext } from './context';

const schema = makeSchema({
    types: [GeneratedTypes],
    plugins: [
        paljs({
            includeAdmin: true,
            adminSchemaPath: '../prisma/schema/schema.prisma',
            prismaSelectOptions: {
                defaultFields: { User: { id: true, email: true } },
                excludeFields: { User: ['password'] },
            },
        }),
    ],
});

export const yoga = createYoga({ schema, context: createContext, cors: false });