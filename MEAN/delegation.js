// Here is an example of delegation

// function leadBootcamp's outcome is console.log of some outcome.  The outcome is actually the return of another function.
// how it does it:  
// 1. leaderBootcamp takes two arguments:  language and leader.
// 2. initializes a variable called outcome that calls a function with name = leader argument that accepts an argument and this argument has been passed on through the language argument.

// to summarize:

// This is a function that just prints the result of another list of instructions
function printResult(doSomething) {
    var result = doSomething();         // store the return value of the callback parameter
    console.log(result);                // print the result!
   }
   printResult(function returnFive(){ return 5 })  // this should print "5"
   

// we used this type of delegation in es6_card_deck_assignment.js to name and assign worth to the cards


// now, to the example:


function leadBootcamp(language, leader){
    var outcome = leader(language);
    console.log(outcome);
}
function Mike(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
function Charlie(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
function Jimmy(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
    'iOS':'successful leader',
    'java_android':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
leadBootcamp('java_android', Mike);
leadBootcamp('java_android', Charlie);
leadBootcamp('java_android', Jimmy);
