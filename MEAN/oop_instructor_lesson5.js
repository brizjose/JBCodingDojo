
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

//create an object that conforms to the interface, even though it is not a person...
const backpack = {
    items: ['compass','map','trailmix']
};

console.log(backpack)

person1.take('trailmix',backpack)

console.log(backpack)

// because backpack is not a person, it does not have person's methods, but it can borrow them
// we could give it the ability by doing this, but we don't want backpack to have the ability all the time though
// backpack.take = Person.prototype.take;
// backpack.take('tickets',person1);

// because a function is an object in js, backpack can intercept the take call from a person and momentarily use the ability

Person.prototype.take.call(backpack, "tickets", person1);

// this works because .take is a function and .call() is a method of the function.  
// .call() method can accept arguments
// the first argument is the owner object.  by writing .call(backpack), we are asserting that backpack will own the take method in the current run.  
// it is like saying that backpack is 'this', like so:
// this.take === backpcak.take
// the rest of the arguments will feed the take function:
// backpack.take("tickets", person1)

console.log(backpack);

// the same can be achieved with .apply() instead of .call()
// only difference is that it takes an array that is passed through as function's arguments

Person.prototype.take.apply(backpack, ["phone", person2])

console.log(backpack);

 

