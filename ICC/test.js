// Implement the find_hobbyists function that takes an object consisting of peoples 
// names mapped to their respective hobbies, and a hobby. 
// The function should return an Array containing the names of the people (in any order) 
// that enjoy the hobby.

// For example, the following code should display the name 'John'.

// hobbies = {
//     "John" => ['Piano', 'Puzzles', 'Yoga'],
//     "Adam" => ['Drama', 'Fashion', 'Pets'],
//     "Mary" => ['Magic', 'Pets', 'Reading']
// }

// puts find_hobbyists(hobbies, 'Yoga')

let hobbies = {
    John: ['Piano', 'Puzzles', 'Yoga'],
    Adam: ['Drama', 'Fashion', 'Pets'],
    Mary: ['Magic', 'Pets', 'Reading']
  }
  
  let hobbies2 = {
    John: ['Piano', 'Puzzles', 'Yoga'],
    Adam: ['Drama', 'Piano', 'Pets'],
    Mary: ['Magic', 'Pets', 'Piano']
  }
  
  let hobbies3 = {
    John: ['Puzzles'],
    Adam: ['Drama', 'Piano', 'Puzzles', 'Pets'],
    Mary:['Magic', 'Pets', 'Piano']
  }
  
  function find_hobbyists(hobbies, hobby){
    let hobbyists = []
    
    let arrayHobbies = Object.entries(hobbies)
    
    arrayHobbies.forEach(obj => {
      if (obj[1].includes(hobby)){
        hobbyists.push(obj[0])
      }
    })
    return hobbyists
  }
  
  find_hobbyists(hobbies, 'Hiking')
  console.log(find_hobbyists(hobbies, "Hiking"))
  // find_hobbyists(hobbies, 'Hiking') should yield []
  
  find_hobbyists(hobbies, 'Yoga')
  console.log(find_hobbyists(hobbies, "Yoga"));
  // find_hobbyists(hobbies, 'Yoga') should yield ['John'] 
  
  find_hobbyists(hobbies2, 'Piano')
  console.log(find_hobbyists(hobbies2, 'Piano'))
  // find_hobbyists(hobbies2, 'Piano') should yield ['John', 'Adam', 'Mary']
  
  find_hobbyists(hobbies3, 'Puzzles')
  console.log(find_hobbyists(hobbies3, 'Puzzles'))
  // find_hobbyists(hobbies3, 'Puzzles') should yield ['John', 'Adam']