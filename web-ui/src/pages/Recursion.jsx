import React from "react";
import { PageHeader } from "../shared/PageHeader";
import Highlight from "react-highlight";

const RecursionComponent = () => {
  return (
    <>
      <p>
        Recursion involves a function calling itself to solve a problem by
        breaking it down into smaller instances of the same problem. Key to
        recursion are the base case and recursive case:
      </p>
      <h4>Identifying the Base Case</h4>
      <ul>
        <li>
          <strong>Smallest Problem:</strong> The base case represents the
          simplest instance of the problem, where no further recursion is
          needed. It's crucial to identify the smallest input your function can
          handle directly. For example:
          <ul>
            <li>
              In a function that processes a string, the base case might be an
              empty string ("") or when the string's length equals 0 (str.length
              === 0).
            </li>
            <li>
              For a numerical problem, such as calculating the factorial of a
              number, the base case could be when the number equals 0 or 1 (n
              === 0 || n === 1), as these are the points where the factorial
              value is known without further calculation.
            </li>
          </ul>
        </li>
        <li>
          <strong>Return Value for Base Case:</strong> Determine what your
          function should return when the base case is encountered. This is
          typically a straightforward, known value.
        </li>
      </ul>
      <h4>Constructing the Recursive Case</h4>
      <ul>
        <li>
          <strong>Breaking Down the Problem:</strong> The recursive case reduces
          the problem into a simpler version, moving the solution closer to the
          base case with each call.
        </li>
        <li>
          <strong>Smallest Unit of Work:</strong> Identify the minimal action
          your function performs in each recursive call, which contributes to
          the overall solution.
        </li>
        <li>
          <strong>Combining Results:</strong> Decide how to integrate the
          results of the recursive call with the current level's work, often
          through a simple operation like addition or multiplication.
        </li>
      </ul>

      <h4>Trusting the "Leap of Faith"</h4>
      <p>
        When working with recursion, there's a concept called the "leap of
        faith." This refers to trusting that your recursive function will
        eventually reach the base case and return the correct result. Here's how
        it typically works:
      </p>
      <ol>
        <li>
          <strong>Identifying the problem and base case</strong>
        </li>
        <li>
          <strong>Constructing the recursive case</strong>
        </li>
        <li>
          <strong>Trusting the process:</strong> The "leap of faith" comes into
          play here. Once you've identified the base case and constructed the
          recursive case, you trust that your function will work correctly as it
          navigates through the recursive calls, eventually reaching the base
          case.
        </li>
      </ol>

      <p>
        For a comprehensive video on recursion, visit
        <a href="https://www.youtube.com/watch?v=IJDJ0kBx2LM" target="_blank">
          freeCodeCamp's video
        </a>
        .
      </p>

      <h4>Examples</h4>
      <p>
        Understand these examples to grasp the concept of recursion and how it's
        applied to different problems.
      </p>

      {/* Level 1: Factorial */}
      <Highlight language="javascript">
        {`// Level 1: Factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case
  }
  return n * factorial(n - 1); // Recursive case
}`}
      </Highlight>

      {/* Level 2: Fibonacci */}
      <Highlight language="javascript">
        {`// Level 2: Fibonacci
function fibonacci(n) {
  if (n === 0) {
    return 0; // Base case
  }
  if (n === 1) {
    return 1; // Base case
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}`}
      </Highlight>

      {/* Level 3: Merge Sort */}
      <Highlight language="javascript">
        {`// Level 3: Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // Recursive case
  const right = mergeSort(arr.slice(mid)); // Recursive case
  return merge(left, right); // Recursive case
}`}
      </Highlight>

      {/* Level 4: Tower of Hanoi */}
      <Highlight language="javascript">
        {`// Level 4: Tower of Hanoi
function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    console.log(\`Move disk 1 from \${source} to \${destination}\`); // Base case
    return;
  }
  towerOfHanoi(n - 1, source, destination, auxiliary); // Recursive case
  console.log(\`Move disk \${n} from \${source} to \${destination}\`); // Recursive case
  towerOfHanoi(n - 1, auxiliary, source, destination); // Recursive case
}`}
      </Highlight>
    </>
  );
};

export default RecursionComponent;
