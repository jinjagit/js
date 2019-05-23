// Ideas for blog post:

/*

Abstract:

There is much, perhaps somehwat hidden, depth to the varieties and syntaxes of
JavaScript functions. This post explores the following topics:
* Basic functions
* Anonymous functions
* Function expressions
* Arrow functions
* Immediately invoked functions
* Factory functions?? (Not sure this extension fits neatly here)

Intro:

Whilst delving into the more nuanced and deeper forms of Javascript functions,
I found myself using various syntactic structures without fully understanding
them. For example;

*/

(() => {
  // more code here //
})()

/*

My main question when looking at the perfectly valid, but somewhat cryptic code
above, was 'why so many parentheses?' In answering this question through
experimentation and research, other more basic questions appeared, requiring a
review of some fundamental concepts of functions in JavaScript.

Note: It is, in fact an 'Immediately-invoked Function Expression', but we'll get
to that later.


Basic functions:

Any intermediate user of JavaScript is familiar with the basic structure and
usage of a function. For example;

*/

function add(x, y) {
  let result = x + y;
  return result;
}

let mySum = add(4, 5);
console.log(mySum) // => 9

/*

A function named 'add' is declared, which accepts two values for the arguments
'x' and 'y', and returns the value produced by adding these two values together.
A variable named 'mySum' is then declared, and its value set to the value
returned when the function is called with the integer values of 4 and 5 passed
as arguments to the function. Lastly, the value of 'mySum' is output; 9.

This is basic stuff. There is some subtlety to be found within this structure,
however. Let us consider the even simpler function below:

*/

function basicFunc() {
  console.log('Hello, from a basic function!');
}

basicFunc(); // => Hello, from a basic function!

/*

The empty parentheses '()', used since we are not expecting nor using arguments
in this function, are NOT OPTIONAL (as they are in some other languages).

Failing to include the '()' in the function itself will throw the error:
'SyntaxError: Unexpected token { ...'

Failing to inlude the '()' in the function call, however, will simply fail
silently, or more accurately, it will appear to do nothing. This is our first
clue to a somewhat hidden quality to our basic function declaration. Note how
this behavior contrasts to including an undefined name in our code;

*/

function basicFuncB() {
  console.log('Hello, from a basic function!');
}

basicFuncB; // No output and no error
console.log(basicFuncB); // => [Function: basicFuncB]

//someUndefinedName; // => ReferenceError: someUndefinedName is not defined ...

/*

We define a function and named it 'basicFunc'. More accurately, we create A
VARIABLE, named 'basicFunc', and set its value to the function we define. We can
 see this is the case by setting our 'function name' to a new value;

*/

function basicFuncC() {
  console.log('Hello, from a basic function!');
}

basicFuncC = 'I am a string';

console.log(basicFuncC); // => I am a string
//basicFuncC(); // => TypeError: basicFuncC is not a function ...

/*

Note how we set the new value without the need to declare the variable with
'let', 'var' or 'const', and how a call to the function then fails since the
name no longer points to a function!


Function expressions:

In fact, our basic function declaration and usage is equivalent to;

*/

let basicFuncD = function() {
  console.log('Hello, from a basic function!');
}

basicFuncD(); // => Hello, from a basic function!

/*

Here, we have more explicitly declared a variable named "basicFunc" and set its
value to an 'anonymous function'. This is one form of 'function expression'. Our
earlier, less explicit version is, therefore, also naming a variable which
is then 'pointed at' an anonymous function (even though it was not written as
such an expression).

When writing your own code, where you are clear about the names you have used,
the chance of accidentally 'overwriting' a function may seem slim. However, when
using code from other sources (libraries, modules, etc.) or attempting to
understand or refactor other people's work, such issues may be significant.

Fortunately, we can avoid the risk of accidental redefinition of our function by
declaring it with 'const' (not 'let' or 'var'). For example;

*/

const basicFuncE = function() {
  console.log('Hello, from a basic function!');
}

basicFuncE(); // => Hello, from a basic function!

//basicFuncE = 'I am a string'; // => TypeError: Assignment to constant variable ...

/*

Now, our function will always be the function we first declare it as and any
attempt to redefine it, accidental or otherwise, will throw an error.

I had thought this syntax was simply an older, but functionally equivalent, form
of function declaration, but this slightly more verbose form of our basic
function enables us more control and provides more information to a reader of
our code.


Arrow functions:

*/
