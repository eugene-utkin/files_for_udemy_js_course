'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
};

new Person('Jonas', 1991);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked ti prototype
// 4. function automatically return {}
