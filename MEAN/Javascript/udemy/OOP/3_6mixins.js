const canEat = {
  eat: function() {
    this.hunger--;
    console.log("eating");
  }
};

const canWalk = {
  walk: function() {
    console.log("walking");
  }
};

const canSwim = {
  swim: function() {
    console.log("swimming");
  }
};

const person = Object.assign({}, canEat, canWalk);

console.log(person);

// or we can do this

function Dog() {}

Object.assign(Dog.prototype, canEat, canWalk);

let d = new Dog();

console.log(Object.getPrototypeOf(d));

function Goldfish() {}

Object.assign(Goldfish.prototype, canEat, canSwim);

const gg = new Goldfish();

gg.eat()
gg.swim()

