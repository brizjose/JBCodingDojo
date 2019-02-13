const age = require('./age');

module.exports = {
  classify(person) {
    if (person.gender === "female") {
      // console.log(person.name + " is female");
      person.age = age.age(person);
      return person.name + " is female and will be " + person.age + " ten years from now";
    } else {
      // console.log(person.name + " is male");
      person.age = age.age(person);
      return person.name + " is male and will be " + person.age + " ten years from now";
    }
  }
};
