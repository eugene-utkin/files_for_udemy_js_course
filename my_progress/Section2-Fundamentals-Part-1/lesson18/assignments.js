let country = 'Russia';
const continent = 'Eurasia';
let population = 145;
const isIsland = false;
let language;

language = 'Russian';

const halfPopulation = population / 2; // population = 72.5
console.log(halfPopulation);

const increasedPopulation = population + 1; // population = 146
console.log(increasedPopulation);

const finlandPopulation = 6;
console.log(population > finlandPopulation);

const averagePopulation = 33;
console.log(population < averagePopulation);

const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language
console.log(description);

console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}`);

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  const populationLeft = 33 - population;
  console.log(`Portugal's population is 22 million below average`);
}

