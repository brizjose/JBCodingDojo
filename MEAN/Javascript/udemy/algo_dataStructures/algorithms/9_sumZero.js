"use strict";

// find the first pair that sums zero within a sorted array

// solution, do multiple pointers

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return null;
}

const array = [-4,-3,-2,-1,0,5,10];

let response = sumZero(array);
console.log(response);
