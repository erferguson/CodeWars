/// #1 
// Your goal is to return multiplication table for number
// that is always an integer from 1 to 10.

// For example, a multiplication table (string) for
// number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

// P. S. You can use \n in string to jump to the next line.
////////

function multiTable(number) {
    let table = []
    
    for (let i = 1; i <= 10 ; i++){

        table.push(`${i} * ${number} = ${i * number}`)
    }
    return table.join('\n')
  }
 

/// #2
// You will be given an array a and a value x. 
// All you need to do is check whether the provided 
// array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, 
// false if not.

function check(a, x) {
  
    for(let i = 0; i < a.length; i++){
        if( x === a[i] ){
            return true
        } 
    }
    return false
  }
// what given > array with either integers or strings
// returns > array with either integers or strings

// a = array w/ integers or strings
// x = a single value, integer or string

// does a contain x?