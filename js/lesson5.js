'use strict'

const a = 5, b = 2;

a > b ? console.log('big') : console.log('mini');

const myArray = ['hey', 2, 'ogo', 4, 'five'];

myArray.forEach((el, ex) => {
    console.log(el, ex);
})

const myObj = {
    id: 1,
    city: 'Stupino',
    num: 12345
}

for (const key in myObj) {
    console.log(key, myObj[key]);
}

Object.keys(myObj).forEach(key =>
    console.log(key, myObj[key])
)

Object.values(myObj).forEach(val => 
    console.log(val)
)