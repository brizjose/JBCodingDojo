// hash table

// implement unordered associative arrays or mappings of key value pairs
// a common way to implement a map data structure or objects
// very efficient lookups because not tied to number of items.
// it is very fast at search, insert, delete

// how they work:
// takes a key input and runs it through a hash function.
// a hash function maps strings to numbers and the numbers correspond to indexes in an array

// in js, hash tables are used to implement objects
// this is an example of how they are implemented

let hash = (string, max) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
};

let HashTable = function() {
    
    let storage = [];
    const storageLimit = 4;

    this.print = function() {
        console.log(storage);
    }

    this.add = function(key, value) {
        let index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
        } else {
            let inserted = false;
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    insterted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    };

    this.remove = function(key) {
        let index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage [index][i];
                }
            }
        }
    };

    this.lookup = function(key) {
        let index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    };
};

// insert a name in a hash that has 10 buckets:
console.log(hash('beau', 10));

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosaur');
ht.add('tux', 'penguin');
console.log(ht.lookup('tux'));
ht.print();



