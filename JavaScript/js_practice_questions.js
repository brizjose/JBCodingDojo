function previousLengths(arr){
    var newArr = [arr[0]];
    for(var i = 1; i < arr.length; i++){
        newArr.push(arr[i].length);
    }
    console.log(newArr);
}
previousLengths(["you", "me", "we"]);

function previousLengths(arr){
    for(var i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    
    return(arr);
}
previousLengths(["you", "me", "we"])