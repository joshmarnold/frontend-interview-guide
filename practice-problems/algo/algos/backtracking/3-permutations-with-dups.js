import { runTests } from "../utils.js";

// Problem: Generate all permutations of a string with duplicates
// Video: https://www.youtube.com/watch?v=qhBVWf0YafA&t=192s

// The approach is similar to generating permutations of a string without duplicates,
// but we need to handle duplicate characters to avoid generating duplicate permutations.

// The way I think about it is that we want to generate permutations of the unique characters in the string,
// in other words, our choices are the unique characters in the string. For a problem with 112 as the input,
// we want to generate permutations of 1 and 2, and then insert the duplicate 1 in all possible positions in each permutation.
// The result will be 112, 121, and 211. and the tree below is the visual representation of the process.

// tree:
//      ""      level 0
//     / \
//    1   2     level 1
//   / \    \
//  1   2    1  level 2
//  |   |    |
//  2   1    1  level 3

// to do this, we can use a map to keep track of the count of each character in the string. Each unique character
// will be a choice, and we will generate permutations by considering each character and its count. The constraint
// is that we should not consider a character if its count is 0. The goal is reached when the current permutation
// has the same length as the input string.

// The time complexity of generating all permutations of a string with duplicates using backtracking is O(n * n!),
// where n is the length of the string. The space complexity is O(n) due to the recursive call stack.
function generatePermutations(str) {
  let results = []; // Array to store the generated permutations
  let map = new Map(); // Map to store the count of each character in the string

  // Count the occurrences of each character in the string
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Backtrack function to generate permutations
  function backtrack(currentPermutation = []) {
    if (currentPermutation.length === str.length) {
      results.push(currentPermutation.join(""));
      return;
    }

    // Consider each character and its count as a choice
    for (let [char, count] of map) {
      if (count === 0) continue;

      // Choose the character and decrement its count
      currentPermutation.push(char);
      map.set(char, count - 1);

      backtrack(currentPermutation);

      // Un-choose the character and increment its count
      map.set(char, count);
      currentPermutation.pop();
    }
  }

  backtrack();
  return results.toString();
}
const testCases = [{ inputs: ["aab"], expected: "aab,aba,baa" }];

export default () =>
  runTests(
    generatePermutations,
    testCases,
    "Generate String Permutations - With Dups"
  );
