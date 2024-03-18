import React from "react";
import Highlight from "react-highlight";
import UnweightedGraph from "../../svgs/UnweightedGraph";

const ApproachingLeetCodeProblems = () => {
  return (
    <>
      <h2>
        This is very much a concept I'm trying to work out to help solve
        problems.{" "}
      </h2>
      <h3>Templates, Capabilities, and Variations</h3>
      <p>
        When tackling LeetCode problems, it's helpful to have a structured
        approach that leverages common patterns and techniques. By categorizing
        problems into templates, capabilities, and variations, you can
        effectively organize your problem-solving strategies and develop a
        systematic approach to solving coding challenges. The idea is to
        identify the core components, techniques, and adaptations that can be
        applied to a wide range of problems within a specific domain. This way,
        you dont need to work through hundreds of problems to get a good
        understanding of the domain. It's the whole, teach a man to fish thing.
      </p>

      <h2>Templates</h2>
      <p>
        A template represents a basic structure or algorithm that can be applied
        to solve a subset of problems within a specific domain. Templates
        provide a starting point and a general framework for solving problems
        that share similar characteristics. Examples of templates include:
      </p>
      <ul>
        <li>Binary Search Template</li>
        <li>Recursive Template</li>
        <li>DFS (Depth-First Search) Template</li>
        <li>Two-Pointer Template</li>
      </ul>

      <h2>Capabilities</h2>
      <p>
        A capability represents an additional component, technique, or
        functionality that can be added to a template to extend its
        problem-solving abilities and address a subset of problems within a
        domain. Capabilities build upon templates and provide extra features or
        strategies that are commonly used in solving certain types of problems.
        Examples of capabilities include:
      </p>
      <ul>
        <li>Visited Set Capability for graph traversal problems</li>
        <li>Memoization Capability for dynamic programming problems</li>
        <li>Sliding Window Capability for substring or subarray problems</li>
      </ul>

      <h2>Variations</h2>
      <p>
        A variation refers to a slight modification or adaptation of a template
        or capability to fit the specific requirements of a problem. Variations
        involve tweaking or customizing certain aspects of a template or
        capability to address unique constraints or conditions. Examples of
        variations include:
      </p>
      <ul>
        <li>
          Modifying the Binary Search Template to find the first or last
          occurrence of an element
        </li>
        <li>
          Adapting the BFS Template to find the shortest path in a weighted
          graph
        </li>
        <li>
          Adjusting the Sliding Window Capability to handle different window
          sizes or conditions
        </li>
      </ul>

      <h2>Approach</h2>
      <p>
        To effectively approach LeetCode problems using templates, capabilities,
        and variations, follow these steps:
      </p>
      <ol>
        <li>
          Identify the problem domain and characteristics using keywords or
          hints.
        </li>
        <li>Determine what template(s) the problem fits into.</li>
        <li>
          Assess if any additional capabilities are required to solve the
          problem.
        </li>
        <li>
          Customize the template or capabilities with necessary variations to
          fit the specific problem requirements.
        </li>
      </ol>

      <div className="divider"></div>
      <h2>Example: Shortest Path Between Two Nodes</h2>
      <p>
        Let's consider the problem of finding the shortest path between two
        nodes in an unweighted graph. This problem can be solved using the BFS
        template with the capability to handle graphs through a visited set.
        Additionally, it requires two variations:
      </p>
      <div style={{ display: "flex", gap: "5px" }}>
        <ol>
          <li>
            Instead of using a set for the visited nodes, we use a map. This
            variation allows us to store not just the visited nodes, but also
            their predecessors, which helps us reconstruct the shortest path.
          </li>
          <li>
            We modify when we mark the nodes as visited. Typically, in BFS, we
            mark a node as visited when we dequeue it. However, in this case, we
            need to mark the nodes as visited when we enqueue their neighbors.
            This variation enables us to set the predecessor of each visited
            node to the current node, effectively capturing the path
            information.
          </li>
        </ol>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <UnweightedGraph />
        </div>
      </div>

      <h3>BFS Template</h3>
      <Highlight language="javascript">
        {`function bfsTree(root) {
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    // Process the current node
    console.log(node.val);

    // Enqueue the child nodes
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}`}
      </Highlight>

      <h3>Set Capability (Visited set used in graphs to prevent cycles)</h3>
      <Highlight language="javascript">
        {`function bfs(start, target) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();

    if (visited.has(node)) {
      continue; // Skip already visited nodes
    }

    visited.add(node);

    if (node === target) {
      // Found the target node
      return;
    }

    for (const neighbor of getNeighbors(node)) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
}`}
      </Highlight>

      <h3>Variation (Map and Visited Node Setting)</h3>
      <Highlight language="javascript">
        {`function shortestPath(start, target) {
  const queue = [[start, [start]]];
  const visited = new Map();
  
  while (queue.length > 0) {
    const [node, path] = queue.shift();
    
    if (node === target) {
      // Found the target node
      return path;
    }
    
    for (const neighbor of getNeighbors(node)) {
      if (!visited.has(neighbor)) {
        visited.set(neighbor, node);
        queue.push([neighbor, [...path, neighbor]]);
      }
    }
  }
  
  // No path found
  return null;
}`}
      </Highlight>

      <p>
        In this variation, we use a map called <code>visited</code> to store the
        predecessor of each visited node. Instead of adding the node to the
        visited set when we dequeue it, we add it to the visited map when we
        enqueue its neighbors. This allows us to store the predecessor of each
        node at the time of its discovery.
      </p>

      <p>
        By using a map and modifying when we set the visited nodes, we can
        reconstruct the shortest path from the start node to the target node by
        backtracking through the predecessors stored in the visited map.
      </p>

      <p>
        This example demonstrates how the BFS template can be enhanced with the
        capability to handle graphs using a visited set, and further adapted
        with variations to solve the specific problem of finding the shortest
        path between two nodes.
      </p>
      <br />
      <br />
      <h2>Example: Factorial and Fibonacci</h2>

      <p>
        Let's analyze the factorial and Fibonacci problems and their solutions
        to determine if the difference between them is a variation or a
        capability.
      </p>

      <h3>Template</h3>
      <p>
        Both factorial and Fibonacci problems use the recursive template. The
        recursive template consists of the following components:
      </p>
      <ol>
        <li>
          Base case(s): The condition(s) where the recursion stops and returns a
          value without further recursive calls.
        </li>
        <li>
          Recursive case(s): The part of the function where the problem is
          broken down into smaller subproblems, and the function calls itself
          with modified arguments.
        </li>
      </ol>

      <h3>Factorial</h3>
      <Highlight language="javascript">
        {`function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case
  }
  return n * factorial(n - 1); // Recursive case
}`}
      </Highlight>

      <h3>Fibonacci</h3>
      <Highlight language="javascript">
        {`function fibonacci(n) {
  if (n === 0) {
    return 0; // Base case
  }
  if (n === 1) {
    return 1; // Base case
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}`}
      </Highlight>

      <h3>Analysis</h3>
      <ol>
        <li>
          Both factorial and Fibonacci use the recursive template, which is the
          core capability of solving problems by breaking them down into smaller
          subproblems.
        </li>
        <li>
          The main difference between the two solutions lies in the specific
          implementation of the base cases and the recursive cases:
          <ul>
            <li>
              Factorial has one base case (n === 0 || n === 1) and multiplies n
              with the result of factorial(n - 1) in the recursive case.
            </li>
            <li>
              Fibonacci has two base cases (n === 0 and n === 1) and adds the
              results of fibonacci(n - 1) and fibonacci(n - 2) in the recursive
              case.
            </li>
          </ul>
        </li>
        <li>
          The difference in the base cases and recursive cases is a variation of
          the recursive template. Both problems use the same core capability of
          recursion but differ in how they define the stopping conditions and
          combine the subproblems' results.
        </li>
      </ol>

      <p>
        Therefore, the difference between the factorial and Fibonacci solutions
        is a variation of the recursive template. The core capability of
        recursion remains the same, but the specific implementation details
        (base cases and recursive cases) vary based on the problem requirements.
      </p>

      <p>
        In summary, the factorial and Fibonacci problems demonstrate how the
        recursive template can be adapted and varied to solve different problems
        while maintaining the core capability of recursion.
      </p>
    </>
  );
};

export default ApproachingLeetCodeProblems;
