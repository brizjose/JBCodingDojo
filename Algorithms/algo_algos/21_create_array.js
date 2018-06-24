function jinx(num1, num2){
    var arr = [];
    if(num1 == num2){
        console.log("Jinx!")
    }
    for(var i = 0; i < num1; i++){
        arr.push(num2);
    }
    console.log(arr);
}
jinx(6,6);