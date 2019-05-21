// factory function pattern:
// similar to constructors, but instead of using 'new' to create an object,
// factory functions simply set up and return the new object when called.

const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  return { name, age, sayHello };
};

const jeff = personFactory('jeff', 27);

console.log(jeff.name); // 'jeff'
jeff.sayHello(); // calls the function and logs 'hello!'
console.table(jeff);


// same thing created using the Constructor pattern:

const Person = function(name, age) {
  this.sayHello = () => console.log('hello!');
  this.name = name;
  this.age = age;
};

const bob = new Person('bob', 27);

console.log(bob.name); // 'jeff'
bob.sayHello(); // calls the function and logs 'hello!'
console.table(bob);

const player = (name, level) => {
  let health = level * 2;
  const getHealth = () => health;
  const getName = () => name;
  const die = () => {
    console.log("I am dead!");
  };
  const alive = () => console.log("I am alive");
  return { getHealth, alive };
};

const sue = player('sue', 16);
console.log(`health: ${sue.health}`); // undefined (not returned)
console.log(`getHealth: ${sue.getHealth()}`); // works fine (public)
//sue.die(); // TypeError: sue.die is not a function
sue.alive(); // works fine

// Note: 'sue.die' fails silently!

const book = () => {
  var pages = 444;
  const addPage = (pages) => {
    return pages++;
  };
  return { pages, addPage };
}

myBook = book();
console.log(myBook.pages);
myBook.addPage();
console.log(myBook.pages);

let index = (Math.random() * 8);
console.log(index);
