


//predict the outcome of:

function a(){
    console.log('hello');
    return 15;
}
x = a();
console.log('x is ', x);

function a(n){
    console.log('n is ', n);
    return n+15;
}
x = a(3);
console.log('x is ', x);



function a(n){
    console.log('n is ', n);
    y = n*2;
    return y;
}
x = a(3) + a(5);
console.log('x is ', x);

//predict the outcome of:

function a(x,y){
    return 5;
}
console.log(5,5);

function a(x,y){
    z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
b = a(2,2)
console.log(b);
console.log(a(6,8));

function a(x){
    z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
 }
 y = a(2);
 y.push(5);
 console.log(y);

 function a(x){
    if(x[0] <x [1]) {
       return true;
    }
    else {
       return false;
    }
 }
 b = a([2,3,4,5]);
 console.log(b);

function a(x){
    for(var i=0; i<x.length; i++){
        if(x[i] > 0){
            x[i] = "Coding";
        }
    }
    return x;
}  
console.log(a([1,2,3,4]));

function a(x){
    for(var i=0; i<x.length; i++){
        if(x[i] > 5){
            x[i] = "Coding";
        }
        else if(x[i] < 0){
            x[i] = "Dojo";
        }
    }
    return x;
}    
console.log(a([5,7,-1,4]));
 
function a(x){
    if(x[0] > x[1]) {
     return x[1];
    }
    return 10;
 }
 b = a([5,10])
 console.log(b);

function sum(x){
    sum = 0;
    for(var i=0; i<x.length; i++){
       sum = sum + x[i];
       console.log(sum);
    }
    return sum;
}
sum([6,2,8,3,0]);

function a(){
    return 4;
}
console.log(a()+a());

function a(b){
    return b;
}
console.log(a(2)+a(4));

function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));
    

function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));
 
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
    console.log(j,i);
    }
}
a();

z = 10;
function a(){
    z = 15;
    console.log(z);
}
console.log(z);

z = 10;
function a(){
        z = 15;
        console.log(z);
}
a();
console.log(z);

z = 10;
function a(){
    z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

//1- Return a given array after converting all negative values to zero

function negNone(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    document.getElementById("1").innerHTML = arr;
    return arr;
}
negNone([-4,5,6,2,-3,7]);

//2- Return an array after dropping the first index and inserting zero at the end

function dropZero(arr){
    arr.shift(arr[0]);
    arr.push(0);
    document.getElementById("2").innerHTML = arr;
    return arr;
}
dropZero ([1,2,3]);

//3- Given an array, return an array with values in reversed order

function revArray(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.unshift(arr[i]);
    }
    document.getElementById("3").innerHTML = newArr;
    return newArr;
}
revArray([1,2,3,4]);

//4- Create a function that changes a given array to list each original element twice, retaining the original order. Have the function return a new array.

function seeDouble(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i],arr[i]);
    }
    document.getElementById("4").innerHTML = newArr;
    return newArr;
}
seeDouble([1,2,3]);    

