// different kinds of functions

// pure function -- creates and returns a value based only on input parameters and causes no side effects
// -- must have input parameters
// -- must no use any stateful values
// -- must return a value based only on input parameters
// -- must not cause any side effects: when code causes change outside of itself; example: saving something to a DB or writing to a file or making changes to what is seen on a web app
// -- simply return a value based on input parameters and methods run inside the function

// impure function -- procedure
// example:

let counter = 0;
function increment() {
    couter++;
}

// -- does not need input parameters
// -- depends on stateful values, the counter
// -- does not return anything, does not even have inputs
// -- has side effects, it changes the value of the counter
// -- this one breaks all the rules, but function is impure if breaks only one
// -- a better description of this one is a procedure

// reasons to use pure functions:
// -- reusable
// -- composable - can be combined to create new functions
// -- easy to test
// -- always produce the same result
// -- and more

// about state:
// functional programming should eliminate state as much as possible
// and tightly controlling state when it is needed

