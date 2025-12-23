let number = 5
console.log(`    
                Select a number-->

		1-> January
		2-> febuary
		3-> march
		4-> April
		5-> may
		6-> June
		7-> July
		8-> August
		9-> September
		10-> October
		11-> November                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
		12-> December

`);
 
 switch(number){
	
	case 1: console.log(` --> (1) January
			      --> is part of the first quarter`);
				break;
	case 2: console.log(` --> (2) February
			      --> is part of the first quarter`);
				break;
	case 3: console.log(` --> (3) March
			      --> is part of the first quarter`);
				break;
	case 4: console.log(` --> (4) April
			      --> is part of the second quarter`);
				break;
	case 5: console.log(` --> (5) May
			      --> is part of the second quarter`);				break;
	case 6: console.log(` --> (6) June
			      --> is part of the second quarter`);
				break;
	case 7: console.log(` --> (7) July
			      --> is part of the third quarter`);
				break;
	case 8: console.log(` --> (8) August 
			      --> is part of the third quarter`);
				break;
	case 9: console.log(` --> (9) September
			      --> is part of the third quarter`);
				break;
	case 10: console.log(` --> (10) October
			       --> is part of the forth quarter`);
				break;
	case 11: console.log(` --> (11) November
			       --> is part of the forth quarter`);
				break;
	case 12: console.log(` --> (12) December
			     --> is part of the forth quarter`);
				break;
	default: console.log(`You have entered wrong input,input number between 1 to 12:`);
}


