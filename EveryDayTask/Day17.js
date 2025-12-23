/**Given a string, you have to return a string in which each character (case-
sensitive) is repeated once.
Examples
Input => "Hello World"
Output => "HHeelllloo WWoorrlldd"**/


function doublePrint(userInput){

let result = ""

for(let count = 0; count <= userInput; count++){

result += userInput[count] + userInput[count]

}
return result


}
//check the function
console.log(doublePrint("Hello World")); 