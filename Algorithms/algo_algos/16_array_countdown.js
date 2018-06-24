function countdown(num){
    var arr = [];
    for(var i = num; i >=0; i--){
        arr.push(i);
    }
    return arr;
}
console.log(countdown(6));