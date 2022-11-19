const kawser = {
    legs: 2,
    hands: 2,
    kidney: 1,
    address: {
        village: 'Bancharampur',
        district: "BBaria",
    },
    legName: ['vvv', 'ddd']
}

const chair = {};

kawser.profession = 'Student';

console.log(Object.keys(kawser))
// kawser['profession'] = 'Student'
// console.log(kawser.address.district);
// console.log(kawser['address']['village'])

console.log(kawser)