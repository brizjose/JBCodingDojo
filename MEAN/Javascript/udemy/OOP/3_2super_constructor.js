function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, color); // super constructor
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log("draw");
};

// because Shape has a property (color) and we need to point "this" of such property to Circle instances, we use the super constructor

const c1 = new Circle(1, "red");

console.log(c1)  // circle now has color