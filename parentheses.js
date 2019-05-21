"use strict";

// basic function [N.B. does not work without '()']

function basicFunction() {
  console.log('this is a basic function');
}

basicFunction(); // => this is a basic function

// perhaps weirdly:
basicFunction; // fails, with no error, even though:
console.log(basicFunction); // => [Function: basicFunction]




// inline anonymous function

(function() {
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
let h = function() { console.log('I run immediately'); }(); // => I run immediately
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
