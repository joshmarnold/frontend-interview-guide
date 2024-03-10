import { runTests, Node } from "../utils.js";

const constructBalancedTree = () => {
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

const constructUnbalancedTree = () => {
  const five = new Node(5);
  const four = new Node(4);
  const six = new Node(6);
  const three = new Node(3);
  const eight = new Node(8);
  const nine = new Node(9);
  const ten = new Node(10);

  //       5
  //      / \
  //     4   6
  //    / \
  //   3   8
  //      / \
  //     9  10

  five.left = four;
  five.right = six;
  four.left = three;
  four.right = eight;
  eight.left = nine;
  eight.right = ten;

  return five;
};

// balanced binary tree problem
// As we always do with recursions problems, consider the simplest example, a single-node tree.
// in this case, we'll need to get the max depth of the left and right subtrees and compare them.
// also, if any of the subtrees are unbalanced, we should return false so that the parent nodes
// know that there's an unbalanced subtree.

// The time complexity is O(n) since  we visit every node once, where n is the number of nodes in the tree
// The space complexity is O(h) where h is the height of the tree. This is the space used by the call stack during the recursion.
function dfs(root) {
  if (root === null) return [true, 0];

  const [leftBalanced, leftDepth] = dfs(root.left);
  const [rightBalanced, rightDepth] = dfs(root.right);
  return [
    leftBalanced && rightBalanced && Math.abs(leftDepth - rightDepth) <= 1,
    Math.max(leftDepth, rightDepth) + 1,
  ];
}

function isBalanced(root) {
  return dfs(root)[0];
}

const balancedTree = constructBalancedTree();
const unbalancedTree = constructUnbalancedTree();
const testCases = [
  { inputs: [balancedTree], expected: true },
  { inputs: [unbalancedTree], expected: false },
];

export default function main() {
  runTests(isBalanced, testCases, "Balanced Binary Tree");
}
