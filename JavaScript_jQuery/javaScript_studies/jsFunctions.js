'use strict';

// proof that js can take in much more arguments than it processes, without breaking

function f(x, y) {
    console.log(x, y)
    return toArray(arguments);
    // function to Array declared later
}

// console.log(f(1, 3, 5, 7, 0, 8));


// convert a list of arguments to an array

function toArray(objects) {
    return Array.prototype.slice.call(objects);
}


// using forEach and try-catch

function getPersons(ids) {
    const result = [];
    ids.forEach(id => {
        try {
            const person = getPerson(id);
            result.push(person);
        } catch (error) {
            console.log(error);
        }
    });
    return result;
}

function getPerson(id) {
    if (id < 0) {
        throw new Error ('ID must not be negative: ' + id);
    }
    return { id: id };   // normally retrieved from db
}

const person_ids = f(1, 4, 0, -6, 9);

console.log(
    getPersons(person_ids)
);







