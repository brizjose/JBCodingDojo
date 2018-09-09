//simulated really slow DB call.

//**********EXECUTION JUMPS TO HERE***************
function getStuffFromDatabase(callback){
    var data;
    var myTimer = setTimeout(function(){
        if (typeof(callback) == 'function'){
            data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
            callback(data);
        }
    }, 5000);
    return data;
}    
// ************EXECUTION HERE**************
function requestDataFromDatabase(){
    var data = getStuffFromDatabase(function (data){    // fetch the data with a function call that will provide it
        console.log(data, "ASynchronous");              // data is the return from the called function
        for (var i = 0; i < data.length; i ++){
            console.log(data[i].name);
        }
    });
    console.log(data, "Synchronous");                   // but this data is the variable initialized in line 16, and is unavailable because of the delay
}
//**************EXECUTION ENDS HERE*****************

function catchFly(){
    console.log('I just caught a fly!');
}
  
requestDataFromDatabase();

// keep running my program!
console.log('Hello');
catchFly();
//etc.
   
  