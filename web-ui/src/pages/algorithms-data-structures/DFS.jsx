import React from "react";
import Highlight from "react-highlight";

const DepthFirstSearch = () => {
  return (
    <>
      <h3>Understanding DFS in Tree Traversal</h3>

      <p>
        DFS is a fundamental algorithm used for traversing and searching tree
        structures. In tree traversal, DFS explores as far as possible along
        each branch before backtracking.
      </p>

      <h4>Thinking Like a Node</h4>
      <p>
        Rather than focusing on the entire tree structure at once, DFS
        encourages us to reason from the viewpoint of individual nodes. By doing
        so, we can effectively determine how each node should be processed and
        recursively explore its children.
      </p>

      <h4>Traversals</h4>
      <p>In DFS, you can traverse the tree in 3 ways:</p>
      <ul>
        <li>
          <strong>Preorder:</strong> Visit the current node before its children.
          Useful for creating copies of the tree, prefix expressions.
        </li>
        <li>
          <strong>Inorder:</strong> Visit the left child, then the current node,
          followed by the right child. Primarily used in binary search trees to
          retrieve elements in sorted order.
        </li>
        <li>
          <strong>Postorder:</strong> Visit all child nodes before the current
          node itself. Suitable for operations that require knowledge of all
          descendants, like calculating tree size or deleting the tree.
        </li>
      </ul>
      <p>
        Selecting the appropriate traversal order depends on the specific
        requirements of the problem you are addressing.
      </p>

      <h4>Defining the Recursive Function</h4>
      <p>
        DFS is typically implemented using a recursive function that operates on
        nodes. This function takes a node and any necessary state as arguments
        (facilitating the traversal process) and potentially returns state.
      </p>
      <ul>
        <li>
          <strong>Return Value:</strong> Decide what information to return after
          visiting a node. This can be the result of a computation (e.g., max
          depth, found node) to pass information from children to parent.
        </li>
        <li style={{ marginTop: "16px" }}>
          <strong>State(s):</strong> Identify what states are needed to compute
          the return value for the current node. These become function arguments
          to pass information from parent to children.
        </li>
      </ul>
      <p>All that's needed for problems that use DFS is:</p>
      <ol>
        <li>
          What type of recursive traversal should I do? (preorder, inorder,
          postorder)
        </li>
        <li>What information, if any, do I need to pass down to children?</li>
        <li>What information, if any, do I need to return from children?</li>
      </ol>
      <p>The creative or difficult part is determining #2 & #3</p>

      <h4>Templates</h4>
      <Highlight language="javascript">
        {`// Recursive Approach
function dfs(node, state) {
  // Base case: If the node is null, return
  if (node === null) {
    // Handle base case, if necessary
    return;
  }

  // Process the current node
  // Add code here to perform operations on the current node

  // Recurse on the left child with updated state
  dfs(node.left, updatedState);

  // Recurse on the right child with updated state
  dfs(node.right, updatedState);

  // Optionally, return a value after processing the node and its children
  return ...;
}`}
      </Highlight>

      <Highlight language="javascript">
        {`// Iterative Approach - Uses a stack
function dfs(node) {
  if (node === null) {
    return;
  }

  const stack = [node];

  while (stack.length) {
    const current = stack.pop();

    // Process the current node
    // Add code here to perform operations on the current node

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }
}`}
      </Highlight>
    </>
  );
};

export default DepthFirstSearch;
