import { addDependenciesToPackageJson, convertNxGenerator, formatFiles, GeneratorCallback, Tree } from '@nx/devkit';
import { InitGeneratorSchema } from './schema';
import { jestInitGenerator } from '@nx/jest';

function normalizeOptions(schema: InitGeneratorSchema) {
  return {
    ...schema,
    unitTestRunner: schema.unitTestRunner ?? 'jest',
  };
}

export async function initGenerator(tree: Tree, options: InitGeneratorSchema) {
  let jestInstall: GeneratorCallback;
  const schema = normalizeOptions(options);

  if (schema.unitTestRunner === 'jest') {
    jestInstall = await jestInitGenerator(tree, {});
  }

  const installTask = addDependenciesToPackageJson(
    tree,
    {},
    {
      '@vercel/ncc': '^0.38.1',
    }
  );

  if (!schema.skipFormat) {
    await formatFiles(tree);
  }

  return async () => {
    if (jestInstall) {
      await jestInstall();
    }
    await installTask();
  };
}

export default initGenerator;
export const initSchematic = convertNxGenerator(initGenerator);
