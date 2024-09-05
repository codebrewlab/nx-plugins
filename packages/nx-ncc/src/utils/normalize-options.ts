import { resolve } from 'path';

import { ExecutorContext } from '@nx/devkit';

import { BaseExecutorSchemaInterface } from '../interfaces/base-executor-schema.interface';
import { NormalizedExecutorSchemaInterface } from '../interfaces/normalized-executor-schema.interface';

export const normalizeOptions = <T extends BaseExecutorSchemaInterface>(
  options: T,
  context: ExecutorContext
): NormalizedExecutorSchemaInterface<T> => {
  const root = resolve(context.root);
  const projectConfig = context.workspace.projects[context.projectName];
  const projectRoot = resolve(root, projectConfig.root);

  return {
    ...options,
    main: resolve(root, options.main),
    assets: options.assets ?? [],
    root,
    projectRoot,
    sourceRoot: resolve(root, projectConfig.sourceRoot || ''),
  };
};
