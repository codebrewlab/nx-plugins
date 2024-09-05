import type { ExecutorContext } from '@nrwl/devkit';

export function mockExecutorContext(executorName: string, workspaceVersion = 2): ExecutorContext {
  return {
    projectName: 'proj',
    root: '/root',
    cwd: '/root',
    workspace: {
      version: workspaceVersion,
      projects: {
        proj: {
          root: 'apps/proj',
          targets: {
            test: {
              executor: `@codebrew/nx-ncc:${executorName}`,
            },
          },
        },
      },
    },
    target: {
      executor: `@codebrew/nx-ncc:${executorName}`,
    },
    isVerbose: true,
  };
}
