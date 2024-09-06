import { DeployExecutorSchema } from '../executors/deploy/schema';
import { ParsedExecutorInterface } from '../interfaces/parsed-executor.interface';

export const executorPropKeys = ['stacks'];
export const LARGE_BUFFER = 1024 * 1000000;

export function parseArgs(options: DeployExecutorSchema): Record<string, string> {
  const keys = Object.keys(options);
  return keys
    .filter((prop) => executorPropKeys.indexOf(prop) < 0)
    .reduce((acc, key) => ((acc[key] = options[key]), acc), {});
}

export function createCommand(command: string, options: ParsedExecutorInterface): string {
  const commands = [`cdk ${command}`];

  if (typeof options.stacks === 'string') {
    commands.push(options.stacks);
  }

  for (const arg in options.parseArgs) {
    commands.push(`--${arg} ${options.parseArgs[arg]}`);
  }

  return commands.join(' ');
}
