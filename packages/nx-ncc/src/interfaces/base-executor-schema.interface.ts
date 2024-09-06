import type { AssetGlob } from '@nx/js/src/utils/assets/assets';

export interface BaseExecutorSchemaInterface {
  main: string;
  sourceMap?: boolean;
  minify?: boolean;
  quiet?: boolean;
  target?: string;
  externalDependencies?: string[];
  assets?: (string | AssetGlob)[];
}
