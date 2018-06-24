function analyze(arr){
    if(arr.length > arr[0]){
        console.log("too big!");
    }
    if(arr.length < arr[0]){
        console.log("too small!");
    }
    else{
        console.log("just right");
    }
}
analyze([6,3,7,2,7,3]);