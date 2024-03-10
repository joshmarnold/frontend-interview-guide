import Highlight from "react-highlight";
import { PageHeader } from "../shared/PageHeader"; // Adjust the path as needed

const MapComponent = () => {
  return (
    <>
      <p>
        A hash table, also known as a hash map, is a data structure that stores
        key-value pairs. It uses a hash function to compute an index into an
        array of buckets or slots, from which the desired value can be found.
        The main operations of a hash table are:
      </p>
      <ul>
        <li>
          <code>put(key, value)</code>: Inserts a key-value pair into the hash
          table.
        </li>
        <li>
          <code>get(key)</code>: Retrieves the value associated with the given
          key.
        </li>
        <li>
          <code>remove(key)</code>: Removes the key-value pair associated with
          the given key.
        </li>
        <li>
          <code>containsKey(key)</code>: Returns true if the hash table contains
          the given key, false otherwise.
        </li>
      </ul>
      <p>
        Hash tables provide fast average-case time complexity for insertion,
        deletion, and lookup operations, making them efficient for various tasks
        such as caching, indexing, and counting.
      </p>

      <Highlight className="javascript">
        {`const map = new Map();

map.set('apple', 1);
map.set('banana', 2);
map.set('orange', 3);

console.log(map.get('banana')); // Output: 2
console.log(map.has('grape')); // Output: false
map.delete('orange');
console.log(map.size); // Output: 2`}{" "}
      </Highlight>
    </>
  );
};

export default MapComponent;
