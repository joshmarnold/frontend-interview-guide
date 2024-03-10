import { runTests } from "../utils.js";

// Time complexity: O(log n) where n is the length of the array
// Space complexity: O(1) as it uses a fixed amount of space, left, right, and mid
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const leftValue = arr[mid - 1];
    const rightValue = arr[mid + 1];

    // feasibility check - if mid is the first or last element, then it's a peak if it's greater than its only neighbor
    if (arr[mid] > leftValue && arr[mid] > rightValue) {
      return mid; // Target found
    } else if (arr[mid] < arr[mid + 1]) {
      left = mid + 1; // Continue search on the right half
    } else {
      right = mid; // Continue search on the left half including mid (as mid could be the peak)
    }
  }

  return -1; // Target not found
}

const testCases = [
  { inputs: [[0, 1, 2, 3, 2, 1, 0]], expected: 3 },
  { inputs: [[0, 1, 2, 3, 4, 5, 6, 5, 4, 3]], expected: 6 }, // peak in right portion
  { inputs: [[6, 7, 8, 7, 6, 5, 4, 3, 2, 1]], expected: 2 }, // peak in left portion
  { inputs: [[1, 2, 1]], expected: 1 },
];

export default function main() {
  runTests(binarySearch, testCases, "Find Peak");
}
