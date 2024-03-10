import { runTests } from "../utils.js";

function recursion(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1; // Base case: target not found

  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid; // Target found

  if (arr[mid] < target) {
    // If target is greater than mid, ignore left half
    return recursion(arr, target, mid + 1, right);
  } else {
    // If target is smaller than mid, ignore right half
    return recursion(arr, target, left, mid - 1);
  }
}

const testCases = [
  { inputs: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5], expected: 4 },
  { inputs: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10], expected: 9 },
  { inputs: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11], expected: -1 },
];

export default function main() {
  runTests(recursion, testCases, "Binary Search");
}
