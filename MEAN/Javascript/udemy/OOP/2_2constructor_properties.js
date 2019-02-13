
let beegee = {};
const bgProto = Object.getPrototypeOf(beegee);
const objectBase = Object.prototype;

let arr = [];
const arrProto = Object.getPrototypeOf(arr);
const arrayBase = Array.prototype

function Circle(radius) {
  this.radius = radius;
}

const circleBase = Circle.prototype;
let c1 = new Circle(1);
let c2 = new Circle(1);
const c1Proto = Object.getPrototypeOf(c1);
const c2Proto = Object.getPrototypeOf(c2);

console.log(bgProto);
console.log(objectBase);
console.log(arrProto);
console.log(arrayBase);
console.log(c1Proto);
console.log(c2Proto);
console.log(circleBase);
const protoEquality = c1Proto === c2Proto;
console.log(protoEquality);

// in order to save memory, we can eliminate the methods from the Object and write them into their prototype, so they are still accessible but no longer take in memory...

Circle.prototype.draw = function() {
    console.log("draw");
}

console.log("c1 details: ", c1);  // draw method does not show

console.log("the c1 instance keys are: ", Object.keys(c1));  // does not show either

for (let key in c1) {  // draw method shows, the loop gets the instance and prototype properties!
    console.log("this is a c1 prototype key: ", key);
}

console.log("is draw an instance member? ", c1.hasOwnProperty('draw'));  // hasOwnProperty only accesses instance members

// So in JS we have to types of members:
// 1. instance members
// 2. prototype members

// knowing this, and knowing that some members are writeable, we can change the behavior of a member at prototype level like so:

// 1) look at the property descriptor:
const circleProto = Object.getPrototypeOf(circleBase);
console.log(circleProto);
const toStringDescr = Object.getOwnPropertyDescriptor(circleProto, 'toString');
console.log(toStringDescr);  // toString is writeable!

// 2) change the behavior by re-writing it and accessing an instance property:

Circle.prototype.toString = function () {
    return "Circle has a radius of " + this.radius; 
}

console.log(c1.toString());   // it works!!!

// notice the order in which we modify the prototype does not matter, c1 was created before, yet, still captured the prototype's new implementation






