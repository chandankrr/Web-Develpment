// print key with its respective value

const person = {
    name: "Chandan",
    age: 19,
    "person hobbies": ["reading books", "coding", "sleeping", "video games"],
};

// for in loop --> 1way
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Object.keys --> 2way
console.log(typeof(Object.keys(person)));
console.log(Object.keys(person));

for (let key of Object.keys(person)) {
    console.log(person[key]);
}