// both will work same - bcz in js window is the global object and it have many function predefine

/* console.log(this); // print window object
console.log(window); // print window object

//--------------
function myFunc() {
    console.log("hello World");
}

this.myFunc(); // print window object
window.myFunc(); // print window object

// -----------------
function newFunc() {
    console.log(this);
}

this.newFunc(); // print window object
window.newFunc(); // print window object
 */

// --------------------------------------------------------

// with "strict mode"

function myFunc1() {
    console.log("hello World");
}

myFunc1(); // print hello world

function newFunc1() {
    "use strict";
    console.log(this);
}

newFunc1(); // print undefined
