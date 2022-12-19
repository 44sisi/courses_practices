from typing import *

'''
20. Valid Parentheses, Easy
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
'''


class Solution:
    def isValid(self, s: str) -> bool:
        pair = {'(': ')', '{': '}', '[': ']'}
        stack = []
        for p in s:
            if p in pair:
                stack.append(p)
            else:
                if not stack or pair[stack[-1]] != p:
                    return False
                else:
                    stack.pop()
        return not stack


test = Solution()
print(test.isValid('(]'))
