function prevIndex(arr){
    for(var i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    console.log(arr);
}
prevIndex(['algo', 'rithm', 'rhythm', 'oglamh', 'hello']);