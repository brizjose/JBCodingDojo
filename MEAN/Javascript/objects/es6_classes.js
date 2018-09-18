// ES6 makes available a wrapper called classes that provides some synthatic sugar to work with constructor functions


// when creating objects using the 'class' keyword, we define a method called 'constructor'.   All ES6 classes have a constructor, and the constructor always runs whenever we create a new class   

class Dot {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        console.log("a dot has been created");
    };
};

const dot1 = new Dot(6,9);

// notable things:

// 1. the console.log fires without need to call the dot instance.  it fires upon creation
// 2. classes are NOT hoisted, they will remain the the same place they were initialized and won't move during interpretation

// the ES5 way:

function Dotty(x,y) {
    this.x = x;
    this.y = y;
};
Dotty.prototype.showLocation = function(){
    console.log("This dot is at coordinates (x: "+this.x+", y: "+this.y+")");
};

var dot2 = new Dotty(7,8);
dot2.showLocation();

// the ES6 way:

class Dotto {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    };
    showLoco() {
        console.log(`This dot is at coordinates (x: ${this.x}, y: ${this.y})`)
    };
    static getHelp() {
        console.log(`This is a Dot class to create dots.  A Dot takes x and y coordinates, type "new dot" to create one!`);
    };
};

var dot3 = new Dotto(9,10);
dot3.showLoco();

// NOTICE THE STRING INTERPOLATION DONE INSIDE BACKTICKS
// NO FUNCTION WORD BEFORE THE METHOD'S NAME
// THE METHOD IS NO LONGER APPENDED BY WAY OF PROTOTYPE.  INSTEAD IT IS WRITTEN INSIDE THE CONSTRUCTOR BUT BEHAVES THE SAME WAY

console.log(dot1);
console.log(dot2);
console.log(dot3);

// notice that the methods continue to be a class level thing and are not logged as methods of the instance!

Dotto.getHelp();
// dot3.getHelp();

// because getHelp has been tagged as a static method, it is not accessible from the instances, only from the Class directly