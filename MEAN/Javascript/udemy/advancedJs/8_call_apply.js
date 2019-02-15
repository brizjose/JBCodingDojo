"use strict";
// call(), apply(), and bind() are three ways to stabilize 'this'

// call() can also pass in parameters if the function working with takes parameters, with first parameter being whatever you want 'this' to be:

function a(b, c, d) {
  console.log(this);
  console.log(b);
  console.log(c);
  console.log(d);
}

a.call(1, 2, 3, 4);

// apply() is also a function available to a function, difference is that the parameters are an array:

a.apply(5, [6, 7, 8]);

// use cases:  use call unless the function takes a variable number of parameters

function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

const tot = sum.call(null, 1,2,3,4);
console.log(tot);

const arr = [30,60,90,120,150,180,210,240,270,300,330,360];
const arrTot = sum.apply(null, arr);
console.log(arrTot);

// use of bind() is with function expressions:
// whatever we pass through bind() as parameter anchors 'this' for any time the function is called
// note:  only works with function expressions because bind() assigns the meaning of "this" to the variable 
const f = function() {
    console.log(this);
}.bind(1);
f();

const check3 = {
    check3This: function() {
        console.log(this);
        const checkOther = function() {
            console.log(this);
        }.bind(this);
        checkOther();
    }
}
check3.check3This();

