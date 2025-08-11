const prompt = require('prompt-sync')();

function GreetingChooser(name) {
    if (name === "Alex") {
        return "Hello, friend!";
    } else {
        return "Hi, Stranger!";
    }
}

let userInput = prompt("Type your name: ");

console.log(GreetingChooser(userInput));



