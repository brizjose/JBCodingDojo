function mixUp(lowNum, highNum, mult){
    for( var i = highNum; i >= lowNum; i--){
        if(i % mult == 0){
            console.log(i);
        }
    }
}
mixUp(5,67,12);