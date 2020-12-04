// Complete the solution so that it 
// reverses the string passed into it.

// 'world'  =>  'dlrow'

function solution(str){
    // Step 1. Use the split() method to return a new array
    // Step 2. Use the reverse() method to reverse the new created array
    // Step 3. Use the join() method to join all elements of the array into a string
    return str.split("").reverse().join("")
}
////

// Convert number to reversed array of digits
// Given a random non-negative number, you have to 
// return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
    // 1 String(num) : The String global object acts as a 
    //     constructor for strings and "converts" 
    //     the given number into string (in this case)

    // 2 Array.reverse(): method reverses an array in place

    // 3 Array.map(): method creates and returns a new array 
    //     calling a provided function on every array element

    return String(n).split('').reverse().map(Number)
  }
  // given > integers
  // return > integers
////

// Given an array of integers as strings and numbers, 
// return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}

// given > array of integers
// return > integers

// change array to integers
// return sum of each integer