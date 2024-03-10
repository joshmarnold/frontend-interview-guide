import React, { Component } from "react";
import { PageHeader } from "../shared/PageHeader";
import Highlight from "react-highlight";

class BinarySearch extends Component {
  constructor() {
    super();
    this.state = {
      contentFetched: false, // You can set it to true once content is fetched
    };
  }

  render() {
    return (
      <>
        <h3>Binary Search and Feasibility: Beyond Finding Values</h3>
        <p>
          Binary search is known for its efficiency in finding a target value
          within a sorted sequence. By continuously halving the search space, it
          dramatically reduces the time needed to locate an item. Its
          effectiveness relies on two key properties: the sequence must be
          sorted, and the search criteria must follow a monotonic property,
          meaning the sequence consistently increases or decreases. However,
          binary search can also be used to identify transition points in
          sequences, thanks to the concept of a feasibility function.
        </p>

        <h4>Finding a Target: The Classic Use</h4>
        <p>
          Traditionally, binary search is employed to find a specific value. For
          instance, in a sorted array [1, 2, 4, 6, 9, 10], to find the number 6.
        </p>
        <p>
          For a quick demo, visit
          <a href="https://www.youtube.com/watch?v=s4DPM8ct1pI" target="_blank">
            NeetCode's video
          </a>
          .
        </p>

        <h4>The Role of a Feasibility Function</h4>
        <p>
          A feasibility function transforms binary search into a decision-making
          tool, evaluating conditions rather than searching for exact matches.
          This binary (true/false) approach allows binary search to be applied
          in scenarios where you're looking for the point at which a condition
          changes within a sequence.
        </p>

        <h4>First True Problem: A Gateway</h4>
        <p>
          A foundational application of the feasibility function in binary
          search is the "First True" problem. Consider an array of boolean
          values [false, false, true, true], sorted such that false values
          precede true values. The task is to find the first occurrence of true.
          This problem showcases how binary search can be adapted to find
          transition points, serving as a primer for more complex applications.
        </p>

        <h4>Feasibility Function: Expanding Applications</h4>
        <p>
          Once you understand how to apply the "First True" problem, virtually
          any problem that doesn't involve directly finding a target value can
          be transformed into a feasibility problem. By boiling down the search
          criteria to a simple true/false condition and applying binary search,
          we essentially look for the first "true" in the sequence to find our
          answer.
        </p>

        <h4>Templates</h4>
        <Highlight language="javascript">
          {`// Iterative
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // feasibility check
    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1; // Continue search on the right half
    } else {
      right = mid - 1; // Continue search on the left half
    }
  }

  return -1; // Target not found
}
          `}
        </Highlight>

        <Highlight language="javascript">
          {`// Recursive
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // Target not found
  }

  const mid = Math.floor((left + right) / 2);

  // feasibility check
  if (arr[mid] === target) {
    return mid; // Target found
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right); // Continue search on the right half
  } else {
    return binarySearch(arr, target, left, mid - 1); // Continue search on the left half
  }
}
          `}
        </Highlight>
      </>
    );
  }
}

export default BinarySearch;
