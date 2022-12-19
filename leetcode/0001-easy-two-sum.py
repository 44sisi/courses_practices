from typing import *

'''
1. Two Sum, Easy
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution,
and you may not use the same element twice.
'''


class Solution:
    # One-pass hash table, O(n)
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        stored_map = {}
        for i, v in enumerate(nums):  # 0(n)
            diff = target - v
            if diff in stored_map:    # O(1) for searching keys in hash table
                return [stored_map[diff], i]
            stored_map[v] = i
        return
# test = Solution()
# print(test.twoSum([3, 3], 6))
