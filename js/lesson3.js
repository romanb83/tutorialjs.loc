'use strict'

// const fnWithError = () => {
//     throw new Error('Some error!');
// }

// try {
//     fnWithError();
// }
// catch (error) {
//     console.error(error);
//     console.log(error.message);
// }

// console.log('Continue');

const myArray = [1, undefined, 'Roman', null];

myArray.forEach(function(el) {
                console.log(el + '!')
            });

// const newArray = myArray.map(el => el + '777');
const newArray = myArray.map(function(el) {return el + '777'});

console.log(newArray);
console.log(myArray);