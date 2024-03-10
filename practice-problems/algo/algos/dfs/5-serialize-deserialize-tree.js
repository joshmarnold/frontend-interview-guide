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

// This function serializes a binary tree. It works recursively: we use "leaf of faith" to trust that the recursive calls that serialize subtrees.
// It adds the values from left and right subtrees and includes the current node.

// The time complexity is O(n) since  we visit every node once, where n is the number of nodes in the tree
// The space complexity is O(h) where h is the height of the tree. This is the space used by the call stack during the recursion.
function serialize(root) {
  if (root === null) return ["x"];

  const left = serialize(root.left);
  const right = serialize(root.right);

  return [root.val, ...left, ...right];
}

const runner = (root) => {
  const serialized = serialize(root);
  return serialized.toString();
};

const balancedTree = constructBalancedTree();
const serializeTestCases = [
  {
    inputs: [balancedTree],
    expected: [5, 4, 3, "x", "x", 8, "x", "x", 6, "x", "x"].toString(),
  },
];

export default function main() {
  runTests(runner, serializeTestCases, "Serialize Tree");
}
