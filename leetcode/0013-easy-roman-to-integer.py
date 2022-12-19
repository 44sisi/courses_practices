from typing import *

'''
13. Roman to Integer, Easy
Given a roman numeral, convert it to an integer.
There are six instances where subtraction is used:
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
'''


class Solution:
    def romanToInt(self, s: str) -> int:
        dic = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        integer = 0
        for i in range(len(s)-1):
            if dic[s[i]] < dic[s[i+1]]:
                integer -= dic[s[i]]
            else:
                integer += dic[s[i]]
        integer += dic[s[-1]]
        return integer
# test = Solution()
# print(test.romanToInt('MCMXCIV'))
