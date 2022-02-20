// map() -- return a array of values (string as well as integer) and we can store that value in into a variable
// map take a callback function and the value return by that function, map create a new array and add that new value into that array

// if the callback function not returning any value then it add undefined into that new create array map()

const numbers = [3, 4, 6, 1, 8];

// defining call back funtion we can define an arrow or anonymous funtion as well
const square = function (number) {
    // uncomment 10 and 11 lines one by one
    // console.log(number);
    return number * number;
};

const squareNum = numbers.map(square); // squareNum storing the new array created by map()
console.log(squareNum); // print square of element of numbers array

//----------------doing the same with callback but defining its self in map function

const newSquareNum = numbers.map((number, index) => {
    return `index: ${index}, number: ${number * number}`;
});

console.log(newSquareNum);


// ----------- real life uses of map function
const users = [
    { firstName: "Chandan", age: 19 },
    { firstName: "Neelam", age: 21 },
    { firstName: "Neelu", age: 18 },
    { firstName: "Ravi", age: 15 },
];

// store only firstName into new array

const userNames = users.map((user) => {
    return user.firstName;
});

console.log(userNames);