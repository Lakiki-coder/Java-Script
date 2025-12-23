function findNestSquare(userInput){

let ifIsSquare = Math.sqrt(userInput)

if(ifIsSquare % 1 !== 0)return -1

let check = ifIsSquare + 1

let result = check * check


return result
}

let userInput = 121

console.log(findNestSquare(userInput))
