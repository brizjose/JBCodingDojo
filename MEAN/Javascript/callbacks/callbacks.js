function map(arr,callback) {
    results = []
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        results.push(callback(item,item));
    }
    return results
}

function addTwo(num1) {
    result = num1 + 2;
    return result;
}

function multiplier(num1, num2) {
    result = num1 * num2;
    return result;
}

function timesTwo(num) {
    result = num * 2;
    return result;
}

arr = [3,6,7,10];

let operation1 = map(arr,addTwo);
let operation2 = map(arr,multiplier);
let operation3 = map(arr,timesTwo);

console.log("operation 1:", operation1)
console.log("operation 2:", operation2)
console.log("operation 3:", operation3)


// instead of:
let operation4 = map(arr, function(num){
    let result = num * 3;
    return result;
})
// ES6 functions:

let operation4a = map(arr,(element) => element * 3)

console.log("operation 4:", operation4)
console.log("operation 4a:", operation4a)

console.log("operation 1a:", map(arr,(num)=>num+2));
console.log("operation 2a:", map(arr,(num)=>num*num));
console.log("operation 3a:", map(arr,(num)=>num*2));

