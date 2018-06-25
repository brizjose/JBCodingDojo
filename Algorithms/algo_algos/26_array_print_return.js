function printReturn(arr){
    var max = arr[0];
    var min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}
console.log(printReturn([7,2,9,6,4,2,4,6,7,2,1,0,34]));