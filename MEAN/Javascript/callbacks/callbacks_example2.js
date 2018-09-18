function getFromDB(callback) {
    var data;
    var process = setTimeout(function(){
        if (typeof(callback)=='function'){
            data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
            callback(data);
        }
    },3000);
    return data
};

function request() {
    var data = getFromDB(myCallback);
    console.log(data, "synchronous");
};

function myCallback(data) {
    // console.log(data, "asynchronous");
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].name);
    }
};


request();

console.log('Hello');


