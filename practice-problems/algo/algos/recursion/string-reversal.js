import { runTests } from "../utils.js";

function recursion(str) {
  // what is the base case / return condition?
  // what is the smallest input that can be given to the function?
  // what do we want to return when we reach the smallest input?
  if (str.length === 0) return "";
  // what is the smallest amount of work that can be done on each iteration?
  // smallest unit of work to contribute + shrink the problem space
  return str[str.length - 1] + recursion(str.slice(0, str.length - 1));
}

const testCases = [
  { inputs: ["hello"], expected: "olleh" },
  { inputs: ["world"], expected: "dlrow" },
  { inputs: ["a"], expected: "a" },
  { inputs: [""], expected: "" },
];

export default function main() {
  runTests(recursion, testCases, "String Reversal");
}
