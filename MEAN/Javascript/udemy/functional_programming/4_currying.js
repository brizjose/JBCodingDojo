function greet(greeting) { 
    return function(name) {
        return `${greeting} ${name}`;
    }
}

const names = ['Nate', 'Jim', 'Scott', 'Dean'];

const greetings = names.map(greet('Hello'));

console.log(greetings);

// Higher order function:  takes a function as input parameter (map) or returns a function (greet)

// closure: accessing parameters by a function that are not passed through it but that are within their scope  -- the anonymous function within greet uses 'greeting' parameter because it's within its scope

// currying
// transforming a function that takes two parameters into a function that thakes one parameter that returns a function that takes one parameter:

// from:  function greet (greeting, name) { return `${greeting} ${name}; }
// to: function greet(greeting) { return function(name) {return `${greeting} ${name}; }}

// partial application
// specializing a general function.  


const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
];

function letterGrade(grade) {
    if (grade >= 90) {
        return 'a';
    } else if (grade >= 80) {
        return 'b';
    } else if (grade >= 70) {
        return 'c';
    } else if (grade >= 60) {
        return 'd';
    } else {
        return 'f';
    }
};

const feedback = {
    a: 'Excellent Job',
    b: 'Nice Job',
    c: 'Well done',
    d: 'What happened',
    f: 'Not good',
};

function provideFeedback(messages) {
    return function(student) {
        const grade = letterGrade(student.grade);
        const message = messages[grade];
        return `${message} ${student.name}, you got \"${grade}\" on the test`;
    }
}

const studentFeedback = studentGrades.map(provideFeedback(feedback));

console.log(studentFeedback);


