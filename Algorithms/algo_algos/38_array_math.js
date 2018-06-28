function arrayMath(arr, num){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    console.log(arr);
}
arrayMath([6,3,2,5,3],5);