function f() {
    const message = `I'm inside function f!`
    return message;
}
console.log(f());  
//returns the string

function g() {
    const num_var = 10;
    return function h() {
        const new_num = num_var + 1;
        return new_num;
    }
}
var t = g();
console.log(t()); 
//returns 11

function a() {
    let a = 1;
    a = 2;
    let b = z();
    a = 3;
    return b;
    function z() {
        return a;
    }
}
console.log(a()); 
//returns 2!

//variable capturing quirks

for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100 * i);
}

for (var i = 0; i < 10; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, 100 * i);
    })(i);
}

//advantages of using let, one of them is that it is block scoped and another is that it creates its own instance if for each iteration if used within a for loop, thus simplyfying the examples above:

for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i); 
    }, 100 * i)
}

//scoping

//let is a block scoped variable, but it can be re-declared on a function-scoped variable
function conditional(condition, x) {
    if (condition) {
        let x = 100
        return x;
    }
    return x;
}

console.log(conditional(false, 0));
console.log(conditional(true, 0));

//shadowing is re-declaring with a different name in a nested function:

function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}


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


