'use strict'

const objectA = {
    name: 'Roman',
    age: 40,
    married: false,
    coords: {
        a: 10,
        b: 15
    },
    sayHello() {
        console.log('hello!!!')
    }
}

const newProrerty = objectA.name;

objectA[newProrerty] = 1000000;

console.log(objectA);

objectA.sayHello();

let prop;

prop = JSON.parse(JSON.stringify(objectA));
prop.name = 'Oxana';
console.log(prop.name);
console.log(objectA.name);
console.log(prop);

console.log(Boolean(objectA.coords.a));
console.log(typeof(objectA));


