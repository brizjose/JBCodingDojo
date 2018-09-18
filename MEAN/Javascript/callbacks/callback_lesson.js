const array = [99,78,54,22];


// no callback
function each(array) {
    const newArray = [];
    for (let index  = 0; index < array.length; index++) {
        const square = array[index] * array[index];
        console.log(index, array[index], square);
    }   
    return newArray;
}
const results = each(array);

// with empty callback
function each2(array, callback) {
    const newArray2 = [];
    console.log(callback.toString())
    for (let index  = 0; index < array.length; index++) {
        const square = array[index] * array[index];
        console.log(index, array[index], square);
    }   
    return newArray2;
}
const results2 = each2(array, function(){});

// with callback that does something
function each3(array, callback) {
    const newArray3 = [];
    console.log(callback.toString())
    for (let index  = 0; index < array.length; index++) {
        callback(array[index], index, array);      
    }   
    return newArray3;
}
const results3 = each3(array, function(element){
    const square = element * element;
    console.log(element, square);    
});

// callback cycle:  it is customary to pass the current element, current index and full array to the callback even if it is not received just in case the callback function changes to one that does need that information
function each4(array, callback) {
    const newArray4 = [];
    console.log(callback.toString())
    for (let index  = 0; index < array.length; index++) {
        const element = callback(array[index], index, array); 
        console.log('from callback ',element)
        newArray4.push(element)
    }   
    return newArray4;
}
const results4 = each4(array, function(element){
    const square = element * element;
    console.log('in callback',element, square);
    return square    
});

console.log(results4, array);

// end result
function each5(array, callback) {
    const newArray5 = [];
    for (let index  = 0; index < array.length; index++) {
        const element = callback(array[index], index, array);
        newArray5.push(element)
    }   
    return newArray5;
}
const results5 = each5(array, function(element) {
    const square = element * element;
    return square    
});

console.log(results5, array);
 
const results6 = each5(array, function(num1, num2) {
    const addition = num1 + num2;
    return addition
});

console.log(results6, array)



