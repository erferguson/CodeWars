// You were camping with your friends far away from home, 
// but when it's time to go back, 
// you realize that your fuel is running out and 
// the nearest pump is 50 miles away! 
// You know that on average, your car runs on about 25 miles per gallon. 
// There are 2 gallons left. 
// Considering these factors, 

// write a function that tells you if it is possible to 
// get to the pump or not. 
// Function should return true (1 in Prolog) if it is possible and
// false (0 in Prolog) if not. 

// The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if ( fuelLeft * mpg >= distanceToPump ){
        return true
    }
    else {
        return false
    }
  };

  // given > integers
  // return > boolean, True/False

// >>>>>>

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better 
// than the average student in your class.

// You receive an array with your peers' test scores. 
// Now calculate the average and compare your score!

// Return True if you're better, else False!
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)

function betterThanAverage(classPoints, yourPoints) {
    let sum = 0
    
    for(let i = 0; i < classPoints.length; i++){
      sum += classPoints[i]
    }

    let averagePoints = sum / classPoints.length

    if(yourPoints > averagePoints ){
        return true
    } else {
        return false
    }
    
  }
  

  // given > array of integers
  // return > boolean, True/False

  // calculate average test score of classPoints


  // compare to yourPoints
  //    if yourPoints higher than classPoints, return True

  // .length to find length of array, classPoints  ?

  // for(let i = 0; i < classPoints.length; i++){
      // sum += classPoints[i]
      // return sum / classPoints.length
  // }

