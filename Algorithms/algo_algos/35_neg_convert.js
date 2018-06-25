function negConvert(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = arr[i] * -1;
        }
    }
    console.log(arr);
}
negConvert([-5,5,-5,-5,5,-5,5,-5,5]);