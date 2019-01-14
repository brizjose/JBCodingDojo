// stacks

// available methods:
// .pop()
// .push()
// .peek()
// .length()

// example

let letters = []; // this is our stack
const word = "racecar"
let rword = ""

// put letters of word in stack
for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// extract letters from stack in reverse order
for (let i = 0; i < letters.length; i++) {
    rword += letters.pop();
}

if (word === rword) {
    console.log(word + " is a palindrome")
} else {
    console.log(word + " is not a palindrome")
}

// example 2

const Stack = function() {
    this.count = 0;
    this.storage = {};

    // adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // removes and returns the value at the end of the stack
    this.pop = function() {
        if(this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result
    }

    this.size = function() {
        return this.count;
    }

    // return the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count - 1];
    }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("coding");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

