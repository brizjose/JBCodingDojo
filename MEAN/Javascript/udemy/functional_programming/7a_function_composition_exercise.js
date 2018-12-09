const R = require('ramda');
const color = require('colors');

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

const digits = R.split('', sentence);

const numbersInString = R.pipe(
    R.split(''),
    R.map(parseInt),
    R.filter(Number.isInteger),
    R.length,
);

console.log(numbersInString(sentence));


// using R.pipe to combine methods from left to right
// using split to split the sentence into characters and make an array
// using map to apply a function to each character.  In this case, parseInt to convert to number all those characters that are numbers
// using filter to leave only numbers in the array
// using length to count the number of characters in the array
