import { runTests } from "../utils.js";

function recursion(str) {
  if (str.length === 0 || str.length === 1) return true;
  // we can just reverse the string and compare it to the original OR
  // we can use pointers to check if the first and last characters are the same
  if (str[0] === str[str.length - 1]) {
    return recursion(str.slice(1, str.length - 1));
  }
  return false;
}

const testCases = [
  { inputs: ["hello"], expected: false },
  { inputs: ["kayak"], expected: true },
  { inputs: ["a"], expected: true },
  { inputs: [""], expected: true },
];

export default function main() {
  runTests(recursion, testCases, "Is Palindome");
}
