import React from "react";
import { PageHeader } from "../shared/PageHeader";
import Highlight from "react-highlight";

const StringMethodsComponent = () => {
  return (
    <>
      <h2>Methods</h2>
      <h3>substring()</h3>
      <p>
        The <strong>substring()</strong> method returns the part of the string
        between the start and end indexes, or to the end of the string.
      </p>
      <Highlight className="javascript">
        {`const str = "Hello, World!";
console.log(str.substring(1, 4)); // Output: ell
console.log(str.substring(4)); // Output: o, World!`}
      </Highlight>

      <h3>split()</h3>
      <p>
        The <strong>split()</strong> method splits a string into an array of
        substrings based on a specified separator.
      </p>
      <Highlight className="javascript">
        {`const str = "apple,banana,cherry";
const fruits = str.split(",");
console.log(fruits); // Output: ["apple", "banana", "cherry"]`}
      </Highlight>

      <h3>replace()</h3>
      <p>
        The <strong>replace()</strong> method replaces a specified value with
        another value in a string.
      </p>
      <Highlight className="javascript">
        {`const str = "Hello, World!";
const newStr = str.replace("World", "Universe");
console.log(newStr); // Output: Hello, Universe!`}
      </Highlight>

      <h3>trim()</h3>
      <p>
        The <strong>trim()</strong> method removes whitespace from both ends of
        a string.
      </p>
      <Highlight className="javascript">
        {`const str = "   Hello, World!   ";
const trimmedStr = str.trim();
console.log(trimmedStr); // Output: Hello, World!`}
      </Highlight>

      <h3>slice()</h3>
      <p>
        The <strong>slice()</strong> method extracts a section of a string and
        returns it as a new string.
      </p>
      <Highlight className="javascript">
        {`const str = "Hello, World!";
const slicedStr = str.slice(0, 5);
console.log(slicedStr); // Output: Hello`}
      </Highlight>

      <h3>indexOf()</h3>
      <p>
        The <strong>indexOf()</strong> method returns the index of the first
        occurrence of a specified value in a string.
      </p>
      <Highlight className="javascript">
        {`const str = "Hello, World!";
const index = str.indexOf("World");
console.log(index); // Output: 7`}
      </Highlight>

      <div className="divider"></div>

      <h2>Regular Expressions (Regex)</h2>
      <p>
        Regular expressions are patterns used to match character combinations in
        strings. JavaScript provides built-in support for regular expressions
        through the <code>RegExp</code> object and string methods like{" "}
        <code>match()</code>, <code>replace()</code>, and <code>test()</code>.
      </p>

      <h3>test()</h3>
      <p>
        The <strong>test()</strong> method tests for a match in a string and
        returns <code>true</code> or <code>false</code>.
      </p>
      <Highlight className="javascript">
        {`const pattern = /hello/;
console.log(pattern.test("hello world")); // Output: true
console.log(pattern.test("hi there")); // Output: false`}
      </Highlight>

      <h3>match()</h3>
      <p>
        The <strong>match()</strong> method retrieves the result of matching a
        string against a regular expression.
      </p>
      <Highlight className="javascript">
        {`const str = "The quick brown fox jumps over the lazy dog.";
const matches = str.match(/[aeiou]/gi);
console.log(matches); // Output: ["u", "i", "o", "o", "u", "o", "e", "e", "a", "o"]`}
      </Highlight>

      <h3>replace()</h3>
      <p>
        The <strong>replace()</strong> method replaces matches of a regular
        expression in a string with a replacement string.
      </p>
      <Highlight className="javascript">
        {`const str = "The quick brown fox jumps over the lazy dog.";
const newStr = str.replace(/[aeiou]/gi, "*");
console.log(newStr); // Output: Th* q**ck br*wn f*x j*mps *v*r th* l*zy d*g.`}
      </Highlight>

      <h3>Common Regex Patterns</h3>
      <ul>
        <li>
          <strong>/^[a-zA-Z0-9]+$/</strong>: Matches alphanumeric characters
          only
          <li>
            <strong>/^[a-zA-Z\s]+$/</strong>: Matches letters and whitespace
            characters only
          </li>
          <li>
            <strong>/^[0-9]+$/</strong>: Matches digits only
          </li>
        </li>
      </ul>
    </>
  );
};

export default StringMethodsComponent;
