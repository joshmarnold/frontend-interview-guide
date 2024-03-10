import { runTests, createGenericUndirectedGraph } from "../utils.js";

// Problem: Shortest path between 2 nodes
// Given a graph and two vertices, find the shortest path between the two vertices.

// To find the shortest path in an unweighted graph efficiently, we use BFS.
// We're familiar with the basic building blocks of BFS and the additional components
// needed for solving graph problems, such as the visited set.
//
// However, this problem requires a slight variation in the graph block:
//
// 1. Instead of using a simple set to track visited, we use a map to store the predecessor 
//    of each vertex. This allows us to backtrack from the end vertex to the start vertex and
//    reconstruct the path.
//
// 2. We don't add the vertex to the visited set when we dequeue it. Instead, we add it
//    to the visited map when we enqueue its neighbors. This approach ensures that we
//    store the predecessor of each vertex at the time of its visit, rather than when
//    it's dequeued.

// Time complexity is O(V + E), where V is the # of vertices and E is the # of edges in the graph.
// Space complexity is O(V) due to the queue used in BFS.
function shortestPath(graph, [start, end]) {
  if (!graph || !start || !end) return null;

  let queue = [start]; // Initialize the queue with the start vertex
  let visited = { [start]: null }; // Track visited vertices and their predecessors
  let found = false; // Flag to indicate if the end vertex has been reached

  while (queue.length > 0 && !found) {
    let vertex = queue.shift(); // Dequeue the next vertex

    if (vertex === end) {
      // If the end vertex is found
      found = true; // Set found flag to true
    } else {
      let neighbors = graph.getNeighbors(vertex); // Assuming this method exists
      for (let neighbor of neighbors) {
        if (visited[neighbor] === undefined) {
          // If neighbor hasn't been visited
          visited[neighbor] = vertex; // Mark as visited and store its predecessor
          queue.push(neighbor); // Enqueue the neighbor
        }
      }
    }
  }

  if (!found) return null; // If the end vertex wasn't found, return null

  // Backtrack from the end vertex to start using the visited object to reconstruct the path
  let path = [];
  let currentVertex = end;
  while (currentVertex !== null) {
    path.unshift(currentVertex); // Prepend currentVertex to the path
    currentVertex = visited[currentVertex]; // Move to the predecessor
  }

  return path.join(""); // Return the path as a string
}

const graph = createGenericUndirectedGraph();

const testCases = [
  {
    inputs: [graph, ["A", "F"]],
    expected: "ABDF",
  },
];

export default () =>
  runTests(shortestPath, testCases, "Shortest Path Between 2 Nodes");
