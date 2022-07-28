// let country = 'Russia';
// const continent = 'Eurasia';
// let population = 145;
// const isIsland = false;
// let language;

// language = 'Russian';

// const populationComparison = population > 33 ? 'above' : 'below';
// console.log(`${country}'s population is ${populationComparison} average`);

function describeCountry(country, population, capitalCity) {
	const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
	return description;
}

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
let russiaComparison = `Russia has 145 million people, so it's about ${russiaPopulation}% of the world population.`

console.log(chinaComparison);