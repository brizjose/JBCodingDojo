const _radius = new WeakMap();
const _size = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.get(this, radius);
  }
  draw() {
    console.log("drawing a circle");
  }
}

class Square {
  constructor(size) {
    _size.get(this, size);
  }
  draw() {
    console.log("drawing a square");
  }
}

module.exports.Circle = Circle;
module.exports.Square = Square;
