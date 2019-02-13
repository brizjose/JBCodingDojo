// classical and prototypical inheritance

// in js we don't have classes, so prototypical inheritance applies

// a prototype is a parent of another object

// every object (except one, the root object) has a parent or prototype and it inherits all the members defined in its prototype

let x = {};

console.log(Object.getPrototypeOf(x));

// js looks for properties from ground up, from the element it goes up the prototype chain to find the member being called

let arr = [];

console.log(Object.getPrototypeOf(arr));

let arrProto = Object.getPrototypeOf(arr)

let arrAll = Object.getPrototypeOf(arrProto);

console.log(arrAll);
// voila!  the prototype of array is object


