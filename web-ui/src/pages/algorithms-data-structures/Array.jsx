import Highlight from "react-highlight";
import { PageHeader } from "../../shared/PageHeader";

export default function Array() {
  return (
    <>
      <h2>Methods</h2>
      <p>
        Full list of array methods can be found{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </p>
      <h3>slice()</h3>
      <p>
        <code>slice()</code> returns a shallow copy of a portion of an array
        into a new array object selected from <code>start</code> to{" "}
        <code>end</code> (end not included) where <code>start</code> and{" "}
        <code>end</code> represent the index of items in that array. The
        original array will not be modified.
      </p>
      <Highlight className="javascript">
        {`const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4)); // Output: [2, 3, 4]
console.log(arr.slice(2)); // Output: [3, 4, 5]`}
      </Highlight>

      <h3>splice()</h3>
      <p>
        <code>splice()</code> changes the contents of an array by removing or
        replacing existing elements and/or adding new elements in place. It
        returns an array containing the deleted elements.
      </p>
      <Highlight className="javascript">
        {`const arr = [1, 2, 3, 4, 5, 6];
// Remove 2 elements starting from index 2
console.log(arr.splice(2, 2)); // Output: [3, 4]
console.log(arr); // Output: [1, 2, 5, 6]
// Insert 3 and 4 starting from index 1
console.log(arr.splice(1, 2, 3, 4));  // Output: [2, 5]
console.log(arr); // Output: [1, 3, 4, 6]`}
      </Highlight>

      <h3>sort()</h3>
      <p>
        <code>sort()</code> sorts the elements of an array in place and returns
        the sorted array. The default sort order is ascending, built upon
        converting the elements into strings, then comparing their sequences of
        UTF-16 code units values.
      </p>
      <Highlight className="javascript">
        {`const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(arr.sort()); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// Sorting numbers in descending order
console.log(arr.sort((a, b) => b - a)); // Output: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]

// Sorting strings alphabetically
const fruits = ['banana', 'apple', 'orange', 'mango'];
console.log(fruits.sort()); // Output: ['apple', 'banana', 'mango', 'orange']

// Sorting strings in reverse alphabetical order
console.log(fruits.sort((a, b) => b.localeCompare(a))); // Output: ['orange', 'mango', 'banana', 'apple']`}
      </Highlight>

      <h3>reduce()</h3>
      <p>
        <code>reduce()</code> executes a reducer function (that you provide) on
        each element of the array, resulting in a single output value.
      </p>
      <Highlight className="javascript">
        {`const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15`}
      </Highlight>

      <h3>pop()</h3>
      <p>
        <code>pop()</code> removes the last element from an array and returns
        that element. This method changes the length of the array.
      </p>
      <Highlight className="javascript">
        {`const arr = [1, 2, 3, 4, 5];
console.log(arr.pop()); // Output: 5
console.log(arr); // Output: [1, 2, 3, 4]`}
      </Highlight>

      <h3>shift()</h3>
      <p>
        <code>shift()</code> removes the first element from an array and returns
        that removed element. This method changes the length of the array.
      </p>
      <Highlight className="javascript">
        {`const arr = [1, 2, 3, 4, 5];
console.log(arr.shift()); // Output: 1
console.log(arr); // Output: [2, 3, 4, 5]`}
      </Highlight>

      <h3>unshift()</h3>
      <p>
        <code>unshift()</code> adds one or more elements to the beginning of an
        array and returns the new length of the array.
      </p>
      <Highlight className="javascript">
        {`const arr = [1, 2, 3, 4, 5];
console.log(arr.unshift(0)); // Output: 6
console.log(arr); // Output: [0, 1, 2, 3, 4, 5]

console.log(arr.unshift(-2, -1)); // Output: 8
console.log(arr); // Output: [-2, -1, 0, 1, 2, 3, 4, 5]`}
      </Highlight>

      <div className="divider"></div>
      <h2>Loop Constructs</h2>

      <h3>for...of</h3>
      <p>
        The <code>for...of</code> statement creates a loop iterating over
        iterable objects, including: built-in <code>String</code>,{" "}
        <code>Array</code>, array-like objects (e.g., <code>arguments</code> or{" "}
        <code>NodeList</code>),
        <code>TypedArray</code>, <code>Map</code>, <code>Set</code>, and
        user-defined iterables.
      </p>
      <Highlight className="javascript">
        {`const arr = [10, 20, 30];
for (const value of arr) {
 console.log(value);
}
// Output:
// 10
// 20
// 30`}
      </Highlight>

      <h3>for...in</h3>
      <p>
        The <code>for...in</code> statement iterates over all enumerable
        properties of an object that are keyed by strings (ignoring ones keyed
        by Symbols), including inherited enumerable properties.
      </p>
      <Highlight className="javascript">
        {`const obj = { a: 1, b: 2, c: 3 };
for (const prop in obj) {
 console.log(\`\${prop}: \${obj[prop]}\`);
}
// Output:
// a: 1
// b: 2
// c: 3`}
      </Highlight>

      <div className="divider"></div>
      <h2>Tips & Tricks</h2>

      <h3>Initialize an Array with a Default Value</h3>
      <Highlight className="javascript">
        {`const arr = new Array(5).fill(0);
console.log(arr); // Output: [0, 0, 0, 0, 0]`}
      </Highlight>
    </>
  );
}
