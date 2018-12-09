// partial application: assigning a fixed value to one or some parameters of a general formula as you use it, specialize it on something


const greet = (greeting, name) => `${greeting} ${name}!`;

const greeting = 'Hello';
const name = 'Mike';

console.log(greet(greeting, name));

// rest of the example used Ramda library