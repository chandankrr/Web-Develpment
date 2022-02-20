// maps --> data structure
// map is an iterable

// store data inordered fashion

// !object is also known as object literals

// store key value pair(like object literals)
// duplicate is not allowed like object literals

// different between maps and objects

// objects can only have sting or symbol as key

// in maps you can use anythings as key
// like array, number, string

// object literals
// key -> string
// key -> symbol
// const person = {
//     firstName: "Chandan",
//     age: 7,
//     1: "one"
// }
// for (let key in person) {
//     console.log(typeof key);
// }

// --------------- maps
// key of any data types not restrictions like object literals
const person = new Map();
person.set("firstName", "Chandan");
person.set("age", 19);
person.set(1, "one");
person.set([1,2,3], "one two three");
person.set({1: "one"}, 1);

console.log(person);
console.log(person.get("firstName"));
console.log(person.keys());

// iterating map
for (let key of person.keys()) {
    console.log(key, typeof key);
}

for (let value of person.values()) {
    console.log(value, typeof value);
}

// objects are not iteralables we can't use for of loop, we can use only for in loop
for (let key of person) {
    console.log(key);
    console.log(Array.isArray(key));
}

// map store key value pair in array

const students = new Map([["firstName", "Chandan"], ["age", 19]]);
console.log(students);

// ----------------------

const person1 = {
    id: 1,
    firstName: "Rahul"
}

const person2 = {
    id: 2,
    firstName: "Swati"
}

const extraInfo = new Map();
extraInfo.set(person1, { age: 20, gender: "male" });
extraInfo.set(person2, { age: 17, gender: "female" });

console.log(extraInfo);

console.log(person1.id);

console.log(extraInfo.get(person1));

console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person2).gender);