# `@kei-g/rm` [![license][license-image]][license-url] [![npm][npm-image]][npm-url]

[`@kei-g/rm`][github-url] - A CLI tool to delete files and directories.

[![maintenance][maintenance-image]][npmsio-url] [![quality][quality-image]][npmsio-url]

## CI Status

| Workflow Name | Status |
|:-:|:-:|
| **Build** | [![GitHub CI (Build)][github-build-image]][github-build-url] |
| **CodeQL** | [![GitHub CI (CodeQL)][github-codeql-image]][github-codeql-url] |
| **Test** | [![GitHub CI (Test)][github-test-image]][github-test-url] |

## Usage

### Installation

```shell
npm install @kei-g/rm@latest [options]
```

### Configure scripts in package.json

```json
{
  "scripts": {
    "clean": "node-rm bar baz/**/*.js"
  }
}
```

## License

The scripts and documentation in this project are released under the [BSD-3-Clause License][license-url]

## TODO

- :green_heart: CI
  - Coverages
- :package: Dependencies
  - Migrate the `npm` script runner from `npm-run-all` to `@kei-g/run`

## Contributions

Contributions are welcome! See [Contributor's Guide](https://github.com/kei-g/node-rm/blob/main/CONTRIBUTING.md)

### Code of Conduct

:clap: Be nice. See [our code of conduct](https://github.com/kei-g/node-rm/blob/main/CODE_OF_CONDUCT.md)

[github-build-image]:https://github.com/kei-g/node-rm/actions/workflows/build.yml/badge.svg
[github-build-url]:https://github.com/kei-g/node-rm/actions/workflows/build.yml
[github-codeql-image]:https://github.com/kei-g/node-rm/actions/workflows/codeql.yml/badge.svg
[github-codeql-url]:https://github.com/kei-g/node-rm/actions/workflows/codeql.yml
[github-test-image]:https://github.com/kei-g/node-rm/actions/workflows/test.yml/badge.svg
[github-test-url]:https://github.com/kei-g/node-rm/actions/workflows/test.yml
[github-url]:https://github.com/kei-g/node-rm
[license-image]:https://img.shields.io/github/license/kei-g/node-rm
[license-url]:https://github.com/kei-g/node-rm/blob/main/LICENSE
[maintenance-image]:https://img.shields.io/npms-io/maintenance-score/@kei-g/rm?logo=npm
[npm-image]:https://img.shields.io/npm/v/@kei-g/rm.svg?logo=npm
[npm-url]:https://npmjs.org/package/@kei-g/rm
[npmsio-url]:https://npms.io/search?q=%40kei-g%2Frm
[quality-image]:https://img.shields.io/npms-io/quality-score/@kei-g/rm?logo=npm
