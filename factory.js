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
