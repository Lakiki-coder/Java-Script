let person = {  first :    "feyi",
		lastName:  "onaja",
		age :      "92",
	Nationality : "Togolees"
}

for (const details in person){
 
  if(details === "age"){

	console.log(`${details} ${person[details]}`);
}
}