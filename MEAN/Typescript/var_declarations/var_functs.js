var _a;
function f() {
    var message = "I'm inside function f!";
    return message;
}
console.log(f());
//returns the string
function g() {
    var num_var = 10;
    return function h() {
        var new_num = num_var + 1;
        return new_num;
    };
}
var t = g();
console.log(t());
//returns 11
function a() {
    var a = 1;
    a = 2;
    var b = z();
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
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 100 * i_1);
};
//advantages of using let, one of them is that it is block scoped and another is that it creates its own instance if for each iteration if used within a for loop, thus simplyfying the examples above:
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}
//scoping
//let is a block scoped variable, but it can be re-declared on a function-scoped variable
function conditional(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log(conditional(false, 0));
console.log(conditional(true, 0));
//shadowing is re-declaring with a different name in a nested function:
function sumMatrix(matrix) {
    var sum = 0;
    for (var i_2 = 0; i_2 < matrix.length; i_2++) {
        var currentRow = matrix[i_2];
        for (var i_3 = 0; i_3 < currentRow.length; i_3++) {
            sum += currentRow[i_3];
        }
    }
    return sum;
}
//array destructuring
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
//swapping
_a = [second, first], first = _a[0], second = _a[1];
console.log(first);
console.log(second);
//as function parameters
function destructure(_a) {
    var one = _a[0], two = _a[1];
    console.log[one];
    console.log[two];
}
destructure([600, 900]);
//grouping
var _b = [1, 2, 3, 4], digit = _b[0], rest = _b.slice(1);
console.log(digit);
console.log(rest);
//cherrypicking
var arr_1 = [1000, 2000, 3000, 4000];
var item_1 = arr_1[0];
console.log[item_1];
var item_a = arr_1[1], item_b = arr_1[3];
console.log(item_a);
console.log(item_b);
