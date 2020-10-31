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

# 7kyu
# Say Me Please Operations
# https://www.codewars.com/kata/5b5e0c0d83d64866bc00001d/train/python
# 

def say_me_operations(string_numbers):
    pass