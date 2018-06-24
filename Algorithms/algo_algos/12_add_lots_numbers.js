function addition(){
    var sum = 0;
    for(var i = -30; i <= 30; i++){
        if(i % 2 !== 0){
            sum = sum + i;
        }
    }
    console.log(sum);
}
addition();