import * as childProcess from 'child_process';
import * as path from 'path';

import { logger } from '@nrwl/devkit';

import { DestroyExecutorSchema } from './schema';
import executor from './destroy';
import { LARGE_BUFFER } from '../../utils/executor.util';
import { mockExecutorContext } from '../../utils/testing';

const options: DestroyExecutorSchema = {};

describe('nx-aws-cdk Destroy Executor', () => {
  const context = mockExecutorContext('destroy');

  beforeEach(async () => {
    jest.spyOn(logger, 'info');
    jest.spyOn(childProcess, 'exec');
  });

  afterEach(() => jest.clearAllMocks());

  it('run cdk destroy command', async () => {
    await executor(options, context);

    expect(childProcess.exec).toHaveBeenCalledWith(
      'cdk destroy',
      expect.objectContaining({
        cwd: expect.stringContaining(path.join(context.root, context.workspace.projects['proj'].root)),
        env: process.env,
        maxBuffer: LARGE_BUFFER,
      })
    );

    expect(logger.info).toHaveBeenLastCalledWith(`Executing command: cdk destroy`);
  });

  it('run cdk destroy command stack', async () => {
    const option: any = Object.assign({}, options);
    const stackName = 'test';
    option['stacks'] = stackName;
    await executor(option, context);

    expect(childProcess.exec).toHaveBeenCalledWith(
      `cdk destroy ${stackName}`,
      expect.objectContaining({
        env: process.env,
        maxBuffer: LARGE_BUFFER,
      })
    );

    expect(logger.info).toHaveBeenLastCalledWith(`Executing command: cdk destroy ${stackName}`);
  });
});
