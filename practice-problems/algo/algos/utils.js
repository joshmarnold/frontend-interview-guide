// Override the toString method to handle nested arrays
// we want to place an 'x' between nested arrays. Example -[[1], [2, 3], [4]] => "1,x,2,3,x,4"
Array.prototype.toString = function () {
  let result = this.reduce((acc, cur, index, array) => {
    // Convert current element to string - handles nested arrays recursively
    let curStr = Array.isArray(cur) ? cur.toString() : cur;

    // If the current element is an empty array
    if (Array.isArray(cur) && cur.length === 0) {
      acc += "x";
    }
    // Otherwise, add the current element to the result
    else {
      acc += curStr;
    }

    // If it's not the last element
    if (index !== array.length - 1) {
      // If the next element is an array, add 'x' separator
      if (Array.isArray(array[index + 1])) {
        acc += ",x,";
      }
      // Otherwise, add comma separator
      else {
        acc += ",";
      }
    }

    return acc;
  }, "");

  return result;
};

export function runTests(testFunction, testCases, testName) {
  console.log(`    Running tests for: ${testName}`);

  let passedTests = 0; // Initialize a counter for passed tests

  testCases.forEach((testCase, index) => {
    const actual = testFunction.apply(null, testCase.inputs);
    if (actual === testCase.expected) {
      passedTests++; // Increment the counter if the test passed
    } else {
      // Log failed tests
      console.log(
        `      ❌ Test ${index + 1} failed - Expected: ${
          testCase.expected
        }, Got: ${actual}`
      );
    }
  });

  // Check if all tests passed
  if (passedTests === testCases.length) {
    console.log(`      Tests passed: ${passedTests} / ${testCases.length} ✅`);
  } else {
    // Show a yield sign if not all tests passed
    console.log(
      `      🚸  Some tests did not pass! Passed: ${passedTests} / ${testCases.length}`
    );
  }
}

export class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export const constructStringTree = () => {
  //     a
  //    / \
  //   b   c
  //  / \   \
  // d   e   f

  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  return a;
};

export const constructNumberTree = () => {
  //     1
  //    / \
  //   2   3
  //  / \   \
  // 4   5   6

  const a = new Node(1);
  const b = new Node(2);
  const c = new Node(3);
  const d = new Node(4);
  const e = new Node(5);
  const f = new Node(6);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  return a;
};

export function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// graphs
export class GraphUsingAdjacencyList {
  constructor(isDirected = false) {
    this.adjacencyList = {};
    this.isDirected = isDirected;
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
      throw new Error("Both vertices must exist in the graph.");
    }

    // Always add an edge from v1 to v2
    this.adjacencyList[v1].push(v2);

    // If the graph is undirected, also add an edge from v2 to v1
    if (!this.isDirected) {
      this.adjacencyList[v2].push(v1);
    }
  }

  // Method to get all neighbors of a vertex
  getNeighbors(vertex) {
    if (!this.adjacencyList[vertex]) {
      throw new Error("Vertex does not exist in the graph.");
    }
    return this.adjacencyList[vertex];
  }
}

export const createGenericUndirectedGraph = () => {
  const graph = new GraphUsingAdjacencyList();

  /*
    A --- B
    |     |
    C --- D --- F
      \   |   /
        - E -
  */

  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");

  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  graph.addEdge("D", "E");
  graph.addEdge("D", "F");
  graph.addEdge("E", "F");

  return graph;
};
