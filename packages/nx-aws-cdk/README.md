[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![@codebrew/nx-aws-cdk](https://img.shields.io/badge/%40codebrew-nx--aws--cdk-green)](https://github.com/codebrewlab/nx-plugins/tree/master/packages/nx-aws-cdk)
[![Typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://www.typescriptlang.org/)
[![LICENSE](https://img.shields.io/npm/l/@codebrew/nx-aws-cdk.svg)](https://www.npmjs.com/package/@codebrew/nx-aws-cdk)
[![npm version](https://img.shields.io/npm/v/@codebrew/nx-aws-cdk.svg)](https://www.npmjs.com/package/@codebrew/nx-aws-cdk)
[![Downloads](https://img.shields.io/npm/dm/@codebrew/nx-aws-cdk.svg)](https://www.npmjs.com/package/@codebrew/nx-aws-cdk)

<hr>

# @codebrew/nx-aws-cdk

An Nx plugin for developing [aws-cdk](https://docs.aws.amazon.com/cdk/latest/guide/home.html)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
  - [Generate Application](#generate-application)
  - [Targets](#targets)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

```shell
# npm
npm install --save-dev @codebrew/nx-aws-cdk

# yarn
yarn add --dev @codebrew/nx-aws-cdk
```

## Usage

### Generate Application

Create AWS CDK v2 Application

More details on AWS CDK v2 can be found on https://docs.aws.amazon.com/cdk/v2/guide/home.html

```shell
nx generate @codebrew/nx-aws-cdk:application myApp
```

you can customize it further by passing these options:

```
nx generate @codebrew/nx-aws-cdk:application [name] [options,...]

Options:
  --name
  --tags                     Add tags to the project (used for linting)
  --directory                A directory where the project is placed
  --skipFormat               Skip formatting files
  --unitTestRunner           Adds the specified unit test runner (default: jest)
  --linter                   The tool to use for running lint checks. (default: eslint)
  --setParserOptionsProject  Whether or not to configure the ESLint "parserOptions.project" option. We do not do this by default for lint performance reasons.
  --dryRun                   Runs through and reports activity without writing to disk.
  --skip-nx-cache            Skip the use of Nx cache.
  --help                     Show available options for project target.
```

### Targets

Generated applications expose several functions to the CLI that allow users to deploy, destroy and so on.

```shell
nx deploy myApp
nx destroy myApp
```

## Maintainers

[@tienne](https://github.com/tienne)

## Contributing

See [the contributing file](../../CONTRIBUTING.md)!

PRs accepted.

If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

This project is MIT licensed 2021 David Kwon.
