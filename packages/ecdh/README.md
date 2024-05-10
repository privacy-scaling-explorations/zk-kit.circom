<p align="center">
    <h1 align="center">
        ECDH
    </h1>
    <p align="center">A circuit to generate a shared secret from a private key and a public key on the Baby Jubjub curve.</p>
</p>

<p align="center">
    <a href="https://github.com/privacy-scaling-explorations/zk-kit.circom">
        <img src="https://img.shields.io/badge/project-zk--kit-blue.svg?style=flat-square">
    </a>
    <a href="https://github.com/privacy-scaling-explorations/zk-kit.circom/tree/main/packages/ecdh/LICENSE">
        <img alt="NPM license" src="https://img.shields.io/npm/l/%40zk-kit%2Fecdh.circom?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@zk-kit/ecdh.circom">
        <img alt="NPM version" src="https://img.shields.io/npm/v/@zk-kit/ecdh.circom?style=flat-square" />
    </a>
    <a href="https://npmjs.org/package/@zk-kit/ecdh.circom">
        <img alt="Downloads" src="https://img.shields.io/npm/dm/@zk-kit/ecdh.circom.svg?style=flat-square" />
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

Install the `@zk-kit/ecdh.circom` package with npm:

```bash
npm i @zk-kit/ecdh.circom --save
```

or yarn:

```bash
yarn add @zk-kit/ecdh.circom
```

## 📜 Usage

Try out the circuit with Circom locally:

```circom
include "ecdh.circom";

component main = Ecdh();
```

```bash
circom -l ./node_modules/@zk-kit/echd.circom/src -l ./node_modules/circomlib/circuits your-circuit.circom
```
