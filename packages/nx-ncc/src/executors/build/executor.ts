import { logger, PromiseExecutor } from '@nx/devkit';
import { runCommandProcess } from '@codebrew/utils';

import { BuildExecutorSchema } from './schema';
import { normalizeOptions } from '../../utils/normalize-options';
import { createNccCommand } from '../../utils';
import { CopyAssetsHandler } from '@nx/js/src/utils/assets/copy-assets-handler';

const runExecutor: PromiseExecutor<BuildExecutorSchema> = async (options, context) => {
  const normalizedOptions = normalizeOptions(options, context);

  const command = createNccCommand('build', normalizedOptions);

  const assetHandler = new CopyAssetsHandler({
    projectDir: normalizedOptions.projectRoot,
    rootDir: context.root,
    outputDir: normalizedOptions.outputPath,
    assets: normalizedOptions.assets,
  });

  try {
    const result = await runCommandProcess(command, context.root);

    if (result) {
      await assetHandler.processAllAssetsOnce();
    }
    return { success: result };
  } catch (e) {
    logger.debug('nx-ncc:build Error: ', e);
    return { success: false };
  }
};

export default runExecutor;
