// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

// Example 2:
// Input: num = 0
// Output: 0
 
// Constraints:
// 0 <= num <= 231 - 1
 
// Follow up: Could you do it without any loop/recursion in O(1) runtime?


/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  const digits = Array.from(String(num), Number);
  const sum = digits.reduce((prevV, currentV) => prevV + currentV, 0);
  if (sum.toString().length === 1) {
    return sum;
  } else {
    return addDigits(sum);
  }
};

console.log(addDigits(0)); // 0
console.log(addDigits(38)); // 11 -> 2


// Mathematical solution for O(1) in space and time complexity
var addDigitsMath = function(num) {
    if (isNaN(num) || num === 0) return 0;
    return num % 9 === 0 ? 9 : num % 9;
};
