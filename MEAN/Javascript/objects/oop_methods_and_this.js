// this behaves in different ways

// can refer to the object
// can refer to that which calls it (a button, for example)
// can refer to the context where it is called (the document)

// look at ways to control it:

// wrong:

const personW = {
    name: 'Bob',
    age: 26,
    greet: () => {
        console.log('Hi, I am ' + this.name);
    }
};

// right, old way:

const personO = {
    name: 'Rob',
    age: 26,
    greet: function () {
        console.log('Hi, I am ' + this.name);
    }
};

// right, new:

const personR = {
    name: 'Job',
    age: 26,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

console.log(personW);
console.log(personO);
console.log(personR);

personW.greet();
personO.greet();
personR.greet();
