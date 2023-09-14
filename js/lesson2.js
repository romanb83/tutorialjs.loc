'use strict'

// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt
// })

// const firstPost = {
//     id: 1,
//     name: 'Roman'
// }

// console.log(newPost(firstPost));


const newPost = (post, addedAt = Date()) => {
    
    return {...post, addedAt};
}

const firstPost = {
    id: 2,
    name: 'Roman',
    age: 40
}

console.log(firstPost);
console.log(newPost(firstPost));