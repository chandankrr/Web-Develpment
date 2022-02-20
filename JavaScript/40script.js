// reduce() -- return a only value, read all the commented code for unstanding

const numbers = [1, 2, 3, 4, 5, 10];

// to understand the exact use of reduce()
// aim: sum of all numbers in array

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}); // here we can pass the initial value of accumulator like this .reduce({arrow function}, 100)

console.log(sum);

// how above code work and caluclate the value
// accumulator    currentValue    return
//  1              2               3
//  3              3               6
//  6              4               10
//  10             5               15
//  15             10              25

// ---------------- real life example
// total amount of all items add in your amazon cart

const userCart = [
    { productId: 1, productName: "mobile", Price: 15000 },
    { productId: 7, productName: "tv", Price: 30000 },
    { productId: 4, productName: "laptop", Price: 73000 },
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.Price;
}, 0); // inital value of total price

console.log(totalAmount); // total amount of all the product which is added to yours amazon cart  
