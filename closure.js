// from: https://www.w3schools.com/js/js_function_closures.asp

// Problem:

// Initiate counter
var counter = 0;

// Function to increment counter
function add() {
  counter += 1;
  return counter;
}

// Call add() 3 times
add();
add();
console.log(add()); // => 3
// as intended, but 'counter' var can be changed anywhere in program (bad, probably)

// Solution:

var add = (function () {
 var counter = 0;
 return function () {counter += 1; return counter}
})();

add();
add();
console.log(add());
// the counter is now 3, AND cannot be changed from outside of the function

//The variable add is assigned the return value of a self-invoking function.

// The self-invoking function only runs once. It sets the counter to zero (0),
// and returns a function expression.

// This way add becomes a function. The "wonderful" part is that it can access
// the counter in the parent scope.

// This is called a JavaScript closure. It makes it possible for a function to
// have "private" variables.

// The counter is protected by the scope of the anonymous function,
// and can only be changed using the add function.


// Note, this does not work:
function add2() {
  var counter = 0;
  return function () {counter += 1; return counter}
}

add2();
add2();
console.log(add2()); // => function add2()
