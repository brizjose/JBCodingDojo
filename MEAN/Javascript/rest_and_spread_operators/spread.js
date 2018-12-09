// used to copy an object and spread its contents within the enclosure of the new one


const me = {
    name: 'Jose',
    age: '44',
    hobbies: ['Music', 'Coding'],
    greet() {
        console.log('Hello, I\'m ' + this.name);
    }
}

const miniMe = {...me, age: 3};

console.log(me, miniMe);

me.greet();


const hobbies = [...me.hobbies];

console.log(hobbies);