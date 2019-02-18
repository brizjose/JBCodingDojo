"use strict";
const performance = require("perf_hooks").performance;
// PROBLEM:
// compare two arrays.
// one array must have exactly the same numbers as other array, but with the numbers squared.


// SOLUTION 1:
// nested loop creates O(n**2), not a good solution...
function samex(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false, "at point 1";
    }
    for (let i = 0; i < arr1.length; i++) {
        let idx = arr2.indexOf(arr1[i] ** 2);
        if (idx === -1) {
            return false, "at point 2";
        }
        arr2.splice(idx, 1);
    }
    return true;
}
const ax1 = [1, 2, 3];
const ax2 = [4, 9, 1];

let t1 = performance.now();
let resx = samex(ax1, ax2);
let t2 = performance.now();
console.log(resx);
console.log(`Time elapsed: ${(t2 - t1)/1000} seconds`);

// SOLUTION 2:
// creating two different objects and do a search inside the objects is more efficient
// bigO is O(n) and object lookups are fast

function samey(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return (false, "at point 1");
  }
  let freqCount1 = {};
  let freqCount2 = {};
  for (let val of arr1) {
    freqCount1[val] = (freqCount1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freqCount2[val] = (freqCount2[val] || 0) + 1;
  }
  for (let key in freqCount1) {
    if (!(key ** 2 in freqCount2)) {
      return (false, "at point 2");
    }
    if (freqCount2[key ** 2] !== freqCount1[key]) {
      return (false, "at point 3");
    }
  }
  return true;
}
const ay1 = [1, 2, 3, 9, 4, 5, 8, 6, 7, 8, 5, 9, 2, 10];
const ay2 = [16, 4, 25, 100, 9, 64, 36, 25, 81, 1, 49, 64, 81, 4];
let t3 = performance.now();
let resy = samey(ay1, ay2);
let t4 = performance.now();
console.log(resy);
console.log(`Time elapsed: ${(t4 - t3)/1000} seconds`);

