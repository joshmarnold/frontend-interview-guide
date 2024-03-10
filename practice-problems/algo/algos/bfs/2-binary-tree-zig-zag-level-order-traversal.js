import { runTests, constructStringTree } from "../utils.js";

// Problem: Zigzag Level Order Traversal
// Given a binary tree, return the zigzag level order traversal
// of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
// input: [3,9,20,null,null,15,7]
// output: [[3],[20,9],[15,7]] - notice how the second level is reversed
// https://www.youtube.com/watch?v=igbboQbiwqw&t=65s

// The approach is to use level order traversal to traverse the tree and reverse the level if its index is even.

// tree:
//      3
//     / \
//    9  20
//       / \
//      15  7

// Time complexity: O(n) where n is the number of nodes in the tree
// Space complexity: O(n) where n is the number of nodes in the tree
function zigzag(tree) {
  if (!tree) return [];

  let result = [];
  let queue = [tree];

  while (queue.length) {
    let level = [];
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift(); // remove the first node from the queue
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // reverse the level if its index is even
    if (level.length % 2 === 0) level.reverse();
    result = result.concat(level);
  }

  return result.toString();
}

const tree = constructStringTree();
const testCases = [{ inputs: [tree], expected: "a,c,b,d,e,f" }];

export default function main() {
  runTests(zigzag, testCases, "Binary Tree Zigzag Level Order Traversal");
}
