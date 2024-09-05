import { logger } from '@nx/devkit';
import { exec } from 'child_process';

export const LARGE_BUFFER = 1024 * 1000000;

export function runCommandProcess(command: string, cwd: string, maxBuffer: number = LARGE_BUFFER): Promise<boolean> {
  return new Promise((resolve, reject) => {
    logger.debug(`Executing command: ${command}, cwd: ${cwd}`);

    const childProcess = exec(command, {
      maxBuffer: LARGE_BUFFER,
      env: process.env,
      cwd: cwd,
    });

    // Ensure the child process is killed when the parent exits
    const processExitListener = () => childProcess.kill(0);
    process.on('exit', processExitListener);
    process.on('SIGTERM', processExitListener);

    process.stdin.on('data', (data) => {
      childProcess.stdin.write(data);
      childProcess.stdin.end();
    });

    childProcess.stdout.on('data', (data) => {
      logger.info(data);
      process.stdout.write(data);
    });

    childProcess.stderr.on('data', (err) => {
      logger.fatal(err);
      process.stderr.write(err);
    });

    childProcess.on('close', (code) => {
      console.log(`${command} on Close: `, code);
      if (code === 0) {
        resolve(true);
      } else {
        resolve(false);
      }

      process.removeListener('exit', processExitListener);

      process.stdin.end();
      process.stdin.removeListener('data', processExitListener);
    });
  });
}
