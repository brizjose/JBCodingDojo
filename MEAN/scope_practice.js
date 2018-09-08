// CHALLENGE:  do a counter without using global variables!

function count(){
    var counter = 0;
    function innerCount(){
        return ++counter;
    }
    return innerCount;
}

outCount = count();

//'counter' is undefined because it is an inner variable
// console.log(counter);

//'function innerCount' is undefined because it is an inner function
// console.log(innerCount);

//so, how can we access the inner variables and functions if we don't want to use global variables and functions??

//notice this will reference the inner function
console.log(count());

//notice this will reference the inner function too because the variable is set to equal the function
console.log(outCount);

//here we get the results, as we run the variable-function
//it works, although we are using inner functions, because innerCount 'remembers' the context it is created in, so remembers the local variable 'counter'
console.log(outCount());
console.log(outCount());
console.log(outCount());
console.log(outCount());
