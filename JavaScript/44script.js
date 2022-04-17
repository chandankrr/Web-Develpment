// some() -- return boolean value
// if condition satisfy for any element the return true otherwise return false

// check is any number is positive in given array
const numbers = [3, 5, 8, 9];

const ans = numbers.some((number) => {
    return number % 2 === 0;
});

console.log(ans);

// --------- real life example
// check whether any cartItem is more than 100000
const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "tv", price: 120000 },
    { productId: 3, productName: "laptop", price: 45000 },
    { productId: 4, productName: "router", price: 2600 },
    { productId: 5, productName: "buld", price: 200 },
];

const result = userCart.some((cartItem) => {
    return cartItem.price > 100000;
});

console.log(result);

