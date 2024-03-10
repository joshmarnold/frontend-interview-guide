function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // feasibility check
    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1; // Continue search on the right half
    } else {
      right = mid - 1; // Continue search on the left half
    }
  }

  return -1; // Target not found
}

// Example usage:
const arr = [1, 3, 5, 7, 8, 9];
const target = 5;
const index = binarySearch(arr, target);

console.log(index); // Output: 2 (as arr[2] === 5)
