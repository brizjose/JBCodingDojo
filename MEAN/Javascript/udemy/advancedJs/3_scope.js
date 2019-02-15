// not block level scope like other languages.
// global and local scopes are JS

function moo() {
  a = 1;
}
// throws error = undefined
// console.log(a)

for (var i = 0; i < 5; i++) {
  var j = 5;
}

// this prints
console.log(i);
console.log(j);
// for loops happen at a global level and i and j are global variables

// scope chain:

// knowing that functions create scope within which local variables are declared, an inportant concept is scope chain.
// functions access to variables depends on the structure of the code.  Lexically read.
// First, functions look inside themselves, then at more global scope, etc..
// variables declared below the function in other functions are not available to it.
// example

function foo() {
  console.log(myVar);
}
function goo() {
  const myVar = 1;
  foo();
}
// goo() // throw error myVar is not defined

// however, the following works:
function doom() {
  const myVar = "temple";
  function room() {
    console.log(myVar);
  }
  room();
}
doom();

// and this is an example of functions looking at more and more global scope until it finds the variable:

const Y = "bye";
function hi() {
  function bye() {
    console.log(Y);
  }
  bye();
}
hi();

