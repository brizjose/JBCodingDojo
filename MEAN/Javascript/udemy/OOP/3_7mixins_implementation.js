// create a function that creates mixins

function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

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

function Person() {}

mixin(Person.prototype, canEat, canWalk);

const p = new Person();

p.eat();
p.walk();