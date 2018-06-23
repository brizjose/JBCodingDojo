//Count elements within an array of arrays that meet a specified condition

var arrays = [
    [1,2,3,4,5],
    [4,5],
    [1,3,5,6],
]

var cond = 3;

    function countArrays(){
        var counter = 0;
        for(var i = 0; i < arrays.length; i++){
            for(var u = 0; u < arrays[i].length; u++){
                if(arrays[i][u] >= cond){
                    counter++;
                }
            }
        }
        console.log(counter);
    }


//Create variables for each element of an array

function createArrays(arr){
    for (var i = 0; i < arr.length; i++){
        var nameof = "arr"+i+"";
        //var "arr"+i+"" = [];
        //"arr"+i+"".push(arr[i]);
        document.getElementById('outputpage').innerHTML = nameof;
    }

}

createArrays([7,4,5,9,1]);

//Reverse an array
    function reverseArr(arr){
        arr.reverse();
        document.getElementById('outputpage').innerHTML = arr
    }
    reverseArr([5,6,7,8]);

//Studies of console.log vs return
//1
function a(){
    console.log('hello');
}
console.log('dojo');
//2
function a(){
	console.log('n is', n);
	x = n + 15;
}
x = a(3);
console.log('x is', x);
//3
function a(n){
	console.log('n is', n);
	return n + 15;
}
x = a(3);
console.log('x is', x);
//4
function op(a,b){
	c = a+b;
	console.log('c is', c);
	return c;
}
x = op(2,3) + op(3,5);
console.log('x is', x); 
//5
function op(a,b){
	c = a+b;
	console.log('c is', c);
	return c;
}
x = op(2,3) + op(3,op(1,2)) + op(op(2,1),op(2,3));
console.log('x is',x);
//6
x = 15;
function a(){
	x = 10;
}
console.log(x);
a();
console.log(x);

//Algorithms II
//1
function multiply(x,y){
	console.log(x);
	console.log(y);
}
b = multiply(2,3);
console.log(b)
//2
function multiply(x,y){
	return x * y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));
//3
var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
//4
x=15;
console.log(x);
function awesome(){
    x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);
//5
for(var i=0; i<15; i+=2){
   console.log(i);
}
//6
for(var i=0; i<3; i++){
   for(var j=0; j<2; j++){    
       console.log(i*j);
   }
}
//7
function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<x; j++){       
          console.log(i*j);
      } 
   }
}
z = looping(3,3);
console.log(z);
//8
function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<y; j++){        
         console.log(i*j);
      } 
   }
   return x*y;
}
z = looping(3,5);
console.log(z);
//9
function printUpTo(x){
	if(x < 0){
		console.log('negative number');
		return 'false';
	}
	else{
		for(var i = 1; i <= x; i++){
			console.log(i);
		}
	}

}
printUpTo(10); // should print all the integers from 1 to 10
y = printUpTo(-10); // should return false
console.log(y); // should print false
//10
function printSum(x){
  sum = 0;
  arr = [];
  for(var i = 0; i < 255; i++){
	  arr.push(i);
	  sum = sum + arr[i]
	  console.log(arr);
  }
  return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32385
//11
function printSumArray(x){
  sum = 0;
  for(var i=0; i<x.length; i++) {
    sum = sum + x[i];
  }
  return sum;
}
console.log( printSumArray([1,2,3]) ); // should log 6

