<p align="center">
    <h1 align="center">
        Poseidon Proof
    </h1>
    <p align="center">A circuit to prove the possession of Poseidon pre-images without revealing the pre-images themselves.</p>
</p>

<p align="center">
    <a href="https://github.com/privacy-scaling-explorations/zk-kit.circom">
        <img src="https://img.shields.io/badge/project-zk--kit-blue.svg?style=flat-square">
    </a>
    <a href="https://github.com/privacy-scaling-explorations/zk-kit.circom/tree/main/packages/poseidon-proof/LICENSE">
        <img alt="NPM license" src="https://img.shields.io/npm/l/%40zk-kit%2Fposeidon-proof?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@zk-kit/poseidon-proof.circom">
        <img alt="NPM version" src="https://img.shields.io/npm/v/@zk-kit/poseidon-proof.circom?style=flat-square" />
    </a>
    <a href="https://npmjs.org/package/@zk-kit/poseidon-proof.circom">
        <img alt="Downloads" src="https://img.shields.io/npm/dm/@zk-kit/poseidon-proof.circom.svg?style=flat-square" />
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

Install the `@zk-kit/poseidon-proof.circom` package with npm:

```bash
npm i @zk-kit/poseidon-proof.circom --save
```

or yarn:

```bash
yarn add @zk-kit/poseidon-proof.circom
```

## 📜 Usage

Try out the circuit with Circom locally:

```circom
include "poseidon-proof.circom";

component main = PoseidonProof(3);
```

```bash
circom -l ./node_modules/@zk-kit/poseidon-proof.circom/src -l ./node_modules/circomlib/circuits your-circuit.circom
```
