//simplest class and inheritance

class Pet {
    move(distance: number = 0) {
        console.log(`Pet moved ${distance}`)
    }
}

class Dog extends Pet {
    bark() {
        console.log('Woof! Woof!');
    }
}

const doggy = new Dog();
doggy.bark();
doggy.move(10);
doggy.bark();

//class with constructor;  super call executes the base class constructor and methods within the subclass

class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}`);
    }
}

class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(distance = 5) {
        console.log("Slithering...")
        super.move(distance);
    }
}

class Horse extends Animal {
    constructor(name) {
        super(name);
    }
    move(distance = 45) {
        console.log("Galloping!")
        super.move(distance);
    }
}

let sneeky = new Snake("Sneeky");
let johnny = new Horse("Johnny");

sneeky.move();
//we can override default values
johnny.move(34);

//private properties cannot be accessed from outside the class.  a side effect is that classes with different private properties become incompatible:

class Plant { 
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distance: number = 0) {
        console.log(`${this.name} grows ${distance} per year`);
    }
}

let tree = new Plant("Tree");
sneeky = johnny;
// sneeky = tree; results in error because name is private

//classes and interfaces

//interface shapes a group of data
//classes utilize an interface by implementing it

interface Person {
    name: string;
    age: number;
}

//before the constructor we declare the variables we'll assign in the constructor

// class User implements Person  {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;

//     }
// }

//shortcut for the above is using public, and public automatically does the assignment for us

class User implements Person {
    constructor(public name: string, public age: number) {
    }
}

const user = new User('Tommy', 12);

//in Angular, we use private more than we use public

//private helps control the visibility of information


