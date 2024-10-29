let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 16;
const isAdult = age >= 18;

if (isAdult && registeredEarly) {
	raceNumber += 1000;
	console.log(
		`You're race number is ${raceNumber}. You will begin your race at 9:30 AM.`
	);
} else if (isAdult && !registeredEarly) {
	console.log(
		`You're race number is ${raceNumber}. You will begin your race at 11 AM.`
	);
} else {
	console.log(
		`You're race number is ${raceNumber}. You will begin your race at 12:30 PM.`
	);
}
