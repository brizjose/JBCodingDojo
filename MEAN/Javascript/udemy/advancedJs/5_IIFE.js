"use strict";

// what are they and why use them?

// immediately invoked function expression

// they are used not to pollute the global scope with variables from the different files that are loaded

// IIFE makes it possible to wrap the functionality in anonymous functions like so:

function thing() {
    const thing = {name: "Halo"}
    console.log("the thing is ", thing);
}
thing();

(function() {
    const thing = {name: "Thirteen"}
    console.log("the thing is ", thing)
})();

// notice we don't need to name it, therefore, less pollution.
// the idea is we don't want to get any loose functions from any source to pollute the global scope

// named functions pollute:
console.log(thing)

