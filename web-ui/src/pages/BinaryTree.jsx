import React from "react";
import { PageHeader } from "../shared/PageHeader";
import Highlight from "react-highlight";

class BinaryTree extends React.Component {
  constructor() {
    super();
    this.state = {
      tree: null,
    };
  }

  fetchAndInsertContent = () => {
    // Implement fetchAndInsertContent function if needed
  };

  render() {
    return (
      <>
        <p>
          A binary tree is a hierarchical data structure composed of nodes,
          where each node has at most two children, referred to as the left
          child and the right child. The topmost node is called the root. Binary
          trees are commonly used for organizing and searching data efficiently.
        </p>

        <h3>Binary Tree Properties</h3>
        <p>
          Binary trees have several important properties and classifications
          based on their structure and characteristics. Some of the key
          properties of binary trees include:
        </p>

        <ol>
          <li>
            <strong>Full Binary Tree:</strong> A binary tree is considered a
            full binary tree if every node has either 0 or 2 children. In other
            words, each node must have exactly two children or no children at
            all.
          </li>
          <li>
            <strong>Complete Binary Tree:</strong> A binary tree is considered
            complete if all levels, except possibly the last level, are
            completely filled, and all nodes are as far left as possible. In a
            complete binary tree, the nodes are filled from left to right,
            without any gaps.
          </li>
          <li>
            <strong>Perfect Binary Tree:</strong> A binary tree is considered
            perfect if all levels are completely filled, and all leaf nodes are
            at the same level. In a perfect binary tree, the number of nodes
            doubles at each level, and the total number of nodes is 2^(h+1) - 1,
            where h is the height of the tree.
          </li>
          <li>
            <strong>Balanced Binary Tree:</strong> A binary tree is considered
            balanced if the heights of the left and right subtrees of any node
            differ by at most 1. Balanced binary trees are important for
            maintaining efficient search, insertion, and deletion operations.
            Examples of balanced binary trees include AVL trees and Red-Black
            trees.
          </li>
          <li>
            <strong>Binary Search Tree (BST):</strong> A binary search tree is a
            special type of binary tree where the left subtree of a node
            contains only nodes with values less than the node's value, and the
            right subtree contains only nodes with values greater than the
            node's value. This property allows for efficient searching,
            insertion, and deletion operations.
          </li>
        </ol>

        <div className="divider"></div>
        <h3>Traversals</h3>
        <p>Binary trees can be traversed in different ways, such as:</p>
        <ul>
          <li>
            <strong>In-order Traversal:</strong> Visit the left subtree, then
            the root, and finally the right subtree.
          </li>
          <li>
            <strong>Pre-order Traversal:</strong> Visit the root, then the left
            subtree, and finally the right subtree.
          </li>
          <li>
            <strong>Post-order Traversal:</strong> Visit the left subtree, then
            the right subtree, and finally the root.
          </li>
          <li>
            <strong>Level-order Traversal:</strong> Visit the nodes level by
            level, from left to right.
          </li>
        </ul>

        <div className="divider"></div>
        <h3>Implementation</h3>

        <p>
          To create a binary tree, you can define a Node class that represents
          each node in the tree. Each node contains a value and references to
          its left and right children. Here's an example implementation in
          JavaScript:
        </p>

        <Highlight className="javascript">
          {`
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.#insertNode(this.root, newNode);
    }
  }

  #insertNode(node, newNode) {
    if (newNode.value < node.value) {
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

  remove(value) {
    this.root = this.#removeNode(this.root, value);
  }

  #removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.#removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.#removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.#removeNode(node.right, minNode.value);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  findIndex(value) {
    return this.#findIndexHelper(this.root, value);
  }

  #findIndexHelper(node, value, index = 0) {
    if (node === null) {
      return -1;
    }

    if (node.value === value) {
      return index;
    }

    const leftIndex = this.#findIndexHelper(node.left, value, 2 * index + 1);
    if (leftIndex !== -1) {
      return leftIndex;
    }

    const rightIndex = this.#findIndexHelper(node.right, value, 2 * index + 2);
    return rightIndex;
  }
}
          `}
        </Highlight>

        <p>
          You can create a binary tree, insert nodes, remove nodes, and find
          indices like this:
        </p>

        <Highlight className="javascript">
          {`
const tree = new BinaryTree();

tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);

console.log(tree.findIndex(3)); // Output: 1
console.log(tree.findIndex(7)); // Output: 2
console.log(tree.findIndex(10)); // Output: -1

tree.remove(3);
console.log(tree.findIndex(3)); // Output: -1
        `}
        </Highlight>
      </>
    );
  }
}

export default BinaryTree;
