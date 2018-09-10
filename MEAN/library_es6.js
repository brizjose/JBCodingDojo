const stringArray = ['1','2','3','4','5'];
const mixedArray = ['1','apple','2','3','sugar','4','5','horse'];

class Each {
    constructor (array, callback) {
        this.array = array;
    };
    print() {
        for (let index = 0; index < this.array.length; index++) {
            console.log(this.array[index])
        };
        return this;
    };
};

const array1 = new Each(stringArray);
console.log(array1)
array1.print().print()