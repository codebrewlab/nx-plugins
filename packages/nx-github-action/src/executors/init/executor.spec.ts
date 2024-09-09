import { ExecutorContext } from '@nx/devkit';

import { InitExecutorSchema } from './schema';
import executor from './executor';

const options: InitExecutorSchema = {};
const context: ExecutorContext = {
  root: '',
  cwd: process.cwd(),
  isVerbose: false,
};

describe('Init Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
