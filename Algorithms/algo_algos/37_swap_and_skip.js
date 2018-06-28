function swapSkip(arr){
    for(var i = 0; i < arr.length/2; i++){
        if(i % 2 !== 0){
            continue;
        }
        else{
            var temp = arr[i];
            arr[i] = arr[arr.length-i-1];
            arr[arr.length-i-1] = temp;
        }
    }
    console.log(arr);
}
swapSkip([1,2,3,4,5,6]);
