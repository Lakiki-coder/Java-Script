
  // Step 1:filter customers who scored 80 or above
 // Step 2: Sort high scorers by score descending
         // Swap
 // Sample data



function arrangeInDescendingOrder(number){

 let highScorers = []

for(let count = 0; count < number.length; count++){
 if(number[count].score >= 80){

highScorers.push(number[count]);
 }
}

for(let counter = 0;counter < highScorers.length-1;counter++){
  for(let meter = counter + 1; meter < highScorers.length;meter++){

if(highScorers[meter].score > highScorers[counter].score){
  let temp = highScorers[meter];

highScorers[meter] = highScorers[counter];
highScorers[counter] = temp;

  }
 }
}

return highScorers;
}

let testNumbers = [{name : "lakiki",score : 90},
	           {name : "soso",score : 81},
	           {name : "kiki",score : 44},
	           {name : "ziinat",score : 120}];

console.log(arrangeInDescendingOrder(testNumbers));
