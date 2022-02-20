let fruits = ["apple", "mango", "orange"];
console.log(fruits);
console.log(fruits[2]);

fruits[2] = "banana";
console.log(fruits[2]);

console.log(typeof fruits);
console.log(Array.isArray(fruits));

// push()
fruits.push("grapes");
console.log(fruits);

// pop()
fruits.pop();
console.log(fruits);

// unshift() -> add element at first
fruits.unshift("grapes");
console.log(fruits);

// shift() -> remove element from starting
fruits.shift();
console.log(fruits);