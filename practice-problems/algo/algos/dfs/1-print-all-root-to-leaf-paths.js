import { runTests, constructStringTree } from "../utils.js";

// goal of problem?
// this problem focuses on sending data down the tree or call stack
// which tackles 1/3 main focuses of DFS which are traversals, state, return values

// we use an outer array to store all paths since we aren't returning anything
// from each call of dfs.. thats the next problem.. how to return the paths
function printRootToLeafPaths(root) {
  // nested arrays to store all paths
  const allPaths = [];
  dfs(root, [], allPaths);
  return allPaths.toString();
}

// Time Complexity: O(n) - We visit every node once
// Space Complexity: O(n) - We store all paths in the allPaths array
function dfs(node, currentPath, allPaths) {
  if (!node) return;

  // Add the current node to the path
  currentPath.push(node.val);

  // Check if the current node is a leaf node
  if (!node.left && !node.right) {
    // If it's a leaf, add the current path to the collection of all paths
    allPaths.push([currentPath.join()]);
  } else {
    // Otherwise, continue searching down the left and right children
    dfs(node.left, [...currentPath], allPaths); // Pass a copy of the current path
    dfs(node.right, [...currentPath], allPaths); // Pass a copy of the current path
  }
}

const tree = constructStringTree();
// note: nested arrays have an 'x' between them
const testCases = [{ inputs: [tree], expected: "a,b,d,x,a,b,e,x,a,c,f" }];

export default function main() {
  runTests(
    printRootToLeafPaths,
    testCases,
    "Print all root to leaf paths Using State"
  );
}
