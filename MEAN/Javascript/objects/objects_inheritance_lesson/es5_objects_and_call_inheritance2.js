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
function Parent(name){
    Person.call(this, name);
}

//here are the additional steps to create Parent based on Person and have Parent include the Person protoype functions without losing its unique prototype name
Parent.prototype = Object.create(Person.prototype);
Parent.prototype.constructor = Parent;

//we can also add prototype functions of its own to Parent:
Parent.prototype.assignChores = function(child, chore) {
    
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            if (chore.completed){
                resolve(chore.payment);
            }else{
                reject(new Error(chore.punishment));
            }
        }, random(2000));
    });
    
}

const tommy = new Parent("Tommy");
console.log(tommy);
tommy.sayHello();

function random(arrayOrNumber){
    return Math.floor(
        Math.random() * (Array.isArray(arrayOrNumber) ? arrayOrNumber.length : arrayOrNumber)
    );
};

function Chore(){
    this.task = randomChore();
    this.completed = false;
    this.payment = random(100);
    this.punishment = randomPunishment(); 
};

function randomPunishment(){
    const punishments = ['no candy','no TV','go to bed early'];
    return punishments[random(punishments)];
};
 
function randomChore(){
    const chores = ['make bed','clean room','pick up toys'];
    return chores[random(chores)];
}

function Child(name) {
    Person.call(this, name);
    
    this.savings = 0;
};

Child.prototype = Object.create(Person.prototype);
Child.prototype.constructor = Child;

Child.prototype.doChores = function(chore, reward){
    chore.completed = random(100) > 40;

    const self = this;
    //fat arrow in the ES6 functions preserves the contexts so no need for const self = this; type of fixes if using ()=>{} syntax
    reward
    .then(function(payment) {
        // handle success
        console.log(`child did ${chore.task} and receives ${payment}`);
         
        self.savings += payment;
    })
    .catch(function(error){
        // handle failure
        console.log(`${chore.task} not completed, so ${error.message}`);
    });
};   

Child.prototype.seeSavings = function() {
    console.log(`child has ${this.savings} saved`)
};

const turdy = new Child('Turdy');
    
for (let index = 0; index < 4; index++){
    const chore = new Chore();
    turdy.doChores(chore, tommy.assignChores(turdy, chore));
}

setTimeout(function() {
    turdy.seeSavings();
},2100);












