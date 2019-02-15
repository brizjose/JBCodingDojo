"use strict";

let a = 1;
let b = {};

function moo(x, y) {
  x = 1;
  y.moo = 3;
}

moo(a, b);

console.log(a, b);