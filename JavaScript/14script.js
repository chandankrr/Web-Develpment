// how to copy/clone one array in other array

let a1 = ["item1", "item2", "item3"];
let a2 = a1.slice(0); // -> 1st way
let a3 = [].concat(a1); // -> 2nd way
let a4 = [...a1]; // -> 3rd way new way to copy one array into another

console.log(a1 === a2 && a1 === a3 && a1 === a4);
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

// add more items to coppied array
let a5 = a1.slice(0).concat(["hello", "world"]);
console.log(a5);

let a6 = [...a1, ...a2, ...a3, ...a4, ...a5, "Chandan", "Ravi"];
console.log(a6);
