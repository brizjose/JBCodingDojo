//with default property

function objectInit(theObject: {
    a:string,
    b?: number}) {
    let {a , b = 1001 } = theObject;
}

const baby = objectInit({a:"cute"});

console.log(baby);


type C = {d: string, e?: number};
function f({d,e}: C):void {
    //...
}

