// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Example 1:
// Input: n = 16
// Output: true

// Example 2:
// Input: n = 5
// Output: false

// Example 3:
// Input: n = 1
// Output: true

// Constraints:
// -231 <= n <= 231 - 1

// Follow up: Could you solve it without loops/recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  const logValue = Math.log(n) / Math.log(4);
  return Math.abs(logValue - Math.round(logValue)) < 1e-10;
};

console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(5)); // false
console.log(isPowerOfFour(1)); // true
console.log(isPowerOfFour(64)); // true


// observation: 
// 1  1
// 4  100
// 16 10000
// 64 1000000
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  return /^1(00)*$/.test(num.toString(2));
};
