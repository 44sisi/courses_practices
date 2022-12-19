// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:
// Input: n = 27
// Output: true

// Example 2:
// Input: n = 0
// Output: false

// Example 3:
// Input: n = 9
// Output: true
 
// Constraints:
// -231 <= n <= 231 - 1
 
// Follow up: Could you solve it without loops/recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    return Math.log(n) % Math.log(3) < 1e-10
};


/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    if (n <=0) {
      return false
    } else if (n === 1) {
      return true
    } else {
      return isPowerOfThree(n/3)
    }
};

console.log(isPowerOfThree(27))  // true
console.log(isPowerOfThree(0))  // false
console.log(isPowerOfThree(9))  // true