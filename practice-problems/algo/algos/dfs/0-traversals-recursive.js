import { constructStringTree } from "../utils.js";

function inOrderTraversal(node) {
  if (node === null) return [];

  return [
    ...inOrderTraversal(node.left),
    node.val,
    ...inOrderTraversal(node.right),
  ];
}

export function preOrderTraversal(node) {
  if (node === null) return [];

  return [
    node.val,
    ...preOrderTraversal(node.left),
    ...preOrderTraversal(node.right),
  ];
}

function postOrderTraversal(node) {
  if (node === null) return [];

  return [
    ...postOrderTraversal(node.left),
    ...postOrderTraversal(node.right),
    node.val,
  ];
}

const root = constructStringTree();
export default function traversals() {
  console.log("    In order traversal:", inOrderTraversal(root).toString()); // d, b, e, a, c, f
  console.log("    Pre order traversal:", preOrderTraversal(root).toString()); // a, b, d, e, c, f
  console.log("    Post order traversal:", postOrderTraversal(root).toString()); // d, e, b, f, c, a
}
