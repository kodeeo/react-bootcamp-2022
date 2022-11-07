// .cjs, .mjs, .jsx, .js,
// .tsx, .ts
// alert('Hello World')
// console.log("Hello World");
//String

var name = "Zahidul Hossain";
var area = "Feni"; // Case Sensitivity
var age = 30;
var str_age = "30";
var can_print = false;


// console.log("My name is " + name + "and I live in " + area + ".");
// if(can_print == true) {
//     console.log(`My name is ${name} and I live in
//     ${area}. And I am ${age} years old.`);
// } else {
//     console.log('I can not print')
// }

// console.log(age === str_age)

if(area == 'Dhaka') {
    console.log('I live in Dhaka')
} else if(area == 'Feni') {
    console.log('I live in Feni')
} else {
    console.log('চান্দের দেশে থাকি।')
}

var a = 10, b = 20, total;
var operation = 'sum'

if(operation === 'sum') {
    total = a + b;
}

console.log(total)
