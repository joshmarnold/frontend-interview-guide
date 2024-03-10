import { runTests } from "../utils.js";

// Time complexity: O(log n) where n is the length of the array
// Space complexity: O(1) as it uses a fixed amount of space, left, right, and minIndex
function binarySearch(arr) {
  let left = 0;
  let right = arr.length - 1;
  let minIndex = -1;

  // Early exit for an empty array
  if (arr.length === 0) {
    return minIndex; // Return -1 to indicate no minimum index found
  }

  // Check if the array is not rotated
  if (arr[right] > arr[left]) {
    // If the last element is greater than the first,
    // the array is in ascending order, so return index 0
    return 0;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // feasibility check - Determine which side of the array the min value is on
    if (arr[mid] > arr[arr.length - 1]) {
      // If the middle element is greater than the last element,
      // it means the minimum value is to the right of the middle element.
      left = mid + 1;
    } else {
      // If the middle element is less than or equal to the last element,
      // it means the minimum value is at the middle or to the left of the middle element.
      minIndex = mid;
      right = mid - 1;
    }
  }

  // After exiting the loop, 'left' should also be at the index of the min element
  return minIndex; // Return the index of the minimum element found
}

// Example usage
const testCases = [
  { inputs: [[1, 2, 3, 4, 5, 6, 7, 8, 9]], expected: 0 }, // Not rotated
  { inputs: [[10, 11, 1, 2, 3, 4, 5, 6]], expected: 2 }, // min in left portion
  { inputs: [[6, 7, 8, 9, 1, 2, 3, 4, 5]], expected: 4 }, // mid
  { inputs: [[4, 5, 6, 7, 0, 1, 2]], expected: 4 }, // min in right portion
  { inputs: [[3]], expected: 0 },
  { inputs: [[]], expected: -1 },
];

export default function main() {
  runTests(binarySearch, testCases, "Find Min Index in Rotated Array");
}
