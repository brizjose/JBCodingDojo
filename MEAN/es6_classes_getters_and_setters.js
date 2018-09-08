class Pizza {
    constructor(radius,slices) {
        this.radius = radius;
        this._slices = slices;
    };
    get slices() {
        return this._slices;
    };
    set slices(slices) {
        this._slices = slices
    };
};

// the attribute this._slices uses _ to differentiate between the parameter slices and the attribute slices so we can use get and set as we've done here.  The use of _ is not required but it's convention.

const pie = new Pizza(12,6);
console.log(pie.slices);    // we use get 
pie.slices = 12;            // we use set
console.log(pie.slices);

// custom getters:  we can create custom getters like so:

class Circle {
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    };
    get diameter() {
        return this.radius*2;
    };
};

const circle9 = new Circle(6,3,2);
console.log(circle9.diameter);

