"use strict";

function Animal() {
    kind: 'human'
}

function Plant() {}

Plant.prototype = Object.create(Animal.prototype)

console.log("plant's prototype is ", Plant.prototype)

// works with const as well:

const bird = {
    property: 'fly'
}

const eagle = Object.create(bird);

console.log(eagle.property);

// can pass in key:value pairs as additional parameter to add properties to the new object

const quetzal = Object.create(bird, {color: {value: "green"}});

console.log(quetzal.property);
console.log(quetzal.color);

