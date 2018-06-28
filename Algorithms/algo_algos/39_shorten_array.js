function shorten(arr, x){
    for(var i = 0; i <= arr.length - x; i++){
        arr.shift()
    }
    console.log(arr);
}
shorten([2,4,6,8,10],3);