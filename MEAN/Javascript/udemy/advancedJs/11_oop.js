"use strict";
// function constructors and the new keyword is the pseudo-classical implementation of oop in JS

// in JS, call this "the constructor pattern"

// the class will describe the behavior of the object via member functions and the state of it via properties
// we can mimic this with a function constructor

function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.fullName = function() {
    return this.first_name + " " + this.last_name;
  };
}

// the following code will throw that 'this' is undefined, as seen previously when calling context is global under strict mode:

// let dude = Person('Jose', 'Briz');
// console.log(dude)

// using the 'new' keyword implements the pseudo-classical OOP

let dude = new Person("Jose", "Briz");
console.log(dude);

// does something similar, but not equal to:

let dude1 = {};
Person.call(dude1, "Mikel", "Briz");
console.log(dude1);

console.log(dude.fullName());
console.log(dude1.fullName());

// Prototypical chain

// dude prototype points to Person;
let dudeP = Object.getPrototypeOf(dude);
console.log(dudeP);

// Person prototype points to the construtor Function:
let protoP = Object.getPrototypeOf(Person);
console.log(protoP.toString());

console.log(dudeP === protoP, ", the dude prototype and person prototype are not the same");

// Prototypes of dude prototype and Person prototype are Object
let dudeP1 = Object.getPrototypeOf(dudeP);
console.log(dudeP1);
let protoP1 = Object.getPrototypeOf(protoP);
console.log(protoP1);

console.log(dudeP1 === protoP1, ", at this point, both point to the same prototype");


// all prototypes go back to null
let dudeP2 = Object.getPrototypeOf(dudeP1);
console.log(dudeP2)
let protoP2 = Object.getPrototypeOf(protoP1);
console.log(protoP2);

// and null is an object
console.log(typeof null);

// adding methods to the parent's prototype makes them available to the children.  this saves memory

Person.prototype.greet = function() {
    return "Hello, my name is " + this.fullName();
}

console.log(dude.greet());
// console.log(dude1.greet());   // not available when 'new' was not used!!

// typically, putting the member functions on the prototype are the way to go
// however, these are all public and are mutable from the outside
// if you want private properties, need to add them to the body
