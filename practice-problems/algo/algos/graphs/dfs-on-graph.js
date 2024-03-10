import { runTests, createGenericUndirectedGraph } from "../utils.js";

// Problem: DFS on a graph
// Given a graph, implement a depth-first search (DFS) algorithm to traverse the graph and print the nodes in the order they were visited.

// Time complexity: O(V + E), where V is the number of vertices and E is the number of edges in the graph
// Space complexity: O(V) for the queue and the visited set
function dfs(graph) {
  const visited = new Set(); // Initialize a set to keep track of visited vertices
  const stack = []; // Initialize a stack to manage the order of traversal

  // Start the traversal from the first vertex in the graph. "A" in this example
  const startVertex = Object.keys(graph.adjacencyList)[0];
  stack.push(startVertex); // Add the starting vertex to the stack

  let result = ""; // Initialize a string to concatenate the traversal order

  while (stack.length > 0) {
    // Continue the loop until the stack is empty
    const currentVertex = stack.pop(); // Remove and get the last vertex in the stack
    if (visited.has(currentVertex)) {
      continue;
    }
    result += currentVertex; // Add the current vertex to the result string
    visited.add(currentVertex); // Mark the current vertex as visited

    // Loop through all neighbors of the current vertex
    for (const neighbor of graph.adjacencyList[currentVertex]) {
      if (!visited.has(neighbor)) {
        // If the neighbor hasn't been visited
        stack.push(neighbor); // Add the neighbor to the stack for later traversal
      }
    }
  }

  return result.toString(); // Return the string representation of the traversal order
}

const graph = createGenericUndirectedGraph();

const testCases = [
  {
    inputs: [graph],
    expected: "ACEFDB",
  },
];

export default () => runTests(dfs, testCases, "DFS on a graph");
