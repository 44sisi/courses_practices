// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let [a, b] = [0, s.length - 1]; a < b; a++, b--) {
    [s[a], s[b]] = [s[b], s[a]];
  }
  return s;
};

var reverseString = function (s) {
  for (let i = s.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      const temp = s[j];
      s[j] = s[j + 1];
      s[j + 1] = temp;
    }
  }
  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
