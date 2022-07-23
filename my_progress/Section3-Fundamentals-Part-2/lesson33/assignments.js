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

const finlandDescription = describeCountry("Finland", 6, "Helsinki");
console.log(finlandDescription);