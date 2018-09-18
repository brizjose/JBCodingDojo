
// constructor function
function personMaker(name, items){
    const person = { name };
    
    person.items = items;
    
    // make the take function available to the person
    person.take = take
    
    // take function
    function take(item, target) {
        if(!target || !Array.isArray(target.items)) {
            console.log('target does not have items array');
        }
    
        for (let index = 0; index < target.items.length; index++) {
            if (item === target.items[index]) {       
                
                // remove item from target
                target.items.splice(index,1);
                console.log(target.name+"'s "+item+" was taken by "+person.name)
                // assign item to person doing the action
                person.items.push(item);
                console.log("now "+person.name+" has the "+item)

                return true;    
            }
        }
        return false;
    }
    return person;
}

// instances of personMaker
const person1 = personMaker('Bob', ['key','sandwich','tickets']);
const person2 = personMaker('Jerry', ['phone','money','ring']);

console.log(person1.name, person1.items);
console.log(person2.name, person2.items);

person2.take('key', person1);
person1.take('money', person2);

console.log(person1.name, person1.items);
console.log(person2.name, person2.items);

// THE TAKE METHOD IS ATTACHED TO EVERY PERSON, SO IT IS A REPETITIVE TRAIT THAT COULD BE STREAMLINED SO IT OCCUPIES LESS MEMORY.  IN ORDER TO NOT REPEAT FUNCTIONS, WE COULD REFACTOR THE CODE SO 'TAKE' IS A GLOBAL CAPABILITY AVAILABLE TO OBJECTS MEETING THE TARGET CRITERIA (THAT ARE OBJECTS WITH AN ITEM CALLED ITEMS THAT IS AN ARRAY)

// SEE IT REFACTORED ON PART 3