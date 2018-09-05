// delete all elements from an array

function deletearr(arr){
    for (var i = arr.length -1; i >=0; i--){
        arr.pop(arr[i])
        console.log(arr)
    }
}
deletearr([1,2,3,4,5])


// this is a list

myList = ['dog', 'cat', 'mouse']

// this is how you print one element from the list

console.log(myList[1])

// this is how you add an element

myList.push('giraffe')

console.log(myList)

// what do you think the following will print?

console.log(myList.push('rhino'))

// it prints the new length of the list, which comes in handy in case we wanted to do a conditional function like

if (myList.push('lion') >= 10){
    //do someindex
}

// loops

// for loop
// going through lists:
// print the indexes
for (var i = 0; i < myList.length; i++){
    console.log(i)
}
// print the elements themselves
for (var i = 0; i < myList.length; i++){
    console.log(myList[i])
}

// for in loop, not meant to be used to iterate over an array.  It is meant to iterate over the keys of an object
// wrong way to use it....
for (var thing in myList){
    console.log('thing', thing)
}
// right wawy to use it... with indexing
for (var thing in myList){
    console.log('thing', myList[thing] )
}

// for of loop
// acts as the 'for in' loop with indexing like above
for (var thing of myList){
    console.log('thing', thing)
}

// if you still want access to the index using the 'for of' loop,
// works like python's enumerate
for (var thing of myList.entries()){
    console.log('thing', thing)
}

// you can separate out index from content like so, but it gets clunky
for (var thing of myList.entries()){
    var index = thing[0]
    var content = thing[1]
    console.log(index, content)
}

// there is a better way to go about it, called object destructuring
for (var [index] of myList.entries()){
    console.log('index', index)
}
for (var [index, content] of myList.entries()){
    console.log('animal', content)
}

// objects
// key value pairs.  notice keys can be anything.  in this example, one had to be explicitly declared as string because of the hyphen:
var person = {}
person = {
    age: 23,
    height: 5.6,
    'hair-color': 'brown',
    action: function(){console.log('hello!')}
}
// this loop prints the keys
for(trait in person){
    console.log(trait)
}
// this loop accesses the value of each key
for(trait in person){
    console.log(person[trait])
}
// combining:
for (trait in person){
    console.log(person[trait] +" is the "+ trait)
}

// functions
// need a name, a placeholder for arguments and function body
function sayHello(){
    console.log('hello')
}
sayHello('Bob')
//will not throw an error if we pass an argument through it even if it was not waiting for it.  It will ignore it

//with that said, we can pass on arguments by naming them:
function sayHi(name){
    console.log('hi '+name)
}
sayHi('Bob')

// you can capture all that is passed through the function, even if you don't need it, by using the word arguments:
// which will convert the data to an object
function grabber(){
    console.log(arguments)
}
grabber('salt','peppa',1,6,false)

// we can also collect all the non-named information right away and have it available as an array to loop it
function sticker(...rest){
    console.log(rest)
}
sticker('Bond', "James", 0,0,7)

function variation(name, ...rest){
    console.log(rest)
    console.log('hi '+ name)
}
variation('Jim', 'Smith', 0,9,10)
console.log('returned content', variation('Jim', 'Smith',0,9,10))
//the last one returns undefined because function has not returned anything.  We'd have to return something....

function returning(name, ...rest){
    console.log(rest)
    console.log('hi '+name)
    return rest
}
console.log('returned content', returning('Jim', 'Smith',0,9,10))


