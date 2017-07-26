const date = require('./functions.js').date
const month = require('./functions.js').month
const monthList = require('./functions.js').monthList
const christmas = require('./functions.js').christmas
const reverseSentence = require('./functions.js').reverseSentence
const nameProps = require('./functions.js').nameProps
const filterBetween = require('./functions.js').filterBetween

/////////////////////////

let newDate = new Date(2017, 5, 19);
month(date);
console.assert(month(date) === "June", "not working");

let newChristmas = new Date(2017, 11, 25);
month(christmas);
console.assert(month(christmas) === "December", "no presents");

////////////////////////////

reverseSentence();

console.assert(reverseSentence("This better work.") === "work. better This", "Redo that reverseSentence function.");

console.assert(typeOf reverseSentence(9582198628) === 'string', "Plug in a string, not an integer.");

////////////////////////////

let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

nameProps();

console.assert(nameProps(friend) === ['age', 'name', 'phone'], 'Try the nameProps function again.');

console.assert(nameProps(foe) === ['age', 'name', 'phone'], 'It appears we have a failed test.');

////////////////////////////////

let movies = ["Dunkirk", "Valerian", "Black Panther", "Thor: Ragnarok", "Justice League","Wonder Woman", "Death Note", 1826946860]

filterBetween();

console.assert(filterBetween(movies, "Black Panther", "Dunkirk") === ["Death Note"], "It is not filtering.");

console.assert(filterBetween(movies, 1826946860, "Power") === ["Arrow", "Gypsy", "Game of Thrones"], "We have failure.");
