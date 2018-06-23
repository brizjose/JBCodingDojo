//1- Given an array and a value of Y, count and print the number of array values greater than Y

function arry(arr, Y){
    var arrx = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > Y){
            arrx.push(arr[i])
        }
    }
    console.log(arrx);
    return arrx.length;
}
console.log(arry([6,3,5,3,72],5));

        //or don't print the values, only number of values greater than Y
function arry(arr, Y){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > Y){
            count++;
        }
    }
    return count;
}
arry([6,3,5,3,72],5)

//2- Given an array, pring max, min and average values for that array

function maxMinAvg(arr){
    var arrnew = [];
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        else if(arr[i] < min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    arrnew.push(max);
    arrnew.push(min);
    arrnew.push(sum/arr.length);
    return arrnew;
}
maxMinAvg([64,23,462,63,3,45]);

//3- Given an array of numbers, create a function that returns a new array where negative values were replaced with the string 'Dojo'.

function dojoArr(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
            newArr.push(arr[i]);
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
dojoArr([4,6,-2,4,3,-9]);

        //or not create new array, just modify original
function dojoArr(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
dojoArr([4,6,-2,4,3,-9]);

//4- Given array and indices start and end, remove vals in that index range, working in-place (hence shortening the array).

function removeVals(arr,x,y){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(i < x || i > y)
        newArr.push(arr[i]);
    }
    return newArr;
}
removeVals([20,30,40,50,60,70],2,4);