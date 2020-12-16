// Your classmates asked you to copy some paperwork for them.
// You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need.

// Note: if n < 0 or m < 0 return 0!

// ex:
// paperwork(5, 5) == 25

function paperwork(n, m) {
  if(n < 0 || m < 0){
      return 0
  }
  let blankPages = n * m
  return blankPages
}
// given > integers
// return > integer