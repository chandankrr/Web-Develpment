// important array function

// forEach

const numbers = [4, 2, 5, 8];

// function myFunc(number, index) {
//     console.log(`index is ${index} number is ${number}`);
// }

// for (let i = 0; i < numbers.length; i++) {
//     myFunc(numbers[i], i);
// }

// numbers.forEach(myFunc); // doing the same as above function doing

// -------------- or we can define an anonymous function in argument section of forEach method

numbers.forEach(function (number, index) {
    console.log(`index is ${index} number is ${number}`);
});

// * Note think forEach method as for loop for each iterator it will the desire result

// question: multiply each element of array by two and print
numbers.forEach(function (number) {
    console.log(`New value = ${number * 2}`);
});

// ----------------------------

// real life example means where we use forEach loop in javascript
const users = [
    { firstName: "Chandan", age: 19 },
    { firstName: "Neelam", age: 21 },
    { firstName: "Neelu", age: 18 },
    { firstName: "Ravi", age: 15 },
];

// function
// users.forEach(function (user) {
//     console.log(user.firstName);
// })

// arrow function
users.forEach((user) => {
    console.log(user.firstName);
});

// we can do the same using for of loop
// for (let user of users){
//     console.log(user.firstName);
// }
