import { Generator } from '@paljs/generator';

async function main() {
  const generator = new Generator(
    {
      name: 'nexus',
      schemaPath: './prisma/schema.prisma',
    },
    {
      output: './src/graphql/',
      excludeFields: ['password'],
    },
  );

  await generator.run();
  console.log('✅ GraphQL files generated');
}

main().catch(console.error);