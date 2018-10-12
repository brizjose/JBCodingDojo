//array destructuring

let input = [1,2];
let [first, second] = input;
console.log(first);
console.log(second);
//swapping
[first, second] = [second, first];
console.log(first);
console.log(second);
//as function parameters
function destructure([one, two]:[number, number]) {
    console.log[one];
    console.log[two];
}
destructure([600, 900]);
//grouping
let [digit, ...rest] = [1,2,3,4];
console.log(digit);
console.log(rest);
//cherrypicking
let arr_1 = [1000,2000,3000,4000];
let [item_1] = arr_1;
console.log[item_1];
let [,item_a,,item_b] = arr_1;
console.log(item_a);
console.log(item_b);


//spread is opposite to destructuring:

let nums1 = [1,2,3];
let nums2 = [4,5,6];
let nums3 = [0, ...nums1, ...nums2, 7, 8];


