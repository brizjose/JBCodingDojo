
function Person(name, items){

    if (!(this instanceof Person)) {
        console.log(name, 'is not an instance of Person');
        return new Person(name, items);
    } 

    // const person = { name };  // we don't seem to need this

    this.name = name;

    this.items = items;
    
    // this.take = take   // we no longer need it here

}

// we attach the take method through the 'prototype' methodology and it is now a global method for Person-type objects

Person.prototype.take = function take(item, target) {
    if(!target || !Array.isArray(target.items)) {
        console.log('target does not have items array');
    }

    for (let index = 0; index < target.items.length; index++) {
        if (item === target.items[index]) {       
            
            target.items.splice(index,1);
            console.log(target.name+"'s "+item+" was taken by "+this.name)

            this.items.push(item);
            console.log("now "+this.name+" has the "+item)

            return true;    
        }
    }
    return false;
} 

const person1 = new Person('Bob', ['key','sandwich','tickets']);
const person2 = new Person('Jerry', ['phone','money','ring']);

console.log(person1);
console.log(person2);

person2.take('key', person1);
person1.take('money', person2);

console.log(person1);
console.log(person2);

// BECAUSE THE TAKE METHOD CONFORMS WITH RULES OF AN INTERFACE:  THAT IT'S AN OBJECT WITH ITEMS AND ITEMS ARE AN ARRAY, WE CAN IMPLEMENT IT IN NON-PERSONS AS WELL AS LONG AS THEY CONFORM TO THIS SAME INTERFACE SEE LESSON 5