import { runTests, constructStringTree } from "../utils.js";

// Problem: Level Order Traversal
// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// Time complexity: O(n) where n is the number of nodes in the tree
// Space complexity: O(n) where n is the number of nodes in the tree
function levelOrderTraversal(tree) {
  if (!tree) return [];

  let result = [];
  let queue = [tree];

  while (queue.length) {
    let level = [];

    for (let i = 0; i < queue.length; i++) {
      let node = queue.shift(); // remove the first node from the queue
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result = result.concat(level);
  }

  return result.toString();
}

const tree = constructStringTree();
const testCases = [{ inputs: [tree], expected: "a,b,c,d,e,f" }];

export default function main() {
  runTests(levelOrderTraversal, testCases, "Level Order Traversal");
}
