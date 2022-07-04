/*
let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda"

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);
*/

// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge);

// // Case 1
// let markHeight = 1.69;
// let markWeight = 78;
// let johnHeight = 1.95;
// let johnWeight = 92;

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / (johnHeight * johnHeight);
// console.log("Mark's BMI: " + markBMI);
// console.log("John's BMI: " + johnBMI);

// let markHigherBMI = markBMI > johnBMI;
// console.log("Case 1. Mark's BMI is higher than John's: " + markHigherBMI);


// // Case 2
// markHeight = 1.88;
// markWeight = 95;
// johnHeight = 1.76;
// johnWeight = 85;

// markBMI = markWeight / markHeight ** 2;
// johnBMI = johnWeight / (johnHeight * johnHeight);
// console.log("Mark's BMI: " + markBMI);
// console.log("John's BMI: " + johnBMI);

// markHigherBMI = markBMI > johnBMI;
// console.log("Case 2. Mark's BMI is higher than John's: " + markHigherBMI);

/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// // Case 1
// let markHeight = 1.69;
// let markWeight = 78;
// let johnHeight = 1.95;
// let johnWeight = 92;

// let markBMI = markWeight / markHeight ** 2;
// let roundedMarkBMI = Number((markBMI).toFixed(1));
// let johnBMI = johnWeight / (johnHeight * johnHeight);
// let roundedJohnBMI = Number((johnBMI).toFixed(1));

// let markHigherBMI = markBMI > johnBMI;
// if (markHigherBMI) {
//   console.log(`Mark's BMI (${roundedMarkBMI}) is higher than John's (${roundedJohnBMI})!`);
// } else {
//   console.log(`John's BMI (${roundedJohnBMI}) is higher than Mark's (${roundedMarkBMI})!`);
// }


// // Case 2
// markHeight = 1.88;
// markWeight = 95;
// johnHeight = 1.76;
// johnWeight = 85;

// markBMI = markWeight / markHeight ** 2;
// roundedMarkBMI = Number((markBMI).toFixed(1));
// johnBMI = johnWeight / (johnHeight * johnHeight);
// roundedJohnBMI = Number((johnBMI).toFixed(1));

// markHigherBMI = markBMI > johnBMI;
// if (markHigherBMI) {
//   console.log(`Mark's BMI (${roundedMarkBMI}) is higher than John's (${roundedJohnBMI})!`);
// } else {
//   console.log(`John's BMI (${roundedJohnBMI}) is higher than Mark's (${roundedMarkBMI})!`);
// }

/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');


let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
*/

/*
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
*/

/*
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');
*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/


// Case 1
let dolphins = (96 + 108 + 89) / 3;
let koalas = (88 + 91 + 110) / 3;

console.log(`Dolphins: ${dolphins}`);
console.log(`Koalas: ${koalas}`);

if (dolphins > koalas) {
  console.log('Dolphins won!');
} else if (dolphins === koalas) {
  console.log("It's a draw!");
} else {
  console.log("Koalas won!");
}


// Case 2
dolphins = (97 + 112 + 101) / 3;
koalas = (109 + 95 + 123) / 3;

console.log('');
console.log(`Dolphins: ${dolphins}`);
console.log(`Koalas: ${koalas}`);

if (dolphins > koalas) {
  console.log('Dolphins won!');
} else if (dolphins === koalas) {
  console.log("It's a draw!");
} else {
  console.log("Koalas won!");
}


// Case 3
koalas = (109 + 95 + 106) / 3;

console.log('');
console.log(`Dolphins: ${dolphins}`);
console.log(`Koalas: ${koalas}`);

if (dolphins > koalas) {
  console.log('Dolphins won!');
} else if (dolphins === koalas) {
  console.log("It's a draw!");
} else {
  console.log("Koalas won!");
}