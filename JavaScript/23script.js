// objects inside array
// very useful in real world applications

const users = [
    { userId: 1, firstName: "chandan", gender: "male" },
    { userId: 2, firstName: "ravi", gender: "male" },
    { userId: 3, firstName: "neelu", gender: "female" }
];

for (let user of users) {
    console.log(user);
    console.log(user.firstName);
}