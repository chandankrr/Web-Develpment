// param destructuring

// most use in
// object
// react

const person = {
    firstName: "Chandan",
    gender: "Male"
}

// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// printDetails(person);

function printDetails({ firstName, gender }) {
    console.log(firstName);
    console.log(gender);
}

printDetails(person);

