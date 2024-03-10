/*
 *
 * recursive DFS
 *
 */

function inOrderTraversal(node) {
  if (node === null) return;

  inOrderTraversal(node.left); // Visit left subtree
  console.log(node.val); // Visit node itself
  inOrderTraversal(node.right); // Visit right subtree
}

function preOrderTraversal(node) {
  if (node === null) return;

  console.log(node.val);
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
}

function postOrderTraversal(node) {
  if (node === null) return;

  postOrderTraversal(node.left);
  postOrderTraversal(node.right);
  console.log(node.val);
}

/*
 *
 * iterative DFS
 *
 */

function preOrderTraversalIterative(node) {
  const stack = [node];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current.val);

    if (current.right !== null) {
      stack.push(current.right);
    }
    if (current.left !== null) {
      stack.push(current.left);
    }
  }
}

function inOrderTraversalIterative(node) {
  const stack = [];
  let current = node;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    console.log(current.val);
    current = current.right;
  }
}

function postOrderTraversalIterative(node) {
  const stack = [];
  const result = [];
  if (node !== null) {
    stack.push(node);
  }

  while (stack.length > 0) {
    const current = stack.pop();
    result.unshift(current.val);

    if (current.left !== null) {
      stack.push(current.left);
    }
    if (current.right !== null) {
      stack.push(current.right);
    }
  }

  result.forEach((val) => console.log(val));
}
