const classify = require("./classify").classify;
const age = require("./age").age;

const people = [
  {
    name: "Jon",
    last_name: "Don",
    gender: "male",
    age: 23
  },
  {
    name: "Jena",
    last_name: "Miles",
    gender: "female",
    age: 26
  },
  {
    name: "Lena",
    last_name: "Niles",
    gender: "female",
    age: 32
  },
  {
    name: "Bob",
    last_name: "Berg",
    gender: "male",
    age: 36
  }
];

let promises = people.map(person => classifyPromise(person));
let multiplication = people.map(person => multiplyPromise(person));

function classifyPromise(person) {
  return new Promise((resolve, reject) => {
    resolve(classify(person));
  });
}

function multiplyPromise(person) {
  return new Promise((resolve, reject) => {
    resolve(age(person));
  });
}

function process(arr) {
  return Promise.all(arr);
}

const total = (tot, val) => tot + val;

process(promises)
  .then(data => console.log("the values are: ", data))
  .catch(err => console.error("the error is: " + err));

process(multiplication)
  .then(data => console.log("the values are: " + data + " for a total of " + data.reduce(total)))
  .catch(err => console.error("the error is: " + err));
