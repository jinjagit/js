// array of objects

const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
  {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
  {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
  {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
  {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
  {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
  {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];

// array of strings

const people = ['Smith, John', 'Springs, Alice', 'Lala, Lucy', 'Bibble, Bob'];



// Array.prototype.filter()

const fifteen = inventors.filter(function(inventor) {
    if(inventor.year >= 1500 && inventor.year < 1600) {
      return true; // keep it!
    }
});

console.table(fifteen);

// Array.prototype.filter() (v2, using arrow function)

const fifteen2 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);

console.table(fifteen2);

// Array.prototype.map()

const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);

console.log(fullNames);

// Array.prototype.sort() sort inventors by birthdate, oldest to youngest

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

console.table(ordered);

// Array.prototype.reduce() how many years did all inventors live?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0)

console.log(totalYears);

// sort inventors by years lived

const oldest = inventors.sort(function(a, b) {
  const prevPerson = a.passed - a.year;
  const nextPerson = b.passed - b.year;
  return prevPerson > nextPerson ? -1 : 1;
})

console.table(oldest);

// create a list of boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//const category = document.querySelector('.mw-category');
//const links = category.querySelectorAll('a');
// paste above into console on page, and type 'links' to see the list of links
// gives a Node list, which is a problem (as map is not a method available for nodes)
// Thus, need to convert node list to an array:
//const category = document.querySelector('.mw-category');
//const links = Array.from(category.querySelectorAll('a'));
//const de = links
//            .map(link => link.textContent)
//            .filter(streetName => streetName.includes('de'));
// Need to refresh page before type 'de' to see array, as const(s) already definied

// sort 'people' alphabetically by last name

const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});

console.log(alpha);

// sum instances of each of these:
const data = ['car', 'car', 'truck', 'truck', 'bike', 'car', 'car'];

const transportation = data.reduce(function(obj, item) {
  if(!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);

// Also, see:
// Array.prototype.some()
// Array.prototype.every()
// Array.prototype.find()
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
// https://www.youtube.com/watch?v=QNmRfyNg1lw
