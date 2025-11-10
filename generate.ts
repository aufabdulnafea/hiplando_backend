import fs from 'fs/promises'
import { Generator } from '@paljs/generator';
import path from 'path';

async function main() {
  let generatedSchemaContent = ""
  // const mainSchemaPath = './prisma/schema.prisma'
  // generatedSchemaContent += await fs.readFile(mainSchemaPath, 'utf-8')
  const schemasDir = './prisma/schema'
  const schemas = (await fs.readdir(schemasDir)).filter(file => path.extname(file).toLowerCase() === ".prisma")
  for (const schema of schemas) {
    generatedSchemaContent += "\n\n"
    generatedSchemaContent += await fs.readFile(path.join("./prisma/schema", schema), "utf-8")
    generatedSchemaContent += "\n\n"
  }

  await fs.writeFile("prisma/generated-schema.prisma", generatedSchemaContent)

  const generator = new Generator(
    {
      name: 'nexus',
      schemaPath: './prisma/generated-schema.prisma',
    },
    {
      output: './src/graphql/',
      excludeFields: ['password'],
      disableMutations: true
    }
  );

  await generator.run();
  await fs.unlink("prisma/generated-schema.prisma")
  console.log('✅ GraphQL files generated');
}

main().catch(console.error);