// Create a function (or write a script in Shell) that 
// takes an integer as an argument and returns 
// "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if (number % 2 === 0){
      return 'Even'
    } 
    else return 'Odd'
  }

// Very simple, given a number, find its opposite.
  function opposite(number) {
    if (number > 0 ){
      return number * -1
    }
    else {
      return Math.abs(number)
    }
  }
// determine if number is + or -
// multiple by -1 to get negative
// find absolute value , Math.abs()