
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
