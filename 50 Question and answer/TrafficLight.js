const prompt = require('prompt-sync')();

function TrafficLigthController(input){

if(input == "red")return "Stop!";

if(input == "green")return "Go!";

if(input == "Yello")return "Wait!";

else return "Try Again!";

}



let userInput = prompt("Enter a colour red or yello or green:");

console.log(TrafficLigthController(userInput));

