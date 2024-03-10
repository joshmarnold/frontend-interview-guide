import findIndexOfPeak from "./binary-search/5-find-index-of-peak.js";
import findFirstTrue from "./binary-search/1-find-first-true.js";
import findElementNotSmallerThanTarget from "./binary-search/2-first-element-not-smaller-than-target.js";
import firstOccurence from "./binary-search/3-first-occurence.js";
import minInRotatedSortedArray from "./binary-search/4-min-in-rotated-sorted-array.js";
import stringReverse from "./recursion/string-reversal.js";
import isPalindrome from "./recursion/is-palindrome.js";
import sumOfNaturalNumbers from "./recursion/sum-of-natural-numbers.js";
import recursiveBinarySearch from "./recursion/binary-search.js";
import traversals from "./dfs/0-traversals-recursive.js";
import maxDepthOfTree from "./dfs/2-max-depth-of-a-tree.js";
import visibleTreeNodes from "./dfs/3-visible-tree-node.js";
import balancedBinaryTree from "./dfs/4-balanced-binary-tree.js";
import serializeDeserializeTree from "./dfs/5-serialize-deserialize-tree.js";
import invertBinaryTree from "./dfs/6-invert-binary-tree.js";
import binarySearchTree from "./dfs/8-binary-search-tree.js";
import isValidBST from "./dfs/7-is-valid-bst.js";
import LowestCommonAncestor from "./dfs/9-lowest-common-ancestor.js";
import printAllRootToLeafPathsState from "./dfs/1-print-all-root-to-leaf-paths.js";
import printAllRootToLeafPathsValues from "./dfs/1.5-print-all-root-to-leaf-paths.js";
import letterCombinationsofPhoneNumber from "./backtracking/5-letter-combinations-of-a-phone-number.js";
import permutationNoDups from "./backtracking/1-permutations-no-dups.js";
import PermutationsWithDups from "./backtracking/3-permutations-with-dups.js";
import subsets from "./backtracking/4-subsets.js";
import partitionStringsIntoPalindromes from "./backtracking/6-partition-strings-into-palindromes.js";
import wordBreak from "./backtracking/7-word-break.js";
import levelOrderTraversal from "./bfs/1-level-order-traversal.js";
import binaryTreeZigZagLevelOrderTraversal from "./bfs/2-binary-tree-zig-zag-level-order-traversal.js";
import binaryTreeRightSideView from "./bfs/3-binary-tree-right-side-view.js";
import decodeWays from "./backtracking/8-decode-ways.js";
import bfsOnGraph from "./graphs/bfs-on-graph.js";
import dfsOnGraph from "./graphs/dfs-on-graph.js";
import shortedPath from "./graphs/1-shortest-path-between-2-nodes.js";

// im importing this way so that I can easily
// add / remove functions while testing
const f = {
  // binarySearch: [
  //   findIndexOfPeak,
  //   findFirstTrue,
  //   findElementNotSmallerThanTarget,
  //   firstOccurence,
  //   minInRotatedSortedArray,
  // ],
  // recursion: [
  //   stringReverse,
  //   isPalindrome,
  //   sumOfNaturalNumbers,
  //   recursiveBinarySearch,
  // ],
  // dfs: [
  //   traversals,
  //   maxDepthOfTree,
  //   visibleTreeNodes,
  //   balancedBinaryTree,
  //   serializeDeserializeTree,
  //   invertBinaryTree,
  //   binarySearchTree,
  //   isValidBST,
  //   LowestCommonAncestor,
  //   printAllRootToLeafPathsState,
  //   printAllRootToLeafPathsValues,
  // ],
  backtracking: [
    // letterCombinationsofPhoneNumber,
    // permutationNoDups,
    // PermutationsWithDups,
    // subsets,
    // partitionStringsIntoPalindromes,
    // wordBreak,
    // decodeWays,
  ],
  bfs: [
    // levelOrderTraversal,
    // binaryTreeZigZagLevelOrderTraversal,
    // binaryTreeRightSideView,
  ],
  graphs: [bfsOnGraph, shortedPath, dfsOnGraph],
};

Object.keys(f).forEach((t) => {
  console.log(`\nRunning tests for ${t}`);
  f[t].forEach((fn) => fn());
});
