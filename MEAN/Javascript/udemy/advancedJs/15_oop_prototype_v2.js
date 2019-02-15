"use strict";
// examples of section 15, but using intermediate function technique

function extend(Child, Parent) {
  // this copies the prototype members unto the child prototype
  Child.prototype = Object.create(Parent.prototype);
  // the sets the child constructor to correctly point to it and not to the parent constructor
  Child.prototype.constructor = Child;
}

// create master constructor

function Person(fn, ln) {
  this.fn = fn;
  this.ln = ln;
}
Person.prototype.full_name = function() {
  return this.fn + " " + this.ln;
};

// start a prototypical chain

function Professional(hn, fn, ln) {
  Person.call(this, fn, ln);
  this.hn = hn;
}

extend(Professional, Person);

// add another strata to the chain

const manolo = new Professional("Dr.", "Manolo", "Briz");

console.log(manolo.full_name());
