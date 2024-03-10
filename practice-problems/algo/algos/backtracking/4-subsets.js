import { runTests } from "../utils.js";

// Problem: Subsets
// Video: https://www.youtube.com/watch?v=3tpjp5h3M6Y

// Given a set of distinct integers, nums, return all possible subsets (the power set).
// Note: The solution set must not contain duplicate subsets.

// This example should help solidifiy the concept of "choices" in backtracking.
// In this example, we are given the set [1, 2, 3], and we are asked to generate all possible subsets.
// the choice is whether to include a number in the subset or not. In prior examples, the choice was to
// include a character in the permutation or not.

// how to calculate the number of subsets: 2^n, where n is the length of the input array.
// this is because we have 2 choices for each element in the input array: include it or exclude it.
// Time complexity is O(n * 2^n), where n is the length of the input array.
// The space complexity is O(n) due to the recursive call stack.
function generateSubsets(nums) {
  let results = []; // Array to store the generated permutations
  let currentSubset = [];

  // Backtrack function to generate permutations
  function backtrack(index) {
    if (index === nums.length) {
      results.push([...currentSubset]);
      return;
    }

    // choice 1: include the number at the current index
    currentSubset.push(nums[index]);
    backtrack(index + 1);

    // choice 2: exclude the number at the current index
    currentSubset.pop();
    backtrack(index + 1);
  }

  backtrack(0);
  return results.toString();
}

// we place x between each array in the output
const testCases = [
  {
    inputs: [[1, 2, 3]],
    // expected result count: 2^3 = 8
    // expected results: [[1,2,3], [1,2], [1,3], [1], [2,3], [2], [3], []]
    expected: "1,2,3,x,1,2,x,1,3,x,1,x,2,3,x,2,x,3,x,x",
  },
];

export default () => runTests(generateSubsets, testCases, "Generate Subsets");
