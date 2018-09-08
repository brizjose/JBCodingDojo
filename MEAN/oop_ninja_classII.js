function Ninja(name,health){
    this.name = name;
    this.health = health;
    var speed = 3;
    var strength = 3;
    var health = 100;
    function punch(name){
        name.health -= 5;
    };
    function kick(name){
        name.healt -= 15;
    };
    this.sayName = function(){
        console.log("My name is "+this.name);
    };
    this.showStats = function(){
        console.log("name: "+this.name+"; strength: "+strength+", speed: "+speed+", health: "+this.health)
    };
    this.drinkSake = function(){
        this.health += 10;
        return this
    };
    this.punch = function(name){
        punch(name);
        return this
    };
};

var mohito = new Ninja("Mohito",95);
var tiradito = new Ninja("Tiradito",90);

mohito.punch(tiradito);
console.log(tiradito.health);

tiradito.drinkSake().drinkSake();
console.log(tiradito.health);

mohito.punch(tiradito).punch(tiradito);
console.log(tiradito.health);
