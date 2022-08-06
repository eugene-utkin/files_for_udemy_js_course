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

function describePopulation() {

}