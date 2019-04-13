var obj = {
  foo: function() {
    console.log(this === window);
  }
};

// call, apply, bind

obj.foo(); // => false (context is obj, not root / window)

obj.foo.call(window); // => true (context changed to 'window')
// obj.foo.call(window, 1, 2, 3);  How to pass args to foo(), while defining context with 'call'

obj.foo.apply(window); // => true, effectively, same as call, but...
// obj.foo.call(window, [1, 2, 3]);  args passed to foo() as array, while defining context with 'apply'

var myBoundFoo = obj.foo.bind(window);
myBoundFoo(); // => true

obj.foo(); // context remains unchanged
