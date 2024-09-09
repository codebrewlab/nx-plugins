import { PromiseExecutor } from '@nx/devkit';
import { InitExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<InitExecutorSchema> = async (options) => {
  console.log('Executor ran for Init', options);
  return {
    success: true,
  };
};

export default runExecutor;
