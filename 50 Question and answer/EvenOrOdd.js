const prompt = require('prompt-sync')();

function IsEvenOrOdd(input){

if(input % 2 == 0) return "Even!";
if(input % 2 != 0) return "Odd!"




}
let userInput = prompt("Enter a number");

console.log(IsEvenOrOdd(userInput));