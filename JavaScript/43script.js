// every() -- take call back function as argument, check the condition for every element, if satisfy then  return true otherwise return false

const numbers = [2, 4, 6, 8, 10];

const ans = numbers.every((number) => {
    return number % 2 === 0;
});

console.log(ans);

// ------------ real life example
// check wheather all cartItems are less than 30000
const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "tv", price: 120000 },
    { productId: 3, productName: "laptop", price: 45000 },
    { productId: 4, productName: "router", price: 2600 },
    { productId: 5, productName: "buld", price: 200 }
];

const result = userCart.every((cartItem) => {
    return cartItem.price < 30000;
});

console.log(result);