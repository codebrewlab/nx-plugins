import { NormalizedExecutorSchemaInterface } from '../interfaces/normalized-executor-schema.interface';

export const normalizeArguments = <T extends NormalizedExecutorSchemaInterface>(options: T) => {
  const args = [];

  args.push('-C');

  if (options['outputPath']) {
    args.push(`-o ${options['outputPath']}`);
  }

  if (options.sourceMap) {
    args.push(`-s`);
  }

  if (options.minify) {
    args.push('-m');
  }

  if (options.quiet) {
    args.push('-q');
  }

  if (options['watch']) {
    args.push('-w');
  }

  if (options.externalDependencies?.length) {
    args.push(...options.externalDependencies.map((module) => `--external ${module}`));
  }

  return args.join(' ');
};
