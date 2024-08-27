import { readJson, Tree } from '@nx/devkit';
import { createTreeWithEmptyV1Workspace } from '@nx/devkit/testing';

import { initGenerator } from './init';
import { InitGeneratorSchema } from './schema';

describe('init', () => {
  let tree: Tree;
  const options: InitGeneratorSchema = {};

  beforeEach(() => {
    tree = createTreeWithEmptyV1Workspace();
  });

  it('should add aws-cdk dependency', async () => {
    await initGenerator(tree, options);
    const packageJson = readJson(tree, 'package.json');

    expect(packageJson.dependencies['@aws-cdk/core']).toBeDefined();
    expect(packageJson.dependencies['@aws-cdk/assert']).toBeDefined();
  });
});
