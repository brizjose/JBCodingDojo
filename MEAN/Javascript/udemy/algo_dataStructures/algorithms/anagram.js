"use strict";
const performance = require("perf_hooks").performance;

// ANALYZE IF THE WORD IS AN PALINDROME

const word = "abcddcba";

function palindrome(w) {
  let copy = w.split("");
  for (let letter in w) {
    if (w[letter] !== copy.pop()) {
      return false;
    }
  }
  return true;
}

let t1 = performance.now();
let result = palindrome(word);
let t2 = performance.now();
console.log(result);
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

// ANALYZE IF THE WORD IS AN ANAGRAM

const w1 = "eawesom";
const w2 = "awesome";

function anagram(w1, w2) {
  if (w1.length !== w2.length) {
    return false;
  }
  let copy1 = w1.split("");
  let copy2 = w2.split("");
  let result = true;
  while (copy1.length) {
    let idx = copy2.indexOf(copy1.pop());  // has nested loop
    if (idx === -1) {
      result = false;
    }
    copy2.splice(idx, 1);
  }
  if (copy2.length !== 0) {
    result = false;
  }
  return result;
}

let t3 = performance.now();
let re = anagram(w1, w2);
let t4 = performance.now();
console.log(re);
console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds`);

// ANAGRAM ALT SOLUTION

function validateAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

let word1 = "eawesom";
let word2 = "awesome";

let t5 = performance.now();
let res = validateAnagram(word1, word2);
let t6 = performance.now();
console.log(res);
console.log(`Time elapsed: ${(t6 - t5) / 1000} seconds`);
