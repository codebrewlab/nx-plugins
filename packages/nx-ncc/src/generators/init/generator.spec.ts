import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readJson } from '@nx/devkit';

import { initGenerator } from './generator';
import { InitGeneratorSchema } from './schema';

describe('init generator', () => {
  let tree: Tree;
  const options: InitGeneratorSchema = {};

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should add @vercel/ncc devDependency', async () => {
    await initGenerator(tree, options);
    const packageJson = readJson(tree, 'package.json');

    expect(packageJson.devDependencies['@vercel/ncc']).toBeDefined();
  });
});
