//run immediately, are self-called.  JQuery is built on these


(function() {
    console.log("I am a bird!");
} () );

//another syntax

(function() {
    console.log("I am an igloo!");
}) ();

// they can take arguments:

(function(arg1,arg2) {
    console.log(`the first argument is ${arg1} and the second ${arg2}.`)
}) ('Tommy','the Cat');

// they are used to nest methods so they don't contaminate other variables

(function() {
    var a = 5;
    var b = 10;
    function sum() {
        console.log(a + b); 
    }
    function subtract() {
        console.log(a - b);
    }
    sum();
    subtract();
} () );


