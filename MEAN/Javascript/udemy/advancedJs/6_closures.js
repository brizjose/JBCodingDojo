"use strict";

// what are function closures?

// closeres are references to variables a function needs to run its process.

// this means:
// 1. closure can refer to variables in outer scopes
// 2. it can refer to those outer variables even after a return statement that deletes them...

function sayHello(name) {
  const text = "Hello " + name;
  return function() {
    console.log(text);
  };
}

const greet = sayHello("Dude");
greet();

// the return statement inside SayHello deletes the 'text' variable but the greet function keeps it in closure because it still needs it.

// closure is whatever value is in the variables currently in use.

// example:

var foo = [];
for (var i = 0; i < 10; i++) {
  foo[i] = function() {
    return i;
  };
}

console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());

let moo = [];
for (let j = 0; j < 10; j++) {
  moo[j] = function() {
    return j;
  };
}

console.log(moo[1]());
console.log(moo[2]());
console.log(moo[0]());

// notice the behavior of var is different from let because var is a global variable.  By the time foo functions are called, the global variable i is already at 10.

// see how an immediateily invoked function can also help us achieve that by creating a local variable to serve as closure:

var choo = [];

for (var idx = 0; idx < 10; idx++) {
  (function() {
    var y = idx;
    choo[idx] = function() {
      return y;
    };
  })();
}

console.log(choo[1]());
console.log(choo[2]());
console.log(choo[0]());

// using IIFE, but cleaner, we can do the following:

var yoo = [];

for (var x = 0; x < 10; x++) {
  (function(y) {
    yoo[y] = function() {
      return y;
    };
  })(x);
}

console.log(yoo[1]());
console.log(yoo[6]());
console.log(yoo[0]());

// x loops from 0 to 10.  As it does, x value is passed by value through the y variable and the snapshots of each are kept by the yoo[y] function as its closure.

