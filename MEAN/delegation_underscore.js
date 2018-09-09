// underscore.js is a library worth getting familiar with.  it uses delegation to offer all sorts of methods:

// example of how underscore.js packages functionality:


// the 'each' method passes each of an array's elements through a function, and this is how they do it:

function each(arr,callback) {
    for (var i = 0; i < arr.length; i ++) {
        callback(arr[i]);
    };
};

each( [1,2,3], function(num) { console.log(num+"- I am from the callback!"); } )

