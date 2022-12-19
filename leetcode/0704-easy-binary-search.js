// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let [leftIndex, rightIndex] = [0, nums.length - 1];
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (nums[midIndex] === target) {
      return midIndex;
    } else if (nums[midIndex] < target) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return -1;
};

console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1));
console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
