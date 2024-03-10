import { runTests, Node } from "../utils.js";

const constructValidBST = () => {
  const root = new Node(2);
  root.left = new Node(1);
  root.right = new Node(3);
  return root;
};

const constructInvalidBST = () => {
  const root = new Node(5);
  root.left = new Node(10);
  root.right = new Node(4);
  return root;
};

function isValidBST(node, min = null, max = null) {
  if (node === null) return true;

  if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
    return false;
  }

  return (
    isValidBST(node.left, min, node.val) &&
    isValidBST(node.right, node.val, max)
  );
}

// Define test cases (if applicable)
const testCases = [
  { inputs: [constructInvalidBST()], expected: false },
  { inputs: [constructValidBST()], expected: true },
];

export default function main() {
  runTests(isValidBST, testCases, "Validate Binary Search Tree");
}
