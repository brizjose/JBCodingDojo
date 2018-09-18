const stringArray = ['1','2','3','4','5'];
const mixedArray = ['1','apple','2','3','sugar','4','5','horse'];
// each function:  prints array data

function each(array,callback) {
    for ( let index = 0; index < array.length; index++) {
        callback(array[index], index);
    };
};

each(stringArray, function(element, index) {
    console.log(`from our anonymous function!  element: ${element} | index: ${index}`)
});

each(stringArray, namedFunction);

function namedFunction(item) {
    console.log(`from our named function!  element: ${item}`);
};

// map function:  returns a new array of transformed data by passing each element of the original array into a function
// we don't need the array and we don't need the function, all we need to do is build the infrastructure

function map(array, callback) {
    let newArray = [];
    for (let element = 0; element < array.length; element++) {
        newArray.push(callback(array[element], element));
    };
    return newArray;
};

// now we decide to use 'map' with a specified array and a specified function

let results = map(stringArray, function(response) {
    return parseInt(response,10);
}); 

console.log(results)

// filter function:  receives an array of information and the callback function decides if it wants to accept it and put it in a new array
// at this point, we don't need to know either the array or the callback with the conditionals but we build the infrastructure

function filter(array, callback) {
    const filteredArray = [];
    for (let element = 0; element < array.length; element++) {
        if (callback(array[element],element)) {    //we are passing element although we don't need to; js doesn't break         
            filteredArray.push(array[element]);
        };
    };
    return filteredArray;
};

let mixup = map(mixedArray, function(response) {
    return parseInt(response,10);
});
console.log(mixup);   // this returns NaNs because some of the elements are not numbers, so we can use the filter function now

mixup = filter(mixup, function(response) {   // along with response, we can pass on other arguments and it won't matter 'cuz js.
    // console.log(isNaN(response));
    return !isNaN(response);
});

mixup = filter(mixup, function(response) {
    return response % 2 === 0;
});

console.log(mixup);

// reject function:  works like filter, but instead of pushing results that match a criteria, they pus results that do not match
// remember, first we build the infrastructure, then worry about the array and parent function

function reject(array, callback) {
    const newArray = [];
    for ( let index = 0; index < array.length; index++) {
        if (!(callback(array[index]))) {            //if it returns from the callback, does not push it to newArray
            newArray.push(array[index]);
        };
    };
    return newArray
};

let solution = map(mixedArray, function(response) {
    return parseInt(response,10);
});
console.log(solution);

solution = reject(solution, function(response) {
    return isNaN(response);
});
console.log(solution);

// find function:  will see if an element is part of an array

function find(array, callback) {
    for ( let idx = 0; idx < array.length; idx++ ) {
        if (callback(array[idx], idx)) {
            return (array[idx]);
        };
    };
};

let exists = find(mixedArray, function(response) {
    return response === '4';
});
console.log(exists);

// reduce function:  takes an array of values and reduces it to a single value
// in this function, memo is the summation of the result of the callback, and it is an optinal parameter.  If it is not passed, returns undefined, so we do something...

function reduce(array, callback, memo) {
    const results = [].concat(array);

    if (memo === undefined) {
        memo = results.pop();  // we made a copy of the array above so that the original one does not get destroyed by this operation
    };

    for (let index = 0; index < array.length; index++) {
        memo = callback(memo, array[index], index);
    };
    return memo;
};

results = reduce(results, add);


function add(num1, num2) {
    return num1 + num2;
};

console.log(results);

