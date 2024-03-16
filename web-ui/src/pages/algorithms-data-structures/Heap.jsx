import React from "react";

const Heap = () => {
  return (
    <>
      <p>
        A heap is a specialized tree-based data structure that satisfies the
        heap property. The heap property states that the value of a parent node
        is always greater than or equal to (in a max heap) or less than or equal
        to (in a min heap) the values of its child nodes. Heaps are commonly
        used to implement priority queues and for efficient sorting algorithms
        like heapsort.
      </p>

      <h3>Types of Heaps</h3>
      <ul>
        <li>
          <strong>Max Heap:</strong> In a max heap, the value of each parent
          node is greater than or equal to the values of its child nodes. The
          root node contains the maximum value in the heap.
        </li>
        <li>
          <strong>Min Heap:</strong> In a min heap, the value of each parent
          node is less than or equal to the values of its child nodes. The root
          node contains the minimum value in the heap.
        </li>
      </ul>

      <h3>Heap Operations</h3>
      <p>The main operations performed on a heap are:</p>
      <ol>
        <li>
          <strong>Insertion:</strong> Adding a new element to the heap while
          maintaining the heap property.
        </li>
        <li>
          <strong>Extraction:</strong> Removing the top element (maximum in a
          max heap or minimum in a min heap) from the heap and restructuring the
          heap to maintain the heap property.
        </li>
        <li>
          <strong>Peek:</strong> Retrieving the top element without removing it
          from the heap.
        </li>
      </ol>

      <h3>Heap Implementation</h3>
      <p>
        Heaps can be implemented using an array or a tree-like data structure.
        The array implementation is more common due to its simplicity and
        efficiency. In the array implementation, the elements are stored in a
        specific order that allows the heap property to be maintained.
      </p>

      <p>
        Here's an example implementation of a max heap using an array in
        JavaScript:
      </p>

      <pre>
        <code>{`class MaxHeap {
 constructor() {
   this.heap = [];
 }

 getParentIndex(index) {
   return Math.floor((index - 1) / 2);
 }

 getLeftChildIndex(index) {
   return 2 * index + 1;
 }

 getRightChildIndex(index) {
   return 2 * index + 2;
 }

 swap(index1, index2) {
   const temp = this.heap[index1];
   this.heap[index1] = this.heap[index2];
   this.heap[index2] = temp;
 }

 insert(value) {
   this.heap.push(value);
   this.siftUp(this.heap.length - 1);
 }

 siftUp(index) {
   while (index > 0) {
     const parentIndex = this.getParentIndex(index);
     if (this.heap[parentIndex] < this.heap[index]) {
       this.swap(parentIndex, index);
       index = parentIndex;
     } else {
       break;
     }
   }
 }

 extractMax() {
   if (this.heap.length === 0) {
     return null;
   }
   const max = this.heap[0];
   this.heap[0] = this.heap[this.heap.length - 1];
   this.heap.pop();
   this.siftDown(0);
   return max;
 }

 siftDown(index) {
   while (true) {
     const leftChildIndex = this.getLeftChildIndex(index);
     const rightChildIndex = this.getRightChildIndex(index);
     let maxIndex = index;

     if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[maxIndex]) {
       maxIndex = leftChildIndex;
     }

     if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[maxIndex]) {
       maxIndex = rightChildIndex;
     }

     if (maxIndex !== index) {
       this.swap(maxIndex, index);
       index = maxIndex;
     } else {
       break;
     }
   }
 }

 peek() {
   if (this.heap.length === 0) {
     return null;
   }
   return this.heap[0];
 }
}
`}</code>
      </pre>

      <p>In this implementation:</p>
      <ul>
        <li>
          The <code>MaxHeap</code> class represents a max heap and provides
          methods to perform various operations on the heap.
        </li>
        <li>
          The <code>getParentIndex</code>, <code>getLeftChildIndex</code>, and{" "}
          <code>getRightChildIndex</code> methods calculate the indices of the
          parent, left child, and right child nodes, respectively, based on the
          current index.
        </li>
        <li>
          The <code>swap</code> method swaps two elements in the heap array.
        </li>
        <li>
          The <code>insert</code> method adds a new element to the heap and
          maintains the heap property by calling the <code>siftUp</code> method.
        </li>
        <li>
          The <code>siftUp</code> method restores the heap property by swapping
          the newly inserted element with its parent until the heap property is
          satisfied.
        </li>
        <li>
          The <code>extractMax</code> method removes and returns the maximum
          element (root) from the heap and maintains the heap property by
          calling the <code>siftDown</code> method.
        </li>
        <li>
          The <code>siftDown</code> method restores the heap property by
          swapping the root element with its larger child until the heap
          property is satisfied.
        </li>
        <li>
          The <code>peek</code> method retrieves the maximum element (root)
          without removing it from the heap.
        </li>
      </ul>

      <p>You can create a max heap and perform various operations like this:</p>

      <pre>
        <code>{`const heap = new MaxHeap();

heap.insert(10);
heap.insert(5);
heap.insert(15);
heap.insert(8);

console.log(heap.peek()); // Output: 15

console.log(heap.extractMax()); // Output: 15
console.log(heap.extractMax()); // Output: 10
console.log(heap.extractMax()); // Output: 8
console.log(heap.extractMax()); // Output: 5
`}</code>
      </pre>

      <p>
        This example demonstrates how to create a max heap, insert elements,
        retrieve the maximum element, and extract elements in descending order.
      </p>

      <p>
        Heaps are commonly used in scenarios where priority-based operations are
        required, such as task scheduling, event handling, and graph algorithms
        like Dijkstra's shortest path algorithm.
      </p>
    </>
  );
};

export default Heap;
