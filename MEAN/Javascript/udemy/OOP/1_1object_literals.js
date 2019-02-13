// object literals

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
      console.log(`drawing radius of ${this.radius} centered at (${this.location.x}, ${this.location.y}).`);
  }
};

circle.draw();
