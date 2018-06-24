function leapYear(y){
    if( y % 4 == 0 ){
        if( y % 100 == 0 && y % 400 !== 0 ){
            return("not leap year");
        }
        return("leap year");
    }
    else{
        return("not leap year");
    }   
}    
console.log(leapYear(2000)); 