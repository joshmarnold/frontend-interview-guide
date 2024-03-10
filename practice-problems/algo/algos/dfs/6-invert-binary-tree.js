import { runTests, Node } from "../utils.js";
import { preOrderTraversal } from "./0-traversals-recursive.js";

const constructBalancedTree = () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  const seven = new Node(7);

  // Constructing the binary tree represented in the image
  //       1
  //      / \
  //     2   3
  //    / \   \
  //   4   5   6
  //  /
  // 7

  one.left = two;
  one.right = three;
  two.left = four;
  two.right = five;
  three.right = six;
  four.left = seven;

  return one;
};

// this tests sending data up the tree or call stack
function dfs(root) {
  if (root === null) return null;

  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  dfs(root.left);
  dfs(root.right);
  return root;
}

const runner = (root) => {
  const tree = dfs(root);
  return preOrderTraversal(tree).toString();
};

// pre-order traversal on the result
const testCases = [
  { inputs: [constructBalancedTree()], expected: "1,3,6,2,5,4,7" },
];

export default function main() {
  runTests(runner, testCases, "Invert Binary Tree");
}
