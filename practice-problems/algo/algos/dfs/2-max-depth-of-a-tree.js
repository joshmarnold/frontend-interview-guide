import { runTests, constructStringTree } from "../utils.js";

// this tests sending data up the tree or call stack
function dfs(root) {
  if (root === null) return 0;

  const leftDepth = dfs(root.left);
  const rightDepth = dfs(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
}

const tree = constructStringTree();
const testCases = [{ inputs: [tree], expected: 3 }];

export default function main() {
  runTests(dfs, testCases, "Depth First Search");
}
