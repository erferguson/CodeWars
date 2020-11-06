// create a square that has top & bottom edges with the
// length & width equal to number passed in (n)

// between top & bottom, frame should consist of empty space
// but with left & right sides as "*"

// PLAN
// receiving a number/integer
// at end spits out an Array filled w/ Strings
// middle strings have Spaces from first index to 2nd-to-last index

// Edge case: array not large enough to be a box, 0 1 2
// Main case: use a Loop for 3 ->

function frameGenerator(n) {
  var newArray = [];

  if (n === 0) {
      return newArray
  }

  let star = "*".repeat(n); // string
  let space = "*"+" ".repeat(n-2)+"*"; // singular space

    for (let i = 0; i < n; i++) {
      newArray.push(star);
    }
    for (let i = 1; i < n-1; i++) {
      // hit middle sections of the String in the newArray
      // update them to ' '
      const newString = newArray[i].replace(star, space); // <<<<<<<< STUCK HERE
      newArray[i] = newString;
    }
    console.log('*',space, '*')

  return newArray;
}

console.log(frameGenerator(12));

