//function requires passed object to have at least one parameter called label and does not care about the rest:

function printLabel(labelledObj: {label: string}) {
    console.log(labelledObj.label);
}

let myObj = {
    size: 10,
    label: "Size 10",
};

printLabel(myObj);

//we can re-write the above using an interface to describe the requirement of having a label property that is a string:

interface LabelledValue {
    label: string;
}

function printLabel2(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj2 = {
    size: 11,
    label: "Size 11",
};

printLabel2(myObj2);

//optional properties with ?

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color:"white", area:100};
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color:"black"});
console.log(mySquare);

//read only properties

interface Point {
    readonly x: number;
    readonly y: number;
}

// after assigning values to them, they cannot be reassigned:

let p1: Point = {x:10, y:20};
let p2: Point = {x:12, y: 14};
// p1.x = 5;   shows error!

let numy: number[] = [1,2,3,4];
let readNumy: ReadonlyArray<number> = numy;
// readNumy[0] = 9; shows an error
console.log(readNumy);

//you can override a read only array to start over:
numy = readNumy as number[];

console.log(readNumy);

//excess properties and workaround

interface shapeConfig {
    color?: string;
    width?: number;
}

function createShape(config: shapeConfig): {color: string; area: number} {
    let newShape = {color:"white", area:100};
    if (config.color) {
        newShape.color = config.color
    }
    if (config.width) {
        newShape.area = config.width * config.width;
    }
    return newShape;
}

// let myShape = createShape({color:"red", opacity:0.5}); would give an error until we include an assertion:
let myShape = createShape({color:"red", opacity:0.5} as shapeConfig);

//intefrace for functions:  created with the call signature:

interface searchFunc {
    (source: string, subString: string):boolean;
}

let mySearch: searchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

//indexable types

interface stringArray {
    [index:number]: string;
}

let myArray: stringArray;
myArray = ['Bob', 'Fred'];

let myStr = myArray[0];  //will return the string value

//readonly indexable types

interface readOnlyArray {
    readonly [index:number] : string;
}

let theArray:readOnlyArray = ['Bob', 'George', 'Mallory'];
// theArray[2] = 'Stan';  error!


//class types
//can describe parameters and methods implemented in the class
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime (d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {};
}

//interfaces describe the public side of the class








