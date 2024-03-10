import Highlight from "react-highlight";

const BFS = () => {
  return (
    <>
      <p>
        BFS is a graph traversal algorithm that visits all the nodes of a graph
        or tree in breadth-first order. Unlike Depth First Search (DFS), which
        explores the depth (child nodes) first before exploring the breadth
        (nodes at the same level), BFS visits all the nodes at the current level
        before moving on to the next level.
      </p>

      <h3>BFS vs DFS</h3>
      <p>
        The main difference between BFS and DFS lies in the order in which they
        visit the nodes:
      </p>
      <ul>
        <li>
          DFS uses a stack (or recursion) to keep track of the nodes to visit
          and explores as far as possible along each branch before backtracking.
        </li>
        <li>
          BFS uses a queue to keep track of the nodes to visit and explores all
          the neighboring nodes at the current level before moving on to the
          next level.
        </li>
      </ul>

      <p>
        The choice between BFS and DFS depends on the specific problem and the
        desired outcome:
      </p>
      <ul>
        <li>
          DFS is better for finding nodes far away from the root or exploring
          deep paths in a graph.
        </li>
        <li>
          BFS is better for finding nodes closest to the root or exploring the
          neighboring nodes in a level-wise manner.
        </li>
      </ul>

      <h3>BFS Template</h3>
      <p>
        BFS can be implemented using a queue data structure. Here's a template
        for performing BFS:
      </p>

      <Highlight className="javascript">{`function bfs(startNode, targetValue) {
  let queue = [startNode]; // Initialize queue with start node
  
  while (queue.length > 0) {
    const currentNode = queue.shift(); // Remove the first node from the queue

    if (currentNode.value === targetValue) return true; // Found the target value
    
    // Add all neighbors of the current node to the queue
    currentNode.neighbors.forEach(neighbor => {
      queue.push(neighbor);
    });
  }
  
  return false; // Target value not found
}`}</Highlight>

      <p>The template follows these steps:</p>
      <ol>
        <li>Initialize a queue with the root node to start the BFS.</li>
        <li>While the queue is not empty, repeat steps 3-5.</li>
        <li>Dequeue a node from the front of the queue.</li>
        <li>
          Process the dequeued node and enqueue its children (if any) to the
          back of the queue.
        </li>
        <li>
          If the desired condition is met (e.g., finding a specific node),
          return the result or perform the necessary action.
        </li>
        <li>
          If the queue becomes empty and the desired condition is not met,
          return an appropriate value or handle the case accordingly.
        </li>
      </ol>
    </>
  );
};

export default BFS;
