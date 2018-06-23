// JS Module  -- 6//16/18

// 1- Array with numbers from 1 to 255 
function numbers(){
    var arr = [];
    for (var i = 1; i <= 255; i++){
        arr.push(i);
    }
    document.getElementById("1").innerHTML = arr;
    return arr;
}
numbers();

// 2- Sum of all even numbers from 1 to 1000
function sumEven(){
    var sum = 0;
    for (var i = 1; i <= 1000; i++){
        if(i % 2 == 0){
            sum = sum + i;
        }
    }
    document.getElementById("2").innerHTML = sum;
    return sum;
}
sumEven();

// 3- Sum of all odd numbers between 1 and 5000
function sumOdd(){
    var sum = 0;
    for(var i = 1; i <= 5000; i++){
        if(i % 2 !==0){
            sum = sum + i;
        }
    }
    document.getElementById("3").innerHTML = sum;
    return sum;
}
sumOdd();

// 4- Summ array values
function arrSum(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    document.getElementById("4").innerHTML = sum;
    return sum;
}
arrSum([-5,2,5,12]);

// 5- Find max value within an array
function findMax(arr){
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    document.getElementById("5").innerHTML = max;
    return max;
}
findMax([-3,3,5,7]);

// 6- Given an array, calculate average
function avgArr(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    document.getElementById("6").innerHTML = sum/arr.length;
    return sum/arr.length;
}
avgArr([1,3,5,7,20]);

// 7- Function that returns all odd numbers between 1 and 50
function oddNumbers(){
    var oddArr = [];
    for(var i = 1; i <= 50; i++){
        if(i % 2 !== 0){
            oddArr.push(i);
        }
    }
    document.getElementById("7").innerHTML = oddArr;
    return oddArr;
}
oddNumbers();

// 8- Given an array and Y, return total numbers greater than Y
function greater(arr, Y){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > Y){
            count++;
        }
    }
    document.getElementById("8").innerHTML = count;
    return count;
}
greater([6,4,8,2,4,9,2,65,2], 6);

// 9- Given an array, return it with all numbers squared
function squared(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    document.getElementById("9").innerHTML = arr;
    return arr;
}
squared([5,8,2,5,0]);

// 10- Given an array, replace all negative values with zero
function noNeg(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    document.getElementById("10").innerHTML = arr;
    return arr;
}
noNeg([6,3,7-9,4,-23]);

// 11- Given an array, create an array with the max, min, and avg values
function minMaxAvg(arr){
    var newArr = [];
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
    newArr.push(max);
    newArr.push(min);
    newArr.push(sum/arr.length);
    document.getElementById("11").innerHTML = newArr;
    return newArr;
}
minMaxAvg([7,3,9,34,7653,234,76,2]);

// 12- Swap first and last values of an array with a function
function swap(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    document.getElementById("12").innerHTML = arr;
    return arr;
}
swap([5,7,3,1]);

// 13- Replace negative numbers within an array with the string 'Dojo'
function negToString(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    document.getElementById("13").innerHTML = arr;
    return arr;
}
negToString([5,-2,7,-4,2,6,-8,9]);

// 14- Divide an array in half and send first half to a new array.
function swapArr(arr){
    var arrNew = [];
    for(var i = 0; i < arr.length-1; i++){
        arrNew[i] = arr.shift();
    }
    console.log(arr);
    console.log(arrNew);
}
swapArr([1,2,3,4,5,6,7,8,9,10]);
