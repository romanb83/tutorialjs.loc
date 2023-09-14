'use strict'

const myObject = {
    name: 'Roman',
    city: 'Stupino',
    id: 10,
    age: 40
}

const {name, id, age} = myObject;

console.log(myObject);
console.log(name, id, age);

const myArray = [1, 2, 3, 'X'];

const [oneElem, twoElem, threeElem, fourElem] = myArray;

console.log(oneElem);
console.log(twoElem);
console.log(threeElem);
console.log(fourElem);

// const userInfo = ({city, age}) => {
//     return `Город ${city}, а возраст ${age}`
// }

const userInfo = function({city, age, id}) {
    return `Город ${city}, а возраст ${age}, and ${id}`
}

console.log(userInfo(myObject));
