// Sets

// set data structure is like an array except there are no duplicate items and values are in no particular order.
// their use is to detect the presence of an item

// es6 has a builtin set item, but does not contain all the methods available to sets

function mySet() {
    // this collection will hold the set
    let collection = [];
    // this method will check for the presence of an element
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method returns all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element ot the set
    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method returns the size of the collection
    this.size = function() {
        return collection.length;
    };
    // this method returns the union of two sets
    this.union = function(otherSet) {
        const unionSet = new mySet();
        const firstSet = this.values();
        const secondSet = otherSet.values();
        firstSet.forEach(function(e) {
            unionSet.add(e);
        });
        secondSet.forEach(function(e) {
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method returns elements that two sets have in common
    this.intersection = function(otherSet) {
        const intersectionSet = new mySet();
        const firstSet = this.values();
        firstSet.forEach(function(e) {
            if(otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    // this method returns the difference of two sets as a new set
    this.difference = function(otherSet) {
        const differenceSet = new mySet();
        const firstSet = this.values();
        firstSet.forEach(function(e) {
            if(!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    // this method tests if the set is a subset of another set
    // every is an existing array method in js
    this.subset = function(otherSet) {
        const firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value);
        });
    };
}

const setA = new mySet();
const setB = new mySet();
setA.add('a')
setB.add('b')
setB.add('c')
setB.add('a')
setB.add('d')
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());
setC = setA.union(setB);
console.log(setC.values());