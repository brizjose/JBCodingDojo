"use strict";

// use sliding window to keep track of a subset of data within a larger one
// in this exercise, find the max sum of n consecutive numbers:

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let sum1 = 0;
  for (let i = 0; i < num; i++) {
    sum1 = sum1 + arr[i];
  }

  let sumRoll = sum1;
  for (let j = num; j < arr.length; j++) {
    sumRoll = sumRoll + arr[j] - arr[j - num];
    sum1 = Math.max(sum1, sumRoll);
  }
  let result = Math.max(sum1, sumRoll);
  return result;
}

const arr1 = [2,6,9,2,1,8,5,6,3];
const num1 = 3;

let res1 = maxSubarraySum(arr1, num1);
console.log(res1);
