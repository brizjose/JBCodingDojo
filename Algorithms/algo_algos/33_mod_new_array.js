function modArray(arr){
    var newArr = [arr[0]];
    for(var i = 1; i < arr.length; i++){
        newArr.push(arr[i] + 7);
    }
    console.log(newArr);
}
modArray([3,3,3,3,3,3,3,3]);