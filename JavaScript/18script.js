// differnece between dot and [] barcket notation

const person = {
    name: "Chandan",
    age: 19,
    "person hobbies": ["reading books", "coding", "sleeping", "video games"],
};

// console.log(person.person hobbies); // error we can't do like this
console.log(person["person hobbies"]); // it run fine

// how to add key value that is email along with its pair in person
const key = "email";
// person["key"] = "chandankumar.91@gmail.com"; // this will add key and assign the value
person[key] = "chandankumar.91@gmail.com"; // this take the value of key and assign the rescpected value

console.log(person);

