//boolean
let isDone: boolean = false;
//number
let decimal: number = 10;
let series: number = 0xf00d;
//string
let color: string = 'blue';
color = 'red';
//string
let fullName: string = "Bobb Berg";
let age: number = 45;
let greenting: string = `Hello, my name is ${fullName}
`
let sentence: string = `I'll be ${age + 1} soon`
//array
let array: number[] = [1,2,3];
let list: string[] = ['a', 'b', 'c'];

//tuples
//declare a tuple type
let x: [string,number];
//initialize it
x = ['hello',1];

//then use methods according to type:
console.log(x[0].substring(1));
console.log(x[1].toString());

//union types

let newArr: (string | number);
newArr[1] = 'happy';
newArr[0] = 1;
newArr[2] = 'family';

//enum

enum Color {Red, Green, Blue}

let c: Color = Color.Red

enum Hue {Orange = 1, Purple, Pink}

let h: string = Hue[1];

enum Options {Black = 3, White = 6, Gray = 9}

let o: string = Options[3];

//object = non-primitive object

declare function create(o: object | null): void;

create({prop: 0});
create(null);
// create('fiction');  //error
create({name: "Toby", height: 24});

//type assertions

//one way, with angle-brackets
let someValue: any = `All is lost`;
let strLength: number = (<string>someValue).length;

//another way with 'as' syntax
let thisValue: any = `Not all!`;
let strSize: number = (thisValue as string).length;

//making custom mix of types

type boolStrNum = boolean | string | number;

const thisArray: boolStrNum[] = ['cat', 'dog', 2,7,true]

const firstVal = thisArray[0];

//a function that tells us if something is a string

function isString(value: any): value is string {
    return typeof value === 'string';
}

if (isString(firstVal)) {
    console.log(firstVal.toUpperCase);
}


