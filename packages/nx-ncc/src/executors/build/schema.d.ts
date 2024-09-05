import { BaseExecutorSchemaInterface } from '../../interfaces/base-executor-schema.interface';

export interface BuildExecutorSchema extends BaseExecutorSchemaInterface {
  outputPath: string;
  generatePackageJson?: boolean;
  watch?: boolean;
}
