function navArray(arr){
    var next_last = arr[arr.length - 2];
    console.log(next_last);
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            return arr[i];
        }
    }
}
console.log(navArray([6,4,8,3,5,8,7]));