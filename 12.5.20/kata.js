// Write a function called repeat_str which repeats the 
// given string src exactly count times.

function repeatStr (n, s) {
    return s.repeat(n);
  }
// n > number of times to repeat
// s > is the string

// repeat()

// s.repeat(n)
////
// In this kata you will create a function
// that takes a list of non-negative integers
// and strings and returns a new list with the
// strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]

function filter_list(l) {
    // Return a new array with the strings 
    // filtered out
    return l.filter(x => typeof x === 'number')
  }

// filter()