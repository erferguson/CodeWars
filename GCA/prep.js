function mutateTheArray(n, a) {
    // Understand the problem
    // Sliding Window - we need to hit 3 sections at a time
    // Edge Case I missed - When the array is less than the length of two
    // Edge Cases - First index and last index -> We need conditionals for these


    // Plan the Problem
    // Write code for the edge cases *
    // Write code for the non-edge cases**
    // Write code for non-edge cases
    // return an array**

    // the array we need to return is 'b'
    b = []

    if (a.length == 1) {
        b.push(a[0])
    }

    if (a.length > 1) {
        // Beginning edge case
        if (a[0]){
                let firstNum = a[0] + a[1]
                b.push(firstNum)
        }
    // Middle stuffs in array / non-edge cases
        for (i=0; i < a.length -2; i++){
                if (a.length > 2){
                let otherNum = a[i] + a[i + 1] + a[i + 2]
                b.push(otherNum)
                }
            } 

        // Ending edge case
        if (a[a.length - 1]){
            let lastNum = a[a.length - 1] + a[a.length -2]
            b.push(lastNum)
            }
        }

   return b
}

testArray = [4, 0, -1, -2, 3]