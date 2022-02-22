// what is prototype, it is totally

function hello() {
    console.log("hello world");
}

// javascript function ===> function + object

console.log(hello.name); // print name of function
// name property --> tells function name

// you can also add your owm properties
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// function provides more usefull properties

console.log(hello.prototype);

// only function provides prototype property not object and array
if (hello.prototype) {
    console.log("prototype is present");
} else {
    console.log("prototype is not present");
}

// we can add as many number of prototype properties
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function () {
    return "la lalalla";
};

console.log(hello.prototype);