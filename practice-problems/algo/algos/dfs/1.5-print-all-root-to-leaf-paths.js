import { runTests, constructStringTree } from "../utils.js";

// goal of problem?
// This problem now focuses on using return values in DFS to collect data from the bottom (leaves) up to the top (root).
// It addresses another main focus of DFS, which is leveraging return values to solve problems.

// Time Complexity: O(n) - We visit every node once.
// Space Complexity: O(n) - The space used by the call stack and to store paths, in the worst case.
function dfs(node) {
  if (!node) return [];

  // If it's a leaf node, return the leaf value in an array
  if (!node.left && !node.right) return [[node.val]];

  // Collect paths from left and right children
  const leftPaths = dfs(node.left);
  const rightPaths = dfs(node.right);

  // Prefix current node's value to each path
  const paths = [...leftPaths, ...rightPaths].map((path) => [
    node.val,
    ...path,
  ]);

  return paths;
}

const printAllRootToLeaf = (tree) => dfs(tree).toString();

// note: nested arrays have an 'x' between them
const testCases = [
  { inputs: [constructStringTree()], expected: "a,b,d,x,a,b,e,x,a,c,f" },
];

export default function main() {
  runTests(
    printAllRootToLeaf,
    testCases,
    "Print all root to leaf paths Return Values"
  );
}
