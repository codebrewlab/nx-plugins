import { NormalizedExecutorSchemaInterface } from '../interfaces/normalized-executor-schema.interface';
import { normalizeArguments } from './normalize-arguments';

export const createNccCommand = (command: string, options: NormalizedExecutorSchemaInterface) => {
  const commands = [`ncc ${command} ${options.main}`];

  const args = normalizeArguments(options);

  commands.push(args);

  return commands.join(' ');
};
