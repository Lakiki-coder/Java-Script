function produce_phone_number(numbers){

let string = numbers.join('')

return (${string.substring(0,3)}) ${string.substring(3,6)} ${string.substring(6)}
}
console.log(produce_phone_number([1,2,3,4,5,6,7,8,9,0]))