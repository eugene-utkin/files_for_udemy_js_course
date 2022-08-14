/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
*/

/*
function logger() {
	console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

/*
// Function declaration
function calcAge1(birthYear) {
	return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

/*
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2037 - birthYear;
	const retirement = 65 - age;
	// return retirement;
	return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
	return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
	return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;

	if (retirement > 0) {
		console.log(`${firstName} retires in ${retirement} years`);
		return retirement;
	} else {
		console.log(`${firstName} has already retired 🎉`);
		return -1;
	}
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

function calcAverage(score1, score2, score3) {
	const averageScore = (score1 + score2 + score3) / 3;
	return averageScore;
}

function checkWinner(avgDolphins, avgKoalas) {
	if (avgDolphins >= avgKoalas * 2) {
		console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
	} else if (avgKoalas >= avgDolphins * 2) {
		console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
	} else {
		console.log('No team wins');
	}
}

console.log('Case 1:');
let dolphins1 = 44;
let dolphins2 = 23;
let dolphins3 = 71;
let dolphinsAverage = calcAverage(dolphins1, dolphins2, dolphins3);

let koalas1 = 65;
let koalas2 = 54;
let koalas3 = 49;
let koalasAverage = calcAverage(koalas1, koalas2, koalas3);

checkWinner(dolphinsAverage, koalasAverage);

console.log('');
console.log('Case 2:');
dolphins1 = 85;
dolphins2 = 54;
dolphins3 = 41;
dolphinsAverage = calcAverage(dolphins1, dolphins2, dolphins3);

koalas1 = 23;
koalas2 = 34;
koalas3 = 27;
koalasAverage = calcAverage(koalas1, koalas2, koalas3);
