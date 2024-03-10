function recursion(n) {
  // what is the base case / return condition?
  // what do we want to return when we reach the smallest input?
  if (n === 0) return 0;

  // smallest unit of work to contribute + shrink the problem space
  return 1 + recursion(n - 1);
}
