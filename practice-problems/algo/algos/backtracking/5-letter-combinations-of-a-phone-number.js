import { runTests } from "../utils.js";

const phoneMap = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function letterCombinations(digits) {
  if (digits.length === 0) return "";
  const results = [];

  function backtrack(index, path) {
    // Goal: If the path length equals digits length, we've formed a valid combination
    if (path.length === digits.length) {
      results.push(path);
      return;
    }

    // Choices: Iterate over all possible letters for the current digit
    const possibleLetters = phoneMap[digits[index]];
    for (let letter of possibleLetters) {
      // Backtrack with the chosen letter added to the path
      backtrack(index + 1, path + letter);
    }
  }

  backtrack(0, ""); // Start backtracking from index 0 with an empty path
  return results.toString();
}

const testCases = [
  {
    inputs: ["23"],
    expected: "ad,ae,af,bd,be,bf,cd,ce,cf",
  },
  { inputs: [""], expected: "" },
  { inputs: ["2"], expected: "a,b,c" },
];

export default () =>
  runTests(
    letterCombinations,
    testCases,
    "Letter Combinations of a Phone Number"
  );
