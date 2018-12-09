const R = require('ramda');
const color = require('colors');

// function composition: making new functions out of other functions by combining the logic of the other functions

const mySentence = "Hello divine world";

const myWordList = mySentence.split(' ');

console.log(myWordList);

const myWordCount = myWordList.length;

console.log(myWordCount);

// using functional composition with Ramda

const sentence = "Hello divine little world";

const wordList = R.split(' ', sentence);

console.log(wordList);

const wordCount = R.length(wordList);

console.log(color.green(wordCount));

// combining the two operations in one line

const composedWordCount = R.length(R.split(' ', sentence));

console.log(color.magenta(composedWordCount));

// applying functional composition with Ramda's R.compose
// compose combines the functions from right to left; the output of right is the input of left

const countWords = R.compose(R.length, R.split);

console.log(color.yellow(countWords(' ', sentence)));

// using partial application to simplify parameters of countWords:

const countWords2 = R.compose(R.length, R.split(' '));

console.log(color.blue(countWords2(sentence)));


// similar to R.compose is R.pipe, but this one combines the functions from left to right

const countWords3 = R.pipe(R.split(' '), R.length);

console.log(color.red(countWords3(sentence)));


