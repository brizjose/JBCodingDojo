//learn to access elements within objects

var personal = [1, 'string', false, [1,2,3]];
console.log(personal[3][2]);

var information = {
    name: 'Jose',
    age: 43,
    hobbies: ['bass','coding','meditating']
};
console.log(information.name)
console.log(information.hobbies[2])

var listOfThings = [{
    cars: ['jeep','jetta'],
    colors: ['black','silver'],
    seats: [2,3,4,5]
} ,
{
    cars: ['honda','toyota'],
    colors: ['red','blue'],
    seats: [2,3,4,5]
}];
console.log(listOfThings[0].cars[1]);

var world = [
    [1,1,1,1],
    [1,0,0,1],
    [1,0,0,1],
    [1,1,1,1]
];

console.log(world[1][2]);

var hues = {
    0: 'black',
    1: 'white'
}

console.log(hues[1]);



