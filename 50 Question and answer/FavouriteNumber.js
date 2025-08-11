const prompt = require('prompt-sync')();

function FavoriteNumber(input){

for(count = 0; count < 8; count++){

if(input === 7)return "That’s my favorite number!"

else return "Nice try, guess again!"

}
}

let userInput = prompt("Guess a number: ");

console.log(FavoriteNumber(userInput));