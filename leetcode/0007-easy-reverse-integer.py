from typing import *

'''
7. Reverse Integer, Easy
Given a 32-bit signed integer, reverse digits of an integer.
Note:
Assume we are dealing with an environment
that could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
'''


class Solution:
    def reverse(self, x: int) -> int:
        string_in = str(abs(x))
        string_out = ''
        for s in string_in:      # can also use str[::-1] to reverse a string
            string_out = s + string_out
        int_out = int(string_out) if x >= 0 else -int(string_out)
        if (-2**31) <= int_out <= (2**31 - 1):
            return int_out
        else:
            return 0
# test = Solution()
# print(test.reverse(153423))
