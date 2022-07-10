// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
// 	console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
// 	console.log('More than 1 border');
// } else {
// 	console.log('No borders');
// }

let country = 'Russia';
const continent = 'Eurasia';
let population = 145;
const isIsland = false;
let language;

language = 'Russian';

if ((language === "English") && (population < 50) && !isIsland) {
	console.log(`You should live in ${country} :)`);
} else {
	console.log(`${country} does not meet your criteria :(`);
}