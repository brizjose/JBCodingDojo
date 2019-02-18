"use strict";

const performance = require("perf_hooks").performance;

// given two positive integers, find out if they have the same frequency of digits

const n1 = 2812;
const n2 = 1821;
function sameFrequency(n1, n2) {
  let a1 = n1.toString().split("");
  let a2 = n2.toString().split("");
  if (a1.length !== a2.length) {
    return false;
  }
  let obj1 = {};
  for (let n of a1) {
    obj1[n] = (obj1[n] || 0) + 1;
  }
  for (let m of a2) {
    if (obj1[m]) {
      obj1[m]--;
    } else {
      return false;
    }
  }
  return true;
}

const t1 = performance.now();
const res = sameFrequency(n1, n2);
const t2 = performance.now();
console.log(res);
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

// another solution -- bit slower

function sameFreq(n1, n2) {
  let a1 = n1.toString();
  let a2 = n2.toString();
  if (a1.length !== a2.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < a1.length; i++) {
    obj1[a1[i]] = (obj1[a1[i]] || 0) + 1;
  }
  for (let j = 0; j < a2.length; j++) {
    obj2[a2[j]] = (obj2[a2[j]] || 0) + 1;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

const t3 = performance.now();
const result = sameFreq(n1, n2);
const t4 = performance.now();
console.log(result);
console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds`);
