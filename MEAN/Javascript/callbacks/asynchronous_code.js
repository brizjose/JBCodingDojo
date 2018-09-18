// case 1

// console.log("Start");

// function sayHello(name) {
//     setTimeout(function() {console.log("Bye Baby!")}, 2000);
//     setTimeout(function() {console.log("Hello", name)}, 1000);
// };

// sayHello("Domino")

// console.log("End");


// case 2

// synchronous
// function getThingsFromDB(query) {
//     const data = ['thing 1','thing 2','thing 3','thing 4','thing 5'];
//     return data;
// };
// const things = getThingsFromDB('select * from things;');
// console.log(things);

// asynchronous
// this one returns undefined because we have only called the function but need a callback to set the action to perform once the data is available

// function getThingsFromDB(query) {
//     setTimeout(function() {
//         const data = ['thing 1','thing 2','thing 3','thing 4','thing 5'];
//         return data;
//     }, 3000);
// };
// // this is the function call...
// const things = getThingsFromDB('select * from things;');
// console.log(things);

// asynchronous pt 2
// we now tell it what to do once data is available, with a callback

function getThingsFromDB(query, callback) {
    setTimeout(function() {
        const data = ['thing 1','thing 2','thing 3','thing 4','thing 5'];
        console.log(callback.toString())
        callback(data);
    }, 3000);
};

function map(arr,callback) {
    results = []
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        console.log(callback.toString())
        results.push(callback(item));
    }
    return results
}


const things = getThingsFromDB('select * from things', (response) => {console.log('running anon func in the future! with data:', response);
    const results = map(response, (thing) => `${thing} from the dastabase`);
    console.log("results with map:", results);
});

// 'response' is what we want back from the getThingsFromDB function, so we pass on as argument
// 'data' is what the getTingsFromDb function will produce, so basically 'response' = 'data'.
// using different names to illustrate the information flow
// 'callback' is the anonymous function coded as in ES6 ... ()=>{}.
// we make the callback(); call from inside the timeout method so we are instructing js on what to do once the data is available

// summary:  1. we call function now;  2. function will run but takes time to return;  3. in order for there to be an instruction of what to do with the data, we provide it through the callback;  4.  data arrives, the callback runs and returns a response;  5.  we can do whatever we need to do with the response





