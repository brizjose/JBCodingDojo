function peoplePerson(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("My name is "+this.name+" and I am "+this.age+" years old.")
    }
    //it does not return
}

// when using 'this', instances are created with 'new'

var damian = new peoplePerson('Damian',145)
damian.greet();

// 'this' and 'new' enable us to access the arguments within new methods

var kandy = new peoplePerson('Kandy',22)
kandy.greet = function(){
    console.log("Hello, I am "+this.name+" and I am "+this.age);
}
kandy.greet();

var gigi = new peoplePerson("Gigi",18)
gigi.greet();