// testArray = [4, 0, -1, -2, 3]

// Understand the problem
// n = length of array
// a = [ ], an array passed into the function
// take in n & a, output new array, b = [ ]
// b array takes in integers of the Index's number + before number + after number

// Plan
// edge case 1: index[0] has no number to left of it
// edge case 2: index[a.length - 1] has no number to right of it
// **** edge case 3: if length of Array is 1, do this > 

// main case: every index 
// push into new Array, b=[]

// E
// R 

function mutateTheArray(n, a) {
    b = []

    // edge case 3
    if (a.length === 1){
        b.push(a[0])
    }

    // edge case 1
    if (a.length > 1){
        let firstNum = a[0] + a[1]
        b.push(firstNum)
    }

    // main case
    for(i=0; i < a.length-2; i++){
        if(a.length > 2){
            let mainNums = a[i] + a[i + 1] + a[i + 2]
            b.push(mainNums)
        }
    }

    // edge case 2
    if (a.length > 1 ){
        let lastNum = a[a.length-1] + a[a.length-2] // add last two indexs of array together
        b.push(lastNum)
    }

    return b
}
let testArray = [4, 0, -1, -2, 3]
console.log(mutateTheArray(5, testArray))