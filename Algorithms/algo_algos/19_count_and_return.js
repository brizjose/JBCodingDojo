function sumAndReturn(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > arr[1]){
            console.log(arr[i]);
            count++;            
        }
    }
    console.log(count);
}
sumAndReturn([7,5,2,7,3,6,4,0]);
