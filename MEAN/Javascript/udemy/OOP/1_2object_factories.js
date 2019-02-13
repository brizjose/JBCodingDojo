// factory function

function createCircle(radius) {
  return {
    radius,
    location: {
      x: 1,
      y: 1
    },
    draw: function() {
      console.log(
        `drawing radius of ${this.radius} centered at (${this.location.x}, ${
          this.location.y
        }).`
      );
    }
  };
}

const circle1 = createCircle(1);
circle1.draw();
console.log(circle1.radius);

// Constructor function

function Circle(radius) {
  this.radius = radius;
  this.location = { x: 1, y: 1 };
  this.draw = function() {
    console.log(
      `drawing radius of ${this.radius} centered at (${this.location.x}, ${
        this.location.y
      }).`
    );
  };
}

const circle2 = new Circle(1);
circle2.draw();

// access the function that created the object
console.log(circle1.constructor);
console.log(circle2.constructor);
console.log(circle1.constructor.constructor);
console.log(circle2.constructor.constructor);

// you could use the Function constructor to create any object, since all constructors extend the mother Function:

// just pass the parameters, properties and methods as strings through the Function parameters:

const CircleF = new Function(
  "radius",
  `  this.radius = radius;
  this.location = { x: 1, y: 1 };
  this.draw = function() {
    console.log(
      "draw"
    );
  };
`
);

const circleF1 = new CircleF(1);
console.log(circleF1);

// what does new operator do?

// uses the call() method and takes what "this" will mean as first parameter and then the object parametrs
Circle.call({}, 1);

// an alternative is to use .apply().  Use it when passing parameters as an array
Circle.apply({}, [1]);

