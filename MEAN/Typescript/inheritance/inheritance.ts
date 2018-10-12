interface Dude {
    name: string;
    age: number;
}

//class implements an interface 
class Student implements Dude {
    constructor(public name: string, public age: number) {        
    }
}

const student = new Student('Bob', 5);
console.log(student);

//class inheritance with a default value
class Senior extends Student {
    constructor(name: string, age = 18) {
        super(name, age);
    }
}

const tammy = new Senior('Tammy');
console.log(tammy);

//class inheritance with a method and a defined return type: initially undefined (void) until parameters are passed through it
class Junior extends Student {
    constructor(name: string, age = 15) {
        super(name, age);
    }
    sayHello(name: string): void {
        console.log(`Hello ${name}, from ${this.name}`);
    }
}

 const george = new Junior('Geo');

 george.sayHello(tammy.name);



