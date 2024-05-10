<p align="center">
    <h1 align="center">
        Poseidon Cipher
    </h1>
    <p align="center">A set of Circom templates to decrypt and perform permutations with Poseidon.</p>
</p>

<p align="center">
    <a href="https://github.com/privacy-scaling-explorations/zk-kit.circom">
        <img src="https://img.shields.io/badge/project-zk--kit-blue.svg?style=flat-square">
    </a>
    <a href="https://github.com/privacy-scaling-explorations/zk-kit.circom/tree/main/packages/poseidon-cipher/LICENSE">
        <img alt="NPM license" src="https://img.shields.io/npm/l/%40zk-kit%2Fposeidon-cipher.circom?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@zk-kit/poseidon-cipher.circom">
        <img alt="NPM version" src="https://img.shields.io/npm/v/@zk-kit/poseidon-cipher.circom?style=flat-square" />
    </a>
    <a href="https://npmjs.org/package/@zk-kit/poseidon-cipher.circom">
        <img alt="Downloads" src="https://img.shields.io/npm/dm/@zk-kit/poseidon-cipher.circom.svg?style=flat-square" />
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

Install the `@zk-kit/poseidon-cipher.circom` package with npm:

```bash
npm i @zk-kit/poseidon-cipher.circom --save
```

or yarn:

```bash
yarn add @zk-kit/poseidon-cipher.circom
```

## 📜 Usage

Try out the circuit with Circom locally:

```circom
include "poseidon-cipher.circom";

component main = PoseidonDecrypt(3);
// component main = PoseidonDecryptWithoutCheck(3);
// component main = PoseidonDecryptIterations(3);
// component main = PoseidonPerm(2);
```

```bash
circom -l ./node_modules/@zk-kit/poseidon-cipher.circom/src -l ./node_modules/circomlib/circuits your-circuit.circom
```
