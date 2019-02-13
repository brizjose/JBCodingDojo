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
// here we override a shape method so it behaves as we need in a circle
Circle.prototype.duplicate = function() {
    console.log("duplicate circle");
}

const s1 = new Shape("green");

const c1 = new Circle(1, "red");

s1.duplicate();
c1.duplicate();

