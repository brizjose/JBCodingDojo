
// constructor function, we now use "this"
function Person(name, items){

    // we create a guard statement for those cases in which Person instances are not created using "new Person"    
    if (!(this instanceof Person)) {
        console.log(name, 'is not an instance of Person');
        // in the following line, we create the Person instance using "new" in case it was not done so...
        return new Person(name, items);
    } 

    const person = { name };

    // added this attribute
    this.name = name;

    this.items = items;
    
    this.take = take
    
    function take(item, target) {
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
    // when we use new, we don't have to return anything, so we comment out the below return statement, can just delete it
    // return person;
}

// instances of Person we now make them using "new"
const person1 = new Person('Bob', ['key','sandwich','tickets']);
const person2 = new Person('Jerry', ['phone','money','ring']);

console.log(person1);
console.log(person2);

person2.take('key', person1);
person1.take('money', person2);

console.log(person1);
console.log(person2);

// NOW THAT WE REFACTORED TO "THIS" AND "NEW", WE CAN MAKE TAKE A GLOBAL METHOD.... SEE PART 4