"use strict";

const performance = require("perf_hooks").performance;

// are there duplicates?

// accept a variable length array and check if duplicates

// frequency counter solution:

function findDupCount(arr) {
  let o = {};
  for (let n of arr) {
    if (o[n]) {
      return true;
    } else {
      o[n] = 1;
    }
  }
  return false;
}

const array = [1, 2, 3, 2];

const t1 = performance.now();
const result = findDupCount(array);
const t2 = performance.now();
console.log(result);
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

// another frequency counter solution - slower:

function findDupCount2(arr) {
  let obj = {};
  for (let i in arr) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] > 1) return true;
  }
  return false;
}

const t3 = performance.now();
const result2 = findDupCount2(array);
const t4 = performance.now();
console.log(result);
console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds`);
