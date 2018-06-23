// 1- return accumulated sum of numbers up to n

function sigma(n){
    var acc = 0;
    for(var i = 1; i <= n; i++){
        acc = acc + i;
    }
    return acc;
}
sigma(5);

// 2- returns factorial

function factorial(n){
    var acc = 1;
    for(var i = 2; i <= n; i++){
        acc = acc * i;
    }
    return acc;
}    
factorial(5);

// 3- returns fibonacci progression up to nth iteration

function f(n){
    var fib = [0,1];
    for(var i = 2; i <= n; i++){
        fib.push(fib[i-2]+fib[i-1]);
    }
    return fib[n];
}
f(8);
    
// 4- return second to last element of an array, or nul if array too short

function eitherSecondToLastOrNull(arr){
    if(arr.length < 2){
        return 'nul';
    }
    else{
        return arr[arr.length-2];
    }
}
eitherSecondToLastOrNull([1,2,3,4,5,6,7,8]);

// 5- return nth to last element of an array, or nul if array too short

function nthToLast(arr, Y){
    if(arr.length-Y < 0){
        return 'nul';
    }
    else{
        return arr[arr.length-Y];
    }
}
nthToLast([5,2,3,6,4,9,7],3);

// 6- return the second largest number within an array

function secondLargest(arr){
    if(arr.length == 1){
        return arr.length;
    }
    else{
        var max = arr[0];
        var maxer = arr[0];    
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
            else if(arr[i] > maxer && arr[i] < max){
                maxer = arr[i];
            }
        }
    }
    return maxer;
}
secondLargest([7,4,3,2,5,6,3,32,7,5,90,2,3,54,35,76,23,4,6,34,5,65,4,0]);

// 7- change the array to return elements twice, keep original order

function duplicate(arr){
    var n = arr.length;
    for(var i = 0; i < n; i++){
        var temp = arr.pop()
        arr.unshift(temp,temp);
    }
    return arr; 
}
duplicate([1,2,3]);

// 8- fibonacci using recursion

function fib(n){
    if(n == 0 || n == 1){
        return n;
    }
    else{
        return fib(n-2) + fib(n-1);
    }
}
fib(8);

