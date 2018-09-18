//remember this means the context

function Person(name) {
    this.name = name;
};

//create an instance of Person
const timmy = new Person('Timmy');
console.log(timmy);
console.log(timmy.name);

//assign a new method to the Person class
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
};

timmy.sayHello();

//new create a new class that inherits from Person class
function Parent(name) {
    Person.call(this, name);
};

const tommy = new Parent("Tommy");
console.log(tommy);
console.log(tommy.name);

// tommy.sayHello();
//and that's it!  the method .call() of inheritance only inherits the properties; nothing from the prototype chain

//to fix that, we work at prototype level:

//1. first we make parent prototype equal Person prototype, but leaving it like this would override the whole Parent class
//2. so additionally we make the Parent prototype constructor equal the Parent prototype function...

Parent.prototype = Object.create(Person.prototype);
Parent.prototype.constructor = Parent;
//these functions need to be run above the definition of tommy, we'll continue in next tab....
