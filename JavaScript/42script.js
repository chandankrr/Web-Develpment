// find() -- to find, take callback function as argument return that value if find otherwise return undefined

const myArray = ["Hello", "Cat", "Dog", "elephant"];

const ans = myArray.find((string) => {
    return string.length === 3;
});

console.log(ans); // if not present, print undefined

// ----------- real life example
const users = [
    { userId: 1, userName: "Chandan" },
    { userId: 2, userName: "Atul" },
    { userId: 3, userName: "Abhijeet" },
    { userId: 4, userName: "Aman" },
    { userId: 5, userName: "Prakash" }
];

const myUser = users.find((user) => {
    return user.userId === 3;
})

console.log(myUser);
console.log(myUser.userName);