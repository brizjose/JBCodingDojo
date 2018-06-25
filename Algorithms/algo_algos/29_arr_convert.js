function convert(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count++;
        }
    }
    arr.pop();
    arr.push(count);
    console.log(arr);
}
convert([1,-1,1,-1,2,-1,1,-2,1]);