let date = new Date(2017, 5, 19);
let christmas = new Date(2017, 11, 25);
let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var month = function(date) {
    return monthList[date.getMonth()];
}
console.log(month(date));

var month = function(christmas) {
  return monthList[christmas.getMonth()];
}
console.log(month(christmas));

///////////////////////////////////////////////////////

let reverseSentence = function(string) {
  if (typeof(string) === 'string') {
    return string.split(' ').reverse().join(' ')
  } else {
    return "Not what we're looking for. Try Again."
  }
}

console.log(reverseSentence("This better work."));

console.log(reverseSentence(1841518451));
/////////////////////////////////
let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

var nameProps = function(friend) {
  return Object.keys(friend).sort();
}

console.log(nameProps(friend));

/////////////////////////

let movies = ["Dunkirk", "Valerian", "Black Panther", "Thor: Ragnarok", "Justice League","Wonder Woman", "Death Note", 1826946860]

var filterBetween = function(movies, min, max) {
  if(typeof(min) === 'string' && typeof(max) === 'string') {
    return movies.filter(function(word) {
      return word > min && word < max;
    });
  } else {
    return "We have a bug."
  }
  }
console.log(filterBetween(movies, "Black Panther", "Dunkirk"));

console.log(filterBetween(movies, "Death Note", 1826946860));

///////////////////////////////////////

module.exports = {
  date: date,
  month: month,
  monthList: monthList,
  christmas: christmas,
  reverseSentence: reverseSentence,
  nameProps: nameProps,
  filterBetween: filterBetween
}
