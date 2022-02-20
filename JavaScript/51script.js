// optional chaining

const user = {
    firstName: "Chandan",
    // address: {houseNumber: 1234}
}

// console.log(user.firstName);
// console.log(user.address) // print undefined
// console.log(user.address.houseNumber); // error

// optional chaining implementation
// -- uses in nested objects
console.log(user?.firstName);
console.log(user?.address?.houseNumber);