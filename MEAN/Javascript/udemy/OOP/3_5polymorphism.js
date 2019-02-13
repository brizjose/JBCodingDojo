function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log("duplicate shape");
};

function Circle(radius, color) {
  Shape.call(this, color); // super constructor
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
  console.log("draw");
};

Circle.prototype.duplicate = function() {
  console.log("duplicate circle");
};

function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
  console.log("duplicate square");
};

const shapes = [new Circle(1, "red"), new Square(10, "blue")];

// we have overridden duplicate method, so we are able to do this...

// polymorphism in action:
for (let shape of shapes) {
  shape.duplicate();
}
