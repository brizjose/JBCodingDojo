//Return an array with numbers between 1 and 255

function newArray(){
	var arr = [];
	for (i = 1; i <= 255; i++){
		arr.push(i);
	}
	console.log(arr);
}

//Write function that adds all even numbers from 1 to 1000

function newAdd(){
	var x = 0;
	for (i = 1; i <= 1000; i++){
		x =  x + i;
	}
	console.log(x);
}

//Write function that adds all odd numbers from 1 to 5000

function oddAdd(){
	var x = 0;
	for (var i = 1; i <= 5000; i++){
		if(i % 2 > 0){
			x = x + i;
		}
	}
	return(x);
}

//Write function that adds all numbers within an array

function addArray(e){
	var x = 0;
	for (i = 0; i < e.length; i ++){
		x = x + e[i];
	}
	console.log(x);
}


//Write function that returns highest value within an array

function maxVal(e){
	var maxx = 0;
	for (i = 0; i < e.length; i++){
		if (e[i] > maxx){
			maxx = e[i];
		}
	}
	console.log(maxx);
}

//Write a function that returns the average of an array

function averageValue(e){
	var total = 0;
	for (i = 0; i < e.length; i++){
		total = total + e[i];
	}
	return total / e.length;
}


//Write function that returns an array of all odd numbers between 1 and 50

function oddNumbers(){
	var oddArray = [];
	for (i = 1; i < 50; i++){
		if (i % 2 > 0){
			oddArray.push(i);
		}
	}
	return oddArray;
}

//Given a value of Y, write a function that takes an array and returns the number of values that are greater than Y

function greatNumber(arr, Y){
	var count = 0;
	for (i = 0; i < arr.length; i++){
		if (arr[i] > Y){
			count++
		}
	}
	console.log(count);
}

//Write function that, given an array, returns another array with numbers being squared

function squaredArr(arr){
	for (i = 0; i < arr.length; i++){
		arr[i] = Math.pow(arr[i],2);
	}
	console.log(arr);
}

//Predict output of the code below

var a = 35;
console.log(a);
function hello(){
	var a = 50;
	console.log(a);
}
console.log(a)
var b = hello()
console.log(b);
