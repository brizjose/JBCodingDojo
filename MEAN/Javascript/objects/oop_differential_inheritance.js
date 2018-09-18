// initialize an object

function Dog () {};

// that was a function used as constructor.   as any function, it is initialized WITH a prototype object.
console.log(Dog.prototype);   // Dog {}
console.log(Dog.prototype.prototype);  // undefined, prototypes' common ancestor is Null

var fido = new Dog();
console.log(fido.prototype);

// constructor is 'new' and creates another Dog object called fido, which is an instance of Dog

Dog.prototype.bark = function () { console.log('wooof!') };
console.log(Dog.prototype);
console.log(fido.prototype);

fido.bark();

// bark method is available to its instances via their prototype;  it is not of the instance, it is of its prototype, but are available through an invisible link, this called 'differential' inheritance or prototype chain.   JS looks for bark() in fido, does not find it, so goes up a level to its prototype, where it finds it


var dido = Object.create(Dog);
console.log(dido)

// Object.create creates a new, empty object that has Dog in its prototype chain


function Car () {};

var ford = new Car();
var chevy = Object.create(Car);

console.log(`var ford = new Car() gives: `,ford)
console.log("var ford = Object.create(Car) prototype is: ",ford.prototype)
console.log("ford type of is: ",typeof ford)

console.log(`var chevy = new Car() gives: `,chevy)
console.log("Object.create(Car) prototype is: ",chevy.prototype)
console.log("chevy type of is: ",typeof chevy)

Car.prototype.drive = function() {console.log('vrooom')};

ford.drive();
// chevy.drive();  throws an error

//this is an object, but not a constructor
var Plane = { fly: function() {console.log('flying high speeed!');}};

Plane.fly();

//this is prototypal initialization
var jumbo = Object.create(Plane.prototype);

jumbo.fly();
console.log(`jumbo is `,jumbo )
console.log(`jumbo's prototype is `,jumbo.prototype);
console.log(`jumbo is of type `,typeof jumbo);


Plane.prototype.land = function() {console.log('landing!!')};

jumbo.land();

// this is a constructor
function Rectangle (width, height) {
    this.width = width;
    this.height = height;
};

Rectangle.prototype.area = function() {
    return this.width * this.height
};

// this is an object
var rect = new Rectangle(3,4);

console.log(rect.area());

// this throws an error saying that Object prototype can only be an object or null, not a function!!
// var mini = Object.create(Rectangle(2,2));





