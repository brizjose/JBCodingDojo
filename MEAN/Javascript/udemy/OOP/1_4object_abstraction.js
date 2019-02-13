// hide the details and complexity and show only the essencials

function Circle(radius) {
  this.radius = radius;
  // a private property
  let location = {
    x: 2,
    y: 3
  };
  this.draw = function() {
    console.log("draw");
  };
  // a private method
  let compute = function() {
    return location.x * location.y;
  };
  // a getter
  this.computation = function() {
    return compute();
  };
  // a better getter and setter, takes 3 parameters:
  // (context, name of setter/getter, function object)
  Object.defineProperty(this, "rad", {
    get: function() {
      return radius;
    },
    set: function(r) {
      if (typeof r !== 'number') {
        throw new Error("please enter a number");
      }
      radius = r;
    }
  });
}

const circle1 = new Circle(1);
const compu = circle1.computation();
console.log(compu);
const see = circle1.rad;
console.log(see);
circle1.rad = 3;
console.log(circle1.rad);