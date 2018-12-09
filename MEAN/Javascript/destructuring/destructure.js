// destructuring creates local variables out of object properties
// in objects, elements are pulled out by name

const person = {
    name: 'Bob',
    age: 87,
    hobbies: ['fishing', 'barbecue', 'huntn'],
    greet() {
        console.log('I am ', this.name);
    }
}

const printName = ({name}) => console.log(name);

printName(person);

const {name, age} = person;

console.log(name, age);

// array destructuring:
// in arrays, elements are pulled out by position

const [hobby1, hobby2, hobby3] = person.hobbies;

console.log(hobby2);

const [hobby, ...rest] = person.hobbies;

console.log(hobby);
