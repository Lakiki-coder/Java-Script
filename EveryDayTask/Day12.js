function rearrangeInDecending(input){

for(let count = input; count >= 0; count++){

input.sort((a , b) => a - b)

}
return input
}

let input = 12324

console.log(rearrangeInDecending(input))
