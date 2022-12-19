from typing import *

'''
9. Palindrome Number, Easy
Determine whether an integer is a palindrome.
An integer is a palindrome when it reads the same backward as forward.
Follow up: Could you solve it without converting the integer to a string?
'''


class Solution:
    def isPalindrome(self, x: int) -> bool:
        # need to convert to string
        string = str(x)
        for i in range(len(string)//2):
            if string[i] != string[-(i + 1)]:
                return False
        return True

    def isPalindrome(self, x: int) -> bool:
        # don't convert int to string
        if x < 0 or (x != 0 and x % 10 == 0):
            return False
        else:
            inverted = 0
            while x > inverted:
                inverted = inverted * 10 + x % 10
                x //= 10
            return x == inverted or x == inverted//10
# test = Solution()
# print(test.isPalindrome(10))
