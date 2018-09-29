// REQUIRE MONGOOSE

const mongoose = require('mongoose');
const color = require('colors');

// MONGOOSE CONNECTION

//mongoose connection takes the url of the db you want to work with including the port.
//useNewUrlParser is a new feature they are implementing so start incorporating
//you can pass along other options like username, password

// mongoose.connect('mongodb://localhost:27017/animals', { 
//     useNewUrlParser: true,
//     user: 'bob',
//     pass: 'pword'  
// });
mongoose.connect('mongodb://localhost:27017/animals', { useNewUrlParser: true });

//connection is an object that has an event emitter and listener
mongoose.connection.on('connected', () => console.log('Mongoose connected'));

// OBJECTS

// let's build our object
const o = {
    a: 'this is a',
    b: 'this is b'
};

// traditional way to call attribute a of object o:
// const a = o.a;

// destructuring way of calling attribute b of object o:
// const {b} = o;

// with destructuring we can call both attributes at the same time:
// const {a,b} = o;
// console.log(a, b);

// but if a is already declared somewhere?   there is a solution, we rename o.a to somenthing else:
const a = 'original a';
const { a: notA, b } = o;
console.log(a, notA, b);

// SCHEMA

// schema is how we are going to define shape to our data
// we provide shape or structure to the db documents through schemas
// from the mongoose object, we extract Schema, we use an object destructuring pattern like so....  
// either ...               const Schema = mongoose.schema;
// or its equivalent...     mongoose {Schema } = mongoose;
// Schema is a constructor, and this is how it is used...
const {Schema} = mongoose;

//each attribute of the Schema is a path, we can specify certain behavior like required, trim...
const animalSchema = new Schema({
    name: {
        type: String,
        required: [true, `Provide a name for your animal`],
        trim: true
    },
    age: {
        type: Number,
        min: [0, `Age minimum is 0`],
        required: [true, `Provide the age of your animal`],
    },
    legs: {
        type: Number,
        min: [0, `Leg minimum is 0`],
        required: [true, `How many legs does your animal have?`],
    },
    eatsPeople: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: false
    }
}); 

// with the shape of the information, we now tell mongoose and mongo about it, so we register it with them with mongoose's 'model' method which is a getter and a setter:
 
//to name it use capital letter and singular, this will become a collection and it will rename it to lower case and plural; it also needs the schema, and it builds a blueprint for our data
const Animal = mongoose.model('Animal', animalSchema);

//to retrieve this information (getter) if working in another file
// const Animal = mongoose.model('Animal');

//to create new animal instances (setter)
const animal1 = new Animal({
    name: 'Lion',
    age: 6,
    legs: 4,
    eatsPeople: true
});

console.log(color.white(animal1));

//we save to database with the .save() method

// animal1.save();

// the instance we create extends a document, which has a number of methods attached to it.
// we can pass callbacks through the .save() db command and see  
// we pass error and saved callbacks; ***remember that error is passed first on callbacks***
// animal1.save((error,saved)=>{
//   console.log(error, saved);
// });

//we might want to do something with the error:

// animal1.save((error,saved)=>{
//     if (error) {
//         //handle the error
//     }
//     console.log(animal1);
// });

// but better if we use promises to avoid pyramid of doom:
// if we console log the animal.save() operation, we notice there is a promise pending, so we can use promises here for error handling

//console.log(animal.save())  

animal1.save()
.then(function(saved) {
    //do stuff
    console.log(color.yellow(saved));
})
//assumes validation type errors:
.catch(function(error) {
  const errors = Object.keys(error.errors)
    .map(key => error.errors[key].message);
      
    console.log(color.red(errors))

    // if we wanted to render the errors in a page:
    //   response.render('some_page', {errors});
});

  //  .catch(function(error) {
//       //Object.keys(error.errors) gives us an array of all keys containing an error:
//       const keys = Object.keys(error.errors);
//       const errors = [];
//       for (let i = 0; i < keys.length; i++) {
//           console.log(i, keys[i]);
//           const message = error.errors[keys[i]].message
//           console.log(message);
//           errors.push(message);
//       }
//       console.log(errors)
//   });

//   .catch(function(error) {
//       const errors = [];
//       Object.keys(error.errors).forEach(key => {
//           console.log(key);
//           const message = error.errors[key].message;
//           errors.push(message);
//       })
//       console.log (errors);
//   });

//   .catch(function(error) {
//       const errors = Object.keys(error.errors).map(key => {
//           console.log(color.red(key));
//           const message = error.errors[key].message;
//           return message;
//       })
//       console.log(color.red(errors));
//   });






