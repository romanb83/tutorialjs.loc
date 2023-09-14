'use strict'

class Men {
    constructor(name) {
        this.name = name;
        this.votes = 0;
    }

    upvote() {
        this.votes += 1;
    }

    static mergeStr(a, b) {
        return `${a} ${b}`
    }
}

const myObj = new Men('Roman');

myObj.upvote();
console.log(myObj.votes);
myObj.upvote();
console.log(myObj.votes);

console.log(Men.mergeStr('hey', 'there')); // static method

class NumberArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray = new NumberArray(2, 5, 7)

console.log(myArray)
console.log(myArray.sum())