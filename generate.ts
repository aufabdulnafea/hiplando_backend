import { Generator } from '@paljs/generator';

const generator = new Generator(
  {
    name: 'sdl', // 'nexus' | 'sdl' | 'graphql-modules'
    schemaPath: './prisma/schema.prisma',
  },
  {
    output: './src/graphql2/',
    excludeFields: ['password'],
    // ... other options
  },
);

await generator.run();