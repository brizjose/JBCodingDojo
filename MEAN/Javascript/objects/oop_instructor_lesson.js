function personMaker(name, items){
    //the below is the same as "const person = { name: name }"  this is a syntactic sugar of ES6
    //so here we create an object
    const person = { name };
    //and add attributes on the fly
    person.items = items;
    //eventually we return the object
    return person;
}

const person1 = personMaker('Bob', ['key','sandwich','tickets']);
const person2 = personMaker('Jerry', ['phone','money','ring']);

console.log(person1);
console.log(person2);

//the following function will have two instances interact, with the target being one of them, the one acted on.
//target is defined as, or needs to comform with the following:
// an object, that has a variable called items and 'items' is an array
function take(item, target) {
    //make sure that target conforms with the structure its required to have (object with a variable called items which is an array)
    //ways in which this can be done:
    //1. see if it is an arry... this will return object because arrays are objects
    // console.log(typeof target.items);
    //2. use 'instanceof' Array object
    // console.log(target.items instanceof Array);
    //3. best weay is to use method of the Array object 'isArray'
    // console.log(Array.isArray(target.items));

    //if target.items is an array, we want to do something, so first we guard our function by starting out with an 'if statemet', a guard statement.
    // notice that in guard statements we want to capture what it is "not", and let pass everything else:

    if(!target || !Array.isArray(target.items)) {
        console.log('target does not have items array');
    }

    for (let index = 0; index < target.items.length; index++) {
        if (item === target.items[index]) {
            // we found it, do something
            // ['item1','item2','item3']
            // slice // makes a copy of the content
            // splice // removes the element from the array -> this is the one we want in this case
            
            target.items.splice(index,1);
            return true;    
        }
    }


    return false;
}
take('key', person1);

console.log(person1);
console.log(person2);

// IN PART ii, WE REFACTOR THIS CODE SO WE CAN HAVE PERSON2 TAKE AN ITEM FROM PERSON1 AND HAVE IT APPEAR IN THEIR ITEM LIST