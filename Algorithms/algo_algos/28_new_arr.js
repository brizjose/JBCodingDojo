function newArr(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2);
    }
    console.log(newArr);
}
newArr([6,4,2]);