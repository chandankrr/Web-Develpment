// undefined -> if variable is not initialized
let firstName;
console.log(firstName);
console.log(typeof firstName);

// null -> means nothing or we can say reference variable pointing to nothing
let n = null;
console.log(n);
console.log(typeof n); // object -> this is bug in js but not fixed bcz many framework of js have developed by considerating this bug if it fixed then all framework have to make change in their code

// BigInt -> primitive datatype introduce in 2020
let num = 123;
console.log(Number.MAX_SAFE_INTEGER); // max size of number datatype

let num1 = BigInt(123456789);
let num2 = 123456789n; // n -> BigInt second way
console.log(num1 + num2);