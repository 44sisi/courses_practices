from typing import *

'''
14. Longest Common Prefix, Easy
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
'''


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if strs == []:
            return ''
        else:
            min_l = min(map(lambda s: len(s), strs))
            prefix = ''
            for i in range(min_l):
                if len(set(map(lambda s: s[i], strs))) == 1:
                    prefix += strs[0][i]
                else:
                    break
            return prefix
# test = Solution()
# print(test.longestCommonPrefix(["flower", "flow", "flight"]))
