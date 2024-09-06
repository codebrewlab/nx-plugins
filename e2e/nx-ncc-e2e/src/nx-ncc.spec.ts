import { checkFilesExist, ensureNxProject, readJson, runNxCommandAsync, uniq, updateFile } from '@nx/plugin/testing';

describe('nx-ncc e2e', () => {
  beforeAll(async () => {
    ensureNxProject('@codebrew/nx-ncc', 'dist/packages/nx-ncc');
  });

  it('success build', async () => {
    const project = await createTestProject();

    await runNxCommandAsync(`build ${project}`);
    expect(() => checkFilesExist(`${project}/dist/index.js`)).not.toThrow();
    expect(() => checkFilesExist(`${project}/dist/README.md`)).not.toThrow();
    expect(() => checkFilesExist(`${project}/dist/project.json`)).not.toThrow();
  }, 120000);
});

async function createTestProject() {
  await runNxCommandAsync('g @codebrew/nx-ncc:init');

  const project = uniq('nx-ncc');

  try {
    await runNxCommandAsync(`generate @nx/node:library ${project}`);
  } catch (e) {
    console.log(e);
  }

  const projectJson = readJson(`${project}/project.json`, {
    expectComments: true,
    allowEmptyContent: false,
  });

  projectJson.targets = {
    build: {
      executor: '@codebrew/nx-ncc:build',
      options: {
        main: `${project}/src/index.ts`,
        outputPath: `${project}/dist`,
        assets: [
          `${project}/project.json`,
          {
            input: `${project}/`,
            output: '/',
            glob: 'README.MD',
          },
        ],
      },
    },
    serve: {
      executor: '@codebrew/nx-ncc:serve',
      options: {
        main: `${project}/src/index.ts`,
      },
    },
  };

  updateFile(`${project}/project.json`, JSON.stringify(projectJson));

  return project;
}
