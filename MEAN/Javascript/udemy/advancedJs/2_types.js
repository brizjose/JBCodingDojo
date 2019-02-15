console.log(typeof "a");
console.log(typeof 1);
console.log(typeof false);
console.log(typeof {});
console.log(typeof undefined);
console.log(typeof null); // incorrectly prints object, can't be reversed

// dynamically typed language:
// js is dynamical as data type can change and applied at runtime

// statically typed language needs data type specification beforehand

// difference between null and undefined:
// js sets type undefined to uninitialized variables
var a;
console.log(a);

// null is set by programmers, not js engine

var b = null;
console.log(b);

// this is a subtle but important distinction

// a similarity is that both null and undefined are values

// outside of JS, null is absence of value

// this is true because values are same
console.log(undefined == null);
console.log(0 == "");
console.log(1 == "1");
console.log(String(1) === "1");
// this is false because they are not so the same in every respect (type and value)
console.log(undefined === null);
console.log(0 === "");
console.log(1 === "1");

// all these are false, except the last one
console.log(false == "false");
console.log("false" == false);
console.log(Boolean("false") === false);
console.log(false === Boolean("false"));
console.log(String(false) === "false");

// everything compared to NaN is false, even NaN...
console.log(NaN == NaN);
console.log(NaN === NaN);

// NaN type is number
console.log(typeof NaN);

// check if value of a variable is NaN:
var n = NaN;
console.log(a !== a);
// use this trick because NaN is the only value of all JS that is NOT equal to itself.  
// any other method of checking for NaN is inconsistent.



