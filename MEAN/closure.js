//closure is the return of an inner function that is accessible from outside via the return.  but the inner function is not callable, only via the outher function

function Outer() {
    var count = 0;
    function Inner() {
        count++
        console.log(count);
    }
    return Inner
}

var counter = Outer();

counter();
counter();
counter();
counter();

//notice that call to Outer() directly does not produce an outcome...

Outer();

// because it is only a wrap of Inner
console.log(Outer().toString());

// and notice that var count = 0 did not print above.  because it has not been instantiated.  It is only instantiated when Outer() is called.

