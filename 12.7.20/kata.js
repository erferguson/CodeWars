// Take an array and remove every second element from the array. 
// Always keep the first element and start removing with the 
// next element.

// Example:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty

function removeEveryOther(arr){
    let updated = []

    for (let i = 0; i < arr.length; i = i+2 ){
        updated.push(arr[i])
    }
  }

  // given > array
  // return > array

  // blank array to hold old array keepers, let updated = []
  // for loop to loop over
  // i = i + 2 for remove second element?
