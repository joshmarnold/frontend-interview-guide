import { runTests } from "../utils.js";

function recursion(n) {
  if (n === 0) return 0;
  return n + recursion(n - 1);
}

const testCases = [{ inputs: [10], expected: 55 }];

export default function main() {
  runTests(recursion, testCases, "Sum of Natural Numbers");
}
