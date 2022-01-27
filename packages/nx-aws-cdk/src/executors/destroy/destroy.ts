import * as path from 'path';
import { ExecutorContext } from '@nrwl/tao/src/shared/workspace';

import { DestroyExecutorSchema } from './schema';
import { createCommand, parseArgs, runCommandProcess } from '../../utils/executor.util';
import { ParsedExecutorInterface } from '../../interfaces/parsed-executor.interface';

export interface ParsedDestroyExecutorOption extends ParsedExecutorInterface {
  parseArgs?: Record<string, string>;
  stacks?: string[];
  app?: string;
  sourceRoot: string;
  root: string;
}

export default async function runExecutor(options: DestroyExecutorSchema, context: ExecutorContext) {
  const normalizedOptions = normalizeOptions(options, context);
  const result = runDestroy(normalizedOptions, context);

  return {
    success: result,
  };
}

function runDestroy(options: ParsedDestroyExecutorOption, context: ExecutorContext) {
  const command = createCommand('destroy', options);
  return runCommandProcess(command, path.join(context.root, options.root));
}

function normalizeOptions(options: DestroyExecutorSchema, context: ExecutorContext): ParsedDestroyExecutorOption {
  const parsedArgs = parseArgs(options);
  let stacks;

  if (Object.prototype.hasOwnProperty.call(options, 'stacks')) {
    stacks = options.stacks;
  }

  const { sourceRoot, root } = context?.workspace?.projects[context.projectName];

  return {
    ...options,
    parseArgs: parsedArgs,
    stacks,
    sourceRoot,
    root,
  };
}
