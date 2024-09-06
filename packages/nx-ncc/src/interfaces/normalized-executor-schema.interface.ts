import { BaseExecutorSchemaInterface } from './base-executor-schema.interface';

export type NormalizedExecutorSchemaInterface<T extends BaseExecutorSchemaInterface = BaseExecutorSchemaInterface> =
  T & {
    root: string;
    sourceRoot: string;
    projectRoot: string;
  };
