"use strict";
const performance = require("perf_hooks").performance;

// count unique values in a sorted array

// naive solution:
function countUniqueValues(arr) {
  let unique = 0;
  const obj = {};
  for (let val of arr) {
    if (obj[val]) {
      continue;
    } else {
      obj[val] = 1;
      unique++;
    }
  }
  return unique;
}

let array = [1, 1, 1, 4, 4, 4, 7, 7, 7, 7, 7, 4, 3, 2, 0];

let t1 = performance.now();
let tot = countUniqueValues(array);
let t2 = performance.now();

console.log(tot);
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

// while loop solution:

function whileUniqueValues(arr) {
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
}

let array1 = [1, 1, 1, 4, 4, 4, 7, 7, 7, 7, 7, 8, 8, 9, 10];

let t3 = performance.now();
let total = whileUniqueValues(array1);
let t4 = performance.now();

console.log(total);
console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds`);

// big O with for loop implementation

function forUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

let array2 = [1, 1, 1, 4, 4, 4, 7, 7, 7, 7, 7, 8, 8, 9, 10];

let t5 = performance.now();
let totaly = forUniqueValues(array2);
let t6 = performance.now();

console.log(totaly);
console.log(`Time elapsed: ${(t6 - t5) / 1000} seconds`);
