export interface ParsedExecutorInterface {
  parseArgs?: Record<string, string>;
  stacks?: string[];
  app?: string;
  sourceRoot: string;
  root: string;
}
