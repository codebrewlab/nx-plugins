import { BuildExecutorSchema } from './schema';
import executor from './executor';
import { mockExecutorContext } from '../../utils/testing';
import { logger } from '@nx/devkit';
import * as childProcess from 'child_process';
import * as path from 'path';

const options: BuildExecutorSchema = {
  main: '',
  outputPath: '',
};

describe('Build Executor', () => {
  const mockContext = mockExecutorContext('build');
  let spyExec;

  beforeEach(async () => {
    jest.spyOn(logger, 'debug');
    spyExec = jest.spyOn(childProcess, 'exec');
  });

  afterEach(() => jest.clearAllMocks());

  it('run ncc build command', async () => {
    await executor(options, mockContext);

    expect(childProcess.exec).toHaveBeenCalledWith(
      'ncc build /root -C',
      expect.objectContaining({
        cwd: expect.stringContaining(path.join(mockContext.root, mockContext.cwd)),
        env: process.env,
        maxBuffer: expect.anything(),
      })
    );

    expect(logger.debug).toHaveBeenLastCalledWith(`Executing command: ncc build /root -C`);
  });
});
