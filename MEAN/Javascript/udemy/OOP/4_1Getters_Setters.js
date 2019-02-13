const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(v) {
    if (v <= 0) throw new Error("invalid property");
    _radius.set(this, v);
  }
}

const c = new Circle(1);
console.log(c.radius);
c.radius = 10;
console.log(c.radius);
c.radius = 2;
console.log(c.radius);
