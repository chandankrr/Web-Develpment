// sort() method

const numbers = [5, 9, 1200, 3000, 410];

numbers.sort(); // js sort() consider numbers into string sort in ascending order wrt character ascii code
console.log(numbers);

// how to sort an array of number in ascending or in descending order

// ascending order
numbers.sort((a, b) => { // callback function
    return a - b;
});

console.log(numbers);

// descending order
numbers.sort((a, b) => {
    return b - a;
});

console.log(numbers);

// how callback function working
// a = 1200 , b = 410
// a - b ---> 790
// if a - b ---> postive (greater than 0) ---> swap a, b => b, a

// a = 5, b = 9
// a - b ---> negative ---> a, b => a, b (no swapping required)
// 5 , 9 => 5, 9 (no swapping)

// --------------- real life example
// price lowToHigh, highToLow to filter the items according to thier cost in amzon app
const products = [
    { productId: 1, productName: "p1", price: 300 },
    { productId: 3, productName: "p3", price: 3000 },
    { productId: 2, productName: "p2", price: 200 },
    { productId: 7, productName: "p7", price: 8000 },
    { productId: 5, productName: "p5", price: 500 }
];

// lowToHigh
products.sort((product1, product2) => {
    return product1.price - product2.price;
});

console.log(products); // sorted lowToHigh based on price

// highToLow -- create new array and store elemets in sorted order high to low
const highToLow = products.slice(0).sort((product1, product2) => {
    return product2.price - product1.price;
});

console.log(products); // sorted lowToHigh based on price

// --------------- Question
// sort the products according to their product name in lexicographical order means in ascending order to alphabatic order
products.sort((product1, product2) => {
    let tempP1 = product1.productName.toLowerCase(),
        tempP2 = product2.productName.toLowerCase();
    
    if (tempP1 < tempP2) {
        return -1;
    }

    if (tempP1 > tempP2) {
        return 1;
    }

    return 0;
});

console.log(products);