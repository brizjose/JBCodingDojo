function evenOdd(arr){
    var count_eve = 0;
    var count_odd = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            count_eve++;
            count_odd = 0;
            if(count_eve >= 3){
                console.log("even more so!");
            }
        }
        if(arr[i] % 2 !== 0){
            count_eve = 0;
            count_odd++;
            if(count_odd >= 3){
                console.log("that's odd!");
            }
        }
    }
}
evenOdd([2,5,3,6,3,5,65,4,3,5,6,4,4,5,6,345,9,54,3,45,65,9]);