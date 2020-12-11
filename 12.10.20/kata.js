// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus 
// excluding the driver.

// If there is enough space, return 0, and if there isn't, 
// return the number of passengers he can't take.

// cap 10, on 5, wait 5
function enough(cap, on, wait) {
   if (on + wait < cap){
       return 0
   } else {
       return (on + wait) - cap
   }
  }

  // given > integers
  // return > integers ?

  // cap = amount of people the bus can hold
  // on = number of people on the bus
  // wait == number of people waiting to get on to the bus

  
  

// if enough space on bus, return 0

  
  
