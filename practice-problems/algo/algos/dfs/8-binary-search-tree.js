import { Node, runTests } from "../utils.js";

// implement a binary seach tree and its operations
// insert
// search
// delete

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.#insertNode(this.root, newNode);
    }
  }

  #insertNode(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.#insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.#insertNode(node.right, newNode);
      }
    }
  }

  printInorder(node) {
    if (node === null) return [];
    const leftTree = this.printInorder(node.left);
    const rightTree = this.printInorder(node.right);
    return [...leftTree, node.val, ...rightTree];
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.val) {
      return this.search(node.left, data);
    } else if (data > node.val) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }

  // https://www.youtube.com/watch?v=DkOswl0k7s4
  delete(data) {
    this.root = this.#deleteNode(this.root, data);
  }

  #deleteNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.val) {
      node.left = this.#deleteNode(node.left, data);
      return node;
    } else if (data > node.val) {
      node.right = this.#deleteNode(node.right, data);
      return node;
    } else {
      // deleting node with no children - easy
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one child - easy
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // deleting node with two children - harder
      // two options:
      // 1. find the largest node in the left subtree
      // 2. find the smallest node in the right subtree
      const min = this.findMinNode(node.right);
      node.val = min.val;

      // delete the node that was moved
      node.right = this.#deleteNode(node.right, min.val);
      return node;
    }
  }

  // we know the leftmost node is the smallest due to the nature of the tree
  findMinNode(node) {
    if (node.left === null) return node;
    return this.findMinNode(node.left);
  }
}

const runner = (root) => {
  const bst = new BinarySearchTree();
  bst.insert(15);
  bst.insert(10);
  bst.insert(25);
  bst.insert(7);
  bst.insert(22);
  bst.insert(17);
  bst.insert(13);
  bst.insert(5);

  bst.delete(17);

  return bst.printInorder(bst.root).toString();
};

// pre-order traversal on the result
const testCases = [{ inputs: [], expected: "5,7,10,13,15,22,25" }];

export default function main() {
  runTests(runner, testCases, "Binary Search Tree");
}
