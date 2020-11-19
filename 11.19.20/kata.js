function mutateTheArray(n, a) {
    let b = []
    a.push(0)
    a.unshift(0)

    for(let i = 1; i < a.length-1; i++){
        console.log(i, a[i-1])
        let newB = a[i - 1] + a[i] + a[i + 1]
        b.push(newB)
    }
    return b
}
console.log(mutateTheArray(5, [4, 5, 6, 7]))
// [0, 4, 5, 6, 7, 0]

// n = integer
// a = [ n.length ]

// mutate a, an ARRAY

// what is taken in > integer & array of integers
// what is to be Returned > array of integers


// b.map(function(i){ 
//     let newB = a[i - 1] + a[i] + a[i + 1]
//     return newB
//  })

// b[i] = a[i - 1] + a[i] + a[i + 1]

// 0 + a[0] + a[1] >> set to ZERO

// STEPS

// read the question 
// read again
// re-read + make notes
// --
// what data type is given?
// what data type is to be returned?
    // let result = 'string' / [array]
    
// -- 
// break down the Steps
// if given an Array, use For Loop -- where to start, where to end
// returning something new