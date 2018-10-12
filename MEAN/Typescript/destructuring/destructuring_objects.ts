//object destructuring

//create variables t.a and t.b without declaration

let t = {
    a: "Hank",
    b: 12,
    c: "Tank",
};
let {a,b} = t;

console.log(a);
console.log(b);

//assignment without declaration, needs surrounding ()

({a,b} = {a:"baz", b:101});

console.log(a,b);

//that does not affect t
console.log(t);

//create variable for remaining items

let rex = {
    h: "stomach",
    g: 4,
    j: "paws" 
}
let {h, ...remaining} = rex;
console.log(h);
console.log(remaining);

//default values

function newObject(
    wholeObject: {
        name: string,
        age?: number,
    }
    let {}
)


//spread with objects:

let foodStuff = {food: "spicy", pricey: "$$", noisy: true};
let foodSearch = {...foodStuff, food:"rich"};

