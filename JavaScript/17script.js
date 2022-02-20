// object or object literals

const person = {
    name: "Chandan",
    age: 19,
    hobbies: ["reading books", "coding", "sleeping", "video games"]
}

console.log(person);

console.log(person.name);
// console.log(person[name]); // error
console.log(person["name"]);

console.log(person.hobbies);
console.log(person.hobbies[2]);

// how to add key value pair to objects
person.gender = "male";
console.log(person);

// how to add key value pair to objects using []barcket notation
person["sex"] = "male";
console.log(person);
