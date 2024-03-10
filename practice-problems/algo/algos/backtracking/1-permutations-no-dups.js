import { runTests } from "../utils.js";

// Problem: Generate all permutations of a string with no duplicates
// Video: https://www.youtube.com/watch?v=H232aocj7bQ

/**
 * Time Complexity:
 * - The time complexity of generating all permutations of a string using backtracking is O(n * n!),
 *   where n is the length of the string.
 * - There are n! possible permutations for a string of length n, and generating each permutation takes O(n) time.
 * - Therefore, the total time complexity is O(n * n!).
 * - As the length of the string increases, the number of permutations grows factorially, leading to a significant
 *   increase in the time complexity.
 *
 * Space Complexity:
 * - The space complexity of the algorithm itself is O(n) due to the recursive call stack.
 * - The maximum depth of the recursive call stack will be equal to the length of the string, n.
 * - Each recursive call requires a certain amount of space on the call stack for local variables and function parameters.
 * - If we are required to store all the generated permutations, the space complexity would be O(n * n!),
 *   as we need to store n! permutations, each of length n.
 * - However, if we are not required to store the permutations and can process or output each permutation as it is generated,
 *   the space complexity would be O(n), determined solely by the recursive call stack.
 *
 * Note:
 * - The space complexity discussed here refers to the additional space used by the algorithm during its execution,
 *   excluding the space needed for the input and output.
 * - It's important to consider the specific requirements of the problem to determine the actual space complexity,
 *   especially regarding storing the generated permutations.
 */
function generatePermutations(str) {
  const results = []; // Array to store the generated permutations

  // Backtrack function to generate permutations
  function backtrack(strArr, currentPermutation = []) {
    // Goal: If the current permutation has the same length as the input string,
    // it means we have a complete permutation
    if (currentPermutation.length === strArr.length) {
      results.push(currentPermutation.join("")); // Add the current permutation to the results array
      return;
    }

    // Choice: Generate permutations by considering each character
    for (let char of strArr) {
      // Constraint: If the current character is already present in the current permutation,
      // skip it to avoid duplicate permutations
      if (currentPermutation.includes(char)) {
        continue;
      }

      // Make the choice: Add the current character to the current permutation
      currentPermutation.push(char);

      // Explore further choices: Recursively call the backtrack function with the updated current permutation
      backtrack(strArr, currentPermutation);

      // Backtrack: Remove the last character from the current permutation
      // This is necessary to explore other choices and generate all permutations
      currentPermutation.pop();
    }
  }

  // Convert the input string to an array of characters and start the backtrack process
  // with an empty current permutation array
  backtrack(str.split(""), []);

  // Return the generated permutations as a string
  return results.toString();
}
const testCases = [{ inputs: ["abc"], expected: "abc,acb,bac,bca,cab,cba" }];

export default () =>
  runTests(
    generatePermutations,
    testCases,
    "Generate String Permutations - No Dups"
  );
