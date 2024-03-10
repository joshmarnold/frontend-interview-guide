import { runTests, createGenericUndirectedGraph } from "../utils.js";

// Problem: BFS on a graph
// Given a graph, implement a breadth-first search (BFS) algorithm to traverse the graph and print the nodes in the order they were visited.

// Time complexity: O(V + E), where V is the number of vertices and E is the number of edges in the graph
// Space complexity: O(V) for the queue and the visited set
function bfs(graph) {
  const visited = new Set(); // Initialize a set to keep track of visited vertices
  const queue = []; // Initialize a queue to manage the order of traversal

  // Start the traversal from the first vertex in the graph. "A" in this example
  const startVertex = Object.keys(graph.adjacencyList)[0];
  queue.push(startVertex); // Add the starting vertex to the queue
  visited.add(startVertex); // Mark the starting vertex as visited

  let result = ""; // Initialize a string to concatenate the traversal order

  while (queue.length > 0) {
    // Continue the loop until the queue is empty
    const currentVertex = queue.shift(); // Remove and get the first vertex in the queue
    result += currentVertex; // Add the current vertex to the result string

    // Loop through all neighbors of the current vertex
    for (const neighbor of graph.adjacencyList[currentVertex]) {
      if (!visited.has(neighbor)) {
        // If the neighbor hasn't been visited
        queue.push(neighbor); // Add the neighbor to the queue for later traversal
        visited.add(neighbor); // Mark the neighbor as visited
      }
    }
  }

  return result.toString(); // Return the string representation of the traversal order
}

const graph = createGenericUndirectedGraph();

const testCases = [
  {
    inputs: [graph],
    expected: "ABCDEF",
  },
];

export default () => runTests(bfs, testCases, "BFS on a graph");
