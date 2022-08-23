// let country = 'Russia';
// const continent = 'Eurasia';
// let population = 145;
// const isIsland = false;
// let language;

// language = 'Russian';

// const populationComparison = population > 33 ? 'above' : 'below';
// console.log(`${country}'s population is ${populationComparison} average`);

/*
function describeCountry(country, population, capitalCity) {
	const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
	return description;
}

console.log('');
// Function declaration
function percentageOfWorld1(population) {
	return population / 7900 * 100;
}

let chinaPopulation = percentageOfWorld1(1441);
let roundedChinaPopulation = Number((chinaPopulation).toFixed(2));
let chinaComparison = `China has 1441 million people, so it's about ${roundedChinaPopulation}% of the world population.`
let kyrgyzstanPopulation = percentageOfWorld1(6.7);
let roundedKyrgyzstanPopulation = Number((kyrgyzstanPopulation).toFixed(2));
let kyrgyzstanComparison = `Kirgizstan has 6.7 million people, so it's about ${roundedKyrgyzstanPopulation}% of the world population.`
let russiaPopulation = percentageOfWorld1(145);
let roundedRussiaPopulation = Number((russiaPopulation).toFixed(2));
let russiaComparison = `Russia has 145 million people, so it's about ${roundedRussiaPopulation}% of the world population.`

console.log('Function declaration example');
console.log(chinaComparison);
console.log(kyrgyzstanComparison);
console.log(russiaComparison);

console.log('');
// Function expression
const percentageOfWorld2 = function (population) {
	return population / 7900 * 100;
}

chinaPopulation = percentageOfWorld2(1441);
roundedChinaPopulation = Number((chinaPopulation).toFixed(2));
chinaComparison = `China has 1441 million people, so it's about ${roundedChinaPopulation}% of the world population.`
kyrgyzstanPopulation = percentageOfWorld2(6.7);
roundedKyrgyzstanPopulation = Number((kyrgyzstanPopulation).toFixed(2));
kyrgyzstanComparison = `Kirgizstan has 6.7 million people, so it's about ${roundedKyrgyzstanPopulation}% of the world population.`
russiaPopulation = percentageOfWorld2(145);
roundedRussiaPopulation = Number((russiaPopulation).toFixed(2));
russiaComparison = `Russia has 145 million people, so it's about ${roundedRussiaPopulation}% of the world population.`

console.log('Function expression example');
console.log(chinaComparison);
console.log(kyrgyzstanComparison);
console.log(russiaComparison);

*/

/*
console.log('');
// Arrow function
const percentageOfWorld3 = population => population / 7900 * 100;

const chinaPopulation = percentageOfWorld3(1441);
const roundedChinaPopulation = Number((chinaPopulation).toFixed(2));
const chinaComparison = `China has 1441 million people, so it's about ${roundedChinaPopulation}% of the world population.`
const kyrgyzstanPopulation = percentageOfWorld3(6.7);
const roundedKyrgyzstanPopulation = Number((kyrgyzstanPopulation).toFixed(2));
const kyrgyzstanComparison = `Kirgizstan has 6.7 million people, so it's about ${roundedKyrgyzstanPopulation}% of the world population.`
const russiaPopulation = percentageOfWorld3(145);
const roundedRussiaPopulation = Number((russiaPopulation).toFixed(2));
const russiaComparison = `Russia has 145 million people, so it's about ${roundedRussiaPopulation}% of the world population.`

console.log('Arrow function example');
console.log(chinaComparison);
console.log(kyrgyzstanComparison);
console.log(russiaComparison);
*/

/*
function percentageOfWorld1(population) {
	return population / 7900 * 100;
}

function describePopulation(country, population) {
	const percentage = percentageOfWorld1(population);
	const roundedPercentage = Number((percentage).toFixed(2));
	const description = `${country} has ${population} million people, which is about ${roundedPercentage}% of the world.`;
	return description;
}

console.log("");

console.log("Case 1:");
const country1 = "China";
const population1 = 1441;
console.log(describePopulation(country1, population1));

console.log("");

console.log("Case 2:");
const country2 = "Kyrgyzstan";
const population2 = 6.7;
console.log(describePopulation(country2, population2));

console.log("");

console.log("Case 3:");
const country3 = "Russia";
const population3 = 145;
console.log(describePopulation(country3, population3));
*/

/*
const populations = [1441, 6.7, 145, 33];
console.log(populations.length == 4);

function percentageOfWorld1(population) {
	return Number((population / 7900 * 100).toFixed(2));
}

const percentage1 = percentageOfWorld1(populations[0]);
const percentage2 = percentageOfWorld1(populations[1]);
const percentage3 = percentageOfWorld1(populations[2]);
const percentage4 = percentageOfWorld1(populations[3]);

const percentages = [percentage1, percentage2, percentage3, percentage4];
console.log(percentages);
*/

const neighbours = ["Kazakhstan", "China", "Tajikistan", "Uzbekistan"];
neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {

}