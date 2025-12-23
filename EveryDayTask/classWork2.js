
function removeInvalidNumbers(priorityArray) {
  let validNumbers = [];

  for (let i = 0; i < priorityArray.length; i++) {
    let value = priorityArray[i];

    if (typeof value === "number") {
      if (value >= 1 && value <= 5) {
        validNumbers.push(value);
      }
    }
  }

  return validNumbers;
}


let test = [1, 3, 6, 0, -2, 5, "3", 4, 7, 2];

console.log(removeInvalidNumbers(test)); 


