//Complexity Analysis:
//Time Complexity: O(2^n)
//Auxiliary Space: O(1)

function stairs(n) {
  if (n <= 1) return n;
  return stairs(n - 1) + stairs(n - 2);
}
// Returns number of ways to reach s'th stairs
function countWays(s) {
    //The 3rd row is incomplete, we return 2.
  return stairs(s - 2);
};
console.log(countWays(5));
