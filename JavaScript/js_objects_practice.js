var person = {
    name: "Jose",
    age: 43,
    location: "OKC",
    ability: function(){console.log("play bass")},
    drive: true
}

//1. get a the name by pulling from the object's name key, using dot notation

// console.log(person.name);

//2. get the name again using another notation

// console.log(person['name']);    

//3.  change the content inside the name key

// person.name = "Jones";
// console.log(person);

//4. execute the function under key ability:

// person.ability();

//5. loop through the contents of the array

// for(var key in person){
//     console.log(key);
// };

//6. but if you want to see the contents of each key...

// for(var key in person){
//     console.log(person[key]);
// };

//7. print both the key and content at the same time:

for(var key in person){
    console.log(key," : ",person[key]);
}

// console.log(person);