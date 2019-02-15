"use strict";

// prototypal inheritance creates a prototype chain
// easy to unserstand and uses functionality JS natively offers

const Person = {
  init: function(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    return this;
  },
  full_name: function() {
    return this.first_name + " " + this.last_name;
  }
};

// style # 1 of creating an object whose prototype points to the Person object by using the Object.create() function:

// step 1:  link prototype of bob to Person
const bob = Object.create(Person);
// step 2: populate bob's parameters
bob.init("Bob", "Jones");
console.log("prototype of bob is: ", Object.getPrototypeOf(bob));
console.log("bob is: ", bob);
// step 3:  you can now use full_name property
console.log(bob.full_name());

// style # 2 of creating the object (the most verbose one)

const jim = Object.create(Person, {
  first_name: {
    value: "Jim"
  },
  last_name: {
    value: "Johnson"
  }
});

console.log(jim.full_name());

// style # 3 of creating the object, probably preferred

function PersonFactory(first_name, last_name) {
  const person = Object.create(Person);
  person.first_name = first_name;
  person.last_name = last_name;
  return person;
}

const jon = PersonFactory("Jon", "Boomer");
console.log(jon.full_name());

// how do we inherit?

// with the prototype method, just keep adding to the prototype chain!

const Professional = Object.create(Person, {
  init: {
    value: function(honorific, first_name, last_name) {
      this.honorific = honorific;
      this.first_name = first_name;
      this.last_name = last_name;
      return this;
    }
  },
  professional_name: {
    value: function() {
      return this.honorific + " " + this.first_name + " " + this.last_name;
    }
  }
});
Professional.work = function() {
  return "Working!";
};
console.log("a professional is ", Professional);

const manolo = Object.create(Professional);
manolo.init("Dr.", "Manuel", "Briz");
console.log("manolo is ", manolo);

console.log(Professional === Object.getPrototypeOf(manolo));

console.log(manolo.work());
console.log(manolo.full_name());
console.log(manolo.professional_name());

const keys = Object.getOwnPropertyNames(manolo);
console.log(keys);

for (let props in manolo) {
    console.log("the props are: ", props);
}

console.log("the keys are ", Object.keys(manolo));
console.log("the values are ", Object.values(manolo));

