import Highlight from "react-highlight";

const StackComponent = () => {
  return (
    <>
      <p>
        A stack is a linear data structure that follows the Last-In-First-Out
        (LIFO) principle. Elements are added and removed only from one end of
        the stack, called the top. The main operations of a stack are:
      </p>
      <ul>
        <li>
          <code>push(element)</code>: Adds an element to the top of the stack.
        </li>
        <li>
          <code>pop()</code>: Removes and returns the element from the top of
          the stack.
        </li>
        <li>
          <code>peek()</code>: Returns the element at the top of the stack
          without removing it.
        </li>
        <li>
          <code>isEmpty()</code>: Returns true if the stack is empty, false
          otherwise.
        </li>
      </ul>
      <p>
        Stacks are commonly used for function call management, expression
        evaluation, and backtracking algorithms.
      </p>

      <Highlight className="javascript">
        {`
const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.isEmpty()); // Output: false
      `}{" "}
      </Highlight>
    </>
  );
};

export default StackComponent;
