// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
 
// Constraints:
// -100.0 < x < 100.0
// -231 <= n <= 231-1
// -104 <= xn <= 104


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// from discussion solution
var myPow = function (x, n) {
  if (n === 0) return 1;

  let pow = Math.abs(n);

  let result =
    pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;

  return n < 0 ? 1 / result : result;
};

// from discussion solution with examples
function myPow(x, n) {
  if (n === 0) return 1;
  // x ^ -n = 1/x ^ n
  if (n < 0) return myPow(1 / x, n * -1);
  // n is even, x ^ n = (x * x) ^ (n / 2)
  // e.g. 2 ^ 4 = 2 * 2 * 2 * 2 = 4 * 4 = 4 ^ 2
  if (n % 2 === 0) return myPow(x * x, n / 2);
  // n is odd, x ^ n = ((x * x) ^ ((n - 1) / 2)) * x
  // e.g. 2 ^ 5 = 2 * 2 * 2 * 2 * 2 = 4 * 4 * 2 = (4 ^ 2) * 2
  return myPow(x * x, (n - 1) / 2) * x;
}

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// runTime Error
var myPowV1 = function (x, n) {
  const numbers = [];
  for (let i = 0; i < Math.abs(n); i++) {
    numbers.push(x);
  }

  const resultAbs = numbers.reduce((prev, current) => prev * current, 1);
  return n >= 0 ? resultAbs : 1 / resultAbs;
};

console.log(myPowV1(2, 10)); // 1024
console.log(myPowV1(2.1, 3)); // 9.261
console.log(myPowV1(2, -2)); // 0.25
console.log(myPowV1(2, 0)); // 1

// runTime Error
var myPowV2 = function (x, n) {
  if (n === 0) {
    return 1;
  } else if (n > 0) {
    return x * myPowV2(x, n - n / Math.abs(n));
  } else {
    return (1 / x) * myPowV2(x, n - n / Math.abs(n));
  }
};

console.log(myPowV2(2, 10)); // 1024
console.log(myPowV2(2.1, 3)); // 9.261
console.log(myPowV2(2, -2)); // 0.25
console.log(myPowV2(2, 0)); // 1
