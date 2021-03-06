//"use strict";

/* -------------------------------------------------------------

from: https://stackoverflow.com/questions/2422026/what-do-empty-parentheses-after-a-function-declaration-do-in-javascript

(function() {}) creates an anonymous function.

Adding the () to the end calls the function that was just created.

See also:
https://www.w3schools.com/js/js_function_invocation.asp

---------------------------------------------------------------

from: https://flaviocopes.com/javascript-iife/

An Immediately-invoked Function Expression is a way to execute functions
immediately, as soon as they are created. IIFEs are very useful because they
don't pollute the global object, and they are a simple way to isolate variable
declarations.

2 forms:

(function() {
  // code here //
})()

(() => {
  // code here //
})()

See also:

Essential JavaScript: Mastering Immediately-invoked Function Expressions
https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6

------------------------------------------------------------

arrow functions:

https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26

Understanding "this" in javascript with arrow functions
https://www.codementor.io/dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc


------------------------------------------------------------ */



// basic function [N.B. does not work without '()']

function basicFunc() {
  console.log('this is a basic function');
}

basicFunc(); // => this is a basic function

// perhaps weirdly (given an undefined name would throw 'somename is not defined' error):
basicFunc; // => <fails, with no error, even though ...>
console.log(basicFunc); // => [Function: basicFunction]

basicFunc = 'basicFunc now with this string as value';

console.log(basicFunc); // => basicFunc now with this string as value

//basicFunc(); // => TypeError: basicFunc is not a function

var arrowFunc = () => {
  console.log('this is a basic arrow function');
}

arrowFunc(); // => this is a basic function

console.log(arrowFunc); // => [Function: arrowFunc]

arrowFunc = 'var now with this string as value';
console.log(arrowFunc); // => var now with this string as value
// above, will throw error if use 'const' not 'let' or 'var':
// => TypeError: Assignment to constant variable.

let something = function() {
  console.log('I am something');
};

something(); // => I am something




// inline anonymous function

(function() {
  // code here will be run immediately
  console.log('this is an inline anonymous function');
})(); // => this is an inline anonymous function

/* but, without surrounding parentheses, throws error:

function() {
    console.log('this does not work');
}(); // => SyntaxError: function statement requires a name
*/

/* this fails silently, however:
(function() {
    console.log('this is an inline anonymous function');
});
*/

//minimal form:

let n = 1;

(function(){ n++; })();

console.log(n); // => 2

// this also works (function expression):

let myFunction = function() { n++; }();

console.log(n); // => 3

console.log(myFunction); // => undefined

// But, 'myFunction' cannot be declared again (in the same scope),
// whereas the inline anonymous function can be used as many times as desired:

(function(){ n++; })();

console.log(n); // => 4

// Obvious question arises:
// Given that these inline functions / function expressions seem to simply
// execute the code they contain, why bother?
// In other words, why use:
//  (function(){ n++; })();
// When the follwing would do the same thing?
//  n++;

// Note, the following, simpler structure, is not called when defined, but
// rather needs explitly calling:
let e = function() { n++; }
e();
console.log(n); // => 5

// Note on function literals and returns:

// below, the function literal is being called and its return value
// is being assigned to f
let f = function() { return 777; }();
console.log(f); // => 777

// without the return, the value of 'g' is undefined
let g = function() { 888; }();
console.log(g); // => undefined

// i.e. Below, the code is still run, but it just does not help to define 'h':
const h = function() { console.log('I run immediately'); }(); // => I run immediately
console.log(h); // => undefined

let i = function() { console.log('I only run when called'); }
console.log(i); // => [Function: i]
i(); // => I only run when called


// somewhat confusingly, the above can also be written as the following;
// (A common pattern for writing modules, often in separate files):

let test = () => {
  console.log('I also only run when called');
};

console.log(test); // => [Function: test]
test();  // => I also only run when called

/* But the below is not the inline, immediately called equivalent, and will
   fail with an error:

let test2 = () => {
  console.log('I am test2');
}(); // => SyntaxError: Unexpected token ( ...
*/

let test3 = console.log('I run immediately'); // => I run immediately
console.log(test3); // => undefined

let test4 = () => console.log('I only run when called');
console.log(test4); // => [Function: test4]
test4(); // => I only run when called

// Above raises obvious question of why use '{}' in inline functions?
// e.g this works fine (indentation is functionally irrelevant):
let test5 =
  console.log('do 1 thing A'); // => do 1 thing A
  console.log('do another thing A'); // => do another thing A

// While the non-inline fails to work as intended:
// (since there is no clear encapsulation of the function, so
// only the 1st statement is incorporated, up to the first ';')
// and the 2nd statement is run immediately as the new line it is.
let test6 = () =>
  console.log('do 1 thing B');
  console.log('do another thing B'); // => do another thing B

test6(); // => do 1 thing B

// encapsualtion with '{ ... }' works as intended:
let test7 = () =>
  {console.log('do 1 thing C');
  console.log('do another thing C');}

test7(); // => do 1 thing C
         // => do another thing C

// so why use the ';' after the function? (GOOD QUESTION!)


console.log('----------------------')

// One reason to use anonymous function(s), rather than just bare statements =
// scope:

// Suppose I want to calculate area of 7 identical 3 x 5 rectangles:

// Without anonymous function:

function area(x,y) {
    return x * y;
}

let result = 7 * area(3, 5);

console.log(result); // => 105

// with anonymous inline function:

let x = 3;
let y = 5;
let result2 = 7 * (function(){ return x*y; })();

console.log(result2); // => 105

// = same result, but seems less flexible, as I would have to include whole
// anonymous inline function again if I want to calculate area again at any point.
// However, some functions cannot be called again, due to their nature(s)???
// (But also need to be expressed as function(s)??? e.g. callbacks???)

// N.B. Another point is that the anonymous inline function provides a scope
// in which we can, for example, reuse variable names (for different vars):

let nOfRectangles = 7;

(function(){
  let x = 6;
  let y = 7;
  console.log(x * y * nOfRectangles); // => 294
})();

// In above example, 'x' and 'y' can be declared locally, despite vars with same
// names already existing in root scope. Root vars remain unchanged in value:

console.log(x); // => 3

// Thus, another simple reason to use such a pattern is readability:
// Perhaps the same pattern is repeated in the program and by not using calls
// to a named function the anonymous inline function can be used in multiple
// places, (perhaps just with different local vars for each instance), resulting
// in no need to locate and understand a named function every time it is called.
// This somewhat defeats the DRY principle, however.

(function (x, y) {
  console.log(x + y);
}(3, 17)); // => 20

// How to create a named function AND immediately call it (Note the 'return f;'):

const func = (function f(a) { console.log(a); return f; })('foo') // => foo
func('bar'); // => bar

const arrow1 = () => console.log('I am an arrow function');

arrow1();

const errorTestC = (x, y) => {
  z = x / y; // error is here: 'z' is not declared
  return z
}

console.log(errorTestC);
//errorTestC(2, 3);

const halve = num => num / 2

console.log(halve(5)); // => 2.5

const output = string => console.log('hello')
output('a');

// ----------------------------------------- scope and 'this'

var myMethod = () => {
  console.log(this === window);
}

var myObject = {
  a: myMethod
}

myObject.a(); // => true
myMethod(); // => true

// ------------------------------------

var myMethod2 = function() {
  console.log(this === window);
}

var myObject2 = {
  a: myMethod
}

myObject2.a(); // => false
myMethod2(); // => true







const aaa = 6;
aaa = 9;
