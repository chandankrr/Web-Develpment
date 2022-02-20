// proto

const obj1 = {
    key1: "value1",
    key2: "value2",
};


// __proto__ -> browser
// [[prototype]] -> official ecmascript documentation
// ! both are same

// * prototype is differnet thing in javascript, it is also a topic in js use with function


const obj2 = Object.create(obj1); // another way to create objct
obj2.key3 = "value3";
console.log(obj2.key3);

console.log(obj2.key2); // obj2 has not key2, but it checking from obj1 that is it has key2 if yes then show key2 of obj1 that is __proto__

console.log(obj2.__proto__); // dunder

// -----------------------------

obj2.key2 = "unique";
console.log(obj2.key2); // not it has its own key2