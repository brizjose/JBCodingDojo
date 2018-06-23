
// JS Module  -- 6//17/18

// 1- With a function, change all numbers in an array to string 'big' 
function numToBig(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = 'big';
    }
    return arr;
}
numToBig([6,2,-8,4,-5,1]);

// 2- Create a function that prints the lowest value in the array and returns the highest
function hiLo(arr){
    max = arr[0];
    min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        else if(arr[i] > max){
            max = arr[i];
        }  
    }
    console.log(min);
    return max;
}
hiLo([76,34,56,4,3,56,2,-2,76,4,9]);

// 3- Create a function that prints the second to last value of an array and returns the first odd value
function specific(arr){
    console.log(arr[arr.length-2]);
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !==0){
            return arr[i];
        }
    }
}
specific([6,3,5,7,2]);

// 4- Create a function that doubles the value of all numbers within an array
function doubleUp(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*2;
    }
    return arr;
}
doubleUp([7,2,-3,5,-7,2]);

// 5- Create a function that replaces the last value with the total of positive numbers within an array
function countPositivesAndReplaceLastValue(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count = count + 1;
        }
    }
    arr.pop();
    arr.push(count);
    return arr;
}
countPositivesAndReplaceLastValue([-6,3,7,-2,7,-2,5,-4]);

// 6- Create a function that prints "That's odd!" when it sees 3 odd numbers in a row and prints "Even more so!" when it sees 3 even numbers in a row

function oddEvener(arr){
    var countN = 0;
    var countP = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            countN = countN + 1;
            countP = 0;
        }
        else if(arr[i] > 0){
            countN = 0;
            countP = countP + 1;
        }
        if(countN >= 3){
            console.log("That's odd!");
        }
        else if(countP >= 3){
            console.log("Even more so!");
        }
    }
}
oddEvener([7,3,-4,7,5,2,5,8,5,3,-6,-8,3,2,2,4,-6,-5,-6,7,-5,-3,-3,-5,7,4,4,6,-6,4,5,-75,54,-5,2,9]);

// 7- Write a function that adds 1 to all odd-indexed numbers within an array, then prints out each element and returns the modified arr
function addOneToOddIndexedNumbersWithinAnArray(arr){
    for(var i = 0; i < arr.length; i++){
        if(i % 2 !== 0){
            arr[i] = arr[i] + 1;
        }
        console.log(arr[i]);
    }
    return arr;
}
addOneToOddIndexedNumbersWithinAnArray([7,3,-4,7,5,2,5,-6,4,5,-75,54,-5,2,9]);

// 8- Write a function that replaces each string within an array with it's length
function stringToLength(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].length;
    }
    return arr;
}
stringToLength(['awesome', 'dojo', 'student', 'exam', 9, 'apple']);

// 9- Write a function that, without altering the original array, creates a new one with all indexes replaced with the number 7, except for the first index which remains intact
function increaseBySevenExceptForFirst(arr){
    var newArr = [];
    newArr.push(arr[0]);
    for(var i = 1; i < arr.length; i++){
        newArr.push(arr[i]+7);
    }
    console.log(arr);
    return newArr;
}
increaseBySevenExceptForFirst([3,3,-4,7,5,2,5,-6,4,5,-75,54,-5,2,9]);

// 10- Reverse an array without creating a temporary newArr
function swapArr(arr){
    for(var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}
swapArr([1,2,3,4,5,6,7]);

// 11- Write a function that converts all non-negative values to negative values
function tNeg(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = -arr[i];
        }
    }
    return arr;
}
tNeg([3,3,-4,7,5,2,5,-6,4,5,-75,54,-5,2,9]);

// 12- Write a function that prints "yummy" every time a value equals "food", then print "I'm hungry" once
function theHungryArr(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 'food'){
            console.log('yummy');
        }
    }
    console.log("I'm hungry");
}
theHungryArr(['alchemy', 'magic', 'inhibitor', 'food', 'computer']);

// 13- Swap only even indexed values with their counterparts at the opposite side of the spectrum
function evenIndexBlackHole(arr){
    for(var i = 0; i < arr.length/2; i+=2){
        var temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}
evenIndexBlackHole([1,2,3,4,5,6,7]);

// 14- Write a function that multiplies all values within the array by a given number
function theGoldenRatio(arr, Y){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * Y;
    }
    return arr;
}
theGoldenRatio([1,2,3,4,5], 1.618);
