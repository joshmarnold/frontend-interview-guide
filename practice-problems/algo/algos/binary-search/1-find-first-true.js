import { runTests } from "../utils.js";

// Time complexity: O(log n) where n is the length of the array
// Space complexity: O(1) as it uses a fixed amount of space, left, right, and result
function binarySearch(arr) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1; // Initialize result as -1 assuming no true element is found

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // feasibility check - Determine which side of the array the true value is on
    if (arr[mid] === true) {
      result = mid;
      right = mid - 1; // Move left to find if any true exists on the left portion
    } else {
      left = mid + 1; // Move right since the first true must be on the right portion
    }
  }

  return result; // Return the found index or -1 if no true element exists
}

const testCases = [
  { inputs: [[false, false, false, true, true]], expected: 3 },
  { inputs: [[true, true, true, true]], expected: 0 },
  { inputs: [[false, false, false, false]], expected: -1 },
  { inputs: [[false, true]], expected: 1 },
  { inputs: [[true]], expected: 0 },
  { inputs: [[]], expected: -1 }, // Empty array case
];

export default function main() {
  runTests(binarySearch, testCases, "Find First True");
}
