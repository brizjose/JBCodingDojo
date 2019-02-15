// typically, putting the member functions on the prototype are the way to go
// however, these are all public and are mutable from the outside by doing obj.property = "some value"
// if you want private properties, need to add them to the body and make them reference the parameters passed through when the object was created -- with the aid of closure (remember?)

function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.full_name = first_name + " " + last_name;
}

// notice?  not using "this" to build the full_name

Person.prototype.full_name_prototype = function() {
  return this.first_name + " " + this.last_name;
};

const bob = new Person("Bob", "Smith");

console.log(bob.full_name)

bob.first_name = "Sam"

console.log(bob.first_name, "we just changed Bob's name!");
console.log(bob.full_name, "no change on the full name method that benefits from closures!");
console.log(bob.full_name_prototype(), "changed!! because the prototypical method does not have access to the constructor parameters");

// see how the full name function at prototype level is subject to change, but the on in the body that references the original parameters preserves state thanks to closure!!!

