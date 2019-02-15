"use strict";

// with strict, a variable needs to be declared before it is used

// hoisting lifts variable declarations to the top of its enclosing scope

console.log("before", a);
var a = 1;
console.log("after", a);

var b;
console.log("b is", b);
b = 3;

var c = {};
console.log("c is", c);
c.moo = 6;

// functions are also hoisted to the top, below the variable declarations. can be called before they are declared.

foo();

function foo() {
  console.log("hello!");
}

// but this will not work because the declaration will be hoisted but not the value assignment...

// moo();

let moo = function() {
    console.log('cows are coming!')
}

