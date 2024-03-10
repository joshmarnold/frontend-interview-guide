import { runTests, Node } from "../utils.js";

export const constructTree = () => {
  const five = new Node(5);
  const four = new Node(4);
  const six = new Node(6);
  const three = new Node(3);
  const eight = new Node(8);

  //       5
  //      / \
  //     4   6
  //    / \
  //   3   8

  five.left = four;
  five.right = six;
  four.left = three;
  four.right = eight;

  return five;
};

// This function counts the visible nodes in a binary tree. A node is visible if it's greater than all ancestors.
// It works recursively: we use "leaf of faith" to trust that the recursive calls that count visible nodes in subtrees.
// It adds the counts from left and right subtrees and includes the current node if it's visible.
// As we always do with recursions problems, consider the simplest example, a single-node tree. 

// The time complexity is O(n) since  we visit every node once, where n is the number of nodes in the tree
// The space complexity is O(h) where h is the height of the tree. This is the space used by the call stack during the recursion.
function dfs(root, max = 0) {
  if (root === null) return 0;

  const isMax = root.val >= max;
  const maxSeenSoFar = Math.max(max, root.val);

  const leftDepth = dfs(root.left, maxSeenSoFar);
  const rightDepth = dfs(root.right, maxSeenSoFar);
  return leftDepth + rightDepth + (isMax ? 1 : 0);
}

const tree = constructTree();
const testCases = [{ inputs: [tree], expected: 3 }]; // 5, 6, 8

export default function main() {
  runTests(dfs, testCases, "Visible Tree Nodes");
}
