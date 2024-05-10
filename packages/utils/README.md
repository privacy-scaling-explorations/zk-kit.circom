<p align="center">
    <h1 align="center">
        Utils
    </h1>
    <p align="center">An utility library of general-purpose Circom circuits.</p>
</p>

<p align="center">
    <a href="https://github.com/privacy-scaling-explorations/zk-kit.circom">
        <img src="https://img.shields.io/badge/project-zk--kit-blue.svg?style=flat-square">
    </a>
    <a href="https://github.com/privacy-scaling-explorations/zk-kit.circom/tree/main/packages/utils/LICENSE">
        <img alt="NPM license" src="https://img.shields.io/npm/l/%40zk-kit%2Futils?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@zk-kit/utils.circom">
        <img alt="NPM version" src="https://img.shields.io/npm/v/@zk-kit/utils.circom?style=flat-square" />
    </a>
    <a href="https://npmjs.org/package/@zk-kit/utils.circom">
        <img alt="Downloads" src="https://img.shields.io/npm/dm/@zk-kit/utils.circom.svg?style=flat-square" />
    </a>
</p>

<div align="center">
    <h4>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://github.com/privacy-scaling-explorations/zk-kit.circom/issues/new/choose">
            🔎 Issues
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://discord.com/invite/sF5CT5rzrR">
            🗣️ Chat &amp; Support
        </a>
    </h4>
</div>

> [!WARNING]  
> This library has **not** been audited.

## 🛠 Install

Install the `@zk-kit/utils.circom` package with npm:

```bash
npm i @zk-kit/utils.circom --save
```

or yarn:

```bash
yarn add @zk-kit/utils.circom
```

## 📜 Usage

Try out the circuit with Circom locally:

```circom
include "float.circom";
include "safe-comparators.circom";
include "unpack-element.circom";

component main = Shift(3);
```

```bash
circom -l ./node_modules/@zk-kit/utils.circom/src -l ./node_modules/circomlib/circuits your-circuit.circom
```
