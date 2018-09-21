// this is our middleware
// will display key:value pairs if objects exist in the response and only if they have value
// we'll use colors, an external module for illustration purposes, so we do:
// npm install --save colors

// example of middleware that gives useful route information like we are building here is morgan.   
// npm install --save morgan

const color = require('colors');

// we need to make this module communicate with the server through the require statement.
// this middlware needs to log the request value pairs, so we console.log to see how that looks like
module.exports = (request, response, next) => {
    //if(request.method) {
    //     console.log(request.method);
    // }
    // console.log(request.protocol)
   
    const keys = ['method','hostname','ip','body','params','path','protocol','route','query']
    
    keys.forEach(key => {
        const data = request[key];
   
        if (data) {
            //this one does not have empty values, just what we want
            // console.log(color.yellow('data:', data, 'key:', key));
            
            if (typeof data === 'object'){
                // do object things
                if (Object.keys(data).length) {
                    // console.log(color.red(`The request ${key} object has the following properties`));
                    // using object destructuring: helps extract the data by matching the pattern of the array
                    for (const [key, value] of Object.entries(data)) {
                        console.log(color.magenta(`\t${key} => ${value}`));
                    }
                }
            } else {
                //just print it out of not an object, no additional processing required
                console.log(color.blue(`The request ${key} is ${data}`));
            }
        }
        //this one does have empty values, what we don't want!
        // console.log('key',data,key);
    });

    next();
};

// this is the structure of what we've been destructuring:

// request = {
//   method: 'GET',
//   body: {
//     name: 'bob'
//   }
// }

// key = 'body';
// prop = 'name';

// request[key][prop]