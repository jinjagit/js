console.log((1400/16)*9);

!function() {
  console.log('I run immediately');
}();

console.log(void function() { }() === true); // => false

(function() {
  console.log('I run immediately');
})();

(() => {
  console.log('I ALSO run immediately');
})();

let name = 'Susan';

(() => {
  let name = 'Helen'
  console.log(`my name is ${name}`); // => my name is Helen
})();

console.log(`my name is ${name}`);   // => my name is Susan

(function () {
  console.log('I TOO run immediately');
}());



let f = function() {
  console.log('I run immediately');
}(); // => I run immediately

console.log(f); // => undefined
//f(); // => TypeError: f is not a function ...



let mySum = ((base, exponent) => {
  return Math.pow(base, exponent);
})(3, 2);

console.log(mySum); // => 9



const arrowIIEF = (() => {
  let ary = [1, 4, 7, 3];
  const setElement = (index, value) => { ary[index] = value; };
  return { ary, setElement };
})();

console.log(arrowIIEF.ary); // => [1, 4, 7, 3]
arrowIIEF.setElement(2, 'newValue');
console.log(arrowIIEF.ary); // => [1, 4, 'newValue', 3]

const func = (function f() { console.log('I ran!'); return f; })(); // => foo
func(); // => bar
