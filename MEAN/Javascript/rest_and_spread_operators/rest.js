// rest aggregates arguments, makes the argument quantity flexible

const toArray = (...args) => args;

console.log(toArray(1,2,3));

console.log(toArray('Math', 'Science', 'Arts', 'Computer Science'));

console.log(toArray(true, false));