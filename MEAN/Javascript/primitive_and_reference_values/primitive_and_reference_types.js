var name = 'Max';
console.log(name);

var secondName = name;
console.log(secondName);

// value does not change because strings are primitive values, that upon assignment are copied and pasted unto the variable


var person = {
    name: 'Bob',
    age: '26',
    hobbies: ['TV', 'Food']
}

var secondPerson = person

person.name = 'Joe';

console.log(secondPerson);

// secondPerson's name also changes because objects are reference types

// primitive values are:
// string, number, boolean, undefined, null, ES6 symbol.
// these are stored in the stack, in the memory that can be accessed quickly.  it is small.
// in the stack, each element has its place in the stack, which is not very big, so elements don't take up much space

// reference types:
// objects
// are stored in the heap, which is larger and slower.

// memory management at the heap causes the behavior seen with the change name of secondPerson.
// in the heap, each element has an address

// with reference thypes, the variable stores the pointer address.  these pointers are in the stack.  

// when a reference type is copied, it is the pointer that is copied, and we can have multiple pointers pointing the same value

// if we really want to copy the object and create a new place for it in the heap:

var thirdPerson = Object.assign({}, person);

// this creates a new object and assigns the properties of the person object into it.   
// note that Object.assign takes two parameters and we use empty object on the first because we only have one object to assign.

// a Gotcha!

// when an object is copied, if one of the properties is an object (example, an array), only the reference is copied, so modifying the original will modify the new one as well.

person.hobbies.push('Reading');

console.log(person);
console.log(secondPerson);
console.log(thirdPerson);

// gotcha!!!!!  all of the persons have reading.

// another way to copy an object:

var fourthPerson = {...person};
console.log(fourthPerson);

// to make a copy an array that is an object property:
// use slice
// and slice makes a deep copy, so not only the pointer...

var myHobbies = person.hobbies.slice();
console.log(myHobbies);

person.hobbies.push('Surfing');

console.log(myHobbies);
// not affected by surfing