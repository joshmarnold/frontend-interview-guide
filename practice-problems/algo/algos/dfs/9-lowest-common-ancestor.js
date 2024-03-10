import { runTests, Node } from "../utils.js";
import { BinarySearchTree } from "./8-binary-search-tree.js";

const constructBST = () => {
  const bst = new BinarySearchTree();
  bst.insert(100);
  bst.insert(75);
  bst.insert(125);
  bst.insert(65);
  bst.insert(85);
  bst.insert(115);
  bst.insert(150);
  bst.insert(60);
  bst.insert(70);
  bst.insert(80);
  bst.insert(95);
  bst.insert(110);
  bst.insert(120);
  bst.insert(135);
  bst.insert(175);

  return bst.root;
};

// method 1: use the natural properties of a BST. Best approach if the tree is a BST
function LCA(node, p, q) {
  if (node == null) {
    return null;
  }

  // If both p and q are smaller than node, then LCA lies in the left
  if (node.val > p && node.val > q) {
    return LCA(node.left, p, q);
  }

  // If both p and q are greater than node, then LCA lies in the right
  if (node.val < p && node.val < q) {
    return LCA(node.right, p, q);
  }

  // If we reach here then node is the LCA of p and q
  return node.val;
}

// method 2: use a more general approach where we don't assume the tree is a BST
// find p & q in the tree and bubble up
function findLCA(root, p, q) {
  // Base case: if current node is null or equals one of the nodes p or q.
  if (root === null || root.val === p || root.val === q) {
    return root;
  }

  // Search for nodes p and q in the left and right subtrees.
  let left = findLCA(root.left, p, q);
  let right = findLCA(root.right, p, q);

  // If both left and right are non-null, we have found the LCA.
  // Both p and q are in different subtrees of the current node.
  if (left !== null && right !== null) {
    return root.val;
  }

  // Else return the non-null value.
  return left !== null ? left : right;
}

// Define test cases (if applicable)
const testCases = [{ inputs: [constructBST(), 60, 95], expected: 75 }];

export default function main() {
  runTests(findLCA, testCases, "Lowest Common Ancestor of a BST");
}
