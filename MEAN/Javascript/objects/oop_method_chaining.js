// I. OOP in ES5
// define the object constructor
function Person(name,age){
    this.name = name;
    this.age = age;
};

// attach class method using .prototype
Person.prototype.greet = function(){
    console.log("Hi, my name is "+this.name+" and I am "+this.age+" years old");
    return this
};

// create a new instance - use 'new' because prototype uses 'this'
var gigi = new Person("Gigi",14);

// create instance method by attaching a function to the instance
gigi.sing = function(){
    console.log("Tralalalala!");
};


// II. Private variables and Chaining

function Car(make,model){
    var odometer = 0;
    this.make = make;
    this.model = model;

    // to make a method private we scope it to the constructor
    function updateOdometer(distance){
        odometer += distance;
    };

    // 'Getter' functions help us read private variables
    this.readOdometer = function(){
        return odometer;
    };

    // 'Setter' functions help us update private variables
    this.drive = function(distance){
        updateOdometer(distance)
        // return this will allow to chain methods
        return this
    };
};

// create an instance
var camaro = new Car("Chevy","Camaro");

// call and chain the setter methods to update the object
camaro.drive(50).drive(90);

// the following will return undefined because it is a private attribute
console.log(camaro.odometer);

// the following will return the odometer because it is a getter function
console.log(camaro.readOdometer());

