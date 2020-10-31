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

// Create a function that returns the number of frames shown 
// in a given number of minutes for a certain FPS.

function frames(minutes, fps) {
	return minutes * (fps * 60)
}

// Given two integers, a and b, return true if a 
// can be divided evenly by b. Return false otherwise.

function dividesEvenly(a, b) {
	if (a % b === 0){
        return true
    }
    else return false
}

// Create a function that takes the age and return the age in days.

function calcAge(age) {
	return age * 365
}

// Create a function that takes a string and 
// returns it as an integer.

function stringInt(str) {
	return parseInt(str)
}

// A bartender is writing a simple program to determine whether
// he should serve drinks to someone. He only serves drinks to 
// people 18 and older and when he's not on break.

// Given the person's age, and whether break time is in 
// session, create a function which returns whether he 
// should serve drinks.

function shouldServeDrinks(age, onBreak) {
    if (age >= 18 && onBreak === false){
        return true
    }
    else return false
}