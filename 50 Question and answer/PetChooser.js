const prompt = require('prompt-sync')();

function favoritePet(name) {
    if (name === "Dog" || name === "cat") {
        return "Woof! Dogs are awesome!";
    } else {
        return "Cool choice, but I love dogs!" ;
    }
    }

let userInput = prompt("Type  name of pet: ");

console.log(favoritePet(userInput));



