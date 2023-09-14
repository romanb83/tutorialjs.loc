'use strict'

console.log(!!undefined);
console.log(!!{});

let exp;

exp = 3 || undefined;

console.log(exp);

const button = {
    width: 200,
    heigth: 100,
    age: 41
}

const newButton = {
    ...button,
    color: 'green',
    name: 'Oxana'
}

const twoButton = {
    name: 'Roman',
    age: 40
}
const allButton = {
    ...twoButton,
    ...button,
    ...newButton
}

console.log(button);
console.log(twoButton);
console.log(newButton);
console.log(allButton);