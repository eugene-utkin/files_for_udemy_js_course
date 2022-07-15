let country = 'Russia';
const continent = 'Eurasia';
let population = 145;
const isIsland = false;
let language;

language = 'Russian';

switch (language) {
	case 'chinese':
	case 'mandarin':
		console.log('MOST number of native speakers');
		break;
	case 'spanish':
		console.log('2nd place in number of native speakers');
		break;
	case 'english':
		console.log('3rd place');
		break;
	case 'hindi':
		console.log('Number 4');
		break;
	case 'arabic':
		console.log('5th most spoken language');
		break;
	default:
		console.log('Great language too :D');
}