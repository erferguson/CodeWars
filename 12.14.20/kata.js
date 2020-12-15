// Write a function that takes an array of numbers and 
// returns the sum of the numbers. 

// The numbers can be negative or non-integer. 
// If the array does not contain any numbers 
// then you should return 0.

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Sum Numbers
function sum (numbers) {
    "use strict";
    if(numbers === 0){
        return 0
    }

    let total = 0
    for (let i = 0; i < numbers.length; i++){
    total += numbers[i]
    }
    return total
};

// given > array of integers
// return > sum of integers

// if array has not integers, return 0
 