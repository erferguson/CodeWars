# 8kyu
# Invert Values
# https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

# Given a set of numbers, return the additive inverse of each. 
# Each positive becomes negatives, and the negatives become positives.


#You can assume that all values are integers. 
# Do not mutate the input array/list.


def invert(lst):
    empty = []

    for num in lst:
        num = num * -1
        empty.append(num)
    return empty