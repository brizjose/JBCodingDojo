function Car(model,year){
    //attributes
    var gasTank = 100;
    this.model=model;
    this.year=year;
    //methods
    this.go = function(distance){
        gasTank = gasTank - 1 * distance;
        return this
    };
    this.gas = function(){
        gasTank = 100;
        return this
    };
    this.show = function(){
        console.log("model: "+this.model+"; year: "+this.year+"; gas: "+gasTank)
    }
};

var camaro = new Car("Camaro",2016)

camaro.go(10).go(5);
camaro.show();
camaro.gas().show();

//this method creates a public variable for the instance
camaro.color = "red"

//proto creates a private variable at class level, affecting all instances
camaro.__proto__.speed = 300;

var savage = new Car("Savage",2018);

console.log(camaro);
console.log("camaro speed is "+camaro.speed);
console.log(savage);
console.log("savage speed is "+savage.speed);
console.log(camaro,savage);