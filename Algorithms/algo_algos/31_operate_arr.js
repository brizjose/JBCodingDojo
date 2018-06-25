function addToIndex(arr){
    for(var i = 0; i < arr.length; i++){
        if(i % 2 !== 0){
            arr[i] = arr[i] + 1;
        }
    }
    console.log(arr);
}
addToIndex([1,1,1,1,1,1,1,15,5,5,5,5]);