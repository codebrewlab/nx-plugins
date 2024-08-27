import { checkFilesExist, ensureNxProject, readJson, runNxCommandAsync, uniq } from '@nx/plugin/testing';

describe('nx-aws-cdk e2e', () => {
  beforeAll(() => {
    ensureNxProject('@codebrew/nx-aws-cdk', 'dist/packages/nx-aws-cdk');
  });

  it('should create aws-cdk', async () => {
    const plugin = uniq('nx-aws-cdk');

    await runNxCommandAsync(`generate @codebrew/nx-aws-cdk:application ${plugin}`);
  }, 120000);

  describe('--directory', () => {
    it('should create src in the specified directory', async () => {
      const plugin = uniq('nx-aws-cdk');

      await runNxCommandAsync(`generate @codebrew/nx-aws-cdk:application ${plugin} --directory subdir`);
      expect(() => checkFilesExist(`apps/subdir/${plugin}/src/main.ts`)).not.toThrow();
    }, 120000);
  });

  describe('--tags', () => {
    it('should add tags to nx.json', async () => {
      const plugin = uniq('nx-aws-cdk');

      await runNxCommandAsync(`generate @codebrew/nx-aws-cdk:application ${plugin} --tags e2etag,e2ePackage`);
      const nxJson = readJson('nx.json');
      expect(nxJson.projects[plugin].tags).toEqual(['e2etag', 'e2ePackage']);
    }, 120000);
  });
});
