import { ExecutorContext } from '@nx/devkit';

import { ServeExecutorSchema } from './schema';
import executor from './executor';

const options: ServeExecutorSchema = {};
const context: ExecutorContext = {
  root: '',
  cwd: process.cwd(),
  isVerbose: false,
};

describe('Serve Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
