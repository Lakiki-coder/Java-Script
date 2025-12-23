function createIntergerLessThanUserInput(userInput){

let new_array = []

for(let count = userInput; count >= 1; count--){

new_array.push(count)
}
return new_array
}

let userInput = 10

console.log(createIntergerLessThanUserInput(userInput))