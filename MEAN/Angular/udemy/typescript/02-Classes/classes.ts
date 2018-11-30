// Classes allow us to create 'blueprints' for objects
// In Angular 2 we use classes a lot. For example to create Components, Services, Directives, Pipes, ...

// How to create a class

class Car {
    engineName: string;
    gears: number;
    private speed: number;

    constructor(speed: number) {
        this.speed = speed || 0;
    }

    accelerate(): void {
        this.speed++;
    }

    throttle():void {
        this.speed--;
    }

    getSpeed():void {
        console.log(this.speed);
    }

    static numberOfWheels(): number {
        return 4;
    }
}

// Instantiate (create) an object from a class

let car = new Car(5);
car.accelerate();
car.getSpeed();

console.log(Car.numberOfWheels());

// public properties engineName and gears are not needed to instantiate in this case because they are not part of the constructor
// speed is required to instantiate because it is part of the constructor.  However, it is marked as private thus only accessible from within the class
// an example of this internal access it the getSpeed() method that console.logs it.  this method is called a getter
// other methods like accelerate() and throttle() modify the private attribute speed, another example of internal access.
// static methods are called as such because they do not require to be called for an instance of the clas.  
// they are available as general functionality and could be used by calling Car.numberOfWheels(), so, directly from the class prototype.