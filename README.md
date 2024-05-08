<p align="center">
    <h1 align="center">
        🧰 ZK-Kit (Circom)
    </h1>
    <p align="center">A monorepo of reusable Circom circuits.</p>
</p>

<p align="center">
    <a href="https://github.com/privacy-scaling-explorations" target="_blank">
        <img src="https://img.shields.io/badge/project-PSE-blue.svg?style=flat-square">
    </a>
    <a href="https://github.com/privacy-scaling-explorations/zk-kit.circom/blob/main/LICENSE">
        <img alt="Github license" src="https://img.shields.io/github/license/privacy-scaling-explorations/zk-kit.circom.svg?style=flat-square">
    </a>
    <a href="https://github.com/privacy-scaling-explorations/zk-kit.circom/actions?query=workflow%3Aproduction">
        <img alt="GitHub Workflow test" src="https://img.shields.io/github/actions/workflow/status/privacy-scaling-explorations/zk-kit.circom/production.yml?branch=main&label=test&style=flat-square&logo=github">
    </a>
    <a href="https://prettier.io/">
        <img alt="Code style prettier" src="https://img.shields.io/badge/code%20style-prettier-f8bc45?style=flat-square&logo=prettier">
    </a>
    <a href="http://commitizen.github.io/cz-cli/">
        <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-586D76?style=flat-square">
    </a>
</p>

<div align="center">
    <h4>
        <a href="/CONTRIBUTING.md">
            👥 Contributing
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="/CODE_OF_CONDUCT.md">
            🤝 Code of conduct
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://github.com/privacy-scaling-explorations/zk-kit.circom/issues/new/choose">
            🔎 Issues
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://appliedzkp.org/discord">
            🗣️ Chat &amp; Support
        </a>
    </h4>
</div>

| ZK-Kit is a set of libraries (plugins, algorithms or utility functions) that can be reused in different projects and zero-knowledge protocols, making it easier for developers to access user-friendly, tested, and documented code for common tasks. ZK-Kit provides a repository for each language. This repository only contains Circom code. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

> [!IMPORTANT]  
> Installation of [Circom](https://docs.circom.io/getting-started/installation/) required for circuit tests.

## 📦 Packages

<table>
    <th>Package</th>
    <th>Version</th>
    <th>Downloads</th>
    <th>Size</th>
    <tbody>
        <tr>
            <td>
                <a href="https://github.com/privacy-scaling-explorations/zk-kit/tree/main/packages/circuits">
                    @zk-kit/circuits
                </a>
            </td>
            <td>
                <!-- NPM version -->
                <a href="https://npmjs.org/package/@zk-kit/circuits">
                    <img src="https://img.shields.io/npm/v/@zk-kit/circuits.svg?style=flat-square" alt="NPM version" />
                </a>
            </td>
            <td>
                <!-- Downloads -->
                <a href="https://npmjs.org/package/@zk-kit/circuits">
                    <img src="https://img.shields.io/npm/dm/@zk-kit/circuits.svg?style=flat-square" alt="Downloads" />
                </a>
            </td>
            <td></td>
        </tr>
    <tbody>
</table>

## 👥 Ways to contribute

-   🔧 Work on [open issues](https://github.com/privacy-scaling-explorations/zk-kit.circom/contribute)
-   📦 Suggest new [circuits](https://github.com/privacy-scaling-explorations/zk-kit.circom/issues/new?assignees=&labels=feature+%3Arocket%3A&template=---circuit.md&title=)
-   🐛 Create a report if you find any [bugs](https://github.com/privacy-scaling-explorations/zk-kit.circom/issues/new?assignees=&labels=bug+%F0%9F%90%9B&template=---bug.md&title=) in the code

## 🛠 Install

Clone this repository:

```bash
git clone https://github.com/privacy-scaling-explorations/zk-kit.circom.git
```

and install the dependencies:

```bash
cd zk-kit.circom && yarn
```

## 📜 Usage

### Conventional commits

Semaphore uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). A [command line utility](https://github.com/commitizen/cz-cli) to commit using the correct syntax can be used by running:

```bash
git commit
```

### Testing

Test the code with:

```bash
yarn test
```

### Compile

Compile all the circuits with:

```bash
yarn compile
```

### Releases

Bump a new version for your package with:

```bash
yarn version:bump <package-name> <version>
# e.g. yarn version:bump utils 2.0.0
```

It will create a commit and a git tag that you'll need to push on the main branch. A workflow will be triggered and will
publish your package on [npm](https://www.npmjs.com/) and release a new version on Github with its changelogs automatically.
