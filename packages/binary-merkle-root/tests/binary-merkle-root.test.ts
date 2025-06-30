import { WitnessTester } from "circomkit"
import { circomkit, generateBinaryMerkleRoot } from "./common"

describe("binary-merkle-root", () => {
    let circuit: WitnessTester<["leaf", "depth", "index", "siblings"], ["out"]>

    const MAX_DEPTH = 5

    it("Should throw an error if there are not enough values for input signal siblings", async () => {
        const INPUT = {
            leaf: BigInt(0),
            depth: MAX_DEPTH,
            index: 0,
            siblings: []
        }

        circuit = await circomkit.WitnessTester("binary-merkle-root", {
            file: "binary-merkle-root",
            template: "BinaryMerkleRoot",
            params: [MAX_DEPTH]
        })

        await circuit.expectFail(INPUT)
    })

    it("Should throw an error if there are too many values for input signal siblings", async () => {
        const { leaf, depth, index, siblings } = generateBinaryMerkleRoot(MAX_DEPTH, 2 ** MAX_DEPTH + 1)

        const INPUT = {
            leaf,
            depth,
            index,
            siblings
        }

        circuit = await circomkit.WitnessTester("binary-merkle-root", {
            file: "binary-merkle-root",
            template: "BinaryMerkleRoot",
            params: [MAX_DEPTH]
        })

        await circuit.expectFail(INPUT)
    })

    it("Should throw an error if number of leafs is more than MAX_DEPTH", async () => {
        const { leaf, depth, index, siblings } = generateBinaryMerkleRoot(MAX_DEPTH, 2 ** MAX_DEPTH + 1)

        const INPUT = {
            leaf,
            depth,
            index,
            siblings
        }

        circuit = await circomkit.WitnessTester("binary-merkle-root", {
            file: "binary-merkle-root",
            template: "BinaryMerkleRoot",
            params: [MAX_DEPTH]
        })

        await circuit.expectFail(INPUT)
    })

    it("Should calculate the root correctly if the depth is less than MAX_DEPTH", async () => {
        const { leaf, depth, index, siblings, root } = generateBinaryMerkleRoot(MAX_DEPTH, 2 ** (MAX_DEPTH - 2))

        const INPUT = {
            leaf,
            depth,
            index,
            siblings
        }

        const OUTPUT = {
            out: root
        }

        circuit = await circomkit.WitnessTester("binary-merkle-root", {
            file: "binary-merkle-root",
            template: "BinaryMerkleRoot",
            params: [MAX_DEPTH]
        })

        await circuit.expectPass(INPUT, OUTPUT)
    })

    it("Should calculate the root correctly if the depth equals MAX_DEPTH", async () => {
        const { leaf, depth, index, siblings, root } = generateBinaryMerkleRoot(MAX_DEPTH, 2 ** MAX_DEPTH)

        const INPUT = {
            leaf,
            depth,
            index,
            siblings
        }

        const OUTPUT = {
            out: root
        }

        circuit = await circomkit.WitnessTester("binary-merkle-root", {
            file: "binary-merkle-root",
            template: "BinaryMerkleRoot",
            params: [MAX_DEPTH]
        })

        await circuit.expectPass(INPUT, OUTPUT)
    })
})
