# 8kyu
# This kata is from check py.checkio.org

# You are given an array with positive numbers and a number N. 

# You should find the N-th power of the element in the array with the index N. 

# If N is outside of the array, then return -1. 

# Don't forget that the first element has the index 0.

# Let's look at a few examples:
#   array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
#   array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

def index(array, n):

    if len(array) > n:
        
        return array[n]**n 
    
    else:
         return -1

# 8kyu
# Keep Hydrated!
# Nathan loves cycling.

# Because Nathan knows it is important to stay hydrated, 
# he drinks ( 0.5 litres of water per hour of cycling ).

# You get given the time in hours and 
# you need to return the number of litres Nathan will drink, 
# rounded to the smallest value.

# For example:
#   time = 3 ----> litres = 1
#   time = 6.7---> litres = 3
#   time = 11.8--> litres = 5

def litres(time):
    litres = .5
    return  int(time * litres)


# 8kyu
# Is n divisible by x and y?
# Create a function that checks if a number n is divisible by two numbers x AND y. 
# All inputs are positive, non-zero digits.

# Examples:
# 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
# 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
# 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
# 4) n =  12, x = 7, y = 5 => false because  12 

def is_divisible(n,x,y):

    if n % x == 0 and n % y == 0:
        
        return True
    
    else:
        return False