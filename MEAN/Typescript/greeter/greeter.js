//functions take type annotations
function greeter(person) {
    return "Hello " + person;
}
var user = "Jane Bobby";
document.body.innerHTML = greeter(user);
function greeting(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user2 = { firstName: "Jane", lastName: "Dammit" };
document.body.innerHTML = greeting(user2);
//classes work same as in ES6, are a shorthand for prototype OO
var Student = /** @class */ (function () {
    function Student(firstName, lastName, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function sayHello(student) {
    return "Hello, " + student.firstName + " " + student.lastName;
}
var user3 = new Student("Bob", "Corker");
document.body.innerHTML = sayHello(user3);
