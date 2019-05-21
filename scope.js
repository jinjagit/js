let a = 1

function test() {
  let a = 2
  console.log(`a in function: ${a}`);
}

console.log(`a in root: ${a}`);
test();

// => a in root: 1
// => a in function: 2

var b = 1

function test2() {
  var b = 2
  console.log(`b in function: ${b}`);
}

console.log(`b in root: ${b}`);
test2();

// => a in root: 1
// => a in function: 2

const c = 1

function test3() {
  const c = 2
  console.log(`c in function: ${c}`);
}

console.log(`c in root: ${c}`);
test3();

// => a in root: 1
// => a in function: 2

var d = 5
d = 7
console.log(d); // => 7

let e = 5
e = 7
console.log(e); // => 7

const f = 5
f = 7 // => TypeError: invalid assignment to const 'f'
console.log(f);
