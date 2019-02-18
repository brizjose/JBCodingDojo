"use strict";

// divide and conquer is a pattern that is used to diminish time complexity by dividing an array into pieces

// the array has to be sorted
// return the index of found item

 
let array = [1, 2, 3, 4, 5, 6];
                
                        
let find = 2;

function binarySearch(arr, ele) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);

    if (arr[mid] < ele) {
      min = mid + 1;
    } else if (arr[mid] > ele) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

let result = binarySearch(array, find);
console.log(result);
