import Highlight from "react-highlight";
import { PageHeader } from "../shared/PageHeader"; // Adjust the path as needed

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert a node at the end of the list
  insert(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
  }

  // Delete the first occurrence of a node with the specified value
  delete(value) {
    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }

  // Find the index of the first occurrence of a node with the specified value
  findIndex(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  // Get the size of the linked list
  getSize() {
    return this.size;
  }

  // Check if the linked list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Convert the linked list to an array
  toArray() {
    const result = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}

const LinkedListComponent = () => {
  const list = new LinkedList();

  list.insert(10);
  list.insert(20);
  list.insert(30);

  console.log(list.toArray()); // Output: [10, 20, 30]
  console.log(list.findIndex(20)); // Output: 1

  list.delete(20);
  console.log(list.toArray()); // Output: [10, 30]

  console.log(list.getSize()); // Output: 2
  console.log(list.isEmpty()); // Output: false

  return (
    <>
      <p>
        A linked list is a linear data structure that consists of a sequence of
        nodes, where each node contains a value and a reference (or link) to the
        next node in the sequence. Unlike arrays, linked lists do not store
        elements in contiguous memory locations, allowing for efficient
        insertion and deletion operations.
      </p>

      <h3>Types of Linked Lists</h3>
      <ul>
        <li>
          <strong>Singly Linked List:</strong> Each node contains only one
          reference to the next node.
        </li>
        <li>
          <strong>Doubly Linked List:</strong> Each node contains references to
          both the next and previous nodes.
        </li>
        <li>
          <strong>Circular Linked List:</strong> The last node's reference
          points back to the first node, forming a circular structure.
        </li>
      </ul>

      <h3>Linked List Operations</h3>
      <p>
        Here's an example implementation of a singly linked list in JavaScript:
      </p>

      <Highlight className="javascript">{`class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert a node at the end of the list
  insert(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
  }

  // Delete the first occurrence of a node with the specified value
  delete(value) {
    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }

  // Find the index of the first occurrence of a node with the specified value
  findIndex(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  // Get the size of the linked list
  getSize() {
    return this.size;
  }

  // Check if the linked list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Convert the linked list to an array
  toArray() {
    const result = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}

const list = new LinkedList();

list.insert(10);
list.insert(20);
list.insert(30);

console.log(list.toArray()); // Output: [10, 20, 30]
console.log(list.findIndex(20)); // Output: 1

list.delete(20);
console.log(list.toArray()); // Output: [10, 30]

console.log(list.getSize()); // Output: 2
console.log(list.isEmpty()); // Output: false`}</Highlight>
    </>
  );
};

export default LinkedListComponent;
