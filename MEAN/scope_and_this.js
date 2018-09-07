// naming convention is for Classes and Object Constructors to be capitalized and singular

function Person(name,age){
    var privateVariable = "this is private";
    var privateMethod = function(){
        console.log(this);
    }
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Sayonara, my name is "+this.name+" and I am "+this.age+" years old");
        console.log("My private variable is "+privateVariable)
        privateMethod();
    }
}

var eliza = new Person("Eliza",40);
// eliza.greet();
// the greet includes the privateMethod, which instead of printing the instance's attributes and methods, prints the computer's...see why below...
// console.log(privateVariable)
// undefined because initialization of var is local

// if we try to console.log the privateVariable from within the function, 'this' will be confused for the browser window

// this is because 'this' is interpreted as the parent of the context we're in

// a solution is to assign 'this' instance to a variable

function Personus(name,age){
    var self = this
    var privateVariable = "THIS is private";
    var privateMethod = function(){
        console.log("This is a private method for "+self.name);
        console.log(self);
    }
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Sayonara, my name is "+this.name+" and I am "+this.age+" years old");
        // and we can access the attributes within the constructor
        console.log("Also, my private variable is "+privateVariable);
        // as well as the methods within the constructor
        privateMethod();
    }
}

var joe = new Personus("Joe",55)
joe.greet();

// now joe's greet includes a detail of his attributes and methods

