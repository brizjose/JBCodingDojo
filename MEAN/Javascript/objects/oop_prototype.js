function Cat(catName){
    this.name = catName;
    this.getName = function(){
        return this.name
    };
}
// create a Cat instance
var ruffini = new Cat("Ruffini");
var deborah = new Cat("Deborah")

// access and print instance private method
console.log(ruffini.getName());

// add method to the cat prototype
Cat.prototype.sayHi = function(){
    console.log("meow")
}

ruffini.sayHi();

// add an attribute to the cat prototype
Cat.prototype.legs = 4;

// we can access the properties
console.log(ruffini.legs);

// we can print the object
console.log(ruffini)

// we can modify the instance's properties without modifying the prototype
ruffini.legs = 3;

console.log(ruffini.legs);

// we can modify the prototype's properties without modifying the instance's properties
// .__proto__ is how we access the prototype and change its inheritance! 
ruffini.__proto__.legs++;

var barry = new Cat("Barry");

console.log("Ruffini has "+ruffini.legs+" legs;", "Barry has "+barry.legs+" legs;", "Deborah has "+deborah.legs+" legs!");
// deborah's legs were also changed through inheritance because they have not been actually set for the instance
