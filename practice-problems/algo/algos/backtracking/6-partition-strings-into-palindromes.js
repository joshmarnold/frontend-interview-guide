import { runTests, isPalindrome } from "../utils.js";

// Problem: Partition a string into palindromes
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
// this problem involves pruning the search space to avoid generating invalid partitions.
// Video: https://www.youtube.com/watch?v=3jvWodd7ht0

// The time complexity of generating all possible partitions of a string using backtracking is O(n * 2^n),
// where n is the length of the string.
// The space complexity is O(n) due to the recursive call stack.
function generatePalindromes(s) {
  const results = [];

  function backtrack(start, currentPartition) {
    if (start === s.length) {
      results.push([...currentPartition]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      if (isPalindrome(s.substring(start, end + 1))) {
        currentPartition.push(s.substring(start, end + 1));
        backtrack(end + 1, currentPartition);
        currentPartition.pop();
      }
    }
  }

  // start from the beginning of the string
  backtrack(0, []);
  return results;
}

// we place x between each array in the output
const testCases = [
  {
    inputs: ["aab"],
    // expected results: ["a,a,b", "aa,b"]
    expected: "a,a,b,x,aa,b",
  },
];

export default () =>
  runTests(generatePalindromes, testCases, "Generate Subsets");
