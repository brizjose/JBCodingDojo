// we can use 'extends' to create child classes that fall from parents

class Dot {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        console.log(`The (${this.x}, ${this.y}) Dot has been created`);
    };
    showLocation() {
        console.log(`location of this ${this.constructor.name} is (${this.x}, ${this.y})`)
    };
    parentFunction() {
        return "This message is coming from Dot";
    }
};

const dot1 = new Dot(6,7);

class Circle extends Dot {
    constructor(x,y,radius) {
        super(x,y);
        this.radius = radius;
        console.log(`Dot (${this.x}, ${this.y}) is actually a circle with a radius of ${this.radius}`)
    };
    childFunction() {
        let message = super.parentFunction();
        console.log(message+` even though it is being called from ${this.constructor.name}`); 
    };
};

const circle1 = new Circle(6,6,6);

dot1.showLocation();
circle1.showLocation();

// super calls the constructor parent class, so we don't have to retype what it does.  
// notice we can make the class name a variable with this.constructor.name so that the showLocation method returns the correct information

// we can also call parent methods using super

circle1.childFunction();