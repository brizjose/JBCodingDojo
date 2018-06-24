function mixinItUp(param1, param2, param3, param4){
    var count = param2;
    while(count >= param1){
        if(count % param3 == 0 && count !== param4){
            console.log(count);
        }
    count--;
    }
}
mixinItUp(5,67,12,24);