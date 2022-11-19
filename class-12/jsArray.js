// const fruis = [];

// const fruits = ['Mango', 'Banana', 'Guava']

// fruits.push('Coconut')
// console.log(fruits);

// fruits.pop()
// console.log(fruits)

// fruits.shift()
// console.log(fruits);


// fruits.unshift('Tomato')
// console.log(fruits);

// console.log(fruits.length);


// const ranks = [10, 30, 50, 60, 40]
// let sum = 0;

// for (let i = 0; i < ranks.length; i++)

// for(let i in ranks) {
//     sum = sum + ranks[i]
// }
// console.log(sum);

let users = [
    {
        id: 1,
        name: 'Choyan',
        image: 'url',
        reactionType: 'like',
    }, 
    {
        id: 2,
        name: 'Foysal',
        image: 'url',
        reactionType: 'like',
    },
    {
        id: 3,
        name: 'Sumon',
        image: 'url',
        reactionType: 'love',
    }
]

// const returnName = function(user) {
//     console.log(user.name);
// }

users.forEach((user) => {
    console.log(user.name, user.id);
})

users.push({
    id: 4,
    name: 'Milon'
})

Array.splice()
Array.slice()
Array.isArray()
users.length()
String.mtch();
Array.split();


// user.map
// filter
// find

// console.log(users[2]);
