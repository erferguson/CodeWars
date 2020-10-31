// Complete the square sum function so that it squares each 
// number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 
// because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let sum = 0

    numbers.forEach(function(n){
        sum += n * n
    })
    return sum
}

// Create a function that returns true when num1 is equal to num2; 
// otherwise return false.

function isSameNum(num1, num2) {
	if (num1 === num2){
        return true
    }
    else return false
}

// Given two arguments, return an array which 
// contains these two arguments.

function makePair(num1, num2) {
	return [num1, num2]
}