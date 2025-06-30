import { LeanIMT } from "@zk-kit/lean-imt"
import { Circomkit } from "circomkit"
import { readFileSync } from "fs"
import path from "path"
import { poseidon2 } from "poseidon-lite"

const configFilePath = path.join(__dirname, "../circomkit.json")
const config = JSON.parse(readFileSync(configFilePath, "utf-8"))

// eslint-disable-next-line import/prefer-default-export
export const circomkit = new Circomkit({
    ...config,
    verbose: false
})

/**
 * Represents the proof data for a leaf in a Merkle tree, providing all necessary
 * information required to verify the leaf's inclusion in the tree.
 *
 * @typeParam leaf the leaf value.
 * @typeParam depth the actual depth of the Merkle tree.
 * @typeParam index the leaf index.
 * @typeParam siblings nodes encountered when traversing from the leaf to the root.
 * @typeParam root the Merkle root of the tree, calculated from all the leaves.
 */
export type BinaryMerkleTreeProof = {
    leaf: bigint
    depth: number
    index: number
    siblings: bigint[]
    root: bigint
}

/**
 * Generates a binary Merkle tree and a proof for a given leaf index.
 * @param maxDepth The maximum depth of the binary Merkle tree.
 * Defaults to 5. This is used to calculate the path indices for the proof.
 * @param nodes The total number of nodes (leaves) to be inserted
 * into the tree. Defaults to 32.
 * @param leafIndex The index of the leaf for which to generate
 * the proof. Defaults to 0.
 * @returns An object structured to provide the necessary inputs
 * and output for a binary Merkle root proof verification for the
 * `binary-merkle-root` circuit.
 */
export const generateBinaryMerkleRoot = (maxDepth = 5, nodes = 32, leafIndex = 0): BinaryMerkleTreeProof => {
    const tree = new LeanIMT((a, b) => poseidon2([a, b]))

    for (let i = 0; i < nodes; i += 1) {
        tree.insert(BigInt(i))
    }

    const leaf = tree.leaves[leafIndex]

    const { siblings, index } = tree.generateProof(leafIndex)

    const depth = siblings.length

    // For example, if the circuit expects a Merkle tree of depth 20,
    // the input must always include 20 sibling nodes, even if the actual
    // tree depth is smaller (e.g., 3). The unused sibling positions can be
    // filled with 0, as they won't affect the root calculation in the circuit.
    for (let i = 0; i < maxDepth; i += 1) {
        if (siblings[i] === undefined) {
            siblings[i] = BigInt(0)
        }
    }

    return {
        leaf,
        depth,
        index,
        siblings,
        root: tree.root
    }
}
