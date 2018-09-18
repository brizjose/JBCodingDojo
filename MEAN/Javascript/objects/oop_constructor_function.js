function personConstructor(name, age){
    // an object literal that will be returned
    var person = {}
    person.name = name;
    person.age = age;
    // when attached to an object or instance, functions are called methods
    // this is a method
    person.greet = function(){
        console.log("Hello, my name is "+person.name+" and I am "+person.age+" years old!")
    }
    // finally, this function must return an instance
    return person
}

// create an instance, run greet
var steve = personConstructor("Steve",32);
steve.greet();

// create an instance and modify a method
var anika = personConstructor("Anika",12)
anika.greet = function(){
    console.log("howdy!!  My name is "+this.name)
}
anika.greet();

// anika's modification does not affect the constructor function
var pete = personConstructor("Pete",56)
pete.greet();
