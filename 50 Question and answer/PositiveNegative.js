function checkPositiveOrNegative(number) {
    if (number > 0) {
        return "Positive!";
    } else {
        return "Negative or zero!";
    }
}

let testNumber = 0;
console.log("checkPositiveOrNegative(" + testNumber + ") =>", checkPositiveOrNegative(testNumber));
