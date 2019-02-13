// in this example, we refactor the prototypical inheritance methods into a reusable function.  The use of this function is called intermediate function inheritance.

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

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

extend(Circle, Shape);
Circle.prototype.draw = function() {
  console.log("draw");
};

function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}

extend(Square, Shape);

const sq = new Square(10, "blue");

console.log(sq);