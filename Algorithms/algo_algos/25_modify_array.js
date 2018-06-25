function makeItBig(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = 'big';
        }
    }
    console.log(arr);
}
makeItBig([6,-1,4,-6,2,-6]);