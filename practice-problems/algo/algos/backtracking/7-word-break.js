import { runTests, isPalindrome } from "../utils.js";

// Problem: Word Break
// Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
// Example: s = "leetcode", dict = ["leet", "code"], return true

// Time complexity: O(n*m*l),
//    n is the length of the string
//    m is the length of the longest word in the dictionary
//    l is the number of words in the dictionary
// Space complexity: O(n) due to the DP array
function wordBreakIterative(s, wordDict) {
  // Initialize the DP array with false values, then set the last value to true
  const dp = new Array(s.length + 1).fill(false);
  dp[s.length] = true;

  // Iterate from the end of the string towards the beginning
  for (let i = s.length - 1; i >= 0; i--) {
    // Iterate over all words in the dictionary
    for (const w of wordDict) {
      // If the word fits in the substring starting from 'i' and the substring equals the word
      if (i + w.length <= s.length && s.substring(i, i + w.length) === w) {
        // Update the DP table if the rest of the string can be segmented
        dp[i] = dp[i + w.length];
      }
      // If we found a true, break out of the loop for optimization
      if (dp[i]) break;
    }
  }
  // Return whether the entire string can be segmented or not
  return dp[0];
}

// Time complexity: O(n*m*l),
//    n is the length of the string
//    m is the length of the longest word in the dictionary
//    l is the number of words in the dictionary
// Space Complexity: O(n) for the recursion stack
function wordBreakRecursive(s, wordDict, start = 0) {
  // Base case: if start index reaches the end of the string, we've found a valid segmentation
  if (start === s.length) return true;

  // Try each word in the dictionary
  for (const word of wordDict) {
    const end = start + word.length;
    // Check if the current word matches the substring from start index
    if (end <= s.length && s.substring(start, end) === word) {
      // Recursively check if the remaining string can be segmented
      if (wordBreakRecursive(s, wordDict, end)) {
        return true;
      }
    }
  }

  // If no word leads to a valid segmentation, return false
  return false;
}

// we place x between each array in the output
const testCases = [
  {
    inputs: ["leetcode", ["leet", "code"]],
    expected: true,
  },
  {
    inputs: ["applepenapple", ["apple", "pen"]],
    expected: true,
  },
  {
    inputs: ["catsandog", ["cats", "dog", "sand", "and", "cat"]],
    expected: false,
  },
];

export default () => {
  runTests(wordBreakIterative, testCases, "Word Break - Iterative");
  runTests(wordBreakRecursive, testCases, "Word Break - Recursive");
};
