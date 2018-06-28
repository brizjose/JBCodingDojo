function yummy(arr){
    var counter = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            counter++;
        }
    }
    if(counter==0){
        console.log("I'm hungry");
    }
}
yummy(['orange', 'apple', 'door', 'caterpillar']);
