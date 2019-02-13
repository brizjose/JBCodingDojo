// when we want an object to inherit not directly from Object, but from another object in order to inherit its members.

function Shape() {}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

// as it stands, having created the Circle constructor function makes it inherit from Object, as if we'd created it doing the following:

// Circle.prototype = Object.create(Circle.prototype);

// but we want Circle prototype to inherit from Shape, not from Object, so...

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(1);

s.duplicate();
c.draw();
c.duplicate();

// there is a problem with this implementation, and it is that we reset the Circle prototype and we can no longer dynamically create circles. with new Circle();

// as a best practice, whenever the prototype of an object is reset, also reset the constructor:

Circle.prototype.constructor = Circle;


