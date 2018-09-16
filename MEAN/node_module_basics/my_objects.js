//if we want to return a function that returns an object, we switch the code up to return those functions:

module.exports = function() {
    return {
        greet: function() {
            console.log("we are now using a module that returns functions, not objects")
        },
        add: function(num1,num2) {
            console.log("the sum is: ", num1 + num2)
        }
    }
}

