import { runTests, constructStringTree } from "../utils.js";

// Problem: Binary Tree Right Side View
// Given a binary tree, imagine yourself standing on the right side of it,
// return the values of the nodes you can see ordered from top to bottom.
// Example input: [1,2,3,null,5,null,4]
// output: [1,3,4]
// https://www.youtube.com/watch?v=d4zLyf32e3I

// The approach is to use level order traversal to traverse the tree and keep track of the last node in each level.

// tree:
//      1
//     / \
//    2   3
//     \   \
//      5   4

// Time complexity: O(n) where n is the number of nodes in the tree
// Space complexity: O(n) where n is the number of nodes in the tree
function rightside(tree) {
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

    // add the last node in the level to the result
    result.push(level[level.length - 1]);
  }

  return result.toString();
}

const tree = constructStringTree();
const testCases = [{ inputs: [tree], expected: "a,c,f" }];

export default function main() {
  runTests(rightside, testCases, "Binary Tree Right Side View");
}
