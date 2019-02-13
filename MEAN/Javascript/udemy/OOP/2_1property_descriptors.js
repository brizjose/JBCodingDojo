const person = { name: "Jose" };

const objectBase = Object.getPrototypeOf(person);

let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");

// access the prototype
console.log(objectBase);

// access the properties of base object methods
console.log(descriptor);

// we can configure the properties of objects we create
Object.defineProperty(person, "name", {
  writable: false,
  enumerable: true,
  configurable: false
});

// configurable: we could delete it

delete person.name;

// writable: we can override its value

person.name = "Bob";
console.log(person.name);

// enumerable:  it will appear in object traverse

for (key in person) {
  console.log(key);
}
