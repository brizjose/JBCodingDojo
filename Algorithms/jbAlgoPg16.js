//PAGE 16

//setting and swapping
var myNumber = 43;
var myName = "Jose";
var tempOral = myName;
var myName = myNumber;
var myNumber = tempOral;
console.log(myNumber, myName);
var tempOral = myNumber;
var myNumber = myName;
var myName = tempOral; 
console.log(myNumber, myName);

//print -52 to 1066
for (var i = -52; i <=1066; i++){
    console.log(i);
}

//Don't Worry, Be Happy
function beCheerful() {
    for (var i = 1; i <= 98; i++){
        console.log("good morning!");
    }
}
beCheerful();

//Multiples of Three -- but Not All
for (var skippy = -300; skippy <= 0; skippy++){
    if (skippy % 3 === 0){
        if (skippy === -6 || skippy === -3){
            continue;
        }
        console.log(skippy);
    }
}

//Printing Integers with While
var num = 2000;
while (num <= 5280){
    console.log(num);
    num = num + 1;
}

//You Say It's Your Birthday
function birthYayNay (num1, num2){
    if ((num1 === 10 || num1 === 8) && (num2 === 10 || num2 === 8)){
        console.log("How did you know?");
    }
    else{
        console.log("Just another day.");
    }
}

//Leap Year
function LeapYear (numYear){
    if ((numYear % 4 === 0 && numYear % 100 === 0) || numYear % 400 === 0){
        console.log("Leap year!");
    }    
    else{
        console.log("Not a leap year.");
    }
}

//Print and Count
var pBucket = []
var pAndC = 512;
while (pAndC <= 4096){
    if (pAndC % 5 === 0){
        console.log(pAndC);
        pBucket.push(pAndC);
    }
    pAndC = pAndC + 1;
}
console.log(pBucket.length);

//Multiples of Six
var multiSix = 6;
while (multiSix <= 60){
    if (multiSix % 6 === 0){
        console.log(multiSix);
    }
    multiSix = multiSix + 1;
}

//Counting the Dojo Way
for (i = 1; i <= 100; i++){
    if (i % 10 === 0 && i % 5 === 0){
        console.log("Coding Dojo");
    }
    else if (i % 5 === 0){
        console.log("Coding");
    }
    else{
        console.log(i);
    }
}

//What Do You Know?
function printParameter(toPrint){
    console.log(toPrint);
}

//Whoa, That Sucker's Huge...
var oddBucket = [];
var sumBucket = 0
for (i = -300000; i <= 300000; i++){
    if (i % 2 === 0){
        continue;
    }
    sumBucket = sumBucket + i;
    oddBucket.push(i);
}
console.log(sumBucket/oddBucket.length);

//Countdown by Fours
var numStart = 2016;
while (numStart > 0){
    if (numStart % 4 === 0){
        console.log(numStart);
    }
    numStart = numStart - 1;
}

//Flexible Countdown
function flexibleCountdown(lowNum, highNum, mult){
    while (highNum > lowNum){
        if (highNum % mult === 0){
            console.log(highNum);
        }
        highNum = highNum - 1;
    }
}

//The Final Countdown
function finalCountdown(param1,param2,param3,param4){
    for (chips = param2; chips <= param3; chips++){
        if (chips % param1 === 0){
            if(chips === param4){
                continue;
            }
            console.log(chips);    
        }
    }
}

//PAGE 20

//Countdown
function countDown(inIput){
    var arr = [];
    for (i = inIput; i > 0; i--){
        arr.push(i);
    }
    console.log(arr.length);
}

//Print and Return
function printAndReturn(num1, num2){
    var arr = [num1, num2];
    console.log(arr[0]);
    return(arr[1]);
}

//First Plus Length
function weirdArray(item1, item2, item3, item4){
    var arr = [item1, item2, item3, item4];
    var weirdSum = arr[0] + arr.length;
    console.log(weirdSum);
}

//Values Greater than Second
arr = [1,3,5,7,9,13];
arrBucket = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] > arr[1]){
            arrBucket.push(arr[i]);
            console.log(arr[i]);
        }
    }
    console.log(arrBucket.length);

//Values Greater than Second, Generalized    
function greaterThanSecond(arr){
    var arrBucket = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] > arr[1]){
            arrBucket.push(arr[i]);
            console.log(arr[i]);
        }
    }
    console.log(arrBucket.length);
}

