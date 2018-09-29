// build objects on the fly

var myObject = {
    prop1: 'hello',
    prop2: 'world',
    output: function() {
        console.log(this.prop1 + ' ' + this.prop2);
    }
};

myObject.prop1 = 'hi';
myObject.output();


let mikel = {
    prop1: 'say steep',
    prop2: 'my squeeeeshi smells',
    prop3: 'tornadoes',
    speak: function() {
        console.log(this.prop1 + '!! ... ' + this.prop2 + '!!!');
    },
    //valid shorthand for methods:
    like() {console.log(`I like ${this.prop3}`);}
};

mikel.prop1 = "I'm hungry"
mikel.prop2 = 'turd face'
mikel.prop3 = 'challenge games!!'

mikel.speak();
mikel.like();

//build objects from variables

let 
  a = 1, b = 2, c = 3;
  obj = {
      a,
      b,
      c,
  };

obj.b = 5;

console.log(obj);

//build libraries with immediately invoked functions

const lib = (() => {
    function sum(a,b) {return a + b}
    function mult(a,b) {return a * b}
    return {
        sum,
        mult
    };
})();

console.log(lib.sum(2,3));
console.log(lib.mult(2,3));

//shorthand for object methods:

const mathLib = {
    sum(a,b) {return a + b},
    mult(a,b) {return a * b}
};

console.log(mathLib.sum(2,3));
console.log(mathLib.mult(2,3));

