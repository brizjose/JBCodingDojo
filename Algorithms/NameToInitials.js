//Given a name, return the initials

function getInitials(e){
    
    var arr = e.split(" ");
    //console.log(arr.length);
    var initials = [];

    for (i = 0; i < arr.length; i++){
        initials.push(arr[i][0]);	
    }
    //console.log(initials);
    for (j = 0; j < initials.length; j++){
        document.getElementById('demo').innerHTML += initials[j];
    }
}		
getInitials("Mikel Mart Briz");

