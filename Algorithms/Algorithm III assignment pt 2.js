//1
function printAverage(x){
    sum = 0;
    for(i = 0; i < x.length; i++){
        sum = sum + x[i];
    }
    return sum/x.length;
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([2,5,8]);
 console.log(y); // should log 5


//2
function returnOddArray(){
    arr = [];
    for(i = 1; i <= 255; i++){
        if(i % 2 !== 0){
            arr.push(i);
        }
    }
    return arr;
 }
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]

//3
function squareValue(x){
    for(i = 0; i < x.length; i++){
        x[i] = x[i] * x[i];
    }
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]

function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 5){
           x[i] = "Coding";
      }
      else if(x[i] < 0){
           x[i] = "Dojo";
      }
    //   return x;
  }
  return x;
} 
console.log(a([5,7,-1,4]));

function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 0){
           x[i] = "Coding"
      }
  }
  return x
}
console.log(a([1,2,3,4]))