const prompt = require('prompt-sync')();

function  SecretClubhouse(input){

if(input == "secret123")return "Access granted!Welcome!"

else "Access denied!"

}

let userInput = prompt("Enter password");

console.log(SecretClubhouse(userInput));


