'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
    }
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
