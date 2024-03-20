import React from "react";
import Highlight from "react-highlight";

const GeneralProgramming = () => {
  return (
    <>
      <h2>Object-Oriented Programming (OOP)</h2>
      <p>
        OOP is a style of programming that is centered around objects instead of
        functions.
      </p>

      <h3>What are the 4 Pillars of OOP?</h3>
      <ol>
        <li>
          <strong>Encapsulation</strong>
          <ul>
            <li>
              What: Group related variables and methods that operate on them
              into an object.
            </li>
            <li>Why: Reduce complexity and increase reusability</li>
            <li>How does JS achieve this? Through closures</li>
          </ul>
        </li>
        <li>
          <strong>Abstraction</strong>
          <ul>
            <li>
              What: Hide away certain methods and only expose what you need to.
            </li>
            <li>Why: Reduce the impact of change.</li>
          </ul>
        </li>
        <li>
          <strong>Inheritance</strong>
          <ul>
            <li>Eliminate redundant code</li>
          </ul>
        </li>
        <li>
          <strong>Polymorphism</strong>
          <ul>
            <li>
              What: Poly: Many. Morphism: forms. Objects can be used in many
              ways. Can take on many forms.
            </li>
            <li>Why: Don't need exact forms for every scenario.</li>
          </ul>
        </li>
      </ol>

      <h2>Pure Functions</h2>
      <p>
        A <strong>pure function</strong> is a function that:
      </p>
      <ul>
        <li>Returns the same result if given the same arguments.</li>
        <li>
          Does not cause any observable side effects. This means that the
          function does not modify any external state or data.
        </li>
      </ul>
      <p>
        This helps maintain a clear and manageable codebase, where functions
        have predictable outputs and no side effects.
      </p>

      <p>
        Consider we have an array of numbers and we want to create a new array
        with each number incremented by 1. Here's how we can do it with a pure
        function:
      </p>

      <Highlight language="javascript">
        {`const numbers = [1, 2, 3, 4, 5];
const pureFunctionExample = (arr) => {
  return arr.map((number) => number + 1);
}

const incrementedNumbers = pureFunctionExample(numbers);
console.log(incrementedNumbers); // [2, 3, 4, 5, 6]`}
      </Highlight>
    </>
  );
};

export default GeneralProgramming;
