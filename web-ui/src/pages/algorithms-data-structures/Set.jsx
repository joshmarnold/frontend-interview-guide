import Highlight from "react-highlight";
import { PageHeader } from "../../shared/PageHeader"; // Adjust the path as needed

const SetComponent = () => {
  return (
    <>
      <p>
        A set is a data structure that stores a collection of unique elements.
        It does not allow duplicate values. The main operations of a set are:
      </p>
      <ul>
        <li>
          <code>add(element)</code>: Adds an element to the set.
        </li>
        <li>
          <code>remove(element)</code>: Removes the specified element from the
          set.
        </li>
        <li>
          <code>contains(element)</code>: Returns true if the set contains the
          specified element, false otherwise.
        </li>
        <li>
          <code>size()</code>: Returns the number of elements in the set.
        </li>
      </ul>
      <p>
        Sets are useful when you need to store a collection of distinct elements
        and perform operations like membership testing, union, intersection, and
        difference.
      </p>

      <Highlight className="javascript">
        {`const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(2); // Duplicate, will be ignored

console.log(set.has(2)); // Output: true
set.delete(3);
console.log(set.size); // Output: 2`}
      </Highlight>
    </>
  );
};

export default SetComponent;
