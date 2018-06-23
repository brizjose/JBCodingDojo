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