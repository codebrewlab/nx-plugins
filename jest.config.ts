const { getJestProjects } = require('@nx/jest');

export default { projects: [...getJestProjects(), '<rootDir>/e2e/nx-aws-cdk-e2e'] };
