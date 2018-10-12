//functions take type annotations

function greeter(person: string) {
    return `Hello ${person}`;
}

let user = "Jane Bobby";

document.body.innerHTML = greeter(user);

//interfaces help shape the data inputs by grouping parameters and methods; ? makes parameters optional

interface Person {
    firstName: string;
    lastName: string;
    age?: number;
}
function greeting(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}
let user2 = {firstName: "Jane", lastName: "Dammit"};
document.body.innerHTML = greeting(user2);

//classes work same as in ES6, are a shorthand for prototype OO

class Student {
    fullName: string;
    constructor(public firstName: string, public lastName: string, public middleName?: string) {
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}

interface Dude {
    firstName: string;
    lastName: string;
}

function sayHello(student: Dude) {
    return `Hello, ${student.firstName} ${student.lastName}`;
}

let user3 = new Student("Bob", "Corker");

document.body.innerHTML = sayHello(user3);


