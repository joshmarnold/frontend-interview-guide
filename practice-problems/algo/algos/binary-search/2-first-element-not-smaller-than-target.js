import { runTests } from "../utils.js";

// Time complexity: O(log n) where n is the length of the array
// Space complexity: O(1) as it uses a fixed amount of space, left, right, and result
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let minIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // feasibility check - Determine which side of the array the target value is on
    if (arr[mid] >= target) {
      minIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return minIndex + 1; // Convert to 1-based index or return 0 if not found
}

const testCases = [
  { inputs: [[1, 3, 3, 5, 8, 8, 10], 8], expected: 5 },
  { inputs: [[1, 3, 3, 5, 8, 8, 10], 9], expected: 7 },
  { inputs: [[1, 3, 3, 5, 8, 8, 10], 10], expected: 7 },
  { inputs: [[1, 3, 3, 5, 8, 8, 10], 1], expected: 1 },
  { inputs: [[1, 3, 3, 5, 8, 8, 10], 2], expected: 2 },
  { inputs: [[1, 3, 3, 5, 8, 8, 10], 11], expected: 0 }, // Target greater than any array element
  { inputs: [[], 10], expected: 0 }, // Empty array case
];

export default function main() {
  runTests(binarySearch, testCases, "Find First Not Smaller");
}
