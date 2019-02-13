function Circle(radius) {
  this.radius = radius;
  let location = { x: 1, y: 1 }; // private property
  this.draw = function() {
    console.log(
      `drawing radius of ${this.radius} centered at (${location.x}, ${
        location.y
      }).`
    ); // no need to call private properties with "this"
  };
}

// add a property:

const circle1 = new Circle(1);
circle1.color = "red";
// or using bracket notation
circle1["unique name"] = "Bob";

console.log(circle1);

// delete a property:

delete circle1["unique name"];

console.log(circle1);

// enumerate properties and methods

for (let key in circle1) {
  console.log(key);
}

// filter the properties and methods

for (let key in circle1) {
  if (typeof circle1[key] === "function") {
    console.log("the methods are:", key);
  }
}

// return property and method names, values, or entries as arrays:

let pm = Object.keys(circle1);
console.log(pm);

let pv = Object.values(circle1);
console.log(pv);

let pe = Object.entries(circle1);
console.log(pe);

// check if an object has a certain property

if ('radius' in circle1) {
  console.log("circle has a radius");
}

// object destructuring:

for (let [key, value] of Object.entries(circle1)) {
  // console.log(key, value);
  console.log({key, value});
}


