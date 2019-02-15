"use strict";
// in the constructor pattern, inheritance is implemented with 'extend'

function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

Person.prototype.full_name = function() {
  return this.first_name + " " + this.last_name;
};

function Professional(honorific, first_name, last_name) {
  Person.call(this, first_name, last_name);
  this.honorific = honorific;
}

// we add inheritance by copying Person prototype to Professional prototype:

Professional.prototype = Object.create(Person.prototype);

// we can add methods to the Professional prototype

Professional.prototype.professional_name = function() {
  return this.honorific + " " + this.first_name + " " + this.last_name;
};

// we can now implement

const prof = new Professional("Dr", "Manuel", "Briz");

console.log(prof);
console.log(prof.full_name());
console.log(prof.professional_name());

