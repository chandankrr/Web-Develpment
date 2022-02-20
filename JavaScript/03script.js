let firstName = "Chandan";
console.log(firstName[4]);

// -- operator
// length
console.log(firstName.length);
console.log(firstName[firstName.length - 1]);


// -- function
// trim()
// toLowerCase()
// toUpperCase()
// slice()

let str = "       Hello        ";
console.log(str.length);
// str.trim(); // imutable
let newStr = str.trim(); // remove with spaces
console.log(newStr);
console.log(newStr.toUpperCase());
console.log(newStr.toLowerCase());
console.log(newStr.slice(0,3));
console.log(typeof str);
console.log(typeof newStr);
