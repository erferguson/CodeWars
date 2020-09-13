# 8kyu
# This kata is from check py.checkio.org

# You are given an array with positive numbers and a number N. 

# You should find the N-th power of the element in the array with the index N. 

# If N is outside of the array, then return -1. 

# Don't forget that the first element has the index 0.

# Let's look at a few examples:
#   array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
#   array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

# starter code
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

