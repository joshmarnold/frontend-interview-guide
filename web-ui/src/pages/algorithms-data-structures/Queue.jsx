import Highlight from "react-highlight";
import { PageHeader } from "../../shared/PageHeader"; // Adjust the path as needed

const QueueComponent = () => {
  return (
    <>
      <p>
        A queue is a linear data structure that follows the First-In-First-Out
        (FIFO) principle. Elements are added to the rear (end) of the queue and
        removed from the front. The main operations of a queue are:
      </p>
      <ul>
        <li>
          <code>enqueue(element)</code>: Adds an element to the rear of the
          queue.
        </li>
        <li>
          <code>dequeue()</code>: Removes and returns the element from the front
          of the queue.
        </li>
        <li>
          <code>front()</code>: Returns the element at the front of the queue
          without removing it.
        </li>
        <li>
          <code>isEmpty()</code>: Returns true if the queue is empty, false
          otherwise.
        </li>
      </ul>
      <p>
        Queues are commonly used for task scheduling, breadth-first search, and
        cache management.
      </p>

      <Highlight className="javascript">
        {`const queue = [];

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.shift()); // Output: 1
console.log(queue[0]); // Output: 2
console.log(queue.length === 0); // Output: false`}{" "}
      </Highlight>
    </>
  );
};

export default QueueComponent;
