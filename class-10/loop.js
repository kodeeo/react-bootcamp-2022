// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)

// While Loop
// Do While Loop
// For Loop

// let number = 6;
// let sum = 0
// while(number <= 5) {
//     sum = sum + number; //  3 + 3 = 6
//     console.log('sum', sum); // 6
//     console.log('End of loop', number);
//     number = number + 1; // 4
// }

// console.log('Final', {number, sum})



// while Keyword
// condition 
// execution 
// increament / decreament 




// let number = 4;
// let sum = 0;

// do {
//     sum = sum + number; // 9
//     console.log('sum', sum); // 6
//     console.log('End of loop', number);
//     number = number + 1;
// } while(number <= 5)

// console.log('Final', {number, sum})


// let number = 1;
// while(i <= 5
// number = number + 1
// let sum = 0

// for(let number = 10; number <= 50; number = number + 1) {
    // sum = sum + number;  // 20 + 10 = 15
    // console.log('sum', sum);  // 15
    // console.log('End of loop', number); // 5


    // And Operation
    // if( (number % 7 === 0) && (number % 5 === 0) ){
    //     sum = sum + number;  // 20 + 10 = 15
    //     console.log('sum', sum);  // 15
    //     console.log('End of loop', number); // 5
    // }

    // Or operation
//     if( (number % 7 === 0) || (number % 5 === 0) ){
//         sum = sum + number;  // 20 + 10 = 15
//         console.log('sum', sum);  // 15
//         console.log('End of loop', number); // 5
//     }
// }

// console.log('Final', sum)


// Divided by 7 or 5

let sum = 0

for(let number = 10; number <= 50; number = number + 1) {
    if( (number % 7 === 0) || (number % 5 === 0) ){
        sum = sum + number;  // 20 + 10 = 15
        console.log('sum', sum);  // 15
        console.log('End of loop', number); // 5
    }
}

console.log('Final', sum)