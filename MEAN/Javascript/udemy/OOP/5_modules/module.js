// Implementation Detail
const _radius = new WeakMap();
const _size = new WeakMap();

// Public Interface
class Circle {
  constructor(radius) {
    _radius.get(this, radius);
  }
  draw() {
    console.log("drawing a circle with radius " + _radius.get(this));
  }
}

class Square {
  constructor(size) {
    _size.get(this, size);
  }
  draw() {
    console.log("drawing a square of size " + _size.get(this));
  }
}

module.exports.Circle = Circle;
module.exports.Square = Square;