//This Length, That Value
function jinxIt(num1, num2){
    var arrJinx = [];
    if (num1 === num2){
        console.log("Jinx!");
    }
    else{    
        for (i = 0; i <= num1; i++){
        arrJinx.push(num2);
        }
    }
    return(arrJinx);
}

//Fit the First Value
function fitThat(arr){
    if(arr[0] > arr.length){
        console.log("Too big!");
    }
    else if(arr[0] < arr.length){
        console.log("Too small!");
    }
    else{
        console.log("Just perfect!");
    }
}

//Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees){
    var celsiusTemp = (fDegrees - 32) * 5/9;
    console.log(celsiusTemp);
}

//Celsius to Fahrenheit
function celsiusToFahrenheit(cDegrees){
    var fahrenheitTemp = cDegrees * 9/5 + 32;
    console.log(fahrenheitTemp);
}

//PAGE 22

//Biggie Size
function biggieSize(arr){
    for (i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr[i] = "big";
        }
    }
    console.log(arr);
}

//Pring Low, Return High
function printLReturnH(arr){
    var maxi = arr[0];
    var mini = arr[0];
    for (i = 1; i < arr.length; i++){
        if (arr[1] > maxi){
            maxi = arr[1];
        }
        else if (arr[1] < mini){
            mini = arr[1];
        }
    }
    console.log(mini);
    return(maxi);
}

//Double Vision
function double(arr){
    var arrDouble = [];
    for (i = 0; i < arr.length; i++){
        arrDouble.push(arr[i]*2);
    }
    console.log(arrDouble);
}

//Count Positives
function countPositives(arr){
    var arrBucket = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arrBucket.push(arr[i]);
        }
    }
    arr.pop();
    arr.push(arrBucket.length);
    console.log(arr);
}

//Evens and Odds
function evenOdds(arr){
    var evenTracker = 0;    
    var oddTracker = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            oddTracker = 0;
            evenTracker += 1;
        }
        else{
            evenTracker = 0;
            oddTracker += 1;
        }
        if (oddTracker > 0 && oddTracker % 3 === 0){
            console.log("That's odd!");
        }
        else if (evenTracker > 0 && evenTracker % 3 === 0){
            console.log("Even more so!");   
        }
    }
}

//Increment the Seconds
function incrementSeconds(arrOriginal){
    var arrIncreased = [];
    for (i = 0; i < arrOriginal.length; i++){
        if (arrOriginal[i] % 2 === 0){
            arrIncreased.push(arrOriginal[i]);
        }
        else{
            arrIncreased.push(arrOriginal[i]+1);
            console.log(arrOriginal[i]+1);
        }
    }
    console.log("original: " + arrOriginal);
    console.log("increased: " + arrIncreased);
}

//Previous Lengths
function previousLengths(stringArr){
    var numArr = [];
    for (i = 0; i < stringArr.length; i++){
        numArr.push(stringArr[i].length);
    }
    console.log(numArr);
}

//Seven Up
function sevenUp(originalArr){
    var modifiedArr = [originalArr[0]];
    for (i = 1; i < originalArr.length; i++){
        modifiedArr.push(originalArr[i] + 7);
    }
    console.log(modifiedArr);
}

//Reverse Array - the short version
function reverseArray(originalArr){
    originalArr.reverse();
    console.log(originalArr);
}

//Reverse Array - the long version
function revArr(arr) {
    var reversed = [];
    for(var i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
        console.log(reversed);
}
revArr([1,2,3,4,5,6]);

//Outlook: Negative
function outlookNegative(arr){
    for (i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr[i] = -arr[i];
        }
    }
    console.log(arr);
}

//Always Hungry
function alwaysHungry(arr){
    var foodBucket = [];
    for (i =0; i < arr.length; i++){
        if (arr[i] === "food"){
            console.log("yummy");
            foodBucket.push(1);
        }
    }
    if (foodBucket.length === 0){
        console.log("I'm hungry");
    }
}

//Swap Toward the Center
function complexSwap(arr){
    var iterations = Math.round(arr.length/4);
    for (i = 0; i < iterations; i++){
        var temp = arr[0 + i*2];
        arr[0 + i*2] = arr[arr.length - i*2 - 1];
        arr[arr.length - i*2 - 1] = temp;
    }
    console.log(arr);
}

//Scale the Array
function scaledArr(arr, num){
    for (i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    console.log(arr);
}