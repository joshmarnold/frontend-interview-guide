import { runTests } from "../utils.js";

// Time complexity: O(log n) where n is the length of the array
// Space complexity: O(1) as it uses a fixed amount of space, left, right, and result
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let firstOccurrence = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      firstOccurrence = mid; // Save the current index (0-based)
      right = mid - 1; // Look for an earlier occurrence
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return firstOccurrence; // Convert to 1-based index or return 0 if not found
}

const testCases = [
  { inputs: [[1, 3, 3, 5, 8, 8, 10], 3], expected: 1 },
  { inputs: [[1, 3, 3, 5, 8, 8, 10], 8], expected: 4 },
  { inputs: [[1, 3, 3, 5, 8, 8, 10], 10], expected: 6 },
  { inputs: [[1, 3, 3, 5, 8, 8, 10], 1], expected: 0 },
  { inputs: [[1, 3, 3, 5, 8, 8, 10], 4], expected: -1 }, // target not in array
  { inputs: [[], 10], expected: -1 }, // empty array case
];

export default function main() {
  runTests(binarySearch, testCases, "First Occurrence");
}
