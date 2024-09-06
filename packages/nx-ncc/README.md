[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![@codebrew/nx-ncc](https://img.shields.io/badge/%40codebrew-nx--ncc-green)](https://github.com/codebrewlab/nx-plugins/tree/master/packages/nx-ncc)
[![Typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://www.typescriptlang.org/)
[![LICENSE](https://img.shields.io/npm/l/@codebrew/nx-aws-cdk.svg)](https://www.npmjs.com/package/@codebrew/nx-aws-cdk)
[![npm version](https://img.shields.io/npm/v/@codebrew/nx-ncc.svg)](https://www.npmjs.com/package/@codebrew/nx-ncc)
[![Downloads](https://img.shields.io/npm/dm/@codebrew/nx-ncc.svg)](https://www.npmjs.com/package/@codebrew/nx-ncc)

<hr>

# @codebrew/nx-ncc

An Nx plugin for developing [@vercel/ncc](https://github.com/vercel/ncc)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
  - [Executors](#executors)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

```shell
# npm
npm install --save-dev @codebrew/nx-ncc

# yarn
yarn add --dev @codebrew/nx-ncc

# pnpm
pnpm install --save-dev @codebrew/nx-ncc
```

## Usage

### Executors

Generated applications expose several functions to the CLI that allow users to deploy, destroy and so on.

```shell
nx deploy {Project Name}
nx destroy {Project Name}
```

## Maintainers

[@tienne](https://github.com/tienne)

## Contributing

See [the contributing file](../../contributing.md)!

PRs accepted.

If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

This project is MIT licensed 2021 David Kwon.
