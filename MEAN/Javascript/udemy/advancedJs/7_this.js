"use strict";

// in JS, this is determined by the calling context

// the way a function is called.  
// the calling object.

// if there is no calling context as in the case of a named function that gets called at runtime, the calling context is global.
// if using "strict", calling context would be undefined

const obj = {
    name: "Objecto",
    theThis: function() {
        console.log(this);
    }
}

obj.theThis();    // = the object itself
console.log(obj); // === proof that it is the object itself

const func = obj.theThis;
// func(); // = object global

// because func called theThis within the global object, this is the global object.
// on the contrary, if this is called within the object, this is the object.

// this becomes the global context when called within functions even if inside an object:

const check = {
    checkThis: function() {
        console.log("first log ", this);
        function checkOther() {
            console.log("second log", this);
        }
        checkOther();
    }
}

check.checkThis(); // returns 'check' on first console.log and the global object on the second console.log, not the object check

// a solution is to anchor this in another variable:

const check1 = {
    check1This: function() {
        const self = this;
        console.log(self);
        function checkOther() {
            console.log(self);
        }
        checkOther();
    }
}
check1.check1This();

// function call() stabilizes the context of this by passing this as paramenter, thus making 'this' the caller...

const check2 = {
    check2This: function() {
        console.log(this);
        function checkOther() {
            console.log(this);
        }
        checkOther.call(this);
    }
}
check2.check2This();


